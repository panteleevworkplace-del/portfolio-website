export type CaseSpacing = "xs" | "s" | "m" | "l" | "xl";

export type CaseTextBlock = {
  type: "text";
  title?: string;
  body: string;
  spacingBefore?: CaseSpacing;
  mobileSpacingBefore?: CaseSpacing;
};

export type CaseImageBlock = {
  type: "image";
  src: string;
  mobileSrc?: string;
  alt: string;
  width?: number;
  height?: number;
  loading?: "eager" | "lazy";
  spacingBefore?: CaseSpacing;
  mobileSpacingBefore?: CaseSpacing;
};

export type CaseVideoBlock = {
  type: "video";
  src: string;
  poster: string;
  hasAudio?: boolean;
  priority?: boolean;
  preload?: "none" | "metadata" | "auto";
  spacingBefore?: CaseSpacing;
  mobileSpacingBefore?: CaseSpacing;
};

export type CaseBlock = CaseTextBlock | CaseImageBlock | CaseVideoBlock;

export type CaseSeo = {
  title?: string;
  description?: string;
  image?: string;
};

export type PortfolioCase = {
  slug: string;
  title: string;
  intro: string;
  blocks: CaseBlock[];
  seo?: CaseSeo;
};
