import { Mail, MapPin, Instagram, Linkedin, ExternalLink, Send, Loader2, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";
import { useState } from "react";
import logoWhite from "@/assets/logo-white.png";
import checkeredBackground from "@/assets/checkered-background.avif";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mjgknwgw", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
          _subject: "[Website Contact Form] New message",
          source: "formula-student-website",
          _template: "table",
          _replyto: formData.email,
        }).toString(),
      });

      if (!response.ok) throw new Error("Failed to submit");

      setIsSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message. Please try again or email us directly at formula.student@fh-ooe.at");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer id="contact" className="relative">
      {/* Contact Form Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Checkered Background */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${checkeredBackground})` }}
        >
          <div className="absolute inset-0 bg-background/90" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Title */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-1 h-12 bg-primary" />
                <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                  CONTACT
                </h2>
              </div>
              <p className="text-muted-foreground text-xl mb-8">
                Get in touch with us
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-primary" />
                  <a href="mailto:formula.student@fh-ooe.at" className="text-muted-foreground hover:text-primary transition-colors">
                    formula.student@fh-ooe.at
                  </a>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-primary mt-0.5" />
                  <span className="text-muted-foreground">
                    Stelzhamerstraße 23<br />
                    AT-4600 Wels, Austria
                  </span>
                </div>
              </div>

              <div className="flex gap-4 mt-8">
                <a
                  href="https://www.instagram.com/fhooe_racingteam/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="https://www.linkedin.com/company/fhooe-racing-team/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="https://fh-ooe.at/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-muted rounded-full flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
                  aria-label="FH Upper Austria"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="bg-card/80 backdrop-blur-sm p-8 rounded-lg">
              {isSuccess ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <CheckCircle className="h-16 w-16 text-primary mb-4" />
                  <p className="text-xl text-foreground">
                    Thanks for reaching out! We'll get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <Label htmlFor="name" className="text-foreground">
                      Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="e.g. Max Mustermann"
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      required
                      className="mt-2 bg-background"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email" className="text-foreground">
                      Email address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="e.g. max@example.com"
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      required
                      className="mt-2 bg-background"
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone" className="text-foreground">
                      Phone
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="e.g. +43 123 456 789"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      className="mt-2 bg-background"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject" className="text-foreground">
                      Subject *
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      placeholder="e.g. Sponsorship inquiry"
                      value={formData.subject}
                      onChange={(e) =>
                        setFormData({ ...formData, subject: e.target.value })
                      }
                      required
                      className="mt-2 bg-background"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message" className="text-foreground">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Your message..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      required
                      rows={4}
                      className="mt-2 bg-background"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-4 w-4 mr-2" />
                        Submit
                      </>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="py-8 bg-card border-t border-border">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-4">
              <img
                src={logoWhite}
                alt="FH OÖ Racing Team"
                className="h-8 w-auto invert dark:invert-0"
              />
              <p className="text-muted-foreground text-sm">
                © {new Date().getFullYear()} FHOÖ Racing Team. All rights reserved.
              </p>
            </div>
            <div className="flex gap-6 text-sm">
              <Link
                to="/impressum"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Impressum
              </Link>
              <Link
                to="/datenschutz"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Datenschutz
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
