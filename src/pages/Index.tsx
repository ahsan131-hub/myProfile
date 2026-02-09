import { useEffect } from "react";
import Hero from "@/components/Hero";

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
      <main className="flex-grow">
        <Hero />
      </main>
    </div>
  );
};

export default Index;
