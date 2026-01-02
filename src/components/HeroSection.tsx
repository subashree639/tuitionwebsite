import { BookOpen, Star, Users, Award } from "lucide-react";
import { Button } from "./ui/button";

const HeroSection = () => {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-hero opacity-95" />
      
      {/* Floating Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-20 h-20 bg-sunshine/30 rounded-full blur-2xl animate-float" />
        <div className="absolute top-40 right-20 w-32 h-32 bg-mint/20 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute bottom-40 left-1/4 w-24 h-24 bg-coral/20 rounded-full blur-2xl animate-float" />
        <div className="absolute bottom-20 right-1/3 w-16 h-16 bg-sky/30 rounded-full blur-xl animate-float-delayed" />
        
        {/* Floating Icons */}
        <div className="absolute top-32 right-[15%] animate-float">
          <div className="w-14 h-14 bg-primary-foreground/20 backdrop-blur-sm rounded-2xl flex items-center justify-center rotate-12">
            <BookOpen className="w-7 h-7 text-primary-foreground" />
          </div>
        </div>
        <div className="absolute bottom-32 left-[10%] animate-float-delayed">
          <div className="w-12 h-12 bg-primary-foreground/20 backdrop-blur-sm rounded-2xl flex items-center justify-center -rotate-12">
            <Star className="w-6 h-6 text-primary-foreground" />
          </div>
        </div>
        <div className="absolute top-1/2 right-[8%] animate-float">
          <div className="w-16 h-16 bg-primary-foreground/20 backdrop-blur-sm rounded-2xl flex items-center justify-center rotate-6">
            <Award className="w-8 h-8 text-primary-foreground" />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-primary-foreground leading-tight mb-6 animate-fade-in-up animation-delay-100">
            Quality Education for{" "}
            <span className="relative inline-block">
              Classes 5th to 12th
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path d="M2 10C50 4 150 2 298 8" stroke="hsl(var(--sunshine))" strokeWidth="4" strokeLinecap="round" />
              </svg>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-xl sm:text-2xl text-primary-foreground/90 mb-4 animate-fade-in-up animation-delay-200">
            All Boards & All Subjects
          </p>

          {/* Boards */}
          <div className="flex flex-wrap items-center justify-center gap-3 mb-10 animate-fade-in-up animation-delay-300">
            {["State Board", "CBSE", "ICSE", "International Curriculum"].map((board, index) => (
              <span
                key={board}
                className="px-4 py-2 bg-primary-foreground/15 backdrop-blur-sm rounded-full text-sm font-medium text-primary-foreground border border-primary-foreground/20"
              >
                {board}
              </span>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-400">
            <Button
              onClick={() => scrollToSection("#contact")}
              variant="hero"
              size="xl"
            >
              Enroll Now
            </Button>
            <Button
              onClick={() => scrollToSection("#contact")}
              variant="heroOutline"
              size="xl"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>

      {/* Wave Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" className="w-full h-auto">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="hsl(var(--background))"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
