export default function Header() {
  return (
    <header className="site-header">
      <span className="site-header__item site-header__item--left">
        artem
      </span>

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
