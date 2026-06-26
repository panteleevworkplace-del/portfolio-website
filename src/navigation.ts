import type { MouseEvent } from "react";

export const NAVIGATION_EVENT = "portfolio:navigate";

export const emitNavigation = () => {
  window.dispatchEvent(new Event(NAVIGATION_EVENT));
};

export const navigateTo = (url: string, scrollToTop = true) => {
  const currentUrl = `${window.location.pathname}${window.location.search}${window.location.hash}`;

  if (currentUrl !== url) {
    window.history.pushState(null, "", url);
  }

  emitNavigation();

  if (scrollToTop) {
    requestAnimationFrame(() => {
      window.scrollTo(0, 0);
    });
  }
};

export const scrollToHashTarget = (hash: string) => {
  const target = document.querySelector(hash);
  if (!target) return false;

  const targetY = target.getBoundingClientRect().top + window.scrollY;
  window.scrollTo(0, targetY);

  return true;
};

export const navigateToHash = (hash: string) => {
  const target = document.querySelector(hash);

  if (!target) {
    navigateTo(`/${hash}`, false);
    return;
  }

  const url = `/${hash}`;
  const currentUrl = `${window.location.pathname}${window.location.search}${window.location.hash}`;

  if (currentUrl !== url) {
    window.history.pushState(null, "", url);
  }

  emitNavigation();

  requestAnimationFrame(() => {
    scrollToHashTarget(hash);
  });
};

export const shouldHandleInternalClick = (
  event: MouseEvent<HTMLAnchorElement>,
) =>
  event.button === 0 &&
  !event.metaKey &&
  !event.altKey &&
  !event.ctrlKey &&
  !event.shiftKey;
