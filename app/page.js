import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import Education from '@/components/Education';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Resume from '@/components/Resume';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SocialSidebar from '@/components/SocialSidebar';

export default function Home() {
  return (
    <>
      <Navbar />
      <SocialSidebar />
      <main>
        <Hero />
        <Skills />
        <Education />
        <Experience />
        <Projects />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
