import { useEffect, useRef, useState } from "react";
import {
  type CaseBlock,
  type CaseImageBlock,
  type CaseTextBlock,
  type CaseVideoBlock,
  type PortfolioCase,
  getNextCase,
} from "../data/cases";

type CasePageProps = {
  portfolioCase: PortfolioCase;
};

const blockClass = (block: CaseBlock) => {
  const classes = [
    "case-block",
    `case-block--space-${block.spacingBefore ?? "m"}`,
  ];

  if (block.mobileSpacingBefore) {
    classes.push(`case-block--mobile-space-${block.mobileSpacingBefore}`);
  }

  return classes.join(" ");
};

function CaseText({ block }: { block: CaseTextBlock }) {
  return (
    <section className={`${blockClass(block)} case-text`}>
      {block.title ? <h2>{block.title}</h2> : null}
      <p>{block.body}</p>
    </section>
  );
}

function CaseImage({
  block,
  loading,
}: {
  block: CaseImageBlock;
  loading: "eager" | "lazy";
}) {
  return (
    <figure className={`${blockClass(block)} case-media`}>
      <picture>
        {block.mobileSrc ? (
          <source media="(max-width: 900px)" srcSet={block.mobileSrc} />
        ) : null}
        <img
          src={block.src}
          alt={block.alt}
          width={block.width}
          height={block.height}
          loading={loading}
          decoding="async"
        />
      </picture>
    </figure>
  );
}

function CaseVideo({ block }: { block: CaseVideoBlock }) {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mediaQuery.matches) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => undefined);
          return;
        }

        video.pause();
      },
      { threshold: 0.55 },
    );

    observer.observe(video);

    return () => {
      observer.disconnect();
      video.pause();
    };
  }, []);

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;

    const nextMuted = !video.muted;

    video.muted = nextMuted;
    setIsMuted(nextMuted);

    if (!nextMuted) {
      video.play().catch(() => undefined);
    }
  };

  return (
    <figure className={`${blockClass(block)} case-media`}>
      <div className="case-video-shell">
        <video
          ref={videoRef}
          src={block.src}
          poster={block.poster}
          muted
          loop
          playsInline
          preload="metadata"
          aria-label="Case video"
        />

        {block.hasAudio ? (
          <button
            className="case-sound-toggle"
            type="button"
            onClick={toggleSound}
            aria-label={
              isMuted ? "Turn video sound on" : "Turn video sound off"
            }
          >
            {isMuted ? "sound" : "mute"}
          </button>
        ) : null}
      </div>
    </figure>
  );
}

function CaseBlockRenderer({
  block,
  isFirstImage,
}: {
  block: CaseBlock;
  isFirstImage: boolean;
}) {
  if (block.type === "text") {
    return <CaseText block={block} />;
  }

  if (block.type === "image") {
    return (
      <CaseImage block={block} loading={isFirstImage ? "eager" : "lazy"} />
    );
  }

  return <CaseVideo block={block} />;
}

export default function CasePage({ portfolioCase }: CasePageProps) {
  const nextCase = getNextCase(portfolioCase);
  let imageCount = 0;

  return (
    <main className="case-page">
      <header className="case-intro">
        <h1>{portfolioCase.title}</h1>
        <p>{portfolioCase.intro}</p>
      </header>

      <div className="case-flow">
        {portfolioCase.blocks.map((block, index) => {
          const isFirstImage = block.type === "image" && imageCount === 0;

          if (block.type === "image") {
            imageCount += 1;
          }

          return (
            <CaseBlockRenderer
              block={block}
              isFirstImage={isFirstImage}
              key={`${block.type}-${index}`}
            />
          );
        })}
      </div>

      <a className="case-next" href={`/cases/${nextCase.slug}`}>
        <span>next case</span>
        <img src="/icons/next-case-icon.svg" alt="" aria-hidden="true" />
      </a>
    </main>
  );
}

export function NotFoundPage() {
  return (
    <main className="case-page case-page--not-found">
      <section className="case-not-found">
        <h1>Page not found</h1>
        <p>It doesn’t exist in this timeline</p>
        <a href="/">Take me back</a>
      </section>
    </main>
  );
}
