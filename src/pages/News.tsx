import { Navbar } from "@/components/Navbar";
import { ContactSection } from "@/components/ContactSection";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const newsCategories = [
  { name: "All", value: "all" },
  { name: "Sponsors", value: "sponsors" },
  { name: "Progress", value: "progress" },
  { name: "Competitions", value: "competitions" },
  { name: "Events", value: "events" },
];

const newsItems = [
  {
    id: 1,
    title: "Team Presentation 2025 Released",
    date: "December 2024",
    category: "progress",
    excerpt: "Our official team presentation for the 2025 season is now available, showcasing our goals, sub-teams, and technical specifications.",
  },
  {
    id: 2,
    title: "Welcome to FHOÖ Racing Team",
    date: "August 2023",
    category: "progress",
    excerpt: "The FHOÖ Racing Team was officially established as one of the newest additions to the Formula Student community.",
  },
];

const News = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <p className="text-primary font-semibold tracking-wider uppercase mb-2">
              Latest Updates
            </p>
            <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              News & Events
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Stay updated with our latest progress, sponsor announcements,
              competition results, and event participations.
            </p>
          </div>

          {/* Categories */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            {newsCategories.map((category) => (
              <Badge
                key={category.value}
                variant={category.value === "all" ? "default" : "secondary"}
                className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
              >
                {category.name}
              </Badge>
            ))}
          </div>

          {/* News Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {newsItems.map((item) => (
              <Card key={item.id} className="hover:border-primary/50 transition-colors">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline" className="text-xs">
                      {item.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{item.date}</span>
                  </div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{item.excerpt}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Coming Soon Note */}
          <div className="text-center mt-12">
            <p className="text-muted-foreground">
              More news and updates coming soon. Follow us on{" "}
              <a
                href="https://www.instagram.com/fhooe_racingteam/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Instagram
              </a>{" "}
              and{" "}
              <a
                href="https://www.linkedin.com/company/fhooe-racing-team/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                LinkedIn
              </a>{" "}
              for the latest updates.
            </p>
          </div>
        </div>
      </main>
      <ContactSection />
    </div>
  );
};

export default News;
