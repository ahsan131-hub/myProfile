
import { useEffect, useRef } from 'react';
import { School, Calendar } from 'lucide-react';

interface EducationProps {
  id: string;
}

const educationData = [
  {
    degree: "M.Sc. in Artificial Intelligence",
    institution: "Technical University of Cottbus (BTU)",
    location: "Germany",
    period: "April 2024 - Present",
    achievements: []
  },
  {
    degree: "B.Sc. in Computer Science",
    institution: "Sukkur IBA University (SIBAU)",
    location: "Pakistan",
    period: "January 2019 - May 2023",
    achievements: [
      "Full Scholarship (2019–2023)",
      "3rd Place – SumoWar Tech Competition (2023)"
    ]
  }
];

const Education = ({ id }: EducationProps) => {
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
    
    const educationCards = document.querySelectorAll('.education-card');
    educationCards.forEach(card => observer.observe(card));
    
    return () => {
      educationCards.forEach(card => observer.unobserve(card));
    };
  }, []);

  return (
    <section id={id} className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <h2 
          className="section-heading text-center mx-auto mb-16"
          data-aos="fade-up"
        >
          Education
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {educationData.map((edu, index) => (
            <div 
              key={index}
              className="education-card opacity-0 glass-card p-6 rounded-xl card-hover"
              style={{ animationDelay: `${0.2 + index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <School className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold">
                    {edu.degree}
                  </h3>
                  <div className="flex items-center mt-1 gap-1 text-muted-foreground text-sm">
                    <span>{edu.institution}</span>
                    <span className="mx-1">•</span>
                    <span>{edu.location}</span>
                  </div>
                  <div className="flex items-center mt-2 text-muted-foreground text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{edu.period}</span>
                  </div>
                  
                  {edu.achievements.length > 0 && (
                    <div className="mt-4">
                      <p className="text-sm font-medium">Achievements:</p>
                      <ul className="mt-1 space-y-1">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm text-foreground/90 flex">
                            <span className="mr-2">•</span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
