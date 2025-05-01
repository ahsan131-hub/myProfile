import { ArrowDownCircle } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-16"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div
            className="inline-block px-3 py-1 rounded-full bg-primary/5 border border-primary/10 mb-6 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
          >
            <span className="text-sm font-medium text-primary/80">
              Software Engineer
            </span>
          </div>

          <div
            className="mb-6 opacity-0 animate-fade-in flex justify-center"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            <div className="rounded-full overflow-hidden border-4 border-primary/20 shadow-lg w-36 h-36 md:w-48 md:h-48">
              <img
                src="./picture.jpg"
                alt="Muhammad Ahsan"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h1
            className="text-4xl md:text-6xl font-bold mb-4 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.5s", animationFillMode: "forwards" }}
          >
            Muhammad Ahsan
          </h1>

          <p
            className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}
          >
            Building scalable web applications with JavaScript, Python, and
            modern DevOps tools. 3+ years of experience bringing ideas to life.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}
          >
            <a href="#experience" className="btn-primary w-full sm:w-auto">
              View My Work
            </a>
            <a href="#contact" className="btn-outline w-full sm:w-auto">
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-10">
        <div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/30 blur-3xl animate-float"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-primary/20 blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a href="#experience" aria-label="Scroll down">
          <ArrowDownCircle
            size={36}
            className="text-primary/60 hover:text-primary transition-colors duration-300"
          />
        </a>
      </div>
    </section>
  );
};

export default Hero;
