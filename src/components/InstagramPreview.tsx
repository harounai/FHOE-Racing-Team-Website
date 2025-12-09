import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

// Instagram post links from @fhooe_racingteam
const instagramPosts = [
  {
    id: "1",
    url: "https://www.instagram.com/p/DJBaQ8Ltzbi/",
    embedUrl: "https://www.instagram.com/p/DJBaQ8Ltzbi/embed",
  },
  {
    id: "2",
    url: "https://www.instagram.com/p/DI_qJ1iNMmI/",
    embedUrl: "https://www.instagram.com/p/DI_qJ1iNMmI/embed",
  },
  {
    id: "3",
    url: "https://www.instagram.com/p/DI0paBENiOy/",
    embedUrl: "https://www.instagram.com/p/DI0paBENiOy/embed",
  },
  {
    id: "4",
    url: "https://www.instagram.com/p/DIvhTxBN2qR/",
    embedUrl: "https://www.instagram.com/p/DIvhTxBN2qR/embed",
  },
  {
    id: "5",
    url: "https://www.instagram.com/p/DImhCi3NqJn/",
    embedUrl: "https://www.instagram.com/p/DImhCi3NqJn/embed",
  },
  {
    id: "6",
    url: "https://www.instagram.com/p/DIhE1CMN7qo/",
    embedUrl: "https://www.instagram.com/p/DIhE1CMN7qo/embed",
  },
];

export function InstagramPreview() {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Instagram className="h-8 w-8 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">
              Follow Our Journey
            </h2>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Stay updated with our latest progress, events, and behind-the-scenes moments
          </p>
        </div>

        {/* Instagram Embeds Grid - 3x2 layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto mb-8">
          {instagramPosts.map((post) => (
            <div
              key={post.id}
              className="aspect-square overflow-hidden rounded-lg bg-card"
            >
              <iframe
                src={post.embedUrl}
                className="w-full h-full border-0"
                allowTransparency
                scrolling="no"
                title={`Instagram post ${post.id}`}
              />
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button asChild size="lg">
            <a
              href="https://www.instagram.com/fhooe_racingteam/"
              target="_blank"
              rel="noopener noreferrer"
              className="gap-2"
            >
              <Instagram className="h-5 w-5" />
              Follow @fhooe_racingteam
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
