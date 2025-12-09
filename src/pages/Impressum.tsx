import { Navbar } from "@/components/Navbar";
import { ContactSection } from "@/components/ContactSection";

const Impressum = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Impressum
          </h1>

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Angaben gemäß § 5 ECG
              </h2>
              <p className="text-muted-foreground mb-4">
                <strong className="text-foreground">FHOOE Racing Team</strong><br />
                Studentischer Verein<br />
                Stelzhamerstraße 23<br />
                AT-4600 Wels<br />
                Österreich
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Kontakt
              </h2>
              <p className="text-muted-foreground mb-4">
                E-Mail:{" "}
                <a
                  href="mailto:formula.student@fh-ooe.at"
                  className="text-primary hover:underline"
                >
                  formula.student@fh-ooe.at
                </a>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Hochschule
              </h2>
              <p className="text-muted-foreground mb-4">
                Fachhochschule Oberösterreich<br />
                University of Applied Sciences Upper Austria<br />
                <a
                  href="https://fh-ooe.at/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline"
                >
                  https://fh-ooe.at/
                </a>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Technische Leitung
              </h2>
              <p className="text-muted-foreground mb-4">
                David Hödl & Manuel Reitmeier<br />
                Technical Directors
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Betreuender Professor
              </h2>
              <p className="text-muted-foreground mb-4">
                Manuel Frank<br />
                Ass. Prof. for Composite Design and Manufacturing<br />
                <a
                  href="mailto:manuel.frank@fh-wels.at"
                  className="text-primary hover:underline"
                >
                  manuel.frank@fh-wels.at
                </a>
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                Haftungsausschluss
              </h2>
              <p className="text-muted-foreground mb-4">
                Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt.
                Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte
                können wir jedoch keine Gewähr übernehmen.
              </p>
            </section>
          </div>
        </div>
      </main>
      <ContactSection />
    </div>
  );
};

export default Impressum;
