import { GraduationCap, Phone, Mail, Heart, BookOpen, Award, Users } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Courses", href: "#courses" },
    { name: "Timings", href: "#timings" },
    { name: "Why Us", href: "#why-us" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#home" className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Suba Shree A</h3>
                <p className="text-sm text-primary-foreground/70">Tuition Classes</p>
              </div>
            </a>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
              Dedicated to providing quality education and nurturing young minds from 5th to 12th standard across all boards.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                <BookOpen className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <div className="w-10 h-10 rounded-lg bg-primary-foreground/10 flex items-center justify-center">
                <Users className="w-5 h-5" />
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Classes */}
          <div>
            <h4 className="font-bold text-lg mb-4">Classes Offered</h4>
            <ul className="space-y-2">
              {["5th - 8th Standard", "9th - 10th Standard", "11th - 12th Standard", "State Board", "CBSE & ICSE", "International"].map((item) => (
                <li key={item} className="text-primary-foreground/70 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3">
              <a
                href="tel:9444749314"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
              >
                <Phone className="w-5 h-5" />
                <span className="text-sm">9444749314</span>
              </a>
              <a
                href="mailto:subashree639@gmail.com"
                className="flex items-center gap-3 text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
                <span className="text-sm">subashree639@gmail.com</span>
              </a>
            </div>

            {/* Timing Badge */}
            <div className="mt-6 p-4 bg-primary-foreground/10 rounded-xl">
              <h5 className="font-semibold text-sm mb-1">Class Timings</h5>
              <p className="text-xs text-primary-foreground/70">Mon - Sat: 6:00 PM - 8:00 PM</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
