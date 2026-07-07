import type { PortfolioCase } from "./types";

const casePath = "/cases/mms-skittles";

// Edit notes:
// - Add, remove, or reorder blocks inside `blocks` to change the page flow.
// - Use `mobileSpacingBefore` only when mobile needs a different gap.
// - Only the website overview image has a mobile crop in this case.
const assets = {
  hero: `${casePath}/mms-image-01.jpg`,
  triviaVideo: `${casePath}/mms-video-01.mp4`,
  triviaVideoPoster: `${casePath}/mms-video-01-poster.jpg`,
  websiteOverview: `${casePath}/mms-image-02.jpg`,
  websiteOverviewMobile: `${casePath}/mms-image-02-mobile.jpg`,
  scoreScreen: `${casePath}/mms-image-03.jpg`,
  characterScreen: `${casePath}/mms-image-04.jpg`,
  mobileScreens: `${casePath}/mms-image-05.jpg`,
  finalVideo: `${casePath}/mms-video-02.mp4`,
  finalVideoPoster: `${casePath}/mms-video-02-poster.jpg`,
};

export const mmsSkittlesCase: PortfolioCase = {
  slug: "mms-skittles",
  title: "M&M’s x Skittles",
  intro: [
    "For the M&M's promo website, the core idea was to expand the experience",
    "of watching cinema at home together with M&M's into an engaging digital",
    "space. Instead of a static landing page, the site invited users into an",
    "interactive world where their favourite movie moments and M&M's fun could",
    "merge.",
  ].join(" "),
  blocks: [
    // 1. Main campaign visual.
    {
      type: "image",
      src: assets.hero,
      alt: "M&M's and Skittles characters sitting on a red couch with trivia cards",
      width: 2704,
      height: 1514,
      spacingBefore: "s",
      mobileSpacingBefore: "xs",
    },

    // 2. Trivia mechanics.
    {
      type: "text",
      title: "trivia",
      body: [
        "I designed an interactive meme-based game that tapped into popular",
        "culture and internet humour. This game wasn't just a gimmick — it",
        "provided users with a chance to earn extra prizes through quick cultural",
        "quizzes and playful challenges. The experience bridged entertainment and",
        "brand interaction in a way that felt natural for the M&M's audience.",
      ].join(" "),
      spacingBefore: "l",
      mobileSpacingBefore: "s",
    },
    {
      type: "video",
      src: assets.triviaVideo,
      poster: assets.triviaVideoPoster,
      priority: true,
      preload: "auto",
      spacingBefore: "m",
      mobileSpacingBefore: "s",
    },

    // 3. Website overview. This is the only image with a mobile crop.
    {
      type: "image",
      src: assets.websiteOverview,
      mobileSrc: assets.websiteOverviewMobile,
      alt: "M&M's x Skittles promo website overview with prizes and trivia sections",
      width: 2704,
      height: 3720,
      spacingBefore: "m",
      mobileSpacingBefore: "s",
    },

    // 4. Visual language.
    {
      type: "text",
      title: "visuals",
      body: [
        "The design language drew from card-game visuals, creating a dynamic UI",
        "that felt like a mashup between a quiz app and a thematic promo portal.",
        "The interface used card-like modules, clickable content blocks, and",
        "animated interactions that echoed the feel of flipping through trivia",
        "cards while watching a movie at home.",
      ].join(" "),
      spacingBefore: "l",
      mobileSpacingBefore: "s",
    },
    {
      type: "image",
      src: assets.scoreScreen,
      alt: "M&M's x Skittles promo website score screen with character cards",
      width: 2704,
      height: 1500,
      spacingBefore: "m",
      mobileSpacingBefore: "s",
    },
    {
      type: "image",
      src: assets.characterScreen,
      alt: "M&M's x Skittles promo website character prompt screen",
      width: 2704,
      height: 1444,
      spacingBefore: "s",
      mobileSpacingBefore: "xs",
    },
    {
      type: "image",
      src: assets.mobileScreens,
      alt: "M&M's x Skittles mobile promo screens with character speech bubbles",
      width: 2704,
      height: 1594,
      spacingBefore: "s",
      mobileSpacingBefore: "xs",
    },

    // 5. Animated campaign materials.
    {
      type: "text",
      body: [
        "I also directed animated commercials and a set of banners to promote",
        "the campaign across digital channels. They carried the campaign's visual",
        "identity into motion, using characterful animation and quick visual",
        "humour to grab attention and drive traffic back to the site.",
      ].join(" "),
      spacingBefore: "l",
      mobileSpacingBefore: "s",
    },
    {
      type: "video",
      src: assets.finalVideo,
      poster: assets.finalVideoPoster,
      preload: "none",
      spacingBefore: "m",
      mobileSpacingBefore: "xs",
    },
  ],
};
