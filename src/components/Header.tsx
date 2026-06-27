export default function Header() {
  return (
    <header className="site-header">
      <a
        className="site-header__item site-header__item--left site-header__link"
        href="/"
        aria-label="Go to homepage"
      >
        artem
      </a>

      <a
        className="site-header__item site-header__item--center site-header__link"
        href="/#works"
      >
        works
      </a>

      <a
        className="site-header__item site-header__item--right site-header__link"
        href="/#contact"
      >
        get in touch
      </a>
    </header>
  );
}
