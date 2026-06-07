export type Project = {
  number: string;
  title: string;
  subtitle: string;
  image: string;
};

export const projects: Project[] = [
  {
    number: '1',
    title: 'Ozon education',
    subtitle: 'redesign & brandbook',
    image: '/images/cases/ozon-education.jpg',
  },
  {
    number: '2',
    title: "M&M’s x Skittles",
    subtitle: 'promo campaign',
    image: '/images/cases/mms-skittles.jpg',
  },
  {
    number: '3',
    title: 'Snickers',
    subtitle: 'promo campaign',
    image: '/images/cases/snickers.jpg',
  },
  {
    number: '4',
    title: 'Sber Tech. Conference',
    subtitle: 'visual identity',
    image: '/images/cases/sber-tech.jpg',
  },
];

export const galleryImages = [
  '/images/gallery/01.jpg',
  '/images/gallery/02.jpg',
  '/images/gallery/03.jpg',
  '/images/gallery/04.jpg',
  '/images/gallery/05.jpg',
  '/images/gallery/06.jpg',
  '/images/gallery/07.jpg',
  '/images/gallery/08.jpg',
  '/images/gallery/09.jpg',
  '/images/gallery/10.jpg',
  '/images/gallery/11.jpg',
  '/images/gallery/12.jpg',
];

export const clients = [
  { name: 'LG' },
  { name: 'Espolón' },
  { name: 'Sheba' },
  { name: 'Orbit' },
  { name: 'Colgate' },
  { name: "Papa John's" },
  { name: 'M&M’s' },
  { name: 'Cifree' },
  { name: 'Asus' },
  { name: 'MTS' },
  { name: 'Snickers' },
  { name: 'IVI' },
];

export const experience = [
  { company: 'RBC Media', role: 'Web designer', dates: '2021–2023', active: false },
  { company: 'Ozon', role: 'Digital designer', dates: '2023–2025', active: false },
  { company: 'BBDO', role: 'Digital art director', dates: '2025–2026', active: false },
  { company: 'Yandex', role: 'Senior Designer', dates: '2026–Present', active: true },
];
