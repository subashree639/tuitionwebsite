import { Heart, Target, Lightbulb, GraduationCap } from "lucide-react";

const AboutSection = () => {
  const values = [
    {
      icon: Heart,
      title: "Passionate Teaching",
      description: "Dedicated to nurturing every student's potential",
      color: "coral",
    },
    {
      icon: Target,
      title: "Goal Oriented",
      description: "Focused on academic excellence and growth",
      color: "sky",
    },
    {
      icon: Lightbulb,
      title: "Concept Building",
      description: "Strong foundation through clear understanding",
      color: "mint",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <GraduationCap className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">About the Tutor</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-6 leading-tight">
            Meet{" "}
            <span className="text-gradient">Suba Shree A</span>
          </h2>

          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            I am Suba Shree A, a dedicated and passionate tutor providing quality education for students from 5th to 12th standard. My goal is to build strong concepts, improve academic performance, and boost student confidence through personalized teaching.
          </p>

          <div className="space-y-4">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="flex items-start gap-4 p-4 rounded-2xl bg-card shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 ${
                    value.color === "coral"
                      ? "bg-coral-light"
                      : value.color === "sky"
                      ? "bg-sky-light"
                      : "bg-mint-light"
                  }`}
                >
                  <value.icon
                    className={`w-6 h-6 ${
                      value.color === "coral"
                        ? "text-coral"
                        : value.color === "sky"
                        ? "text-sky"
                        : "text-mint"
                    }`}
                  />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
