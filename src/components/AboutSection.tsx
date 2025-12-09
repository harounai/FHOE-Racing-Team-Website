import { Target, Trophy, Users, Zap } from "lucide-react";
const stats = [{
  icon: Trophy,
  value: "2023",
  label: "Established"
}, {
  icon: Users,
  value: "50+",
  label: "Team Members"
}, {
  icon: Zap,
  value: "2x35kW",
  label: "Electric Power"
}, {
  icon: Target,
  value: "4",
  label: "Campuses"
}];
const disciplines = [{
  title: "Static Disciplines",
  items: [{
    name: "Engineering Design Report",
    desc: "Design and production process explanation"
  }, {
    name: "Cost Report",
    desc: "Detailed cost analysis of all components"
  }, {
    name: "Business Plan",
    desc: "Professional presentation of a business idea"
  }]
}, {
  title: "Dynamic Disciplines",
  items: [{
    name: "Acceleration",
    desc: "75m acceleration test"
  }, {
    name: "Autocross",
    desc: "800m handling course"
  }, {
    name: "Skid Pad",
    desc: "Figure-eight driving"
  }, {
    name: "Endurance",
    desc: "22km endurance test"
  }, {
    name: "Efficiency",
    desc: "Energy consumption evaluation"
  }]
}];
export function AboutSection() {
  return <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold tracking-wider uppercase mb-2">
            About Us
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            University of Applied Sciences Upper Austria
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Formula Student is an international design competition where student teams
            from around the world compete with self-designed and built racing cars.
            In 8 different disciplines, the best overall package is put to the test.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
          <div>
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Our Mission
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">The FHOÖ Racing Team, established in 2023, is one of the newest additions to the Formula Student community. As part of the University of Applied Sciences Upper Austria, the team combines expertise from various technical fields to maximize efficiency and innovation.</p>
            <p className="text-muted-foreground leading-relaxed mb-6">
              With strong motivation and teamwork, we aim to steadily develop
              our car and organization to compete at a high level in future
              seasons. Our university spans four campuses: Wels (Engineering),
              Steyr (Business), Hagenberg (Informatics), and Linz (Medical Engineering).
            </p>
            <div className="grid grid-cols-2 gap-4">
              {disciplines.map(category => <div key={category.title}>
                  <h4 className="font-semibold text-foreground mb-2 text-sm">
                    {category.title}
                  </h4>
                  <ul className="space-y-1">
                    {category.items.map(item => <li key={item.name} className="text-muted-foreground text-xs">
                        • {item.name}
                      </li>)}
                  </ul>
                </div>)}
            </div>
          </div>
          <div className="grid grid-cols-2 gap-6">
            {stats.map(stat => <div key={stat.label} className="bg-card border border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors">
                <stat.icon className="h-8 w-8 text-primary mx-auto mb-3" />
                <p className="text-3xl font-bold text-foreground mb-1">
                  {stat.value}
                </p>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
}