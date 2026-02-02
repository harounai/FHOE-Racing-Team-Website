import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Wrench, ChevronRight, Send, FileText, MessageSquare, UserPlus, Loader2 } from "lucide-react";
import { Link } from "react-router-dom";

// Configuration - set to true when application phase opens
const APPLICATIONS_OPEN = false;

const interestOptions = [
  "Aerodynamics",
  "Engine & Drivetrain",
  "Frame & Body",
  "Suspension",
  "Electronics",
  "Business Plan",
  "Cost Report",
  "Event Management",
  "International Relations",
  "Public Relations",
];

const timelineSteps = [
  {
    step: 1,
    title: "Fill out the application form",
    description:
      "Submit your contact details and interests. Our team will review your application and reach out to you.",
    icon: FileText,
  },
  {
    step: 2,
    title: "Personal meetup",
    description:
      "We'll invite you for a personal interview to learn about your motivation, personality, and answer your questions. No special preparation needed!",
    icon: MessageSquare,
  },
  {
    step: 3,
    title: "Trial month",
    description:
      "Participate in our workshops, get to know the team and our working style. Both sides can evaluate if it's a good fit.",
    icon: Wrench,
  },
  {
    step: 4,
    title: "Welcome to the team",
    description:
      "Congratulations! After a successful trial period, you'll officially become part of our racing family.",
    icon: UserPlus,
  },
];

const faqItems = [
  {
    question: "Can I become a driver?",
    answer:
      "To become a driver, you need a valid racing license. Each year, we hold internal qualification sessions where interested team members can compete for the driver position. Performance, consistency, and team contribution all play a role in the selection process.",
  },
  {
    question: "What tasks can I take on in the team?",
    answer:
      "We offer a wide range of roles in both technical and organizational areas. Technical roles include aerodynamics, powertrain, chassis, electronics, and more. Organizational roles cover marketing, sponsoring, event management, and public relations. You can start in one area and explore others based on your interests.",
  },
  {
    question: "Are there bachelor's and master's thesis topics in the team?",
    answer:
      "While we don't assign specific thesis topics, many of our projects can be developed into academic work. If you're interested, we'll support you in finding a topic that aligns with both your studies and our current challenges.",
  },
  {
    question: "Are there fixed times in the team?",
    answer:
      "We have a weekly team meeting that all members should attend. Beyond that, you can work on your tasks flexibly and coordinate with your sub-team as needed.",
  },
  {
    question: "How much time will working in the racing team take?",
    answer:
      "We expect a minimum commitment of around 10 hours per week. However, this can vary depending on your role, the project phase, and upcoming competitions. During intensive periods, more time may be required.",
  },
  {
    question: "I'm not studying a technical subject, can I still work in the team?",
    answer:
      "Absolutely! We need people with diverse skills. Marketing, finance, media production, sponsorship acquisition, and event organization are just some areas where non-technical skills are essential.",
  },
  {
    question: "Do I need prior knowledge of technology or motorsport?",
    answer:
      "Prior knowledge is a plus, but not required. What matters most is your motivation, willingness to learn, and commitment to the team. We'll teach you everything you need to know!",
  },
];

const JoinTeam = () => {
  const { toast } = useToast();
  
  // Application form state
  const [applicationForm, setApplicationForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    fieldOfStudy: "",
    interests: [] as string[],
    motivation: "",
  });
  const [isSubmittingApplication, setIsSubmittingApplication] = useState(false);

  // Contact form state
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
    honeypot: "", // Spam protection
  });
  const [isSubmittingContact, setIsSubmittingContact] = useState(false);

  const handleInterestChange = (interest: string, checked: boolean) => {
    setApplicationForm((prev) => ({
      ...prev,
      interests: checked
        ? [...prev.interests, interest]
        : prev.interests.filter((i) => i !== interest),
    }));
  };

  const handleApplicationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!APPLICATIONS_OPEN) return;

    setIsSubmittingApplication(true);

    try {
      const { error } = await supabase.from("applications").insert({
        first_name: applicationForm.firstName.trim(),
        last_name: applicationForm.lastName.trim(),
        email: applicationForm.email.trim(),
        phone: applicationForm.phone.trim(),
        field_of_study: applicationForm.fieldOfStudy.trim(),
        interests: applicationForm.interests,
        motivation: applicationForm.motivation.trim() || null,
      });

      if (error) throw error;

      toast({
        title: "Application submitted!",
        description: "Thank you for your application. We'll be in touch soon!",
      });

      setApplicationForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        fieldOfStudy: "",
        interests: [],
        motivation: "",
      });
    } catch (error: any) {
      console.error("Application submission error:", error);
      toast({
        title: "Submission failed",
        description: "Something went wrong. Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmittingApplication(false);
    }
  };

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Honeypot check - if filled, it's a bot
    if (contactForm.honeypot) {
      return;
    }

    setIsSubmittingContact(true);

    try {
      const response = await fetch("https://formspree.io/f/mjgknwgw", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          name: contactForm.name.trim(),
          email: contactForm.email.trim(),
          message: contactForm.message.trim(),
          _subject: `[Join Team Inquiry] Message from ${contactForm.name.trim()}`,
          source: "join-team-page",
          _template: "table",
          _replyto: contactForm.email.trim(),
          _gotcha: contactForm.honeypot,
        }).toString(),
      });

      if (!response.ok) throw new Error("Failed to submit");

      toast({
        title: "Message sent!",
        description: "Thank you for your message! We'll get back to you as soon as possible.",
      });

      setContactForm({
        name: "",
        email: "",
        message: "",
        honeypot: "",
      });
    } catch (error: any) {
      console.error("Contact form error:", error);
      toast({
        title: "Failed to send message",
        description: "Something went wrong. Please try again or email us directly at formula.student@fh-ooe.at",
        variant: "destructive",
      });
    } finally {
      setIsSubmittingContact(false);
    }
  };

  const scrollToContact = () => {
    document.getElementById("contact-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Section 1: Page Header */}
      <section className="pt-32 pb-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4">
            YOUR APPLICATION
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to be part of something extraordinary? Learn how to join our Formula Student racing team and start your journey in motorsport engineering.
          </p>
        </div>
      </section>

      {/* Section 2: Application Status Notice */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Text Content */}
            <div className="bg-muted/40 rounded-2xl p-8 md:p-10">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-3 bg-amber-500 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-amber-600 dark:text-amber-400">
                  Applications Currently Closed
                </span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Thank you for your interest!
              </h2>
              
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Thank you for your interest in applying to join our team.
                </p>
                <p>
                  Our application period for Spring 2026 has not started yet.
                </p>
                <p>
                  The next application phase will open in <strong className="text-foreground">Spring 2026</strong>.
                </p>
                <p>
                  Please come back at the beginning of Spring 2026 to submit your application.
                </p>
                <p>
                  In the meantime, feel free to{" "}
                  <button
                    onClick={scrollToContact}
                    className="text-primary hover:underline font-medium inline-flex items-center gap-1"
                  >
                    contact us
                    <ChevronRight className="w-4 h-4" />
                  </button>{" "}
                  if you have any questions.
                </p>
              </div>
            </div>

            {/* Image Gallery */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="rounded-xl overflow-hidden aspect-[3/4] bg-muted">
                  <img
                    src="/lovable-uploads/13bf9b8c-f288-45f7-a3a5-4305fbf83a1c.png"
                    alt="Team working on the race car"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden aspect-square bg-muted">
                  <img
                    src="/placeholder.svg"
                    alt="Workshop moments"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="rounded-xl overflow-hidden aspect-square bg-muted">
                  <img
                    src="/placeholder.svg"
                    alt="Competition scene"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-xl overflow-hidden aspect-[3/4] bg-muted">
                  <img
                    src="/placeholder.svg"
                    alt="Pit lane action"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Application Form (Hidden until applications open) */}
      {APPLICATIONS_OPEN && (
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-8">
                Application Form
              </h2>
              
              <form onSubmit={handleApplicationSubmit} className="bg-background rounded-2xl p-8 shadow-sm space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={applicationForm.firstName}
                      onChange={(e) => setApplicationForm({ ...applicationForm, firstName: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={applicationForm.lastName}
                      onChange={(e) => setApplicationForm({ ...applicationForm, lastName: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={applicationForm.email}
                      onChange={(e) => setApplicationForm({ ...applicationForm, email: e.target.value })}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      type="tel"
                      value={applicationForm.phone}
                      onChange={(e) => setApplicationForm({ ...applicationForm, phone: e.target.value })}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="fieldOfStudy">Field of Study *</Label>
                  <Input
                    id="fieldOfStudy"
                    value={applicationForm.fieldOfStudy}
                    onChange={(e) => setApplicationForm({ ...applicationForm, fieldOfStudy: e.target.value })}
                    required
                  />
                </div>

                <div className="space-y-3">
                  <Label>I am interested in:</Label>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {interestOptions.map((interest) => (
                      <div key={interest} className="flex items-center space-x-2">
                        <Checkbox
                          id={interest}
                          checked={applicationForm.interests.includes(interest)}
                          onCheckedChange={(checked) => handleInterestChange(interest, checked as boolean)}
                        />
                        <Label htmlFor={interest} className="text-sm font-normal cursor-pointer">
                          {interest}
                        </Label>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="motivation">Comment / Motivation (Optional)</Label>
                  <Textarea
                    id="motivation"
                    value={applicationForm.motivation}
                    onChange={(e) => setApplicationForm({ ...applicationForm, motivation: e.target.value })}
                    placeholder="Would you like to add something to your application? Let us know here."
                    rows={4}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={isSubmittingApplication}
                >
                  {isSubmittingApplication ? "Submitting..." : "Submit Application"}
                </Button>
              </form>
            </div>
          </div>
        </section>
      )}

      {/* Section 4: Path to the Team Timeline */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
              YOUR PATH TO THE TEAM
            </h2>
            <p className="text-lg text-primary font-medium">
              NEXT APPLICATION PHASE: SPRING 2026
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {timelineSteps.map((step, index) => (
              <div
                key={step.step}
                className="relative bg-muted/40 rounded-2xl p-6 hover:bg-muted/60 transition-colors"
              >
                {/* Step number */}
                <div className="absolute -top-3 left-6 bg-primary text-primary-foreground text-sm font-bold px-3 py-1 rounded-full">
                  Step {step.step}
                </div>
                
                {/* Icon */}
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4 mt-2">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>

                {/* Connector arrow (except last) */}
                {index < timelineSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 transform -translate-y-1/2">
                    <ChevronRight className="w-6 h-6 text-muted-foreground/50" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 5: FAQ */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground text-center mb-12">
            FAQ
          </h2>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-background rounded-xl px-6 border-none shadow-sm"
                >
                  <AccordionTrigger className="text-left hover:no-underline py-5">
                    <span className="font-medium text-foreground">{item.question}</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-5">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Section 6: Contact Form */}
      <section id="contact-section" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-xl mx-auto text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get in Touch
            </h2>
            <p className="text-muted-foreground">
              Have questions about joining the team? Send us a message and we'll get back to you.
            </p>
          </div>

          <form onSubmit={handleContactSubmit} className="max-w-xl mx-auto space-y-6">
            {/* Honeypot field - hidden from users */}
            <input
              type="text"
              name="website"
              value={contactForm.honeypot}
              onChange={(e) => setContactForm({ ...contactForm, honeypot: e.target.value })}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <div className="space-y-2">
              <Label htmlFor="contactName">Name *</Label>
              <Input
                id="contactName"
                value={contactForm.name}
                onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                placeholder="Your name"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contactEmail">Email Address *</Label>
              <Input
                id="contactEmail"
                type="email"
                value={contactForm.email}
                onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                placeholder="your.email@example.com"
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contactMessage">Message *</Label>
              <Textarea
                id="contactMessage"
                value={contactForm.message}
                onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                placeholder="Your message..."
                rows={5}
                required
              />
            </div>

            <Button
              type="submit"
              size="lg"
              className="w-full gap-2"
              disabled={isSubmittingContact}
            >
              {isSubmittingContact ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="w-4 h-4" />
                  Send Message
                </>
              )}
            </Button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 bg-muted/30 border-t border-border">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center gap-6 mb-4">
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
              Home
            </Link>
            <Link to="/impressum" className="text-muted-foreground hover:text-foreground transition-colors">
              Impressum
            </Link>
            <Link to="/datenschutz" className="text-muted-foreground hover:text-foreground transition-colors">
              Datenschutz
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} FH OÖ Racing Team. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default JoinTeam;
