import Header from './components/Header';
import Hero from './components/Hero';
import Works from './components/Works';
import JuicyGallery from './components/JuicyGallery';
import Clients from './components/Clients';
import Experience from './components/Experience';
import Contact from './components/Contact';

function SvgFilters() {
  return (
    <svg
      className="svg-filters"
      aria-hidden="true"
      width="0"
      height="0"
      focusable="false"
    >
      <defs>
        <filter id="wavy-border-filter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.018 0.055"
            numOctaves="2"
            seed="8"
            result="noise"
          >
            <animate
              attributeName="baseFrequency"
              dur="7s"
              values="0.018 0.055;0.026 0.045;0.018 0.055"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="10"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
        <filter id="wavy-border-filter-mobile-static">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.018 0.055"
            numOctaves="2"
            seed="8"
            result="noise"
          />
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="10"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>
  );
}

export default function App() {
  return (
    <>
      <SvgFilters />
      <Header />
      <main>
        <Hero />
        <Works />
        <JuicyGallery />
        <Clients />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
