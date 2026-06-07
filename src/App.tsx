import Header from './components/Header';
import Hero from './components/Hero';
import Works from './components/Works';
import JuicyGallery from './components/JuicyGallery';
import Clients from './components/Clients';
import Experience from './components/Experience';
import Contact from './components/Contact';

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Works />
        <JuicyGallery />
        <Clients />
        <Experience />
        <Contact />
      </main>
    </>
  );
}
