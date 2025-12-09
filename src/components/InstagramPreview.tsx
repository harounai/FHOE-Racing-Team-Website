import { Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

// Instagram embed posts - these would be replaced with actual embeds or fetched content
const instagramPosts = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=400&h=400&fit=crop",
    alt: "Racing team update",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=400&h=400&fit=crop",
    alt: "Car development",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop",
    alt: "Team event",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1541348263662-e068662d82af?w=400&h=400&fit=crop",
    alt: "Workshop session",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=400&h=400&fit=crop",
    alt: "Competition prep",
  },
  {
    id: 6,
    image: "https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=400&fit=crop",
    alt: "Team photo",
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

        {/* Instagram Grid - 3x2 layout */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-8">
          {instagramPosts.map((post) => (
            <a
              key={post.id}
              href="https://www.instagram.com/fhooe_racingteam/"
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-square overflow-hidden rounded-lg group relative"
            >
              <img
                src={post.image}
                alt={post.alt}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-300 flex items-center justify-center">
                <Instagram className="h-8 w-8 text-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </a>
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
