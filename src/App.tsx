import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Works from './components/Works';
import JuicyGallery from './components/JuicyGallery';
import Clients from './components/Clients';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { getCaseBySlug } from './data/cases';
import CaseStudyPage from './pages/case-study-page';
import NotFoundPage from './pages/not-found-page';

const getLocationSnapshot = () =>
  `${window.location.pathname}${window.location.search}${window.location.hash}`;

const isSafariBrowser = () =>
  /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

function SvgFilters() {
  return (
    <svg
      className="svg-filters"
      aria-hidden="true"
      width="1"
      height="1"
      focusable="false"
    >
      <defs>
        <filter
          id="wavy-border-filter"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
          colorInterpolationFilters="sRGB"
        >
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
        <filter
          id="wavy-border-filter-mobile-static"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
          colorInterpolationFilters="sRGB"
        >
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
        <filter
          id="wavy-border-filter-safari"
          x="-14%"
          y="-14%"
          width="128%"
          height="128%"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.016 0.05"
            numOctaves="1"
            seed="8"
            result="noise"
          >
            <animate
              attributeName="baseFrequency"
              dur="9s"
              values="0.016 0.05;0.022 0.042;0.016 0.05"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feDisplacementMap
            in="SourceGraphic"
            in2="noise"
            scale="8"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </defs>
    </svg>
  );
}

function HomePage() {
  useEffect(() => {
    if (!window.location.hash) {
      const frameId = requestAnimationFrame(() => {
        window.scrollTo(0, 0);
      });

      return () => cancelAnimationFrame(frameId);
    }

    const scrollToHashTarget = () => {
      const target = document.querySelector(window.location.hash);
      if (!target) return;

      const targetY = target.getBoundingClientRect().top + window.scrollY;

      window.scrollTo(0, targetY);
    };

    const frameId = requestAnimationFrame(() => {
      requestAnimationFrame(scrollToHashTarget);
    });

    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <main>
      <Hero />
      <Works />
      <JuicyGallery />
      <Clients />
      <Experience />
      <Contact />
    </main>
  );
}

export default function App() {
  const locationSnapshot = getLocationSnapshot();
  const pathname =
    locationSnapshot.split(/[?#]/)[0].replace(/\/+$/, "") || "/";
  const caseMatch = pathname.match(/^\/cases\/([^/]+)$/);
  const portfolioCase = caseMatch ? getCaseBySlug(caseMatch[1]) : undefined;
  const isHomePage = pathname === "/";

  useEffect(() => {
    document.documentElement.classList.toggle("is-safari", isSafariBrowser());
  }, []);

  return (
    <>
      <SvgFilters />
      {portfolioCase ? null : <Header />}
      {caseMatch ? (
        portfolioCase ? (
          <CaseStudyPage portfolioCase={portfolioCase} />
        ) : (
          <NotFoundPage />
        )
      ) : isHomePage ? (
        <HomePage />
      ) : (
        <NotFoundPage />
      )}
    </>
  );
}
