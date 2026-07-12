import type { PortfolioCase } from "./data/cases";

export const SITE_URL = "https://artyarty.com";

const homeMetadata = {
  title: "Artem Panteleev — Digital Designer & Art Director",
  description:
    "Digital Designer and Art Director working across websites, campaigns, key visuals, and digital brand systems.",
  url: `${SITE_URL}/`,
  image: `${SITE_URL}/og-image.jpg?v=1`,
};

type PageMetadata = typeof homeMetadata;

const toAbsoluteUrl = (path: string) =>
  path.startsWith("http") ? path : `${SITE_URL}${path}`;

const setMetaContent = (
  attribute: "name" | "property",
  key: string,
  content: string,
) => {
  const selector = `meta[${attribute}="${key}"]`;
  const element = document.head.querySelector<HTMLMetaElement>(selector);

  if (element) {
    element.content = content;
    return;
  }

  const meta = document.createElement("meta");
  meta.setAttribute(attribute, key);
  meta.content = content;
  document.head.append(meta);
};

const setCanonicalUrl = (url: string) => {
  let canonical = document.head.querySelector<HTMLLinkElement>(
    'link[rel="canonical"]',
  );

  if (!canonical) {
    canonical = document.createElement("link");
    canonical.rel = "canonical";
    document.head.append(canonical);
  }

  canonical.href = url;
};

const setStructuredData = (id: string, data: object | null) => {
  const existing = document.getElementById(id);

  if (!data) {
    existing?.remove();
    return;
  }

  const script = existing ?? document.createElement("script");
  script.id = id;
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(data);

  if (!existing) {
    document.head.append(script);
  }
};

const applyMetadata = (metadata: PageMetadata) => {
  document.title = metadata.title;
  setMetaContent("name", "description", metadata.description);
  setCanonicalUrl(metadata.url);

  setMetaContent("property", "og:type", "website");
  setMetaContent("property", "og:title", metadata.title);
  setMetaContent("property", "og:description", metadata.description);
  setMetaContent("property", "og:url", metadata.url);
  setMetaContent("property", "og:image", metadata.image);
  setMetaContent("property", "og:site_name", "Artem Panteleev Portfolio");

  setMetaContent("name", "twitter:card", "summary_large_image");
  setMetaContent("name", "twitter:title", metadata.title);
  setMetaContent("name", "twitter:description", metadata.description);
  setMetaContent("name", "twitter:image", metadata.image);
};

const getCaseImage = (portfolioCase: PortfolioCase) => {
  const mediaBlock = portfolioCase.blocks.find(
    (block) => block.type === "image" || block.type === "video",
  );

  if (!mediaBlock) return "/og-image.jpg?v=1";

  return mediaBlock.type === "image" ? mediaBlock.src : mediaBlock.poster;
};

export const applyHomeMetadata = () => {
  applyMetadata(homeMetadata);
  setStructuredData("case-structured-data", null);
};

export const applyCaseMetadata = (portfolioCase: PortfolioCase) => {
  const title = `${portfolioCase.seo?.title ?? portfolioCase.title} — Case Study | Artem Panteleev`;
  const description = portfolioCase.seo?.description ?? portfolioCase.intro;
  const url = `${SITE_URL}/cases/${portfolioCase.slug}`;
  const image = toAbsoluteUrl(portfolioCase.seo?.image ?? getCaseImage(portfolioCase));

  applyMetadata({ title, description, url, image });
  setStructuredData("case-structured-data", {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: portfolioCase.title,
    description,
    url,
    image,
    author: {
      "@type": "Person",
      name: "Artem Panteleev",
      url: SITE_URL,
    },
  });
};
