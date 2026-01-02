import { Heart, Users, Lightbulb, Target, FileCheck, HelpCircle } from "lucide-react";

const WhyChooseUsSection = () => {
  const features = [
    {
      icon: Heart,
      title: "Experienced & Friendly Teaching",
      description: "Patient and approachable teaching style that makes learning enjoyable",
      color: "coral",
    },
    {
      icon: Users,
      title: "Individual Attention",
      description: "Personalized focus on each student's unique learning needs",
      color: "sky",
    },
    {
      icon: Lightbulb,
      title: "Concept-Based Learning",
      description: "Strong foundation through clear understanding of fundamentals",
      color: "mint",
    },
    {
      icon: Target,
      title: "Exam-Oriented Preparation",
      description: "Strategic preparation aligned with exam patterns and requirements",
      color: "lavender",
    },
    {
      icon: FileCheck,
      title: "Regular Tests",
      description: "Periodic assessments to track progress and identify improvement areas",
      color: "secondary",
    },
    {
      icon: HelpCircle,
      title: "Doubt Clearing Sessions",
      description: "Dedicated time for clearing all doubts and strengthening concepts",
      color: "sunshine",
    },
  ];

  return (
    <section id="why-us" className="py-20 lg:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Target className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Our Advantages</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
            Why Choose{" "}
            <span className="text-gradient">Suba Shree A?</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Experience the difference with our student-centric approach to education
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-card rounded-3xl p-6 lg:p-8 shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
            >
              {/* Background Decoration */}
              <div
                className={`absolute -right-8 -top-8 w-32 h-32 rounded-full opacity-20 transition-transform duration-500 group-hover:scale-150 ${
                  feature.color === "coral"
                    ? "bg-coral"
                    : feature.color === "sky"
                    ? "bg-sky"
                    : feature.color === "mint"
                    ? "bg-mint"
                    : feature.color === "lavender"
                    ? "bg-lavender"
                    : feature.color === "secondary"
                    ? "bg-secondary"
                    : "bg-sunshine"
                }`}
              />

              {/* Icon */}
              <div
                className={`relative w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110 ${
                  feature.color === "coral"
                    ? "bg-coral-light"
                    : feature.color === "sky"
                    ? "bg-sky-light"
                    : feature.color === "mint"
                    ? "bg-mint-light"
                    : feature.color === "lavender"
                    ? "bg-lavender-light"
                    : feature.color === "secondary"
                    ? "bg-secondary/10"
                    : "bg-sunshine-light"
                }`}
              >
                <feature.icon
                  className={`w-8 h-8 ${
                    feature.color === "coral"
                      ? "text-coral"
                      : feature.color === "sky"
                      ? "text-sky"
                      : feature.color === "mint"
                      ? "text-mint"
                      : feature.color === "lavender"
                      ? "text-lavender"
                      : feature.color === "secondary"
                      ? "text-secondary"
                      : "text-sunshine"
                  }`}
                />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3 relative">
                {feature.title}
              </h3>
              <p className="text-muted-foreground relative">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
