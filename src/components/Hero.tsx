import { useState } from "react";
import type { CSSProperties, KeyboardEvent, MouseEvent } from "react";

type Heart = {
  id: number;
  x: number;
  y: number;
  tx: number;
  ty: number;
  rotate: number;
  scale: number;
  delay: string;
};

export default function Hero() {
  const [hearts, setHearts] = useState<Heart[]>([]);

  const createHearts = (x: number, y: number) => {
    const batch: Heart[] = Array.from({ length: 8 }).map((_, index) => ({
      id: Date.now() + index,
      x: x + (Math.random() - 0.5) * 70,
      y: y + (Math.random() - 0.5) * 28,
      tx: (Math.random() - 0.5) * 130,
      ty: -120 - Math.random() * 90,
      rotate: (Math.random() - 0.5) * 90,
      scale: 0.75 + Math.random() * 0.55,
      delay: `${index * 0.035}s`,
    }));

    setHearts((current) => [...current, ...batch]);

    window.setTimeout(() => {
      setHearts((current) =>
        current.filter((heart) => !batch.some((item) => item.id === heart.id)),
      );
    }, 2200);
  };

  const spawnHearts = (event: MouseEvent<HTMLDivElement>) => {
    const visual = event.currentTarget.closest(
      ".hero-visual",
    ) as HTMLElement | null;
    const rect = (visual ?? event.currentTarget).getBoundingClientRect();

    createHearts(event.clientX - rect.left, event.clientY - rect.top);
  };

  const spawnHeartsFromKeyboard = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Enter" && event.key !== " ") return;

    event.preventDefault();

    const visual = event.currentTarget.closest(
      ".hero-visual",
    ) as HTMLElement | null;
    const visualRect = (visual ?? event.currentTarget).getBoundingClientRect();
    const patchRect = event.currentTarget.getBoundingClientRect();

    createHearts(
      patchRect.left + patchRect.width * 0.5 - visualRect.left,
      patchRect.top + patchRect.height * 0.45 - visualRect.top,
    );
  };

  return (
    <section id="top" className="section hero-section">
      <div className="hero-composition">
        <div className="hero-meta">
          <h1>digital designer</h1>
          <p>
            100 000 people are
            <br />
            {" "}watching now
          </p>
        </div>

        <div className="hero-stage">
          <div className="hero-frame wavy-border">
            <div className="hero-visual" aria-label="Artem portrait">
              <picture className="hero-picture">
                <source
                  media="(max-width: 900px)"
                  srcSet="/images/main-photo-mobile.jpg"
                />
                <img
                  className="hero-photo"
                  src="/images/main-photo.jpg"
                  alt="Artem with toy gun"
                  fetchPriority="high"
                  decoding="async"
                />
              </picture>

              <div
                className="hero-patch blue-sticker"
                onClick={spawnHearts}
                onKeyDown={spawnHeartsFromKeyboard}
                role="button"
                tabIndex={0}
              >
                <span className="blue-sticker__text hero-patch-text">
                  ART DIRECTION
                  <br />
                  IS MY LOVE
                  <br />
                  <span className="hero-patch-last-line">
                    LANGUAGE
                    <img
                      className="blue-sticker__arrow hero-patch-arrow"
                      src="/icons/arrow.svg"
                      alt=""
                      aria-hidden="true"
                    />
                  </span>
                </span>
              </div>

              <div className="hero-hearts" aria-hidden="true">
                {hearts.map((heart) => (
                  <svg
                    key={heart.id}
                    className="hero-heart"
                    viewBox="0 0 32 32"
                    style={
                      {
                        left: heart.x,
                        top: heart.y,
                        "--tx": `${heart.tx}px`,
                        "--ty": `${heart.ty}px`,
                        "--rotate": `${heart.rotate}deg`,
                        "--scale": heart.scale,
                        "--delay": heart.delay,
                      } as CSSProperties
                    }
                  >
                    <path
                      d="M16 28s-11-7.3-11-15.2C5 8.5 8.5 5 12.8 5c2.4 0 4.5 1.2 5.7 3 1.2-1.8 3.3-3 5.7-3C28.5 5 32 8.5 32 12.8 32 20.7 21 28 21 28h-5z"
                      transform="translate(-2 -1)"
                      fill="currentColor"
                    />
                  </svg>
                ))}
              </div>
            </div>
          </div>

          <div className="hero-role">art director</div>
        </div>
      </div>
    </section>
  );
}
