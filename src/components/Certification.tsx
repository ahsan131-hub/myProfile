import { useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface CertificationsProps {
  id: string;
}

interface Certificate {
  title: string;
  imageUrl: string;
  link: string;
}

const Certifications = ({ id }: CertificationsProps) => {
  const [loadingImages, setLoadingImages] = useState<{
    [key: string]: boolean;
  }>({});

  const certificates: Certificate[] = [
    {
      title: "Neural Networks and Deep Learning",
      imageUrl: "./resource/nn-deep-learning.png",
      link: "https://www.coursera.org/account/accomplishments/certificate/7LQJCR83HGLQ",
    },
    {
      title: "Supervised Machine Learning: Regression and Classification",
      imageUrl: "./resource/supervised machine learning.png",
      link: "https://www.coursera.org/account/accomplishments/certificate/BXS9BY944PJZ",
    },
    {
      title: "Introduction to Containers w/ Docker, Kubernetes & OpenShift",
      imageUrl: "./resource/k8s.png",
      link: "https://coursera.org/share/2a7f96f157abd56100541f11f9d524d6",
    },
    {
      title: "Cloud Applications with Node.js and React",
      imageUrl: "./resource/nodejsReactcertificate.png",
      link: "https://courses.edx.org/certificates/d5d873fd6acf42c796cf0980af0635da",
    },
    {
      title: "Cloud Development with HTML, CSS, and JavaScript",
      imageUrl: "./resource/cloudReact.png",
      link: "https://courses.edx.org/certificates/671feb72eda04f369d5e903d2901f270",
    },
    {
      title: "CS50W: CS50's Web Programming with Python and JavaScript",
      imageUrl: "./resource/cs50.jpg",
      link: "https://courses.edx.org/certificates/f315c7df0fb5404c90c27a69f3505983",
    },
    {
      title: "Web Application Technologies and Django",
      imageUrl: "./resource/djangoC.jpg",
      link: "https://www.coursera.org/account/accomplishments/certificate/LBCYBVVF6DMH",
    },
    {
      title: "JavaScript Algorithms and Data Structures",
      imageUrl: "./resource/javascriptFFC.png",
      link: "https://www.freecodecamp.org/certification/mahsan131/javascript-algorithms-and-data-structures",
    },
    {
      title: "Data Structures",
      imageUrl: "./resource/datas.jpg",
      link: "https://www.coursera.org/account/accomplishments/certificate/J458UPRBRSD8",
    },
    {
      title: "Programming for Everybody (Getting Started with Python)",
      imageUrl: "./resource/programing everybody.jpg",
      link: "https://www.coursera.org/account/accomplishments/certificate/9TADYE9VZ94C",
    },
    {
      title: "Git and GitHub",
      imageUrl: "./resource/github-certificate.png",
      link: "https://amigoscode.com/courses/1317178/certificate",
    },
    {
      title: "Introduction to Relational Databases in SQL",
      imageUrl: "./resource/dataCamp relational database.png",
      link: "#",
    },
    {
      title: "Introduction to SQL",
      imageUrl: "./resource/joingDatabase.png",
      link: "#",
    },
    {
      title: "Cybersecurity Roles, Processes & Operating System Security",
      imageUrl: "./resource/operating.jpg",
      link: "https://coursera.org/share/28ba74bd7d8016fb5b5e4865bf836211",
    },
    {
      title: "Mathematical Thinking in Computer Science",
      imageUrl: "./resource/math.jpg",
      link: "https://www.coursera.org/account/accomplishments/certificate/V242SA67YX7W",
    },
    {
      title: "Java Programming: Solving Problems with Software",
      imageUrl: "./resource/problemsolving.jpg",
      link: "https://www.coursera.org/account/accomplishments/certificate/XBQ86GKSU55C",
    },
    {
      title: "Java for Android",
      imageUrl: "./resource/androif.jpg",
      link: "https://www.coursera.org/account/accomplishments/certificate/WHVSP5KK7RHS",
    },
  ];

  const handleImageLoad = (index: string) => {
    setLoadingImages((prev) => ({ ...prev, [index]: false }));
  };

  return (
    <section id={id} className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <h2 className="section-heading text-center mb-16" data-aos="fade-up">
          Certifications
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {certificates.map((cert, index) => (
            <a
              key={index}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group card-hover opacity-0 animate-fade-in"
              style={{
                animationDelay: `${0.1 * index}s`,
                animationFillMode: "forwards",
              }}
            >
              <div className="glass-card rounded-lg overflow-hidden h-full flex flex-col">
                <div className="relative aspect-[4/3] w-full overflow-hidden">
                  {loadingImages[index] !== false && (
                    <Skeleton className="absolute inset-0 w-full h-full" />
                  )}
                  <img
                    src={cert.imageUrl}
                    alt={`${cert.title} certificate`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    onLoad={() => handleImageLoad(index.toString())}
                    onError={() => handleImageLoad(index.toString())}
                  />
                </div>
                <div className="p-4 flex-grow">
                  <div className="flex items-center space-x-1">
                    <span className="text-primary/70 font-mono text-xs">
                      &lt;&nbsp;
                    </span>
                    <p className="text-sm font-medium flex-grow text-center">
                      {cert.title}
                    </p>
                    <span className="text-primary/70 font-mono text-xs">
                      &nbsp;/&gt;
                    </span>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
