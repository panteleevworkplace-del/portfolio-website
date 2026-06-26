import type { PortfolioCase } from "./types";

const casePath = "/cases/mts-your-business";

// Edit notes:
// - Add, remove, or reorder blocks inside `blocks` to change the page flow.
// - Use `mobileSpacingBefore` only when mobile needs a different gap.
// - Use `hasAudio: true` only when a video needs the sound button.
const assets = {
  introVideo: `${casePath}/mts-video-01.mp4`,
  websiteOverview: `${casePath}/mts-image-01.jpg`,
  websiteOverviewMobile: `${casePath}/mts-image-01-mobile.jpg`,
  registrationForm: `${casePath}/mts-image-02.jpg`,
  activityModal: `${casePath}/mts-image-03.jpg`,
  articleLayouts: `${casePath}/mts-image-04.jpg`,
  resultsVideo: `${casePath}/mts-video-02.mp4`,
};

export const mtsYourBusinessCase: PortfolioCase = {
  slug: "mts-your-business",
  title: "MTS. Contest Website",
  intro: `MTS, in partnership with RBC, launched a nationwide grant program supporting entrepreneurs who improve urban life through services, public spaces, and cultural/socio-cultural initiatives. The website became the central platform for the campaign, which also included a TV commercial series. Users could read about the initiative, register directly on the website to apply for funding of up to 2 million rubles for their business.`,
  blocks: [
    // 1. First visual block below the intro.
    {
      type: "video",
      src: assets.introVideo,
      hasAudio: true,
      spacingBefore: "s",
      mobileSpacingBefore: "xs",
    },

    // 2. Approach section.
    {
      type: "text",
      title: "approach",
      body: `The tone of the project was built around a simple and human idea: MTS not only understands the challenges small businesses face but also shares their drive for growth and genuinely believes in their power to change their communities. My task was to translate this feeling into a digital space — clear, supportive, and motivating — so entrepreneurs could easily understand the program and feel encouraged to join.`,
      spacingBefore: "l",
      mobileSpacingBefore: "s",
    },

    // 3. Full website overview. This is the only MTS image with a mobile crop.
    {
      type: "image",
      src: assets.websiteOverview,
      mobileSrc: assets.websiteOverviewMobile,
      alt: "MTS contest website overview with competition stages, prizes, jury, and materials",
      width: 2706,
      height: 3908,
      spacingBefore: "m",
      mobileSpacingBefore: "s",
    },

    // 4. Design explanation.
    {
      type: "text",
      body: `The design followed the newest MTS visual guidelines, where bold typography, large expressive photography, and bright accent color play a key role. These visuals helped convey confidence, optimism, and the energy behind entrepreneurial creativity. A clear structure and a flexible grid helped keep the whole website easy to navigate, while still making the platform feel lively and engaging.`,
      spacingBefore: "l",
      mobileSpacingBefore: "s",
    },

    // 5. Registration and interaction screens.
    {
      type: "image",
      src: assets.registrationForm,
      alt: "MTS contest participant registration page",
      width: 2700,
      height: 1396,
      spacingBefore: "l",
      mobileSpacingBefore: "s",
    },
    {
      type: "image",
      src: assets.activityModal,
      alt: "MTS contest activity selection modal",
      width: 2700,
      height: 1396,
      spacingBefore: "xs",
    },

    // 6. Editorial article layouts.
    {
      type: "image",
      src: assets.articleLayouts,
      alt: "MTS contest editorial article layouts on desktop and mobile",
      width: 2700,
      height: 3286,
      spacingBefore: "xl",
      mobileSpacingBefore: "s",
    },

    // 7. Results section.
    {
      type: "text",
      title: "results",
      body: `The final website combines storytelling, clarity, and action. Users can watch the TV series, see how nearby districts support local businesses, and register for the grant in just a few steps. The design creates an emotional yet practical experience — one that reflects MTS's belief in entrepreneurs and motivates them to take the next step for their business.`,
      spacingBefore: "xl",
      mobileSpacingBefore: "s",
    },

    // 8. Final visual block before the next-case link.
    {
      type: "video",
      src: assets.resultsVideo,
      hasAudio: true,
      spacingBefore: "m",
      mobileSpacingBefore: "xs",
    },
  ],
};
