
import { useEffect, useRef } from 'react';
import { Briefcase, Building2, Calendar } from 'lucide-react';

interface ExperienceProps {
  id: string;
}

const experiences = [
  {
    company: "CivilFleet-Support eV",
    position: "Software Engineer – Internal Tools and Infrastructure",
    period: "June 2024 - Present",
    location: "Berlin, Germany",
    type: "Non-Profit Organization",
    tasks: [
      "Developed internal dashboards and tooling in Next.js and Python, reducing manual reporting time by 30%.",
      "Implemented and maintained Kubernetes, ArgoCD, and Traefik, improving deployment efficiency by 25%.",
      "Provided technical support to 50+ team members, resolving 95% of technical issues within 2 hours on average."
    ]
  },
  {
    company: "Startrum",
    position: "Junior Full-Stack Engineer",
    period: "Sept 2023 - April 2024",
    location: "startrum.com",
    type: "Startup",
    tasks: [
      "Integrated GPT-based AI into web apps, increasing user engagement by 25%.",
      "Developed a scalable platform with Node.js, Next.js, and MySQL, serving over 1,000 monthly active users.",
      "Built responsive UI components using TypeScript and React, improving mobile performance and accessibility."
    ]
  },
  {
    company: "Secomind.Ai",
    position: "Junior Backend Engineer",
    period: "May 2022 - October 2022",
    location: "Secomind.ai",
    type: "AI Startup",
    tasks: [
      "Designed a round-robin scheduling system for 500+ teams, reducing scheduling conflicts by 40%.",
      "Built and optimized GraphQL APIs using TypeScript and MongoDB, improving query performance by 15%.",
      "Worked closely with frontend engineers to streamline API integration and data flow."
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
