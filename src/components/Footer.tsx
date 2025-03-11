
import { ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Muhammad Ahsan. All rights reserved.
            </p>
          </div>
          
          <div className="flex items-center space-x-4">
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary transition-all duration-300 hover:bg-primary hover:text-secondary"
              aria-label="Scroll to top"
            >
              <ArrowUp size={18} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
