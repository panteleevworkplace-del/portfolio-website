export default function Hero() {
  return (
    <section id="top" className="section hero-section">
      <div className="hero-meta">
        <h1>digital designer</h1>
        <p>100 000 people are watching now</p>
      </div>

      <div className="hero-visual wavy-border" aria-label="Artem portrait">
        <img className="hero-photo" src="/images/main-photo.jpg" alt="Artem with toy gun" />
        <div className="hero-patch blue-sticker">
          <span className="blue-sticker__text hero-patch-text">
            ART DIRECTION<br />
            IS MY LOVE<br />
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
      </div>

      <div className="hero-role">art director</div>
    </section>
  );
}
