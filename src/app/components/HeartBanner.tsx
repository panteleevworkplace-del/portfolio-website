import { motion, AnimatePresence } from 'motion/react';
import { useState, type ReactNode } from 'react';

type Heart = { id: number; x: number; y: number; rotate: number; scale: number };

type Props = {
  children: ReactNode;
  className?: string;
  heartColor?: string;
};

export function HeartBanner({ children, className, heartColor = '#ff3b6b' }: Props) {
  const [hearts, setHearts] = useState<Heart[]>([]);

  const spawn = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const batch: Heart[] = Array.from({ length: 8 }).map((_, i) => ({
      id: Date.now() + i,
      x: x + (Math.random() - 0.5) * 60,
      y,
      rotate: (Math.random() - 0.5) * 60,
      scale: 0.6 + Math.random() * 0.8,
    }));
    setHearts((h) => [...h, ...batch]);
    setTimeout(() => {
      setHearts((h) => h.filter((heart) => !batch.find((b) => b.id === heart.id)));
    }, 1800);
  };

  return (
    <div
      onClick={spawn}
      className={`relative overflow-visible cursor-pointer select-none ${className ?? ''}`}
    >
      {children}
      <div className="pointer-events-none absolute inset-0 overflow-visible">
        <AnimatePresence>
          {hearts.map((h) => (
            <motion.svg
              key={h.id}
              width="32"
              height="32"
              viewBox="0 0 32 32"
              className="absolute"
              style={{ left: h.x - 16, top: h.y - 16 }}
              initial={{ opacity: 1, y: 0, scale: h.scale, rotate: h.rotate }}
              animate={{
                opacity: 0,
                y: -120 - Math.random() * 60,
                x: (Math.random() - 0.5) * 80,
                scale: h.scale * 1.4,
                rotate: h.rotate + (Math.random() - 0.5) * 90,
              }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.6, ease: 'easeOut' }}
            >
              <path
                d="M16 28s-11-7.3-11-15.2C5 8.5 8.5 5 12.8 5c2.4 0 4.5 1.2 5.7 3 1.2-1.8 3.3-3 5.7-3C28.5 5 32 8.5 32 12.8 32 20.7 21 28 21 28h-5z"
                transform="translate(-2 -1)"
                fill={heartColor}
              />
            </motion.svg>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}
