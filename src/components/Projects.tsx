import { useEffect, useRef } from "react";
import { ArrowUpRight, Github } from "lucide-react";

interface ProjectsProps {
  id: string;
}

const projects = [
  {
    title: "Google Cloud Audit Infrastructure",
    description:
      "Distributed audit service with DLQ handling, multi-environment support, and automated deployments.",
    github: "",
    liveUrl: "",
    techStack: ["Terraform", "GCP", "Cloud Functions", "Pub/Sub"],
  },
  {
    title: "Partner App",
    description:
      "Internal tool for funding management with reliable workflows, audit logging, and reporting.",
    github: "https://partners.lnob.net/",
    liveUrl: "https://partners.lnob.net/",
    techStack: ["Next.js", "PostgreSQL", "Kubernetes"],
  },
  {
    title: "Helsingør Museum Chatbot",
    description:
      "AI assistant enabling interactive cultural exploration with vector search and robust error handling.",
    github: "https://ui.museum-helsingor.dk/",
    liveUrl: "https://ui.museum-helsingor.dk/",
    techStack: ["Next.js", "Pinecone", "LangChain", "OpenAI"],
  },
  {
    title: "Metaroom E-Learning",
    description:
      "Full-stack learning platform with authentication, content delivery, and scalable infrastructure.",
    github: "https://github.com/ahsan131-hub/metaroom-client",
    liveUrl: "",
    techStack: ["Node.js", "Express", "MongoDB", "Next.js", "AWS"],
  },
  {
    title: "Tweet Sentiment Analysis",
    description:
      "Classified 10,000+ tweets using a fine-tuned RoBERTa model and optimized data pipelines.",
    github:
      "https://github.com/ahsan131-hub/Tweets-Sentimental-Analysis-System",
    liveUrl: "",
    techStack: ["Python", "Django", "RoBERTa"],
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
                      className="chip"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-4">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors flex items-center gap-1 text-sm font-medium"
                    >
                      <Github size={16} />
                      <span>GitHub</span>
                    </a>
                  )}
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
