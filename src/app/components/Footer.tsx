import { motion } from 'motion/react';
import { HeartBanner } from './HeartBanner';
import { FadeIn } from './FadeIn';

const links = [
  { label: 'Behance', href: 'https://behance.net' },
  { label: 'Notion', href: 'https://notion.so' },
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'email', href: 'mailto:panteleevworkplace@gmail.com' },
  { label: 'tg: @uncle_artem', href: 'https://t.me/uncle_artem' },
];

export function Footer() {
  return (
    <footer id="contact" className="relative py-20">
      <FadeIn>
        <HeartBanner className="w-full">
          <motion.h2
            className="uppercase leading-[0.85] text-center"
            style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(48px, 10vw, 160px)' }}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
          >
            Let's make<br />something weird
          </motion.h2>
        </HeartBanner>
      </FadeIn>

      <div className="flex justify-center mt-6">
        <motion.div
          animate={{
            scaleX: [1, 1.15, 0.9, 1.05, 1],
            scaleY: [1, 0.85, 1.15, 0.95, 1],
            rotate: [0, -6, 4, -3, 0],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          style={{ fontSize: 96 }}
        >
          😜
        </motion.div>
      </div>

      <FadeIn>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-end">
          <div>
            <div className="text-[12px] uppercase opacity-60 mb-2" style={{ fontFamily: 'var(--font-narrow)' }}>corporate employment</div>
            <p className="text-[18px] max-w-md" style={{ fontFamily: 'var(--font-narrow)' }}>
              I'm open to new opportunities and projects. Feel free to reach out 💌
            </p>
            <div className="mt-3 text-[14px]" style={{ fontFamily: 'var(--font-narrow)' }}>
              panteleevworkplace@gmail.com<br />
              tg: @uncle_artem
            </div>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-3 md:justify-end">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="uppercase font-bold tracking-wider text-[16px] hover:underline"
                style={{ fontFamily: 'var(--font-narrow)' }}
              >
                {l.label} ↗
              </a>
            ))}
          </div>
        </div>
      </FadeIn>

      <div className="mt-16 text-[11px] uppercase opacity-50 text-center" style={{ fontFamily: 'var(--font-narrow)' }}>
        © {new Date().getFullYear()} Artem · made with love
      </div>
    </footer>
  );
}
