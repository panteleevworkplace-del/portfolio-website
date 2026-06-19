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

const links = [
  { label: "Behance", href: "https://www.behance.net/panteleevw21d9" },
  {
    label: "Notion",
    href: "https://www.notion.so/artypanteleev/Artem-Panteleev-s-Portfolio-31cfe4610a324d21a8c03b7aeb47761d",
  },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/artem-panteleev/" },
];

export default function Contact() {
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
    const side = event.currentTarget.closest(
      ".contact-side",
    ) as HTMLElement | null;
    const rect = (side ?? event.currentTarget).getBoundingClientRect();

    createHearts(event.clientX - rect.left, event.clientY - rect.top);
  };

  const spawnHeartsFromKeyboard = (event: KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Enter" && event.key !== " ") return;

    event.preventDefault();

    const side = event.currentTarget.closest(
      ".contact-side",
    ) as HTMLElement | null;
    const sideRect = (side ?? event.currentTarget).getBoundingClientRect();
    const stickerRect = event.currentTarget.getBoundingClientRect();

    createHearts(
      stickerRect.left + stickerRect.width * 0.5 - sideRect.left,
      stickerRect.top + stickerRect.height * 0.45 - sideRect.top,
    );
  };

  return (
    <section id="contact" className="section contact-section">
      <div className="contact-frame wavy-border">
        <div className="contact-content">
          <div>
            <h2>I'm open to new opportunities and projects.</h2>
            <p>Feel free to reach out</p>
          </div>

          <div className="contact-side">
            <div
              className="contact-sticker blue-sticker"
              onClick={spawnHearts}
              onKeyDown={spawnHeartsFromKeyboard}
              role="button"
              tabIndex={0}
            >
              <span className="blue-sticker__text contact-sticker-text">
                LET'S MAKE
                <br />
                SOMETHING
                <br />
                WEIRD &
                <br />
                <span className="contact-sticker-last-line">
                  BEAUTIFUL
                  <img
                    className="blue-sticker__arrow contact-sticker-arrow"
                    src="/icons/arrow.svg"
                    alt=""
                    aria-hidden="true"
                  />
                </span>
              </span>
            </div>
            <img
              className="contact-smiley"
              src="/icons/smiley.png"
              alt=""
              aria-hidden="true"
            />

            <div className="contact-hearts" aria-hidden="true">
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

          <div className="contact-links">
            {links.map((link) => (
              <a
                href={link.href}
                target="_blank"
                rel="noreferrer"
                key={link.label}
              >
                <span>{link.label}</span>
                <img src="/icons/arrow-link.svg" alt="" aria-hidden="true" />
              </a>
            ))}
          </div>

          <address>
            <a
              href="mailto:panteleevworkplace@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              panteleevworkplace@gmail.com
            </a>
            <a href="https://t.me/uncle_artem" target="_blank" rel="noreferrer">
              tg: @uncle_artem
            </a>
          </address>
        </div>
      </div>

      <footer className="site-footer">
        <span className="footer-left">artem</span>
        <span className="footer-center">© 2026</span>
        <span className="footer-right">
          based in the internet
          <img src="/icons/planet.svg" alt="" aria-hidden="true" />
        </span>
      </footer>
    </section>
  );
}
