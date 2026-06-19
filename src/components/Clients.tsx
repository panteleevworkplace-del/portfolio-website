import { useEffect, useRef } from "react";
import { clients } from "../data/portfolio";

const clientLinePositions = [
  { x: 9.5, y: 20.8 }, // LG
  { x: 27, y: 17 }, // Espolón
  { x: 49, y: 23 }, // Sheba
  { x: 71.5, y: 13 }, // Orbit
  { x: 91, y: 17 }, // Colgate
  { x: 17.5, y: 44.5 }, // Papa John's
  { x: 84.8, y: 44.5 }, // M&M’s
  { x: 9.5, y: 71 }, // Pedigree
  { x: 29, y: 76 }, // Asus
  { x: 53, y: 79 }, // MTS
  { x: 73.5, y: 78.5 }, // Snickers
  { x: 91, y: 75.5 }, // IVI
];

export default function Clients() {
  const orbitRef = useRef<HTMLDivElement | null>(null);
  const titleRef = useRef<HTMLDivElement | null>(null);
  const handRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const title = titleRef.current;
    const hand = handRef.current;

    if (!title || !hand) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        hand.classList.remove("cursor-hand--animate");
        void hand.offsetWidth;
        hand.classList.add("cursor-hand--animate");
      },
      {
        rootMargin: "-42% 0px -42% 0px",
        threshold: 0,
      },
    );

    observer.observe(title);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section clients-section" id="clients">
      <div
        className="clients-orbit"
        ref={orbitRef}
        aria-label="Favourite clients"
      >
        <svg
          className="clients-lines"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {clientLinePositions.map((position, index) => (
            <line
              key={`client-line-${index}`}
              x1="50"
              y1="44"
              x2={position.x}
              y2={position.y}
            />
          ))}
        </svg>
        <div className="clients-title" ref={titleRef}>
          my
          <br />
          favourite
          <br />
          clients
        </div>
        <img
          ref={handRef}
          className="cursor-hand"
          src="/icons/hand.svg"
          alt=""
          aria-hidden="true"
        />

        {clients.map((client, index) => {
          const clientName = String(client.name);

          return (
            <div className={`client-dot client-${index + 1}`} key={clientName}>
              <span className="client-thumb" aria-hidden="true">
                <img src={client.image} alt="" loading="lazy" />
              </span>
              <span>{clientName}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
