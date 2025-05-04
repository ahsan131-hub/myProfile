import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  const navItems = [
    "Home",
    "Skills",
    "Experience",
    "Education",
    "Projects",
    "Contact",
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-md shadow-subtle"
          : "py-5 bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <a
          href="#home"
          className="text-xl md:text-2xl font-bold gradient-text opacity-0 animate-fade-in"
          style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
        >
          Muhammad Ahsan
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item, index) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="nav-link opacity-0 animate-fade-in"
              style={{
                animationDelay: `${0.3 + index * 0.1}s`,
                animationFillMode: "forwards",
              }}
            >
              {item}
            </a>
          ))}
          <ThemeToggle />
          <a
            href="/Muhammad_Ahsan_Software_Engineer_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary opacity-0 animate-fade-in"
            style={{ animationDelay: "0.9s", animationFillMode: "forwards" }}
          >
            View CV
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <ThemeToggle />
          <button
            className="text-foreground focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "fixed inset-0 bg-background/95 backdrop-blur-md z-40 md:hidden transition-all duration-300 flex flex-col justify-center items-center space-y-6 pt-20",
          mobileMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        {navItems.map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="nav-link text-xl"
            onClick={() => setMobileMenuOpen(false)}
          >
            {item}
          </a>
        ))}
        <a
          href="/Muhammad_Ahsan_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary mt-4"
          onClick={() => setMobileMenuOpen(false)}
        >
          View CV
        </a>
      </div>
    </header>
  );
};

export default Navbar;
