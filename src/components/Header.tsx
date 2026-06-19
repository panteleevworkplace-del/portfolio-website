const smoothScrollTo = (targetId: string) => {
  const target = document.querySelector(targetId);
  if (!target) return;

  const targetY = target.getBoundingClientRect().top + window.scrollY;

  window.scrollTo(0, targetY);
};

export default function Header() {
  return (
    <header className="site-header">
      <span className="site-header__item site-header__item--left">
        artem
      </span>

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
