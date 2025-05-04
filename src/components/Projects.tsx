import { useEffect, useRef } from "react";
import { ArrowUpRight, Github } from "lucide-react";

interface ProjectsProps {
  id: string;
}

const projects = [
  {
    title: "Partner App",
    description:
      "Built internal tool to manage non-profit partner funding, streamlining workflows and reporting accuracy.",
    github: "https://partners.lnob.net/",
    liveUrl: "https://partners.lnob.net/",
    techStack: ["Next.js", "PostgreSQL", "TypeScript"],
  },
  {
    title: "Helsingør Museum Chatbot",
    description:
      "Developed AI-powered assistant enabling interactive exploration of cultural history exhibits.",
    github: "https://ui.museum-helsingor.dk/",
    liveUrl: "https://ui.museum-helsingor.dk/",
    techStack: ["AI", "Next.js", "TypeScript"],
  },
  {
    title: "Metaroom E-Learning Platform",
    description:
      "Delivered full-stack e-learning platform hosted on AWS with user-authentication and content delivery features.",
    github: "https://github.com/ahsan131-hub/metaroom-client",
    liveUrl: "",
    techStack: ["Next.js", "TypeScript", "MongoDB", "AWS"],
  },
  {
    title: "Tweet Sentiment Analysis System",
    description:
      "Analyzed over 10,000 tweets using RoBERTa-based NLP model for sentiment classification.",
    github:
      "https://github.com/ahsan131-hub/Tweets-Sentimental-Analysis-System",
    liveUrl: "",
    techStack: ["Python", "NLP", "RoBERTa"],
  },
];

const Projects = ({ id }: ProjectsProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
          }
        });
      },
      { threshold: 0.1 }
    );

    const projectCards = document.querySelectorAll(".project-card");
    projectCards.forEach((card) => observer.observe(card));

    return () => {
      projectCards.forEach((card) => observer.unobserve(card));
    };
  }, []);

  return (
    <section id={id} className="py-20 md:py-32 bg-muted/50">
      <div className="container mx-auto px-6">
        <h2
          className="section-heading text-center mx-auto mb-16"
          data-aos="fade-up"
        >
          Projects
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card opacity-0 glass-card rounded-xl overflow-hidden card-hover relative group"
              style={{
                animationDelay: `${0.2 + index * 0.1}s`,
                animationFillMode: "forwards",
              }}
            >
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary/80"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors flex items-center gap-1 text-sm font-medium"
                  >
                    <Github size={16} />
                    <span>GitHub</span>
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors flex items-center gap-1 text-sm font-medium"
                    >
                      <ArrowUpRight size={16} />
                      <span>View Project</span>
                    </a>
                  )}
                </div>
              </div>

              {/* Hover effect border */}
              <div className="absolute inset-0 border border-transparent group-hover:border-primary/30 rounded-xl transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
