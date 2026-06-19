import { useEffect, useState } from "react";
import { projects } from "../data/portfolio";

const INITIAL_VISIBLE_PROJECTS = 4;

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
              >
                <picture className="work-picture">
                  <source
                    media="(max-width: 900px)"
                    srcSet={project.mobileSrc}
                  />
                  <img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
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
