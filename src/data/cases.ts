import { mmsSkittlesCase } from "./cases/mms-skittles";
import { mtsYourBusinessCase } from "./cases/mts-your-business";
import { ozonEducationCase } from "./cases/ozon-education";
import { sberTechConferenceCase } from "./cases/sber-tech-conference";
import { snickersCase } from "./cases/snickers";
import type { PortfolioCase } from "./cases/types";

export type {
  CaseBlock,
  CaseImageBlock,
  CaseSeo,
  CaseSpacing,
  CaseTextBlock,
  CaseVideoBlock,
  PortfolioCase,
} from "./cases/types";

// Add future cases here. The next-case link follows this array order.
export const cases: PortfolioCase[] = [
  ozonEducationCase,
  mmsSkittlesCase,
  snickersCase,
  sberTechConferenceCase,
  mtsYourBusinessCase,
];

export const getCaseBySlug = (slug: string) =>
  cases.find((item) => item.slug === slug);

export const getNextCase = (currentCase: PortfolioCase) => {
  const currentIndex = cases.findIndex((item) => item.slug === currentCase.slug);
  const nextIndex = currentIndex === -1 ? 0 : (currentIndex + 1) % cases.length;

  return cases[nextIndex];
};
