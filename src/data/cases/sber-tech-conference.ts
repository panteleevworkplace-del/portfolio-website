import type { PortfolioCase } from "./types";

const casePath = "/cases/sber-tech-conference";

// Edit notes:
// - Add, remove, or reorder blocks inside `blocks` to change the page flow.
// - Use `mobileSpacingBefore` only when mobile needs a different gap.
// - Images do not use mobile crops in this case.
const assets = {
  hero: `${casePath}/sber-image-01.jpg`,
  conceptHumanism: `${casePath}/sber-image-02.jpg`,
  conceptTech: `${casePath}/sber-image-03.jpg`,
  sticker: `${casePath}/sber-image-04.jpg`,
  tote: `${casePath}/sber-image-05.jpg`,
  coffeeCup: `${casePath}/sber-image-06.jpg`,
  nextSteps: `${casePath}/sber-image-07.jpg`,
};

export const sberTechConferenceCase: PortfolioCase = {
  slug: "sber-tech-conference",
  title: "Sber Tech. Conference",
  intro: `For Platform V — a flagship conference exploring the intersection of people, communication, and emerging technologies — I developed a dynamic visual identity that builds on the platform's existing visual code to show human and technology synergy.`,
  blocks: [
    // 1. Main identity visual.
    {
      type: "image",
      src: assets.hero,
      alt: "Sber Tech conference identity with blue abstract light shapes",
      width: 2704,
      height: 1514,
      spacingBefore: "s",
      mobileSpacingBefore: "xs",
    },

    // 2. Concept explanation.
    {
      type: "text",
      title: "concept",
      body: `Two concept directions emerged: the first blends human forms with digital to show technological humanism and that people remain at the center of innovation. The second leans into bright neon lighting and smooth gradients to create a futuristic, tech-driven atmosphere — a clean, bold option that works especially well for large spaces and wayfinding.`,
      spacingBefore: "l",
      mobileSpacingBefore: "s",
    },

    // 3. Outdoor identity applications.
    {
      type: "image",
      src: assets.conceptHumanism,
      alt: "Sber Tech conference billboard with blue human profile visual",
      width: 2704,
      height: 1476,
      spacingBefore: "m",
      mobileSpacingBefore: "s",
    },
    {
      type: "image",
      src: assets.conceptTech,
      alt: "Sber Tech conference billboard with abstract blue identity visual",
      width: 2704,
      height: 1476,
      spacingBefore: "m",
      mobileSpacingBefore: "xs",
    },

    // 4. Giveaways explanation.
    {
      type: "text",
      body: `All conference giveaways — from totes and stickers to notebooks and coffee cups — carry the key visuals into tactile form. Each item seamlessly extends the glass-and-wire motif and neon-gradient treatments, ensuring a cohesive, immersive brand experience across every physical touchpoint.`,
      spacingBefore: "l",
      mobileSpacingBefore: "s",
    },

    // 5. Physical touchpoints.
    {
      type: "image",
      src: assets.sticker,
      alt: "Sber Tech conference sticker card held in hand",
      width: 2704,
      height: 1476,
      spacingBefore: "l",
      mobileSpacingBefore: "s",
    },
    {
      type: "image",
      src: assets.tote,
      alt: "Sber Tech conference branded tote bag",
      width: 2704,
      height: 1476,
      spacingBefore: "l",
      mobileSpacingBefore: "xs",
    },
    {
      type: "image",
      src: assets.coffeeCup,
      alt: "Sber Tech conference branded coffee cup",
      width: 2704,
      height: 1476,
      spacingBefore: "l",
      mobileSpacingBefore: "xs",
    },

    // 6. Next steps.
    {
      type: "text",
      title: "next steps",
      body: `Double identity approach provides maximal flexibility across digital and physical touchpoints. Post-conference, this system can be easily adapted for webinars, social media campaigns, and future event branding.`,
      spacingBefore: "l",
      mobileSpacingBefore: "s",
    },
    {
      type: "image",
      src: assets.nextSteps,
      alt: "Sber Tech conference billboard with laptop and cable identity visual",
      width: 2704,
      height: 1476,
      spacingBefore: "m",
      mobileSpacingBefore: "s",
    },
  ],
};
