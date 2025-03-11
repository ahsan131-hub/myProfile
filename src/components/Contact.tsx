
import { Github, Linkedin, Mail, Phone } from 'lucide-react';

interface ContactProps {
  id: string;
}

const Contact = ({ id }: ContactProps) => {
  return (
    <section id={id} className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-heading text-center mx-auto mb-6">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Feel free to reach out. I'm always open to discussing new projects, creative ideas, and opportunities.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <a 
              href="mailto:ahsanjsdev@gmail.com" 
              className="social-icon"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a 
              href="https://github.com/ahsan131-hub" 
              target="_blank" 
              rel="noreferrer"
              className="social-icon"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/ahsan131" 
              target="_blank" 
              rel="noreferrer"
              className="social-icon"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a 
              href="tel:+4915732468471" 
              className="social-icon"
              aria-label="Phone"
            >
              <Phone size={20} />
            </a>
          </div>
          
          <div className="glass-card p-8 rounded-2xl max-w-md mx-auto">
            <h3 className="text-xl font-bold mb-6">Get In Touch</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-1 focus:ring-primary/50"
                    placeholder="Your name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2.5 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-1 focus:ring-primary/50"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-1 focus:ring-primary/50"
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full btn-primary"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
