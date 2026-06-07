import { useRef } from 'react';
import { HashRouter, Routes, Route } from 'react-router';
import PortfolioMain1440Px from '../imports/PortfolioMain1440Px-1';
import { FigmaScaler } from './components/FigmaScaler';
import { Interactions } from './components/Interactions';
import { ScrollFade } from './components/ScrollFade';
import { ProjectPage } from './ProjectPage';

function Landing() {
  const rootRef = useRef<HTMLDivElement>(null!);
  return (
    <div ref={rootRef} className="relative">
      <FigmaScaler>
        <PortfolioMain1440Px />
      </FigmaScaler>
      <ScrollFade rootRef={rootRef} />
      <Interactions rootRef={rootRef} />
    </div>
  );
}

export default function App() {
  return (
    <HashRouter>
      <div className="min-h-screen w-full" style={{ background: '#191917' }}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/project/:slug" element={<ProjectPage />} />
          <Route path="*" element={<Landing />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
