import { useEffect, useRef, useState } from 'react';
import { galleryImages } from '../data/portfolio';

export default function JuicyGallery() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let raf = 0;

    const update = () => {
      const el = sectionRef.current;
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const viewport = window.innerHeight;
      const scrollable = rect.height - viewport;
      const raw = (-rect.top) / Math.max(scrollable, 1);
      setProgress(Math.min(1, Math.max(0, raw)));
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const translate = `translate3d(calc(${progress} * -42vw), 0, 0)`;

  return (
    <section ref={sectionRef} className="section juicy-section">
      <div className="juicy-sticky">
        <div className="section-label juicy-label">
          <span className="icon-square">
            <img src="/icons/infinity.svg" alt="" aria-hidden="true" />
          </span>
          <strong>even more<br />juicy staff</strong>
        </div>

        <div className="gallery-window">
          <div className="gallery-track" style={{ transform: translate }}>
            {galleryImages.map((src, index) => (
              <figure className={`gallery-card card-${index + 1}`} key={src}>
                <img src={src} alt={`Portfolio gallery item ${index + 1}`} loading="lazy" />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
