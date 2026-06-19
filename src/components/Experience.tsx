import { useEffect, useRef, useState } from "react";
import { experience } from "../data/portfolio";

const experienceImages: Record<string, string> = {
  "RBC Media": "/images/experience/rbc.jpg",
  Ozon: "/images/experience/ozon.jpg",
  BBDO: "/images/experience/bbdo.jpg",
  Yandex: "/images/experience/yandex.jpg",
};

export default function Experience() {
  const experienceCardRef = useRef<HTMLDivElement | null>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const experienceCard = experienceCardRef.current;

    if (!experienceCard) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        setIsActive(true);
        observer.disconnect();
      },
      {
        threshold: 0,
        rootMargin: "-30% 0px -65% 0px",
      },
    );

    observer.observe(experienceCard);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="section experience-section">
      <div className="experience-inner">
        <div className="section-label employment-label">
          <span className="icon-square bars-icon">
            <img src="/icons/vector.svg" alt="" aria-hidden="true" />
          </span>
          <strong>
            corporate
            <br />
            employment
          </strong>
        </div>

        <div className="experience-card" ref={experienceCardRef}>
          {experience.map((item) => (
            <article
              className={`experience-row ${
                item.company === "Yandex" && isActive ? "active" : ""
              }`}
              key={item.company}
            >
              <div className="experience-company">
                <span className="power-icon">
                  <img src="/icons/power.svg" alt="" aria-hidden="true" />
                </span>
                <strong>{item.company}</strong>
              </div>
              <div className="experience-role">
                <strong>{item.role}</strong>
                <span>{item.dates}</span>
              </div>
              {experienceImages[item.company] ? (
                <figure className="experience-thumb" aria-hidden="true">
                  <img
                    src={experienceImages[item.company]}
                    alt=""
                    loading="lazy"
                  />
                </figure>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
