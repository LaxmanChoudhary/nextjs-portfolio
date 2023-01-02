import HeroCard from '../components/HeroCard';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Works from '../components/Works';
import Certifications from '../components/Certifications';

export default function Home() {
  return (
    <>
      <HeroCard />
      <About />
      <Experience />
      <Certifications />
      {/* <Works /> */}
      <Skills />
    </>
  );
}
