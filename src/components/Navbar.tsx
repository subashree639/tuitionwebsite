import { useState } from "react";
import { Menu, X, GraduationCap } from "lucide-react";
import { Button } from "./ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Courses", href: "#courses" },
    { name: "Timings", href: "#timings" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-card/95 backdrop-blur-md shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("#home");
            }}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
              <GraduationCap className="w-6 h-6 lg:w-7 lg:h-7 text-primary-foreground" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg lg:text-xl font-bold text-foreground">Suba Shree A</span>
              <span className="text-xs text-muted-foreground -mt-1">Tuition Classes</span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className="text-foreground/80 hover:text-primary font-medium transition-colors duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <Button
              onClick={() => scrollToSection("#contact")}
              variant="default"
              size="default"
            >
              Enroll Now
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in-up">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="px-4 py-3 text-foreground/80 hover:text-primary hover:bg-muted rounded-lg font-medium transition-all duration-300"
                >
                  {link.name}
                </a>
              ))}
              <div className="px-4 pt-2">
                <Button
                  onClick={() => scrollToSection("#contact")}
                  variant="default"
                  className="w-full"
                >
                  Enroll Now
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
