
import { useEffect, useRef } from 'react';
import { Briefcase, Building2, Calendar } from 'lucide-react';

interface ExperienceProps {
  id: string;
}

const experiences = [
  {
    company: "CivilFleet",
    position: "Software Engineer",
    period: "June 2024 - Present",
    location: "Berlin, Germany",
    type: "Non-Profit Organization",
    tasks: [
      "Collaborated with the team lead to build internal tools and dashboards using Next.js and Python, reducing manual reporting time by 30%.",
      "Managed infrastructure using Kubernetes, ArgoCD, and Traefik, improving deployment efficiency by 25%.",
      "Provided IT support to 50+ colleagues, resolving 95% of system issues within 2 hours."
    ]
  },
  {
    company: "Startrum",
    position: "Junior Full-Stack Engineer",
    period: "Sept 2023 - April 2024",
    location: "startrum.com",
    type: "Startup",
    tasks: [
      "Developed AI applications using GPT models, increasing user engagement by 25%.",
      "Built a full-stack web platform with Node.js, Next.js, and MySQL, serving 1K+ monthly active users."
    ]
  },
  {
    company: "Secomind.Ai",
    position: "Junior Backend Engineer",
    period: "May 2022 - October 2022",
    location: "Secomind.ai",
    type: "AI Startup",
    tasks: [
      "Implemented a round-robin scheduling system used by 500+ teams, reducing scheduling conflicts by 40%.",
      "Designed a GraphQL API with TypeScript and MongoDB, improving query response time by 15%."
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
