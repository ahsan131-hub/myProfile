
import { useEffect, useRef } from 'react';
import { Briefcase, Building2, Calendar } from 'lucide-react';

interface ExperienceProps {
  id: string;
}

const experiences = [
  {
    company: "AccessGo",
    position: "Software Engineer",
    period: "Aug 2025 - Present",
    location: "Berlin, Germany",
    type: "Accessibility Platform",
    tasks: [
      "Architected distributed audit infrastructure on GCP using Terraform for multi-environment reliability.",
      "Built Pub/Sub + Cloud Functions/Run pipelines with DLQ workers to improve resilience and observability.",
      "Optimized autoscaling policies and build triggers to reduce rebuilds and improve performance.",
      "Developed TypeScript microservices with robust error handling, logging, and graceful shutdowns.",
      "Practiced TDD with 900+ Jest tests to prevent regressions in distributed systems.",
      "Designed modular accessibility widget architecture using DDD for scalable deployments."
    ]
  },
  {
    company: "Civilfleet-Support eV",
    position: "Software Engineer",
    period: "Jun 2024 - Present",
    location: "Berlin, Germany",
    type: "Non-Profit Organization",
    tasks: [
      "Implemented CI/CD with GitHub Actions and ArgoCD + Helm for GitOps delivery to Kubernetes.",
      "Managed Kubernetes infrastructure with health checks, service discovery, and resource allocation.",
      "Built full-stack apps with Next.js, Node.js, and Python; integrated FundraisingBox and Brevo.",
      "Designed PartnerApp to automate fund transfers with audit logging and error recovery.",
      "Managed Mailcow email services, user accounts, and system administration tasks."
    ]
  },
  {
    company: "Startrum",
    position: "Junior Full-Stack Engineer",
    period: "Sep 2023 - Apr 2024",
    location: "Berlin, Germany",
    type: "Startup",
    tasks: [
      "Built ConsortMe inventory system with Next.js, ShadCN UI, Prisma, and PostgreSQL.",
      "Implemented file handling with AWS S3 and deployed via Docker on AWS EC2.",
      "Developed BillTracker AI with OpenAI LLMs and Weaviate semantic search.",
      "Built data pipelines with error handling and monitoring for reliability."
    ]
  },
  {
    company: "Secomind.AI",
    position: "Junior Backend Engineer",
    period: "May 2022 - Oct 2022",
    location: "Remote",
    type: "AI Startup",
    tasks: [
      "Built core backend systems for 30mins.com, a scheduling platform.",
      "Designed a round-robin scheduling algorithm with concurrency safeguards.",
      "Developed GraphQL APIs in TypeScript + MongoDB with indexing and pooling.",
      "Implemented logging, monitoring, and error handling for production stability."
    ]
  }
];

const Experience = ({ id }: ExperienceProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const experienceCards = document.querySelectorAll('.experience-card');
    experienceCards.forEach(card => observer.observe(card));
    
    return () => {
      experienceCards.forEach(card => observer.unobserve(card));
    };
  }, []);
  
  return (
    <section id={id} className="py-20 md:py-32" ref={sectionRef}>
      <div className="container mx-auto px-6">
        <h2 
          className="section-heading text-center mx-auto mb-16"
          data-aos="fade-up"
        >
          Work Experience
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="experience-card opacity-0 glass-card p-6 rounded-xl card-hover"
              style={{ animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold">
                    {exp.position}
                  </h3>
                  <div className="flex items-center mt-1 gap-1 text-muted-foreground text-sm">
                    <Building2 className="h-4 w-4" />
                    <span>{exp.company}</span>
                    <span className="mx-1">•</span>
                    <span>{exp.type}</span>
                  </div>
                  <div className="flex items-center mt-2 text-muted-foreground text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{exp.period}</span>
                    <span className="mx-1">•</span>
                    <span>{exp.location}</span>
                  </div>
                  
                  <ul className="mt-4 space-y-2">
                    {exp.tasks.map((task, i) => (
                      <li key={i} className="text-sm text-foreground/90 flex">
                        <span className="mr-2">•</span>
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
