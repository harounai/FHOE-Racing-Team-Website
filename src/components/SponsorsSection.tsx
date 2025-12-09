const sponsors = [
  { name: "TechCorp", tier: "platinum" },
  { name: "AutoParts Pro", tier: "platinum" },
  { name: "Engineering Solutions", tier: "gold" },
  { name: "SpeedWorks", tier: "gold" },
  { name: "CarbonTech", tier: "gold" },
  { name: "MotorOil Plus", tier: "silver" },
  { name: "University Partners", tier: "silver" },
  { name: "RacingGear", tier: "silver" },
];

export function SponsorsSection() {
  const platinumSponsors = sponsors.filter((s) => s.tier === "platinum");
  const goldSponsors = sponsors.filter((s) => s.tier === "gold");
  const silverSponsors = sponsors.filter((s) => s.tier === "silver");

  return (
    <section id="sponsors" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold tracking-wider uppercase mb-2">
            Our Sponsors
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Partners in Excellence
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our success wouldn't be possible without the generous support of our
            sponsors and partners.
          </p>
        </div>

        {/* Platinum Sponsors */}
        <div className="mb-12">
          <h3 className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">
            Platinum Sponsors
          </h3>
          <div className="flex flex-wrap justify-center gap-8">
            {platinumSponsors.map((sponsor) => (
              <div
                key={sponsor.name}
                className="w-48 h-24 bg-card border-2 border-primary/30 rounded-lg flex items-center justify-center hover:border-primary transition-colors"
              >
                <span className="text-foreground font-bold text-lg">
                  {sponsor.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Gold Sponsors */}
        <div className="mb-12">
          <h3 className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">
            Gold Sponsors
          </h3>
          <div className="flex flex-wrap justify-center gap-6">
            {goldSponsors.map((sponsor) => (
              <div
                key={sponsor.name}
                className="w-40 h-20 bg-card border border-border rounded-lg flex items-center justify-center hover:border-primary/50 transition-colors"
              >
                <span className="text-muted-foreground font-semibold">
                  {sponsor.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Silver Sponsors */}
        <div>
          <h3 className="text-center text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-6">
            Silver Sponsors
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {silverSponsors.map((sponsor) => (
              <div
                key={sponsor.name}
                className="w-32 h-16 bg-muted/50 border border-border rounded-lg flex items-center justify-center hover:border-primary/30 transition-colors"
              >
                <span className="text-muted-foreground text-sm font-medium">
                  {sponsor.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Interested in becoming a sponsor?
          </p>
          <a
            href="#contact"
            className="text-primary hover:underline font-semibold"
          >
            Get in touch with us →
          </a>
        </div>
      </div>
    </section>
  );
}
