import { projects } from '../data/portfolio';

export default function Works() {
  return (
    <section id="works" className="section works-section">
      <div className="section-label works-label">
        <span>choose your</span>
        <strong>category</strong>
      </div>

      <div className="works-list">
        {projects.map((project, index) => (
          <article className="work-card" key={project.number}>
            <div className="work-number">{project.number}</div>
            {index === 0 && (
              <img className="price-tag" src="/images/ui/sale.png" alt="" aria-hidden="true" />
            )}
            <a className="work-image" href="#contact" aria-label={`${project.title} case study`}>
              <img src={project.image} alt={project.title} loading="lazy" />
            </a>
            <div className="work-caption">
              <h2>{project.title}</h2>
              <p>{project.subtitle}</p>
            </div>
          </article>
        ))}
      </div>

      <button className="more-button" type="button">MORE!!!</button>
    </section>
  );
}
