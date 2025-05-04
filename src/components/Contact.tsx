import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Github, Linkedin, Mail, Phone } from "lucide-react";
import emailjs from "emailjs-com";

interface ContactProps {
  id: string;
}

const Contact = ({ id }: ContactProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Validation Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Replace these with your actual EmailJS service ID, template ID and user ID
      const serviceId = "service_your_service_id";
      const templateId = "template_your_template_id";
      const userId = "your_user_id";

      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
        to_name: "Muhammad Ahsan",
      };

      await emailjs.send(serviceId, templateId, templateParams, userId);

      toast({
        title: "Message Sent",
        description: "Thank you for your message. I'll get back to you soon!",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Error",
        description:
          "Failed to send message. Please try again or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id={id} className="py-20 md:py-32">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="section-heading text-center mx-auto mb-6">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground mb-10">
            Feel free to reach out. I'm always open to discussing new projects,
            creative ideas, and opportunities.
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

          {/* <div className="glass-card p-8 rounded-2xl max-w-md mx-auto">
            <h3 className="text-xl font-bold mb-6">Get In Touch</h3>
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={handleChange}
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
                    value={formData.email}
                    onChange={handleChange}
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
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2.5 rounded-lg border border-border bg-background/50 focus:outline-none focus:ring-1 focus:ring-primary/50"
                  placeholder="How can I help you?"
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary"
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
