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
import ScrollReveal from '@/components/ScrollReveal';

function Divider() {
  return <div className="section-divider" />;
}

export default function Home() {
  return (
    <>
      <Navbar />
      <SocialSidebar />
      <main>
        <Hero />
        <Divider />
        <ScrollReveal>
          <Skills />
        </ScrollReveal>
        <Divider />
        <ScrollReveal className="reveal-left">
          <Education />
        </ScrollReveal>
        <Divider />
        <ScrollReveal className="reveal-right">
          <Experience />
        </ScrollReveal>
        <Divider />
        <ScrollReveal className="reveal-scale">
          <Projects />
        </ScrollReveal>
        <Divider />
        <ScrollReveal>
          <Resume />
        </ScrollReveal>
        <Divider />
        <ScrollReveal className="reveal-left">
          <Contact />
        </ScrollReveal>
      </main>
      <Footer />
    </>
  );
}
