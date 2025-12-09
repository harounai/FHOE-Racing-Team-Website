import { Card, CardContent } from "@/components/ui/card";
import { Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "David Hödl",
    role: "Technical Director",
    department: "Management",
    initials: "DH",
  },
  {
    name: "Manuel Reitmeier",
    role: "Technical Director",
    department: "Management",
    initials: "MR",
  },
  {
    name: "Manuel Frank",
    role: "Faculty Advisor",
    department: "FH Upper Austria",
    initials: "MF",
  },
  {
    name: "Flora Schachinger",
    role: "Sponsoring Lead",
    department: "ORG Team",
    initials: "FS",
  },
  {
    name: "Mohamed Haroun",
    role: "Finance Lead",
    department: "ORG Team",
    initials: "MH",
  },
  {
    name: "Marco Perazzoli",
    role: "Marketing Lead",
    department: "ORG Team",
    initials: "MP",
  },
  {
    name: "Pranay Naga",
    role: "Electronics Lead Engineer",
    department: "Tech Team",
    initials: "PN",
  },
  {
    name: "Anes Murica",
    role: "Brake Lead Engineer",
    department: "Tech Team",
    initials: "AM",
  },
  {
    name: "Lukas Strauss",
    role: "Suspension Lead Engineer",
    department: "Tech Team",
    initials: "LS",
  },
];

export function TeamSection() {
  return (
    <section id="team" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold tracking-wider uppercase mb-2">
            Our Team
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meet Our Leadership
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our team of dedicated students from various engineering and business
            disciplines work together to achieve racing excellence.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member) => (
            <Card
              key={member.name}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center group-hover:border-primary transition-colors">
                    <span className="text-primary font-bold text-lg">
                      {member.initials}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-foreground">
                      {member.name}
                    </h3>
                    <p className="text-primary text-sm">{member.role}</p>
                    <p className="text-muted-foreground text-xs">
                      {member.department}
                    </p>
                  </div>
                  <a
                    href="https://www.linkedin.com/company/fhooe-racing-team/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`${member.name}'s LinkedIn`}
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
