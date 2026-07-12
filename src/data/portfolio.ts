export type Project = {
  number: string;
  title: string;
  subtitle: string;
  image: string;
  mobileSrc: string;
  href: string;
};

export const projects: Project[] = [
  {
    number: "1",
    title: "Ozon Education",
    subtitle: "redesign & brandbook",
    image: "/images/cases/ozon-education.jpg",
    mobileSrc: "/images/cases/ozon-education-mobile.jpg",
    href: "/cases/ozon-education",
  },
  {
    number: "2",
    title: "M&M’s x Skittles",
    subtitle: "promo campaign",
    image: "/images/cases/mms-skittles.jpg",
    mobileSrc: "/images/cases/mms-skittles-mobile.jpg",
    href: "/cases/mms-skittles",
  },
  {
    number: "3",
    title: "Snickers",
    subtitle: "promo campaign",
    image: "/images/cases/snickers.jpg",
    mobileSrc: "/images/cases/snickers-mobile.jpg",
    href: "/cases/snickers",
  },
  {
    number: "4",
    title: "Sber Tech. Conference",
    subtitle: "visual identity",
    image: "/images/cases/sber-tech.jpg",
    mobileSrc: "/images/cases/sber-tech-mobile.jpg",
    href: "/cases/sber-tech-conference",
  },
  {
    number: "5",
    title: "MTS Your Business",
    subtitle: "entrepreneurs contest",
    image: "/images/cases/mts-your-business.jpg",
    mobileSrc: "/images/cases/mts-your-business-mobile.jpg",
    href: "/cases/mts-your-business",
  },
];

export const galleryImages = [
  "/images/gallery/01.jpg",
  "/images/gallery/02.jpg",
  "/images/gallery/03.jpg",
  "/images/gallery/04.jpg",
  "/images/gallery/05.jpg",
  "/images/gallery/06.jpg",
  "/images/gallery/07.jpg",
  "/images/gallery/08.jpg",
  "/images/gallery/09.jpg",
  "/images/gallery/10.jpg",
  "/images/gallery/11.jpg",
  "/images/gallery/12.jpg",
];

export type JuicyItem = {
  image: string;
  mobileSrc?: string;
  alt: string;
  size: "small" | "medium" | "large";
};

export const juicyItems: JuicyItem[] = [
  {
    image: "/images/gallery/01.jpg",
    mobileSrc: "/images/gallery/01-mobile.jpg",
    alt: "",
    size: "small",
  },
  {
    image: "/images/gallery/02.jpg",
    mobileSrc: "/images/gallery/02-mobile.jpg",
    alt: "",
    size: "large",
  },
  {
    image: "/images/gallery/03.jpg",
    mobileSrc: "/images/gallery/03-mobile.jpg",
    alt: "",
    size: "medium",
  },
  {
    image: "/images/gallery/04.jpg",
    mobileSrc: "/images/gallery/04-mobile.jpg",
    alt: "",
    size: "medium",
  },
  {
    image: "/images/gallery/05.jpg",
    mobileSrc: "/images/gallery/05-mobile.jpg",
    alt: "",
    size: "large",
  },
  {
    image: "/images/gallery/06.jpg",
    mobileSrc: "/images/gallery/06-mobile.jpg",
    alt: "",
    size: "small",
  },
  {
    image: "/images/gallery/07.jpg",
    mobileSrc: "/images/gallery/07-mobile.jpg",
    alt: "",
    size: "medium",
  },
  {
    image: "/images/gallery/08.jpg",
    mobileSrc: "/images/gallery/08-mobile.jpg",
    alt: "",
    size: "large",
  },
  {
    image: "/images/gallery/09.jpg",
    mobileSrc: "/images/gallery/09-mobile.jpg",
    alt: "",
    size: "medium",
  },
  {
    image: "/images/gallery/10.jpg",
    mobileSrc: "/images/gallery/10-mobile.jpg",
    alt: "",
    size: "small",
  },
  {
    image: "/images/gallery/11.jpg",
    mobileSrc: "/images/gallery/11-mobile.jpg",
    alt: "",
    size: "medium",
  },
  {
    image: "/images/gallery/12.jpg",
    mobileSrc: "/images/gallery/12-mobile.jpg",
    alt: "",
    size: "large",
  },
];

export type Client = {
  name: string;
  image: string;
};

export const clients: Client[] = [
  {
    name: "LG",
    image: "/images/clients/lg.jpg",
  },
  {
    name: "Espolón",
    image: "/images/clients/espolon.jpg",
  },
  {
    name: "Sheba",
    image: "/images/clients/sheba.jpg",
  },
  {
    name: "Orbit",
    image: "/images/clients/orbit.jpg",
  },
  {
    name: "Colgate",
    image: "/images/clients/colgate.jpg",
  },
  {
    name: "Papa John's",
    image: "/images/clients/papa-johns.jpg",
  },
  {
    name: "M&M’s",
    image: "/images/clients/mms.jpg",
  },
  {
    name: "Pedigree",
    image: "/images/clients/pedigree.jpg",
  },
  {
    name: "Asus",
    image: "/images/clients/asus.jpg",
  },
  {
    name: "MTS",
    image: "/images/clients/mts.jpg",
  },
  {
    name: "Snickers",
    image: "/images/clients/snickers.jpg",
  },
  {
    name: "IVI",
    image: "/images/clients/ivi.jpg",
  },
];

export const experience = [
  {
    company: "RBC Media",
    role: "Web designer",
    dates: "2021–2023",
    active: false,
  },
  {
    company: "Ozon",
    role: "Digital designer",
    dates: "2023–2025",
    active: false,
  },
  {
    company: "BBDO",
    role: "Digital art director",
    dates: "2025–2026",
    active: false,
  },
  {
    company: "Yandex",
    role: "Senior Designer",
    dates: "2026–Present",
    active: true,
  },
];
