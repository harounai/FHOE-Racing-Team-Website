import { Mail, MapPin, Instagram, Linkedin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import logoWhite from "@/assets/logo-white.png";

export function ContactSection() {
  return (
    <footer id="contact" className="py-24 bg-card border-t border-border">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img src={logoWhite} alt="FH OÖ Racing Team" className="h-12 w-auto invert dark:invert-0" />
            </div>
            <p className="text-muted-foreground mb-6 max-w-sm">
              The FHOÖ Racing Team is part of the University of Applied Sciences
              Upper Austria, combining expertise from various technical fields
              to compete in Formula Student.
            </p>
            <div className="flex gap-4">
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

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/#about" className="text-muted-foreground hover:text-primary transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/#team" className="text-muted-foreground hover:text-primary transition-colors">
                  Team
                </a>
              </li>
              <li>
                <a href="/#car" className="text-muted-foreground hover:text-primary transition-colors">
                  The Car
                </a>
              </li>
              <li>
                <a href="/#sponsors" className="text-muted-foreground hover:text-primary transition-colors">
                  Sponsors
                </a>
              </li>
              <li>
                <Link to="/news" className="text-muted-foreground hover:text-primary transition-colors">
                  News
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="h-5 w-5 text-primary mt-0.5" />
                <a href="mailto:formula.student@fh-ooe.at" className="text-muted-foreground hover:text-primary transition-colors">
                  formula.student@fh-ooe.at
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-muted-foreground">
                  Stelzhamerstraße 23<br />
                  AT-4600 Wels, Austria
                </span>
              </li>
            </ul>
            <Button className="mt-6" asChild>
              <a href="mailto:formula.student@fh-ooe.at">Get In Touch</a>
            </Button>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} FHOÖ Racing Team. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm">
            <Link to="/impressum" className="text-muted-foreground hover:text-primary transition-colors">
              Impressum
            </Link>
            <Link to="/datenschutz" className="text-muted-foreground hover:text-primary transition-colors">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
