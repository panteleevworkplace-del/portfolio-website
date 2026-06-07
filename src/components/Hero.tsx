export default function Hero() {
  return (
    <section id="top" className="section hero-section">
      <div className="hero-meta">
        <h1>digital designer</h1>
        <p>100 000 people are watching now</p>
      </div>

      <div className="hero-visual" aria-label="Artem portrait">
        <img className="hero-photo" src="/images/main-photo.jpg" alt="Artem with toy gun" />
        <img className="hero-stroke" src="/images/ui/main-photo-stroke.svg" alt="" aria-hidden="true" />
        <div className="hero-patch">
          <img src="/images/ui/blue-texture.png" alt="" aria-hidden="true" />
          <span>Art direction<br />is my love<br />language ↗</span>
        </div>
      </div>

      <div className="hero-role">art director</div>
    </section>
  );
}
