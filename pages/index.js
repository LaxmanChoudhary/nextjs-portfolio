import HeroCard from '../components/HeroCard';
import About from '../components/About';
import Skills from '../components/Skills';
import Experience from '../components/Experience';
import Works from '../components/Works';
import Certifications from '../components/Certifications';

export default function Home() {
  const user = {
    "firstName": "john",
    "lastName": "doe",
  }

  return (
    <>
      <HeroCard user={user} />
      <About />
      <Experience />
      <Certifications />
      <Works />
      <Skills />
    </>
  );
}
