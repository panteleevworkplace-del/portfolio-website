import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router';
import { FadeIn } from './FadeIn';
import { projects, moreProjects, type Project } from '../data';
import { ImageWithFallback } from './figma/ImageWithFallback';

function Card({ p, i }: { p: Project; i: number }) {
  return (
    <FadeIn delay={(i % 3) * 0.08}>
      <Link to={`/project/${p.slug}`} className="group block">
        <motion.div
          whileHover={{ y: -6 }}
          transition={{ type: 'spring', stiffness: 200, damping: 20 }}
          className="relative overflow-hidden rounded-2xl aspect-[4/3]"
          style={{ background: p.accent ?? '#222' }}
        >
          <ImageWithFallback
            src={p.cover}
            alt={p.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute top-3 left-3 text-[11px] font-bold uppercase tracking-wider" style={{ color: p.textColor, fontFamily: 'var(--font-narrow)' }}>
            {p.number}
          </div>
          <div className="absolute top-3 right-3 text-[11px] uppercase tracking-wider" style={{ color: p.textColor, fontFamily: 'var(--font-narrow)' }}>
            {p.category}
          </div>
        </motion.div>
        <div className="mt-3 flex justify-between text-[12px] uppercase tracking-wider" style={{ fontFamily: 'var(--font-narrow)' }}>
          <span className="font-bold">{p.title}</span>
          <span className="opacity-60">{p.category}</span>
        </div>
      </Link>
    </FadeIn>
  );
}

export function Works() {
  const [expanded, setExpanded] = useState(false);
  return (
    <section id="works" className="relative py-20">
      <FadeIn>
        <div className="mb-10">
          <div className="text-[12px] uppercase opacity-60" style={{ fontFamily: 'var(--font-narrow)' }}>choose your</div>
          <h2 className="uppercase leading-none" style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px, 7vw, 96px)' }}>category</h2>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => <Card key={p.slug} p={p} i={i} />)}
        <AnimatePresence>
          {expanded && moreProjects.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
            >
              <Card p={p} i={i} />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {!expanded && (
        <FadeIn>
          <div className="flex justify-center mt-10">
            <button
              onClick={() => setExpanded(true)}
              className="px-8 py-4 rounded-full bg-black uppercase font-bold tracking-wider hover:scale-105 transition-transform"
              style={{ fontFamily: 'var(--font-display)', color: '#C4FF3D' }}
            >
              more!!!
            </button>
          </div>
        </FadeIn>
      )}
    </section>
  );
}
