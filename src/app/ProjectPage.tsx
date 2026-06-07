import { useParams, Link, useNavigate } from 'react-router';
import { useEffect } from 'react';

const slugs = ['ozon-education', 'mms-skittles', 'snickers', 'sber-tech', 'pedigree', 'sheba'];

export function ProjectPage() {
  const { slug = '' } = useParams();
  const navigate = useNavigate();
  const idx = Math.max(0, slugs.indexOf(slug));
  const prev = slugs[(idx - 1 + slugs.length) % slugs.length];
  const next = slugs[(idx + 1) % slugs.length];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  const title = slug.replace(/-/g, ' ');

  return (
    <div style={{ background: '#191917', color: '#fff', minHeight: '100vh', fontFamily: 'Arial Narrow, Arial, sans-serif' }}>
      <div style={{ maxWidth: 900, margin: '0 auto', padding: '80px 24px' }}>
        <button
          onClick={() => navigate('/')}
          style={{ color: '#fff', fontSize: 12, letterSpacing: 1.5, textTransform: 'uppercase', background: 'transparent', border: 'none', cursor: 'pointer', marginBottom: 40 }}
        >
          ← back home
        </button>
        <h1 style={{ textAlign: 'center', fontSize: 64, fontWeight: 700, textTransform: 'uppercase', letterSpacing: -1.5, marginBottom: 48 }}>
          {title}
        </h1>
        <div style={{ aspectRatio: '16 / 10', background: '#2a2a28', borderRadius: 16, marginBottom: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666', fontSize: 12, textTransform: 'uppercase' }}>
          cover placeholder
        </div>
        <p style={{ textAlign: 'center', fontSize: 18, lineHeight: 1.6, maxWidth: 640, margin: '0 auto 48px', opacity: 0.8 }}>
          Project description placeholder. Replace with the brief, process and outcome.
        </p>
        {[1, 2, 3].map((n) => (
          <div key={n} style={{ aspectRatio: '16 / 9', background: '#2a2a28', borderRadius: 16, marginBottom: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#666', fontSize: 12, textTransform: 'uppercase' }}>
            image placeholder · {n}
          </div>
        ))}
        <p style={{ textAlign: 'center', fontSize: 16, lineHeight: 1.6, maxWidth: 640, margin: '32px auto', opacity: 0.7 }}>
          Text placeholder. Add as many image / text blocks as you need.
        </p>
        <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 64, fontSize: 12, textTransform: 'uppercase', letterSpacing: 1.5, fontWeight: 700 }}>
          <Link to={`/project/${prev}`} style={{ color: '#fff', textDecoration: 'none' }}>← {prev.replace(/-/g, ' ')}</Link>
          <Link to="/" style={{ color: '#fff', textDecoration: 'none' }}>home</Link>
          <Link to={`/project/${next}`} style={{ color: '#fff', textDecoration: 'none' }}>{next.replace(/-/g, ' ')} →</Link>
        </nav>
      </div>
    </div>
  );
}
