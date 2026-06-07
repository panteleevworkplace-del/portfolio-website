import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';

type Heart = { id: number; x: number; y: number; rot: number; scale: number };

export function Interactions({ rootRef }: { rootRef: React.RefObject<HTMLDivElement> }) {
  const [hearts, setHearts] = useState<Heart[]>([]);

  const spawnHearts = (clientX: number, clientY: number) => {
    const root = rootRef.current;
    if (!root) return;
    const rect = root.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;
    const batch: Heart[] = Array.from({ length: 10 }).map((_, i) => ({
      id: Date.now() + i,
      x: x + (Math.random() - 0.5) * 80,
      y,
      rot: (Math.random() - 0.5) * 60,
      scale: 0.5 + Math.random(),
    }));
    setHearts((h) => [...h, ...batch]);
    setTimeout(() => {
      setHearts((h) => h.filter((heart) => !batch.find((b) => b.id === heart.id)));
    }, 2000);
  };

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const findByText = (text: string): HTMLElement[] => {
      const result: HTMLElement[] = [];
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT);
      let node: Node | null;
      while ((node = walker.nextNode())) {
        const el = node as HTMLElement;
        const t = (el.textContent || '').trim().toLowerCase();
        if (t === text.toLowerCase()) result.push(el);
      }
      return result;
    };

    const scrollToY = (y: number) => {
      window.scrollTo({ top: y, behavior: 'smooth' });
    };

    findByText('works').forEach((el) => {
      el.style.cursor = 'pointer';
      el.addEventListener('click', () => {
        const target = root.querySelector<HTMLElement>('[data-anchor="works"]');
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        else scrollToY(window.innerHeight * 0.9);
      });
    });

    findByText('get in touch').forEach((el) => {
      el.style.cursor = 'pointer';
      el.addEventListener('click', () => {
        const target = root.querySelector<HTMLElement>('[data-anchor="contact"]');
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        else scrollToY(document.body.scrollHeight);
      });
    });

    ['art direction is my love language', 'lets’s make', "let's make", 'lets’s make', 'something', 'beatiful'].forEach((txt) => {
      findByText(txt).forEach((el) => {
        el.style.cursor = 'pointer';
        el.addEventListener('click', (e: MouseEvent) => {
          spawnHearts(e.clientX, e.clientY);
        });
      });
    });

    const externalMap: Record<string, string> = {
      behance: 'https://www.behance.net/',
      notion: 'https://www.notion.so/',
      linkedin: 'https://www.linkedin.com/',
      'panteleevworkplace@gmail.com': 'mailto:panteleevworkplace@gmail.com',
      'tg: @uncle_artem': 'https://t.me/uncle_artem',
    };

    Object.entries(externalMap).forEach(([txt, href]) => {
      findByText(txt).forEach((el) => {
        el.style.cursor = 'pointer';
        el.addEventListener('click', () => {
          window.open(href, href.startsWith('mailto') ? '_self' : '_blank', 'noopener,noreferrer');
        });
      });
    });

    findByText('more!!!').forEach((el) => {
      el.style.cursor = 'pointer';
      el.addEventListener('click', () => {
        scrollToY(window.scrollY + window.innerHeight * 0.8);
      });
    });
  }, [rootRef]);

  return (
    <div className="pointer-events-none absolute inset-0 z-[70] overflow-visible">
      <AnimatePresence>
        {hearts.map((h) => (
          <motion.svg
            key={h.id}
            width="36"
            height="36"
            viewBox="0 0 32 32"
            className="absolute"
            style={{ left: h.x - 18, top: h.y - 18 }}
            initial={{ opacity: 1, y: 0, scale: h.scale, rotate: h.rot }}
            animate={{
              opacity: 0,
              y: -140 - Math.random() * 80,
              x: (Math.random() - 0.5) * 100,
              scale: h.scale * 1.4,
              rotate: h.rot + (Math.random() - 0.5) * 120,
            }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: 'easeOut' }}
          >
            <path
              d="M16 28s-11-7.3-11-15.2C5 8.5 8.5 5 12.8 5c2.4 0 4.5 1.2 5.7 3 1.2-1.8 3.3-3 5.7-3C28.5 5 32 8.5 32 12.8 32 20.7 21 28 21 28h-5z"
              transform="translate(-2 -1)"
              fill="#ff3b6b"
            />
          </motion.svg>
        ))}
      </AnimatePresence>
    </div>
  );
}
