import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Education from "@/components/Education";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "Muhammad Ahsan | Software Engineer";

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
        <Skills id="skills" />
        <Experience id="experience" />
        <Education id="education" />
        <Projects id="projects" />
        <Contact id="contact" />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
