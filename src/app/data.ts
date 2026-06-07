import imgMain from '../imports/PortfolioMain1440Px/95093b62dc717c3eee7ff3fc184ae7896ea2f0b7.png';
import img1 from '../imports/PortfolioMain1440Px/1257f425ce895018e3222f948157f2cba80932a2.png';
import img2 from '../imports/PortfolioMain1440Px/14df05bbf6c599ca56b764aa6b51a793837ea96e.png';
import img3 from '../imports/PortfolioMain1440Px/16f538c6653c9224c58e3c10dc08e131e86f007b.png';
import img4 from '../imports/PortfolioMain1440Px/1dee26fb91400d6d0b18e9f8d2e6bb8d62f02b3b.png';
import img5 from '../imports/PortfolioMain1440Px/1e390cb6d988af59090a666d1a6eeee222fa03eb.png';
import img6 from '../imports/PortfolioMain1440Px/2604b2162b56c6b14695fca7d977352dfbf3dadb.png';
import img7 from '../imports/PortfolioMain1440Px/26faae3c5c25413aa19110108c1782631b1de83b.png';
import img8 from '../imports/PortfolioMain1440Px/274a3af2373d4348ad4afb481aefdd9c010f5e1d.png';
import img9 from '../imports/PortfolioMain1440Px/2bf44cbedcef5ba303fc2ed06bc50f25e0efabf1.png';
import img10 from '../imports/PortfolioMain1440Px/2efd0e0b6736f8ab03952b1877c7f9a618591d4c.png';
import img11 from '../imports/PortfolioMain1440Px/2f8bd560a8879ec030e72f1112b1eb20be8c25bd.png';
import img12 from '../imports/PortfolioMain1440Px/3e6e91392fd70e861c3cdcdd76e105163892e66f.png';
import img13 from '../imports/PortfolioMain1440Px/401dc4b670dae59ad46d49aaf03c76268691ac08.png';
import img14 from '../imports/PortfolioMain1440Px/52275aa15df000e60e6d0c90d4baf7c42b1fefbb.png';
import img15 from '../imports/PortfolioMain1440Px/5b4aab39872751b02a78233273eae5b2a30f71c6.png';
import img16 from '../imports/PortfolioMain1440Px/5c14f0135d0ca8015ea2db830f84572c5b1ba7c0.png';
import img17 from '../imports/PortfolioMain1440Px/608cd8923d8ead498a75d702ad13b559f2905a9e.png';
import img18 from '../imports/PortfolioMain1440Px/64a2599339a6d619d3744a46b68ae6cd452f502e.png';
import img19 from '../imports/PortfolioMain1440Px/78c1d957deb552041f1b7cc4a4b6f33ffce6fc1b.png';
import img20 from '../imports/PortfolioMain1440Px/7e90f0b0648ca75e92b7a1305a9af32eb155afc6.png';
import img21 from '../imports/PortfolioMain1440Px/81419d7549a8a8d88ea05b0f942940e52bf3820f.png';
import img22 from '../imports/PortfolioMain1440Px/91cd11b6f49273900c2f5b04991202e8690850eb.png';

export const mainPhoto = imgMain;

export type Project = {
  slug: string;
  title: string;
  category: string;
  number: string;
  cover: string;
  accent?: string;
  textColor?: string;
};

export const projects: Project[] = [
  { slug: 'ozon-education', title: 'Ozon education', category: 'visual identity', number: '5+90', cover: img1, accent: '#FFEA00', textColor: '#0a0a0a' },
  { slug: 'mms-skittles', title: "M&M's x Skittles", category: 'promo campaign', number: '4+12', cover: img2, accent: '#3b6cff', textColor: '#fff' },
  { slug: 'snickers', title: 'Snickers', category: 'promo campaign', number: '3+24', cover: img3, accent: '#6914AF', textColor: '#fff' },
  { slug: 'sber-tech', title: 'Sber Tech. Conference', category: 'visual identity', number: '2+18', cover: img4, accent: '#0a3bff', textColor: '#fff' },
  { slug: 'pedigree', title: 'Pedigree', category: 'promo campaign', number: '6+04', cover: img5, accent: '#EE958A', textColor: '#0a0a0a' },
  { slug: 'sheba', title: 'Sheba', category: 'visual identity', number: '1+44', cover: img6, accent: '#1a1a1a', textColor: '#fff' },
];

export const moreProjects: Project[] = [
  { slug: 'bbdo', title: 'BBDO', category: 'art direction', number: '7+11', cover: img7, accent: '#ff3b6b', textColor: '#fff' },
  { slug: 'colgate', title: 'Colgate', category: 'promo campaign', number: '8+22', cover: img8, accent: '#ffffff', textColor: '#0a0a0a' },
  { slug: 'espolon', title: 'Espolōn', category: 'visual identity', number: '9+03', cover: img9, accent: '#ff7e00', textColor: '#fff' },
  { slug: 'papa-johns', title: "Papa John's", category: 'promo campaign', number: '10+05', cover: img10, accent: '#0a7d2e', textColor: '#fff' },
];

export const juicyImages = [img11, img12, img13, img14, img15, img16, img17, img18, img19, img20, img21, img22];

export const clientLogos = ['BBDO', 'Yandex', 'Ozon', 'RBC Media', 'asus', 'Sheba', 'Pedigree', 'Snickers', 'Colgate', 'Espolōn', "Papa John's", 'BeautiFul'];
