import { Target, Trophy, Users, Wrench } from "lucide-react";

const stats = [
  { icon: Trophy, value: "5+", label: "Competition Wins" },
  { icon: Users, value: "40+", label: "Team Members" },
  { icon: Wrench, value: "10,000+", label: "Engineering Hours" },
  { icon: Target, value: "180", label: "km/h Top Speed" },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold tracking-wider uppercase mb-2">
            About Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Driven by Passion, Powered by Innovation
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We are a team of dedicated engineering students from diverse
            disciplines, united by our passion for motorsport and innovation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Our Mission
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Formula Student is the world's largest engineering design
              competition, challenging university students to design, build, and
              race single-seat formula-style racing cars. Our team combines
              cutting-edge technology with relentless determination to compete
              against the best universities globally.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Every year, we push ourselves to innovate, optimize, and deliver a
              car that represents the pinnacle of student engineering. From
              aerodynamics to powertrain, every component is designed,
              manufactured, and tested by our team members.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors"
              >
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <p className="text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
