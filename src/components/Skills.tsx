
import { useEffect, useRef } from 'react';

interface SkillsProps {
  id: string;
}

const skillCategories = [
  {
    title: "Languages",
    skills: ["JavaScript", "TypeScript", "Python", "Java"]
  },
  {
    title: "Frontend",
    skills: ["React", "Next.js", "HTML5", "CSS3"]
  },
  {
    title: "Backend",
    skills: ["Node.js", "Nest.js", "Express", "GraphQL", "REST APIs"]
  },
  {
    title: "Databases",
    skills: ["MongoDB", "MySQL", "PostgreSQL", "Redis"]
  },
  {
    title: "DevOps & Cloud",
    skills: ["AWS", "Kubernetes", "Docker", "ArgoCD", "Linux", "Traefik"]
  },
  {
    title: "Integrations",
    skills: ["OpenAI", "Gemini", "SendGrid", "Algolia", "Elasticsearch"]
  },
  {
    title: "Testing",
    skills: ["Jest", "Cypress", "Vitest", "Playwright", "Mocha", "Postman"]
  },
  {
    title: "Tools & PM",
    skills: ["Git", "GitHub", "GitLab", "Jira", "Notion", "Agile/Scrum"]
  }
];

const Skills = ({ id }: SkillsProps) => {
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
    
    const skillCards = document.querySelectorAll('.skill-category');
    skillCards.forEach(card => observer.observe(card));
    
    return () => {
      skillCards.forEach(card => observer.unobserve(card));
    };
  }, []);

  return (
    <section id={id} className="py-20 md:py-32 bg-muted/30">
      <div className="container mx-auto px-6">
        <h2 
          className="section-heading text-center mx-auto mb-16"
          data-aos="fade-up"
        >
          Technical Skills
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="skill-category opacity-0 glass-card p-6 rounded-xl card-hover"
              style={{ animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <h3 className="text-lg font-bold mb-4 text-primary/90">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary/80"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
