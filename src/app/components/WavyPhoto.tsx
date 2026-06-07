import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function WavyPhoto({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative inline-block">
      <motion.div
        animate={{ x: [0, 4, -3, 2, 0], y: [0, -3, 2, -2, 0], rotate: [0, 1.2, -0.8, 0.6, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -inset-3 z-0"
      >
        <svg viewBox="0 0 320 380" className="w-full h-full" preserveAspectRatio="none">
          <defs>
            <filter id="wavy">
              <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" seed="3">
                <animate attributeName="baseFrequency" dur="8s" values="0.02;0.035;0.02" repeatCount="indefinite" />
              </feTurbulence>
              <feDisplacementMap in="SourceGraphic" scale="14" />
            </filter>
          </defs>
          <rect
            x="8"
            y="8"
            width="304"
            height="364"
            rx="14"
            fill="none"
            stroke="#0a0a0a"
            strokeWidth="6"
            filter="url(#wavy)"
          />
          <rect
            x="14"
            y="14"
            width="292"
            height="352"
            rx="12"
            fill="none"
            stroke="#5cff2e"
            strokeWidth="4"
            filter="url(#wavy)"
          />
        </svg>
      </motion.div>
      <div className="relative z-10 w-[300px] h-[360px] overflow-hidden rounded-md">
        <ImageWithFallback src={src} alt={alt} className="w-full h-full object-cover" />
      </div>
    </div>
  );
}
