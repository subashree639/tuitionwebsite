import { Phone, Mail, MessageCircle, GraduationCap, MapPin } from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "9444749314",
      href: "tel:9444749314",
      color: "mint",
    },
    {
      icon: Mail,
      label: "Email",
      value: "subashree639@gmail.com",
      href: "mailto:subashree639@gmail.com",
      color: "coral",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: "Chat with us",
      href: "https://wa.me/919444749314",
      color: "accent",
    },
  ];

  return (
    <section id="contact" className="py-20 lg:py-28 bg-background relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
            <MessageCircle className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">Get in Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground mb-6">
            Contact{" "}
            <span className="text-gradient">Us Today</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Ready to start your learning journey? Reach out to us and take the first step towards academic excellence
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Let's Connect</h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
            {contactInfo.map((info) => (
              <a
                key={info.label}
                href={info.href}
                target={info.label === "WhatsApp" ? "_blank" : undefined}
                rel={info.label === "WhatsApp" ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 p-4 bg-card rounded-2xl shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 ${
                    info.color === "mint"
                      ? "bg-mint-light"
                      : info.color === "coral"
                      ? "bg-coral-light"
                      : "bg-accent/10"
                  }`}
                >
                  <info.icon
                    className={`w-7 h-7 ${
                      info.color === "mint"
                        ? "text-mint"
                        : info.color === "coral"
                        ? "text-coral"
                        : "text-accent"
                    }`}
                  />
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">{info.label}</div>
                  <div className="font-bold text-foreground">{info.value}</div>
                </div>
              </a>
            ))}
          </div>

          {/* Address Section */}
          <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
              <MapPin className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Our Location</span>
            </div>
            <div className="bg-card rounded-2xl p-6 shadow-card max-w-md mx-auto">
              <h4 className="font-bold text-foreground mb-4">Address</h4>
              <p className="text-muted-foreground text-sm leading-relaxed">
                No: 2/1677, Sri Karpaga Vinayagar Nagar,<br />
                24th Cross Street,<br />
                Vettuvankenni,<br />
                Chennai – 600115.
              </p>
            </div>
          </div>

          {/* Decorative Card */}
          <div className="bg-gradient-to-br from-primary to-lavender rounded-3xl p-8 text-center max-w-md mx-auto">
            <div className="w-20 h-20 mx-auto bg-primary-foreground/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-4">
              <GraduationCap className="w-10 h-10 text-primary-foreground" />
            </div>
            <h4 className="text-xl font-bold text-primary-foreground mb-2">
              Start Your Journey Today!
            </h4>
            <p className="text-primary-foreground/80 text-sm">
              Join hundreds of successful students who have improved their grades with us
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
