import { navigateTo, navigateToHash } from "../navigation";

export default function Header() {
  return (
    <header className="site-header">
      <a
        className="site-header__item site-header__item--left site-header__link"
        href="/"
        aria-label="Go to homepage"
        onClick={(event) => {
          event.preventDefault();
          navigateTo("/");
        }}
      >
        artem
      </a>

      <button
        type="button"
        className="site-header__item site-header__item--center site-header__button"
        onClick={() => navigateToHash("#works")}
      >
        works
      </button>

      <button
        type="button"
        className="site-header__item site-header__item--right site-header__button"
        onClick={() => navigateToHash("#contact")}
      >
        get in touch
      </button>
    </header>
  );
}
