const smoothScrollTo = (targetId: string) => {
  const target = document.querySelector(targetId);
  if (!target) return;

  const startY = window.scrollY;
  const targetY = target.getBoundingClientRect().top + window.scrollY;
  const distance = targetY - startY;
  const duration = 950;
  let startTime: number | null = null;

  const easeInOutCubic = (t: number) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  const animate = (currentTime: number) => {
    if (startTime === null) startTime = currentTime;

    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeInOutCubic(progress);

    window.scrollTo(0, startY + distance * easedProgress);

    if (progress < 1) {
      requestAnimationFrame(animate);
    }
  };

  requestAnimationFrame(animate);
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