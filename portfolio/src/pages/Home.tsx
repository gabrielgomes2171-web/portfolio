import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Skills } from "../components/Skills";
import { Projects } from "../components/Projects";
import { Timeline } from "../components/Timeline";
import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";
import { Education } from "../components/Education";
import { Services } from "../components/Services";
import { Stats } from "../components/Stats";
import { Highlights } from "../components/Highlights";


export function Home() {
  return (
    <>
      <Navbar />
  <Hero />
  <About />
  <Skills />
  <Projects />
  <Timeline />
  <Education />
  <Stats />
  <Services />
  <Highlights />
  <Contact />
  <Footer />
</>
  );
}