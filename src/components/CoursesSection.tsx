import { BookOpen, GraduationCap, Globe, Award, Calculator, FlaskConical, Languages, Palette } from "lucide-react";

const CoursesSection = () => {
  const classes = [
    { grade: "5th", color: "coral" },
    { grade: "6th", color: "sky" },
    { grade: "7th", color: "mint" },
    { grade: "8th", color: "lavender" },
    { grade: "9th", color: "sunshine" },
    { grade: "10th", color: "coral" },
    { grade: "11th", color: "sky" },
    { grade: "12th", color: "mint" },
  ];

  const boards = [
    { name: "State Board", icon: BookOpen, color: "primary" },
    { name: "CBSE", icon: GraduationCap, color: "secondary" },
    { name: "ICSE", icon: Award, color: "accent" },
    { name: "International", icon: Globe, color: "lavender" },
  ];

  const subjects = [
    { name: "Mathematics", icon: Calculator, color: "coral" },
    { name: "Science", icon: FlaskConical, color: "mint" },
    { name: "Hindi (Special)", icon: Languages, color: "secondary" },
    { name: "All Subjects", icon: Palette, color: "sky" },
  ];

  return (
    <section id="courses" className="py-20 lg:py-28 bg-muted/50">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <BookOpen className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Our Courses</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
            Comprehensive Education for{" "}
            <span className="text-gradient">All Standards</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            From 5th to 12th standard, we cover all subjects and all major boards with expert teaching
          </p>
        </div>

        {/* Classes Grid */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">Classes We Teach</h3>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            {classes.map((cls, index) => (
              <div
                key={cls.grade}
                className={`group cursor-pointer px-6 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-110 hover:shadow-lg ${
                  cls.color === "coral"
                    ? "bg-coral-light text-coral hover:bg-coral hover:text-primary-foreground"
                    : cls.color === "sky"
                    ? "bg-sky-light text-sky hover:bg-sky hover:text-primary-foreground"
                    : cls.color === "mint"
                    ? "bg-mint-light text-mint hover:bg-mint hover:text-primary-foreground"
                    : cls.color === "lavender"
                    ? "bg-lavender-light text-lavender hover:bg-lavender hover:text-primary-foreground"
                    : "bg-sunshine-light text-sunshine hover:bg-sunshine hover:text-foreground"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {cls.grade} Std
              </div>
            ))}
          </div>
        </div>

        {/* Boards Section */}
        <div className="mb-16">
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">Boards Covered</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {boards.map((board, index) => (
              <div
                key={board.name}
                className="group bg-card rounded-2xl p-6 text-center shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-2"
              >
                <div
                  className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 ${
                    board.color === "primary"
                      ? "bg-primary/10"
                      : board.color === "secondary"
                      ? "bg-secondary/10"
                      : board.color === "accent"
                      ? "bg-accent/10"
                      : "bg-lavender-light"
                  }`}
                >
                  <board.icon
                    className={`w-8 h-8 ${
                      board.color === "primary"
                        ? "text-primary"
                        : board.color === "secondary"
                        ? "text-secondary"
                        : board.color === "accent"
                        ? "text-accent"
                        : "text-lavender"
                    }`}
                  />
                </div>
                <h4 className="font-bold text-foreground">{board.name}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Subjects Section */}
        <div>
          <h3 className="text-xl font-bold text-foreground mb-6 text-center">Subjects Taught</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {subjects.map((subject, index) => (
              <div
                key={subject.name}
                className="group bg-card rounded-2xl p-6 text-center shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-2 relative overflow-hidden"
              >
                {subject.name === "Hindi (Special)" && (
                  <div className="absolute top-2 right-2 px-2 py-1 bg-secondary text-secondary-foreground text-xs font-bold rounded-lg">
                    Special Focus
                  </div>
                )}
                <div
                  className={`w-16 h-16 mx-auto rounded-2xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110 ${
                    subject.color === "coral"
                      ? "bg-coral-light"
                      : subject.color === "mint"
                      ? "bg-mint-light"
                      : subject.color === "secondary"
                      ? "bg-secondary/10"
                      : "bg-sky-light"
                  }`}
                >
                  <subject.icon
                    className={`w-8 h-8 ${
                      subject.color === "coral"
                        ? "text-coral"
                        : subject.color === "mint"
                        ? "text-mint"
                        : subject.color === "secondary"
                        ? "text-secondary"
                        : "text-sky"
                    }`}
                  />
                </div>
                <h4 className="font-bold text-foreground">{subject.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;
