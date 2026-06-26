const emitNavigation = () => {
  window.dispatchEvent(new Event("portfolio:navigate"));
};

const navigateHome = (hash = "") => {
  window.history.pushState(null, "", `/${hash}`);
  emitNavigation();

  if (!hash) {
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  }
};

const smoothScrollTo = (targetId: string) => {
  const target = document.querySelector(targetId);
  if (!target) {
    navigateHome(targetId);
    return;
  }

  const targetY = target.getBoundingClientRect().top + window.scrollY;

  window.history.pushState(null, "", `/${targetId}`);
  window.scrollTo(0, targetY);
};

export default function Header() {
  return (
    <header className="site-header">
      <a
        className="site-header__item site-header__item--left site-header__link"
        href="/"
        aria-label="Go to homepage"
        onClick={(event) => {
          event.preventDefault();
          navigateHome();
        }}
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
