const links = [
  { label: 'Behance', href: 'https://www.behance.net/' },
  { label: 'Notion', href: 'https://www.notion.so/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
];

export default function Contact() {
  return (
    <footer id="contact" className="section contact-section">
      <div className="contact-frame wavy-border">
        <div className="contact-content">
          <div>
            <h2>I'm open to new opportunities and projects.</h2>
            <p>Feel free to reach out</p>
          </div>

          <div className="contact-side">
            <div className="contact-sticker blue-sticker">
              <span className="blue-sticker__text contact-sticker-text">
                LETS’S MAKE<br />
                SOMETHING<br />
                WEIRD &<br />
                BEATIFUL
              </span>
              <img className="blue-sticker__arrow contact-sticker-arrow" src="/icons/arrow.svg" alt="" aria-hidden="true" />
            </div>
            <img className="contact-smiley" src="/icons/smiley.png" alt="" aria-hidden="true" />
          </div>

          <div className="contact-links">
            {links.map((link) => (
              <a href={link.href} target="_blank" rel="noreferrer" key={link.label}>
                <span>{link.label}</span>
                <img src="/icons/arrow-link.svg" alt="" aria-hidden="true" />
              </a>
            ))}
          </div>

          <address>
            <a href="mailto:panteleevworkplace@gmail.com">panteleevworkplace@gmail.com</a>
            <a href="https://t.me/uncle_artem" target="_blank" rel="noreferrer">tg: @uncle_artem</a>
          </address>
        </div>
      </div>

      <div className="footer-line">
        <span>artem</span>
        <span>© 2026</span>
        <span className="footer-location">based in the internet <img src="/icons/planet.svg" alt="" aria-hidden="true" /></span>
      </div>
    </footer>
  );
}
