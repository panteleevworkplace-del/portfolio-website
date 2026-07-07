import type { PortfolioCase } from "./types";

const casePath = "/cases/ozon-education";

// Edit notes:
// - Add, remove, or reorder blocks inside `blocks` to change the page flow.
// - Use `mobileSpacingBefore` only when mobile needs a different gap.
// - Mobile crops exist only for images 03, 04, 05, and 06.
const assets = {
  hero: `${casePath}/ozon-image-01.jpg`,
  laptop: `${casePath}/ozon-image-02.jpg`,
  logoCards: `${casePath}/ozon-image-03.jpg`,
  logoCardsMobile: `${casePath}/ozon-image-03-mobile.jpg`,
  styleIllustrations: `${casePath}/ozon-image-04.jpg`,
  styleIllustrationsMobile: `${casePath}/ozon-image-04-mobile.jpg`,
  colors: `${casePath}/ozon-image-05.jpg`,
  colorsMobile: `${casePath}/ozon-image-05-mobile.jpg`,
  categories: `${casePath}/ozon-image-06.jpg`,
  categoriesMobile: `${casePath}/ozon-image-06-mobile.jpg`,
  tablet: `${casePath}/ozon-image-07.jpg`,
  promoStrips: `${casePath}/ozon-image-08.jpg`,
  results: `${casePath}/ozon-image-09.jpg`,
};

export const ozonEducationCase: PortfolioCase = {
  slug: "ozon-education",
  title: "Ozon Education",
  intro: [
    "A visual refresh for Ozon's learning platform for sellers: new logo,",
    "clearer structure, updated 3D style, and a flexible system for courses,",
    "banners and promo materials. To help marketplace sellers easily understand",
    "how to grow inside the platform.",
  ].join(" "),
  blocks: [
    // 1. Main identity visual.
    {
      type: "image",
      src: assets.hero,
      alt: "Ozon Education visual with branded plush object on blue background",
      width: 2704,
      height: 1426,
      spacingBefore: "s",
      mobileSpacingBefore: "xs",
    },

    // 2. Approach.
    {
      type: "text",
      title: "approach",
      body: [
        "The goal was to make Ozon Education feel clearer, lighter, and easier",
        "to use. I moved the platform away from a generic online university look",
        "and built a more practical visual system around seller education:",
        "courses, tools, products, analytics and growth. The result is a design",
        "language that feels closer to Ozon, works better across formats and is",
        "easier to scale.",
      ].join(" "),
      spacingBefore: "l",
      mobileSpacingBefore: "s",
    },
    {
      type: "image",
      src: assets.laptop,
      alt: "Ozon Education platform shown on a laptop",
      width: 2704,
      height: 1224,
      spacingBefore: "m",
      mobileSpacingBefore: "xs",
    },
    {
      type: "image",
      src: assets.logoCards,
      mobileSrc: assets.logoCardsMobile,
      alt: "Ozon Education logo cards in light and blue styles",
      width: 2704,
      height: 780,
      spacingBefore: "s",
      mobileSpacingBefore: "xs",
    },

    // 3. Visual system.
    {
      type: "text",
      title: "system",
      body: [
        "The visual system works like a constructor. Combinations of 3D objects,",
        "abstract shapes, gradients, and patterns fit into one flexible identity.",
        "These elements can be mixed in different ways depending on the format.",
        "The system stays recognizable through Ozon's blue palette, soft 3D",
        "style, and simple visual metaphors, giving enough freedom to build new",
        "screens, categories, and campaign materials without starting from",
        "scratch.",
      ].join(" "),
      spacingBefore: "l",
      mobileSpacingBefore: "s",
    },
    {
      type: "image",
      src: assets.styleIllustrations,
      mobileSrc: assets.styleIllustrationsMobile,
      alt: "Ozon Education illustration style with objects, shapes, and product metaphors",
      width: 2704,
      height: 3320,
      spacingBefore: "m",
      mobileSpacingBefore: "xs",
    },
    {
      type: "image",
      src: assets.colors,
      mobileSrc: assets.colorsMobile,
      alt: "Ozon Education colors, gradients, and patterns",
      width: 2704,
      height: 1008,
      spacingBefore: "s",
      mobileSpacingBefore: "xs",
    },

    // 4. Categories.
    {
      type: "text",
      title: "categories",
      body: [
        "Content was grouped into clear categories, so users could understand the",
        "platform faster. Each category got its own visual metaphor: from product",
        "cards and analytics to advertising, sales growth, finance, and",
        "automation. The idea was simple: less generic education visuals, more",
        "objects that actually connect to sellers' daily work.",
      ].join(" "),
      spacingBefore: "l",
      mobileSpacingBefore: "s",
    },
    {
      type: "image",
      src: assets.categories,
      mobileSrc: assets.categoriesMobile,
      alt: "Ozon Education category illustration grid",
      width: 2704,
      height: 2880,
      spacingBefore: "m",
      mobileSpacingBefore: "xs",
    },
    {
      type: "image",
      src: assets.tablet,
      alt: "Ozon Education interface grid shown on a tablet",
      width: 2704,
      height: 1476,
      spacingBefore: "l",
      mobileSpacingBefore: "s",
    },
    {
      type: "image",
      src: assets.promoStrips,
      alt: "Ozon Education promo materials with branded objects and blue strips",
      width: 2704,
      height: 2042,
      spacingBefore: "s",
      mobileSpacingBefore: "s",
    },

    // 5. Results.
    {
      type: "text",
      title: "results",
      body: [
        "The redesign made Ozon Education more consistent and easier to scale.",
        "The platform got a clearer identity, a stronger connection to Ozon, and",
        "a visual system that can support courses, categories, banners, and",
        "future content without starting from scratch every time.",
      ].join(" "),
      spacingBefore: "l",
      mobileSpacingBefore: "s",
    },
    {
      type: "image",
      src: assets.results,
      alt: "Ozon Education final responsive interface and branded education materials",
      width: 2704,
      height: 2244,
      spacingBefore: "m",
      mobileSpacingBefore: "xs",
    },
  ],
};
