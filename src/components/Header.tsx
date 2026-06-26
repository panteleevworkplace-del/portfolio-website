const smoothScrollTo = (targetId: string) => {
  const target = document.querySelector(targetId);
  if (!target) {
    window.location.href = `/${targetId}`;
    return;
  }

  const targetY = target.getBoundingClientRect().top + window.scrollY;

  window.scrollTo(0, targetY);
};

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

      <button
        type="button"
        className="site-header__item site-header__item--center site-header__button"
        onClick={() => smoothScrollTo('#works')}
      >
        works
      </button>

      <button
        type="button"
        className="site-header__item site-header__item--right site-header__button"
        onClick={() => smoothScrollTo('#contact')}
      >
        get in touch
      </button>
    </header>
  );
}
