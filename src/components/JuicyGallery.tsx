import { useLayoutEffect, useMemo, useRef } from "react";
import { juicyItems } from "../data/portfolio";

const GROUP_SIZE = 6;
const START_HOLD_PX = 12;
const END_HOLD_PX = 20;
const LARGE_SCREEN_START = 1600;
const LARGE_SCREEN_END = 1920;
const MAX_SCROLL_FACTOR = 1.12;

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

export default function JuicyGallery() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);

  const groups = useMemo(() => {
    const result = [];

    for (let i = 0; i < juicyItems.length; i += GROUP_SIZE) {
      result.push(juicyItems.slice(i, i + GROUP_SIZE));
    }

    return result;
  }, []);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    const viewport = viewportRef.current;
    const track = trackRef.current;

    if (!section || !viewport || !track) return;

    const mediaQuery = window.matchMedia(
      "(min-width: 901px) and (max-width: 2299px)",
    );
    let scrollFrame = 0;
    let measurementFrame = 0;
    let horizontalDistance = 0;
    let motionScrollDistance = 0;
    let sectionTop = 0;
    let movementStart = 0;
    let lastTranslate = Number.NaN;

    const updatePosition = () => {
      if (!mediaQuery.matches) return;

      const progress = clamp(
        (window.scrollY - movementStart) / Math.max(motionScrollDistance, 1),
        0,
        1,
      );

      const rawTranslate = -horizontalDistance * progress;
      const pixelRatio = window.devicePixelRatio || 1;
      const translate =
        Math.round(rawTranslate * pixelRatio) / pixelRatio;

      if (translate === lastTranslate) return;

      lastTranslate = translate;
      track.style.transform = `translate3d(${translate}px, 0, 0)`;
    };

    const updateMeasurements = () => {
      if (!mediaQuery.matches) {
        section.style.removeProperty("--juicy-scroll-distance");
        lastTranslate = 0;
        track.style.transform = "translate3d(0, 0, 0)";
        return;
      }

      const viewportWidth = viewport.clientWidth;
      const trackWidth = track.scrollWidth;
      const stickyTop = parseFloat(getComputedStyle(viewport).top) || 0;

      horizontalDistance = Math.max(0, trackWidth - viewportWidth);
      const largeScreenProgress = clamp(
        (viewportWidth - LARGE_SCREEN_START) /
          (LARGE_SCREEN_END - LARGE_SCREEN_START),
        0,
        1,
      );
      const scrollSpeedFactor =
        1 + largeScreenProgress * (MAX_SCROLL_FACTOR - 1);

      motionScrollDistance = horizontalDistance * scrollSpeedFactor;
      sectionTop = window.scrollY + section.getBoundingClientRect().top;
      movementStart = sectionTop - stickyTop + START_HOLD_PX;

      const scrollDistance =
        START_HOLD_PX + motionScrollDistance + END_HOLD_PX;

      section.style.setProperty(
        "--juicy-scroll-distance",
        `${scrollDistance}px`,
      );

      updatePosition();
    };

    const requestUpdate = () => {
      if (!mediaQuery.matches || scrollFrame) return;

      scrollFrame = requestAnimationFrame(() => {
        scrollFrame = 0;
        updatePosition();
      });
    };

    const requestMeasurementsUpdate = () => {
      cancelAnimationFrame(measurementFrame);

      measurementFrame = requestAnimationFrame(() => {
        measurementFrame = requestAnimationFrame(() => {
          measurementFrame = 0;
          updateMeasurements();
        });
      });
    };

    const resizeObserver = new ResizeObserver(requestMeasurementsUpdate);

    resizeObserver.observe(track);
    resizeObserver.observe(viewport);

    updateMeasurements();

    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestMeasurementsUpdate);
    window.addEventListener("load", requestMeasurementsUpdate);
    window.addEventListener(
      "portfolio:layout-change",
      requestMeasurementsUpdate,
    );
    mediaQuery.addEventListener("change", requestMeasurementsUpdate);

    return () => {
      cancelAnimationFrame(scrollFrame);
      cancelAnimationFrame(measurementFrame);
      resizeObserver.disconnect();
      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestMeasurementsUpdate);
      window.removeEventListener("load", requestMeasurementsUpdate);
      window.removeEventListener(
        "portfolio:layout-change",
        requestMeasurementsUpdate,
      );
      mediaQuery.removeEventListener("change", requestMeasurementsUpdate);
      track.style.transform = "none";
    };
  }, []);

  return (
    <section className="section juicy-section" ref={sectionRef}>
      <div className="juicy-mobile-heading">
        <div className="juicy-number">
          <img src="/icons/infinity.svg" alt="" aria-hidden="true" />
        </div>
        <div className="juicy-mobile-title">even more juicy staff</div>
      </div>

      <div className="juicy-viewport" ref={viewportRef}>
        <div className="juicy-track" ref={trackRef}>
          <div className="juicy-label-wrap">
            <div className="juicy-number">
              <img src="/icons/infinity.svg" alt="" aria-hidden="true" />
            </div>

            <div className="section-label juicy-label">
              <span>even more</span>
              <strong>juicy staff</strong>
            </div>
          </div>

          {groups.map((group, groupIndex) => (
            <div className="juicy-grid" key={`juicy-group-${groupIndex}`}>
              {group.map((item, itemIndex) => (
                <figure
                  className={`juicy-card juicy-card--${itemIndex + 1}`}
                  key={item.image}
                >
                  <img src={item.image} alt={item.alt} loading="lazy" />
                </figure>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
