import { useEffect, useState, type ReactNode } from 'react';

const DESIGN_WIDTH = 1440;
const DESIGN_HEIGHT = 7870;

export function FigmaScaler({ children }: { children: ReactNode }) {
  const [scale, setScale] = useState(1);

  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      if (w >= DESIGN_WIDTH) setScale(1);
      else setScale(w / DESIGN_WIDTH);
    };
    compute();
    window.addEventListener('resize', compute);
    return () => window.removeEventListener('resize', compute);
  }, []);

  return (
    <div
      style={{
        width: '100%',
        height: DESIGN_HEIGHT * scale,
        overflow: 'hidden',
        background: '#191917',
      }}
    >
      <div
        style={{
          width: DESIGN_WIDTH,
          height: DESIGN_HEIGHT,
          transform: `scale(${scale})`,
          transformOrigin: 'top left',
          margin: scale === 1 ? '0 auto' : 0,
          position: 'relative',
        }}
      >
        {children}
      </div>
    </div>
  );
}
