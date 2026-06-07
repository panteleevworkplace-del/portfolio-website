import { useEffect } from 'react';

export function ScrollFade({ rootRef }: { rootRef: React.RefObject<HTMLDivElement> }) {
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const targets = Array.from(root.children) as HTMLElement[];
    // Find absolute-positioned direct descendants of the figma root
    const figmaRoot = root.querySelector<HTMLElement>('[data-name="Portfolio Main – 1440px"]');
    if (!figmaRoot) return;
    const blocks = Array.from(figmaRoot.children) as HTMLElement[];
    blocks.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(24px)';
      el.style.transition = 'opacity 0.9s cubic-bezier(0.22,1,0.36,1), transform 0.9s cubic-bezier(0.22,1,0.36,1)';
    });
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = '1';
            (entry.target as HTMLElement).style.transform = 'translateY(0)';
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.05, rootMargin: '-5% 0px -5% 0px' },
    );
    blocks.forEach((el) => obs.observe(el));
    // Failsafe: reveal anything still hidden after 3s
    const t = setTimeout(() => {
      blocks.forEach((el) => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0)';
      });
    }, 3500);
    return () => {
      obs.disconnect();
      clearTimeout(t);
    };
  }, [rootRef]);
  return null;
}
