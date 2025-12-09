import { Navbar } from "@/components/Navbar";
import { ContactSection } from "@/components/ContactSection";

const Datenschutz = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Datenschutzerklärung
          </h1>

          <div className="prose prose-neutral dark:prose-invert max-w-none">
            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                1. Verantwortlicher
              </h2>
              <p className="text-muted-foreground mb-4">
                <strong className="text-foreground">FHOOE Racing Team</strong><br />
                Studentischer Verein<br />
                Stelzhamerstraße 23<br />
                AT-4600 Wels<br />
                Österreich<br />
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
                2. Erhebung und Verarbeitung von Daten
              </h2>
              <p className="text-muted-foreground mb-4">
                Beim Besuch unserer Website werden automatisch technische
                Informationen erfasst (z.B. IP-Adresse, Browsertyp, Betriebssystem,
                Zugriffszeit). Diese Daten werden für den technischen Betrieb
                der Website verwendet und nach kurzer Zeit gelöscht.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                3. Kontaktaufnahme
              </h2>
              <p className="text-muted-foreground mb-4">
                Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben
                zur Bearbeitung der Anfrage sowie für mögliche Anschlussfragen
                gespeichert. Diese Daten werden nicht ohne Ihre Einwilligung
                weitergegeben.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                4. Externe Links
              </h2>
              <p className="text-muted-foreground mb-4">
                Unsere Website enthält Links zu externen Websites (z.B. Instagram,
                LinkedIn, FH Oberösterreich). Für die Datenschutzpraktiken dieser
                externen Seiten sind deren Betreiber verantwortlich.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                5. Ihre Rechte
              </h2>
              <p className="text-muted-foreground mb-4">
                Sie haben das Recht auf Auskunft, Berichtigung, Löschung und
                Einschränkung der Verarbeitung Ihrer personenbezogenen Daten.
                Kontaktieren Sie uns unter{" "}
                <a
                  href="mailto:formula.student@fh-ooe.at"
                  className="text-primary hover:underline"
                >
                  formula.student@fh-ooe.at
                </a>{" "}
                für entsprechende Anfragen.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold text-foreground mb-4">
                6. Änderungen
              </h2>
              <p className="text-muted-foreground mb-4">
                Wir behalten uns vor, diese Datenschutzerklärung bei Bedarf
                anzupassen, um sie an geänderte rechtliche Anforderungen oder
                neue Funktionen der Website anzupassen.
              </p>
              <p className="text-muted-foreground text-sm">
                Stand: Dezember 2024
              </p>
            </section>
          </div>
        </div>
      </main>
      <ContactSection />
    </div>
  );
};

export default Datenschutz;
