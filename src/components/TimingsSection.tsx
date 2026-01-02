import { Clock, Calendar, BookOpen, AlertCircle } from "lucide-react";

const TimingsSection = () => {
  const schedule = [
    { day: "Monday", time: "6:00 PM – 8:00 PM", available: true },
    { day: "Tuesday", time: "6:00 PM – 8:00 PM", available: true },
    { day: "Wednesday", time: "6:00 PM – 8:00 PM", available: true },
    { day: "Thursday", time: "6:00 PM – 8:00 PM", available: true },
    { day: "Friday", time: "6:00 PM – 8:00 PM", available: true },
    { day: "Saturday", time: "6:00 PM – 8:00 PM", available: true },
    { day: "Sunday", time: "Exam Time Only", available: false },
  ];

  return (
    <section id="timings" className="py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <Clock className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Class Schedule</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
            Tuition{" "}
            <span className="text-gradient">Timings</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Convenient evening classes designed for after-school learning
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Schedule Card */}
          <div className="bg-card rounded-3xl shadow-lg overflow-hidden">
            {/* Header */}
            <div className="gradient-hero p-6 lg:p-8 text-center">
              <div className="flex items-center justify-center gap-3 mb-2">
                <Clock className="w-8 h-8 text-primary-foreground" />
                <span className="text-2xl lg:text-3xl font-extrabold text-primary-foreground">
                  6:00 PM – 8:00 PM
                </span>
              </div>
              <p className="text-primary-foreground/80">Monday to Saturday</p>
            </div>

            {/* Schedule Grid */}
            <div className="p-6 lg:p-8">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3">
                {schedule.map((item, index) => (
                  <div
                    key={item.day}
                    className={`p-4 rounded-2xl text-center transition-all duration-300 hover:scale-105 ${
                      item.available
                        ? "bg-mint-light"
                        : "bg-sunshine-light"
                    }`}
                  >
                    <div
                      className={`text-sm font-bold mb-1 ${
                        item.available ? "text-mint" : "text-sunshine"
                      }`}
                    >
                      {item.day.slice(0, 3)}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {item.available ? "6-8 PM" : "Exam"}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Special Notice */}
            <div className="px-6 lg:px-8 pb-6 lg:pb-8">
              <div className="flex items-start gap-4 p-4 bg-sunshine-light rounded-2xl">
                <div className="w-10 h-10 rounded-xl bg-sunshine/20 flex items-center justify-center shrink-0">
                  <BookOpen className="w-5 h-5 text-sunshine" />
                </div>
                <div>
                  <h4 className="font-bold text-foreground mb-1">Sunday Classes Available</h4>
                  <p className="text-sm text-muted-foreground">
                    Special Sunday classes are available during exam preparation periods to help students with intensive revision and doubt clearing sessions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Info Cards */}
          <div className="grid sm:grid-cols-2 gap-4 mt-8">
            <div className="bg-card rounded-2xl p-6 shadow-card flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-sky-light flex items-center justify-center shrink-0">
                <Calendar className="w-7 h-7 text-sky" />
              </div>
              <div>
                <h4 className="font-bold text-foreground">Flexible Scheduling</h4>
                <p className="text-sm text-muted-foreground">Batch timing can be adjusted based on student needs</p>
              </div>
            </div>
            <div className="bg-card rounded-2xl p-6 shadow-card flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-coral-light flex items-center justify-center shrink-0">
                <AlertCircle className="w-7 h-7 text-coral" />
              </div>
              <div>
                <h4 className="font-bold text-foreground">Prior Intimation</h4>
                <p className="text-sm text-muted-foreground">Please inform in advance for any schedule changes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimingsSection;
