import { useState } from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const experiences = [
  {
    role: "Software Engineer — AccessGo",
    period: "Aug 2025 - Present · Berlin",
    highlights: [
      "Distributed audit infrastructure on GCP with Terraform for multi-environment reliability.",
      "Pub/Sub + Cloud Functions/Run pipelines with DLQ workers for resilience and observability.",
      "TypeScript microservices with robust logging, graceful shutdowns, and 900+ Jest tests.",
    ],
  },
  {
    role: "Software Engineer — Civilfleet-Support eV",
    period: "Jun 2024 - Aug 2025 · Berlin",
    highlights: [
      "GitHub Actions CI/CD + ArgoCD/Helm GitOps delivery to Kubernetes.",
      "PartnerApp for automated fund transfers with audit logging and error recovery.",
      "Full-stack apps with Next.js, Node.js, Python; integrations with FundraisingBox and Brevo.",
    ],
  },
  {
    role: "Junior Full-Stack Engineer — Startrum",
    period: "Sep 2023 - Apr 2024",
    highlights: [
      "ConsortMe inventory system with Next.js, Prisma, PostgreSQL, AWS S3, Docker on EC2.",
      "BillTracker AI with OpenAI LLMs + Weaviate semantic search and data pipelines.",
    ],
  },
  {
    role: "Junior Backend Engineer — Secomind.AI",
    period: "May 2022 - Oct 2022",
    highlights: [
      "Backend systems for 30mins.com with concurrency-safe scheduling.",
      "GraphQL APIs in TypeScript + MongoDB with indexing and pooling.",
    ],
  },
];

const projects = [
  {
    title: "Google Cloud Audit Infrastructure",
    stack: "Terraform · GCP · Cloud Functions · Pub/Sub",
    summary:
      "Distributed audit service with DLQ handling, multi-environment support, and automated deployments.",
  },
  {
    title: "Partner App",
    stack: "Next.js · PostgreSQL · Kubernetes",
    summary:
      "Internal tool for funding management with reliable workflows, audit logging, and reporting.",
  },
  {
    title: "Helsingør Museum Chatbot",
    stack: "Next.js · Pinecone · LangChain · OpenAI",
    summary:
      "AI assistant enabling cultural exploration with vector search and robust error handling.",
  },
  {
    title: "Metaroom E-Learning",
    stack: "Node.js · Express · MongoDB · Next.js · AWS",
    summary:
      "Full-stack learning platform with authentication, content delivery, and scalable infrastructure.",
  },
  {
    title: "Tweet Sentiment Analysis",
    stack: "Python · Django · RoBERTa",
    summary:
      "Classified 10,000+ tweets using a fine-tuned model and optimized data pipelines.",
  },
];

const skillGroups = [
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "Java", "Bash"],
  },
  {
    title: "Infrastructure & Cloud",
    items: [
      "GCP",
      "AWS",
      "Azure",
      "Terraform",
      "Kubernetes",
      "Docker",
      "ArgoCD",
      "Helm",
      "Linux",
    ],
  },
  {
    title: "Distributed Systems",
    items: [
      "Pub/Sub",
      "Message Queues",
      "Microservices",
      "Cloud Functions",
      "Cloud Run",
    ],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Vue.js", "HTML5", "CSS3"],
  },
  {
    title: "Backend",
    items: [
      "Node.js",
      "Nest.js",
      "Express",
      "GraphQL",
      "Django",
      "Flask",
      "REST APIs",
    ],
  },
  {
    title: "Databases",
    items: ["MongoDB", "MySQL", "PostgreSQL", "Redis", "Weaviate"],
  },
  {
    title: "DevOps & Automation",
    items: [
      "CI/CD",
      "GitHub Actions",
      "GitOps",
      "Infrastructure as Code",
      "Traefik",
    ],
  },
  {
    title: "Monitoring & Integrations",
    items: [
      "Logging",
      "Error Tracking",
      "Performance Monitoring",
      "OpenAI",
      "Gemini",
      "SendGrid",
      "Algolia",
      "Elasticsearch",
    ],
  },
  {
    title: "Testing",
    items: ["Jest", "Cypress", "Vitest", "Playwright", "Mocha", "Postman"],
  },
  {
    title: "Tools",
    items: ["Git", "GitHub", "GitLab", "Jira", "Notion", "Agile/Scrum"],
  },
];

const education = [
  {
    title: "M.Sc. in Artificial Intelligence",
    org: "Technical University of Cottbus (BTU), Germany",
    period: "Apr 2024 - Present",
  },
  {
    title: "B.Sc. in Computer Science",
    org: "Sukkur IBA University (SIBAU), Pakistan",
    period: "Jan 2019 - May 2023",
    notes: [
      "Full Scholarship Recipient",
      "3rd Place — SumoWar Tech Competition 2023",
    ],
  },
];

const certifications = [
  {
    title: "Neural Networks and Deep Learning",
    link: "https://www.coursera.org/account/accomplishments/certificate/7LQJCR83HGLQ",
  },
  {
    title: "Supervised Machine Learning: Regression and Classification",
    link: "https://www.coursera.org/account/accomplishments/certificate/BXS9BY944PJZ",
  },
  {
    title: "Introduction to Containers w/ Docker, Kubernetes & OpenShift",
    link: "https://coursera.org/share/2a7f96f157abd56100541f11f9d524d6",
  },
  {
    title: "Cloud Applications with Node.js and React",
    link: "https://courses.edx.org/certificates/d5d873fd6acf42c796cf0980af0635da",
  },
  {
    title: "Cloud Development with HTML, CSS, and JavaScript",
    link: "https://courses.edx.org/certificates/671feb72eda04f369d5e903d2901f270",
  },
  {
    title: "CS50W: CS50's Web Programming with Python and JavaScript",
    link: "https://courses.edx.org/certificates/f315c7df0fb5404c90c27a69f3505983",
  },
  {
    title: "Web Application Technologies and Django",
    link: "https://www.coursera.org/account/accomplishments/certificate/LBCYBVVF6DMH",
  },
  {
    title: "JavaScript Algorithms and Data Structures",
    link: "https://www.freecodecamp.org/certification/mahsan131/javascript-algorithms-and-data-structures",
  },
  {
    title: "Data Structures",
    link: "https://www.coursera.org/account/accomplishments/certificate/J458UPRBRSD8",
  },
  {
    title: "Programming for Everybody (Getting Started with Python)",
    link: "https://www.coursera.org/account/accomplishments/certificate/9TADYE9VZ94C",
  },
  {
    title: "Git and GitHub",
    link: "https://amigoscode.com/courses/1317178/certificate",
  },
  {
    title: "Introduction to Relational Databases in SQL",
    link: "#",
  },
  {
    title: "Introduction to SQL",
    link: "#",
  },
  {
    title: "Cybersecurity Roles, Processes & Operating System Security",
    link: "https://coursera.org/share/28ba74bd7d8016fb5b5e4865bf836211",
  },
  {
    title: "Mathematical Thinking in Computer Science",
    link: "https://www.coursera.org/account/accomplishments/certificate/V242SA67YX7W",
  },
  {
    title: "Java Programming: Solving Problems with Software",
    link: "https://www.coursera.org/account/accomplishments/certificate/XBQ86GKSU55C",
  },
  {
    title: "Java for Android",
    link: "https://www.coursera.org/account/accomplishments/certificate/WHVSP5KK7RHS",
  },
];

const tabs = [
  "Experience",
  "Projects",
  "Skills",
  "Education",
  "Certifications",
  "Contact",
] as const;

type TabKey = (typeof tabs)[number];

const Work = () => {
  const [activeTab, setActiveTab] = useState<TabKey>("Experience");

  return (
    <div className="min-h-screen bg-background">
      <main className="w-full">
        <section className="relative overflow-hidden py-16 md:py-20">
          <div className="container mx-auto px-6 relative z-10">
            <div className="max-w-5xl">
              <div className="section-kicker mb-4">Portfolio</div>
              <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mb-6">
                Muhammad Ahsan
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Software engineer focused on modern systems, cloud
                infrastructure, and reliable delivery.
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a href="/#home" className="btn-outline">
                  Back to Home
                </a>
                <a href="mailto:ahsanjsdev@gmail.com" className="btn-primary">
                  Contact
                </a>
              </div>
            </div>
          </div>

          <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-20">
            <div className="absolute top-1/4 left-[-10%] w-[28rem] h-[28rem] rounded-full bg-primary/30 blur-3xl animate-float"></div>
            <div className="absolute bottom-1/4 right-[-10%] w-[32rem] h-[32rem] rounded-full bg-primary/20 blur-3xl animate-float"></div>
          </div>
        </section>

        <section className="relative pb-16">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-[0.45fr_0.55fr] gap-8 items-start">
              <aside className="space-y-6 lg:sticky lg:top-10">
                <section className="neo-panel p-6 md:p-8">
                  <div className="section-kicker mb-3">Profile</div>
                  <p className="text-2xl font-semibold">Software Engineer</p>
                  <p className="text-sm text-muted-foreground mt-2">
                    Berlin, Germany
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="chip">GCP • Terraform</span>
                    <span className="chip">TypeScript • Node.js</span>
                    <span className="chip">Kubernetes • CI/CD</span>
                  </div>
                </section>

                <section className="neo-panel p-6 md:p-8">
                  <div className="section-kicker mb-3">Quick Links</div>
                  <div className="flex flex-wrap gap-3">
                    <a
                      href="mailto:ahsanjsdev@gmail.com"
                      className="social-icon"
                    >
                      <Mail size={18} />
                    </a>
                    <a
                      href="https://github.com/ahsan131-hub"
                      target="_blank"
                      rel="noreferrer"
                      className="social-icon"
                    >
                      <Github size={18} />
                    </a>
                    <a
                      href="https://www.linkedin.com/in/ahsan131/"
                      target="_blank"
                      rel="noreferrer"
                      className="social-icon"
                    >
                      <Linkedin size={18} />
                    </a>
                    <a href="tel:+4915732468471" className="social-icon">
                      <Phone size={18} />
                    </a>
                  </div>
                </section>
              </aside>

              <section className="neo-panel p-6 md:p-8">
                <div className="flex flex-wrap gap-2 mb-6">
                  {tabs.map((tab) => (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setActiveTab(tab)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        activeTab === tab
                          ? "bg-primary text-primary-foreground shadow-subtle"
                          : "bg-secondary/60 text-foreground hover:bg-secondary"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>

                <div className="space-y-4 lg:max-h-[70vh] lg:overflow-y-auto pr-1">
                  {activeTab === "Experience" && (
                    <div className="space-y-4">
                      {experiences.map((exp) => (
                        <div
                          key={exp.role}
                          className="rounded-xl border border-border/70 bg-secondary/40 p-4"
                        >
                          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                            <span className="font-semibold">{exp.role}</span>
                            <span className="text-sm text-muted-foreground">
                              {exp.period}
                            </span>
                          </div>
                          <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                            {exp.highlights.map((item) => (
                              <li key={item} className="flex gap-2">
                                <span className="text-primary">•</span>
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === "Projects" && (
                    <div className="grid md:grid-cols-2 gap-4">
                      {projects.map((project) => (
                        <div
                          key={project.title}
                          className="rounded-xl border border-border/70 bg-secondary/40 p-4"
                        >
                          <p className="font-semibold">{project.title}</p>
                          <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground mt-1">
                            {project.stack}
                          </p>
                          <p className="text-sm text-muted-foreground mt-3">
                            {project.summary}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === "Skills" && (
                    <div className="space-y-4">
                      {skillGroups.map((group) => (
                        <div key={group.title}>
                          <p className="text-sm font-semibold mb-2">
                            {group.title}
                          </p>
                          <div className="flex flex-wrap gap-2">
                            {group.items.map((item) => (
                              <span key={item} className="chip">
                                {item}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === "Education" && (
                    <div className="space-y-4 text-sm text-muted-foreground">
                      {education.map((item) => (
                        <div
                          key={item.title}
                          className="rounded-xl border border-border/70 bg-secondary/40 p-4"
                        >
                          <p className="font-semibold text-foreground">
                            {item.title}
                          </p>
                          <p>{item.org}</p>
                          <p>{item.period}</p>
                          {item.notes && (
                            <ul className="mt-2 space-y-1">
                              {item.notes.map((note) => (
                                <li key={note} className="flex gap-2">
                                  <span className="text-primary">•</span>
                                  <span>{note}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                        </div>
                      ))}
                    </div>
                  )}

                  {activeTab === "Certifications" && (
                    <div className="grid gap-3">
                      {certifications.map((cert) => (
                        <a
                          key={cert.title}
                          href={cert.link}
                          target={cert.link !== "#" ? "_blank" : undefined}
                          rel={cert.link !== "#" ? "noreferrer" : undefined}
                          className="rounded-lg border border-border/70 bg-secondary/40 px-4 py-3 text-sm font-medium text-foreground transition-colors hover:text-primary flex items-center justify-between group"
                        >
                          <span>{cert.title}</span>
                          {cert.link !== "#" && (
                            <span className="text-primary/60 group-hover:text-primary group-hover:translate-x-1 transition-all duration-200 ml-2">
                              →
                            </span>
                          )}
                        </a>
                      ))}
                    </div>
                  )}

                  {activeTab === "Contact" && (
                    <div className="space-y-4">
                      <p className="text-sm text-muted-foreground">
                        Reach out for collaborations, freelance work, or product
                        engineering roles.
                      </p>
                      <div className="flex flex-wrap gap-3">
                        <a
                          href="mailto:ahsanjsdev@gmail.com"
                          className="social-icon"
                        >
                          <Mail size={18} />
                        </a>
                        <a
                          href="https://github.com/ahsan131-hub"
                          target="_blank"
                          rel="noreferrer"
                          className="social-icon"
                        >
                          <Github size={18} />
                        </a>
                        <a
                          href="https://www.linkedin.com/in/ahsan131/"
                          target="_blank"
                          rel="noreferrer"
                          className="social-icon"
                        >
                          <Linkedin size={18} />
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Work;
