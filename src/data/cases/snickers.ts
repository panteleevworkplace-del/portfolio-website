import type { PortfolioCase } from "./types";

const casePath = "/cases/snickers";

// Edit notes:
// - Add, remove, or reorder blocks inside `blocks` to change the page flow.
// - Use `mobileSpacingBefore` only when mobile needs a different gap.
// - Images do not use mobile crops in this case.
const assets = {
  hero: `${casePath}/snickers-image-01.jpg`,
  websiteOverview: `${casePath}/snickers-image-02.jpg`,
  gameVideo: `${casePath}/snickers-video-01.mp4`,
  gameVideoPoster: `${casePath}/snickers-video-01-poster.jpg`,
  visualStart: `${casePath}/snickers-image-03.jpg`,
  visualTest: `${casePath}/snickers-image-04.jpg`,
  visualProgress: `${casePath}/snickers-image-05.jpg`,
  campaignVideo: `${casePath}/snickers-video-02.mp4`,
  campaignVideoPoster: `${casePath}/snickers-video-02-poster.jpg`,
  finalBanner: `${casePath}/snickers-image-06.jpg`,
};

export const snickersCase: PortfolioCase = {
  slug: "snickers",
  title: "Snickers",
  intro: [
    'For the Snickers promo website, the central idea was built around the',
    'message "Get charged up for study and work." The campaign translated the',
    "familiar Snickers insight — hunger and distraction reduce performance —",
    "into an interactive digital experience. Snickers is the trigger that helps",
    "users regain energy, clarity, and concentration during study or work.",
  ].join(" "),
  blocks: [
    // 1. Main campaign visual.
    {
      type: "image",
      src: assets.hero,
      alt: "Snickers campaign visual with illustrated character and energy lines",
      width: 2704,
      height: 1514,
      spacingBefore: "s",
      mobileSpacingBefore: "xs",
    },

    // 2. Game mechanic.
    {
      type: "text",
      title: "game",
      body: [
        "The core gameplay on the landing revolved around jumping through",
        "obstacles that symbolized distractions: notifications, noise, stress,",
        "and chaos. Things that are standing in the way of productivity. Reaching",
        'the Snickers bar at the end of each level activated a "supercharged"',
        "state, reinforcing the brand message through interaction rather than",
        "explanation.",
      ].join(" "),
      spacingBefore: "l",
      mobileSpacingBefore: "s",
    },
    {
      type: "image",
      src: assets.websiteOverview,
      alt: "Snickers promo website overview with game mechanics and prize sections",
      width: 2704,
      height: 3364,
      spacingBefore: "m",
      mobileSpacingBefore: "xs",
    },
    {
      type: "video",
      src: assets.gameVideo,
      poster: assets.gameVideoPoster,
      priority: true,
      preload: "auto",
      spacingBefore: "m",
      mobileSpacingBefore: "s",
    },

    // 3. Visual system.
    {
      type: "text",
      title: "visuals",
      body: [
        "The design combined Snickers branding with added custom illustrations",
        "and dynamic zipper elements to express energy and momentum. The result",
        "was a bold, high-contrast aesthetic that felt both playful and",
        "purposeful, supporting the theme of focus through energy.",
      ].join(" "),
      spacingBefore: "l",
      mobileSpacingBefore: "s",
    },
    {
      type: "image",
      src: assets.visualStart,
      alt: "Snickers promo website start screen with orbiting prize elements",
      width: 2704,
      height: 1500,
      spacingBefore: "m",
      mobileSpacingBefore: "xs",
    },
    {
      type: "image",
      src: assets.visualTest,
      alt: "Snickers promo website mini-test loading screen",
      width: 2704,
      height: 1500,
      spacingBefore: "s",
      mobileSpacingBefore: "xs",
    },
    {
      type: "image",
      src: assets.visualProgress,
      alt: "Snickers promo website progress screen with orbiting items",
      width: 2704,
      height: 1500,
      spacingBefore: "s",
      mobileSpacingBefore: "xs",
    },

    // 4. Video materials.
    {
      type: "text",
      title: "video",
      body: [
        "I also developed a series of animated banners that carried the same",
        "visual language and narrative. These videos translated the game",
        'mechanics and "charged up" transformation into short,',
        "attention-grabbing animations, ensuring a recognizable presence across",
        "all digital touchpoints.",
      ].join(" "),
      spacingBefore: "l",
      mobileSpacingBefore: "s",
    },
    {
      type: "video",
      src: assets.campaignVideo,
      poster: assets.campaignVideoPoster,
      preload: "none",
      spacingBefore: "m",
      mobileSpacingBefore: "xs",
    },
    {
      type: "image",
      src: assets.finalBanner,
      alt: "Snickers campaign animated banner key visual",
      width: 2704,
      height: 1444,
      spacingBefore: "m",
      mobileSpacingBefore: "s",
    },
  ],
};
