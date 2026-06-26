import { useEffect, useState } from "react";
import { projects } from "../data/portfolio";
import { navigateTo, shouldHandleInternalClick } from "../navigation";

const INITIAL_VISIBLE_PROJECTS = 4;

type IdleWindow = Window &
  typeof globalThis & {
    requestIdleCallback?: (
      callback: () => void,
      options?: { timeout?: number },
    ) => number;
    cancelIdleCallback?: (handle: number) => void;
  };

const preloadImage = (src: string) => {
  const image = new Image();
  image.decoding = "async";
  image.src = src;
  image.decode?.().catch(() => undefined);
};

export default function Works() {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const visibleProjects = showAllProjects
    ? projects
    : projects.slice(0, INITIAL_VISIBLE_PROJECTS);
  const hasMoreProjects = projects.length > INITIAL_VISIBLE_PROJECTS;

  useEffect(() => {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        window.dispatchEvent(new Event("portfolio:layout-change"));
      });
    });
  }, [showAllProjects]);

  useEffect(() => {
    const hiddenProjects = projects.slice(INITIAL_VISIBLE_PROJECTS);
    if (hiddenProjects.length === 0) return;

    const preloadHiddenImages = () => {
      const prefersMobile = window.matchMedia("(max-width: 900px)").matches;
      const sources = new Set<string>();

      hiddenProjects.forEach((project) => {
        sources.add(prefersMobile ? project.mobileSrc : project.image);
        sources.add(prefersMobile ? project.image : project.mobileSrc);
      });

      sources.forEach(preloadImage);
    };

    const idleWindow = window as IdleWindow;

    if (idleWindow.requestIdleCallback) {
      const idleId = idleWindow.requestIdleCallback(preloadHiddenImages, {
        timeout: 2000,
      });

      return () => idleWindow.cancelIdleCallback?.(idleId);
    }

    const timeoutId = window.setTimeout(preloadHiddenImages, 1200);

    return () => window.clearTimeout(timeoutId);
  }, []);

  return (
    <section id="works" className="section works-section">
      <div className="works-inner">
        <div className="section-label works-label works-label--desktop">
          <span>choose your</span>
          <strong>category</strong>
        </div>
        <div className="works-label works-label--mobile">
          choose your category
        </div>

        <div className="works-list">
          {visibleProjects.map((project, index) => (
            <article className="work-card" key={project.number}>
              <div className="work-number">{project.number}</div>

              {index === 0 && (
                <img
                  className="price-tag"
                  src="/images/cases/sale.png"
                  alt=""
                  aria-hidden="true"
                />
              )}

              <a
                className="work-image"
                href={project.href}
                aria-label={`${project.title} case study`}
                onClick={(event) => {
                  if (!shouldHandleInternalClick(event)) return;

                  event.preventDefault();
                  navigateTo(project.href);
                }}
              >
                <picture className="work-picture">
                  <source
                    media="(max-width: 900px)"
                    srcSet={project.mobileSrc}
                  />
                  <img
                    src={project.image}
                    alt={project.title}
                    loading={
                      index < INITIAL_VISIBLE_PROJECTS ? "eager" : "lazy"
                    }
                    decoding="async"
                  />
                </picture>
              </a>

              <div className="work-caption">
                <h2>{project.title}</h2>
                <p>{project.subtitle}</p>
              </div>
            </article>
          ))}
        </div>

        {hasMoreProjects && !showAllProjects && (
          <button
            className="more-button"
            type="button"
            onClick={() => setShowAllProjects(true)}
          >
            MORE!!!
          </button>
        )}
      </div>
    </section>
  );
}
