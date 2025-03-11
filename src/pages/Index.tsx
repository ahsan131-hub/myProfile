
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    document.title = "Muhammad Ahsan | Full-Stack Engineer";
    
    // Create a smooth page transition effect
    const body = document.body;
    body.style.opacity = "0";
    
    setTimeout(() => {
      body.style.transition = "opacity 0.8s ease-in-out";
      body.style.opacity = "1";
    }, 100);
    
    return () => {
      body.style.transition = "";
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Experience id="experience" />
        <Projects id="projects" />
        <Contact id="contact" />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
