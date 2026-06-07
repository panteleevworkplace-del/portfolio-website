import { Hero } from './components/Hero';
import { Works } from './components/Works';
import { JuicyScroll } from './components/JuicyScroll';
import { Clients } from './components/Clients';
import { Footer } from './components/Footer';

export function Landing() {
  return (
    <>
      <Hero />
      <Works />
      <JuicyScroll />
      <Clients />
      <Footer />
    </>
  );
}
