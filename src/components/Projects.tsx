import { useEffect, useRef } from "react";
import { ArrowUpRight, Github } from "lucide-react";

interface ProjectsProps {
  id: string;
}

const projects = [
  {
    title: "Bots-Hub",
    description: "Platform for building custom bots using Nest.js and OpenAI.",
    github: "https://github.com/ahsan131-hub/bots-hub-frontend",
    techStack: ["Nest.js", "Next.js", "OpenAI", "TypeScript"],
  },

  {
    title: "Partner App",
    description: "A platform for managing partner for non-profit organization.",
    github: "https://partners.lnob.net",
    techStack: ["Next.Js", "TypeScript", "PostgreSQL", "Tailwind CSS"],
  },
  {
    title: "Helsingor Museum Chatbot",
    description: "A chatbot for Helsingor Museum.",
    github: "https://ui.museum-helsingor.dk/",
    techStack: [
      "OpenAI",
      "Langchain",
      "Pinecone",
      "Next.Js",
      "TypeScript",
      "Tailwind CSS",
    ],
  },
  {
    title: "Metaroom",
    description:
      "E-learning solution with AWS-hosted video streaming using Next.js and TypeScript.",
    github: "https://github.com/ahsan131-hub/metaroom-client",
    techStack: ["Next.js", "TypeScript", "AWS", "Tailwind CSS"],
  },
  {
    title: "TSAS",
    description:
      "Tweet sentiment analysis system using Python and Roberta NLP. Analyzed 10K+ tweets with high accuracy.",
    github:
      "https://github.com/ahsan131-hub/Tweets-Sentimental-Analysis-System",
    techStack: ["Python", "Roberta NLP", "Machine Learning", "Data Analysis"],
  },
  {
    title: "Pharmacy App",
    description:
      "POS system for pharmacies (Java, MySQL) – Reduced checkout time by 20% for 50+ users.",
    github: "#",
    techStack: ["Java", "MySQL", "Spring Boot", "Hibernate"],
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
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors flex items-center gap-1 text-sm font-medium"
                  >
                    <ArrowUpRight size={16} />
                    <span>View Project</span>
                  </a>
                </div>
              </div>

              {/* Hover effect border */}
              <div className="absolute inset-0 border border-transparent group-hover:border-primary/30 rounded-xl transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
