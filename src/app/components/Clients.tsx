import { motion, useInView } from 'motion/react';
import { useRef } from 'react';
import { FadeIn } from './FadeIn';
import { clientLogos } from '../data';

export function Clients() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-20% 0px' });

  return (
    <section ref={ref} className="relative py-24 my-10 rounded-3xl overflow-hidden">
      {/* code-built gradient (no blurred image) */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(120% 80% at 20% 20%, #ff8a8a 0%, transparent 55%), radial-gradient(120% 80% at 80% 20%, #ff5566 0%, transparent 60%), radial-gradient(120% 100% at 50% 100%, #b81735 0%, #6e0d24 80%)',
        }}
      />
      <div
        className="absolute inset-0 opacity-30 mix-blend-overlay"
        style={{
          background:
            'conic-gradient(from 220deg at 60% 40%, #ffbcc4, #ff3b6b, #6e0d24, #ffbcc4)',
        }}
      />

      <div className="relative z-10 px-8 md:px-16 py-10">
        <FadeIn>
          <div className="text-[12px] uppercase opacity-80 text-white" style={{ fontFamily: 'var(--font-narrow)' }}>
            my
          </div>
          <div className="relative inline-block">
            <h2
              className="uppercase leading-none text-white"
              style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 7vw, 100px)' }}
            >
              favorite clients
            </h2>
            {/* pointer finger animation */}
            <motion.div
              initial={{ opacity: 0, x: 80, y: 40 }}
              animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
              className="absolute -right-16 -bottom-6 text-5xl pointer-events-none"
            >
              <motion.span
                animate={inView ? { scale: [1, 0.7, 1] } : {}}
                transition={{ duration: 0.3, delay: 1.4 }}
                className="inline-block"
              >
                👆
              </motion.span>
            </motion.div>
          </div>
        </FadeIn>

        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-4 text-white">
          {clientLogos.map((c, i) => (
            <FadeIn key={c} delay={i * 0.05}>
              <div className="uppercase font-bold text-[20px] tracking-wider" style={{ fontFamily: 'var(--font-narrow)' }}>
                {c}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
