import { experience } from '../data/portfolio';

export default function Experience() {
  return (
    <section className="section experience-section">
      <div className="section-label employment-label">
        <span className="icon-square bars-icon">
          <img src="/icons/vector.svg" alt="" aria-hidden="true" />
        </span>
        <strong>corporate<br />employment</strong>
      </div>

      <div className="experience-card">
        {experience.map((item) => (
          <article className={`experience-row ${item.active ? 'active' : ''}`} key={item.company}>
            <div className="experience-company">
              <span className="power-icon">⏻</span>
              <strong>{item.company}</strong>
            </div>
            <div className="experience-role">
              <strong>{item.role}</strong>
              <span>{item.dates}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
