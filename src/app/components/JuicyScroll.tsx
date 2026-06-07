import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { FadeIn } from './FadeIn';
import { juicyImages } from '../data';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function JuicyScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] });
  // While the section is in view, translate the row from 0 to -width offset
  const x = useTransform(scrollYProgress, [0.1, 0.9], ['0%', '-55%']);

  return (
    <section ref={ref} className="relative py-20 overflow-hidden">
      <FadeIn>
        <div className="mb-10">
          <h2 className="uppercase leading-none" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px, 6vw, 84px)' }}>
            even more juicy stuff
          </h2>
        </div>
      </FadeIn>
      <motion.div style={{ x }} className="flex gap-6 will-change-transform">
        {juicyImages.concat(juicyImages.slice(0, 4)).map((src, i) => (
          <div
            key={i}
            className="shrink-0 w-[340px] h-[420px] rounded-2xl overflow-hidden bg-black/10"
          >
            <ImageWithFallback src={src} alt={`juicy ${i}`} className="w-full h-full object-cover" />
          </div>
        ))}
      </motion.div>
    </section>
  );
}
