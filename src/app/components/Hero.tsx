import { motion } from 'motion/react';
import { WavyPhoto } from './WavyPhoto';
import { HeartBanner } from './HeartBanner';
import { FadeIn } from './FadeIn';
import { mainPhoto } from '../data';

export function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <section className="relative pt-10 pb-16">
      <div className="flex justify-between items-start gap-8 text-[12px] uppercase tracking-wide" style={{ fontFamily: 'var(--font-narrow)' }}>
        <div>
          <div className="font-bold">artem</div>
          <div>digital designer</div>
          <div>based in the internet</div>
        </div>
        <nav className="flex gap-8 font-bold">
          <button onClick={() => scrollTo('works')} className="hover:underline">works</button>
          <button onClick={() => scrollTo('contact')} className="hover:underline">get in touch</button>
        </nav>
      </div>

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-[auto_1fr] gap-12 items-end">
        <FadeIn>
          <WavyPhoto src={mainPhoto} alt="Artem portrait" />
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="flex flex-col items-end gap-4">
            <div className="text-[12px] uppercase tracking-widest" style={{ fontFamily: 'var(--font-narrow)' }}>
              art director · digital designer · senior designer · web designer
            </div>
            <HeartBanner className="w-full">
              <motion.h1
                initial={{ letterSpacing: '0.5em', opacity: 0 }}
                animate={{ letterSpacing: '-0.02em', opacity: 1 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="text-right leading-[0.85] uppercase"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(48px, 9vw, 138px)',
                  fontWeight: 900,
                }}
              >
                Art direction is<br />my love language
              </motion.h1>
              <div className="text-right text-[11px] uppercase opacity-60 mt-2" style={{ fontFamily: 'var(--font-narrow)' }}>
                ↑ click me ↑
              </div>
            </HeartBanner>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
