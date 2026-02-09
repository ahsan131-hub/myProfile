const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative overflow-hidden pt-24"
    >
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div
            className="section-kicker mb-4 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            Software Engineer
          </div>

          <div
            className="mb-6 opacity-0 animate-fade-in flex justify-center"
            style={{ animationDelay: "0.3s", animationFillMode: "forwards" }}
          >
            <div className="rounded-full overflow-hidden border border-primary/20 shadow-lg w-24 h-24 md:w-28 md:h-28">
              <img
                src="picture.jpg"
                alt="Muhammad Ahsan"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <h1
            className="text-4xl md:text-6xl font-semibold tracking-tight mb-4 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            Muhammad Ahsan
          </h1>

          <p
            className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.55s", animationFillMode: "forwards" }}
          >
            I build scalable web platforms and distributed systems with
            TypeScript, cloud infrastructure, and DevOps practices.
          </p>

          <div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.7s", animationFillMode: "forwards" }}
          >
            <a
              href="mailto:ahsanjsdev@gmail.com"
              className="btn-primary w-full sm:w-auto"
            >
              Contact
            </a>
            <a href="/work" className="btn-outline w-full sm:w-auto">
              View Work
            </a>
          </div>

          <div
            className="mt-10 flex flex-wrap justify-center gap-3 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.85s", animationFillMode: "forwards" }}
          >
            <span className="chip">GCP • Terraform</span>
            <span className="chip">TypeScript • Node.js</span>
            <span className="chip">Kubernetes • CI/CD</span>
          </div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10 opacity-10">
        <div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/30 blur-3xl animate-float"
          style={{ animationDelay: "0s" }}
        ></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 rounded-full bg-primary/20 blur-3xl animate-float"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>
    </section>
  );
};

export default Hero;
