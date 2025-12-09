import carImage from "@/assets/car-showcase.jpg";
import { Badge } from "@/components/ui/badge";

const specs = [
  { label: "Power Output", value: "80 kW" },
  { label: "0-100 km/h", value: "3.2s" },
  { label: "Top Speed", value: "180 km/h" },
  { label: "Weight", value: "210 kg" },
  { label: "Powertrain", value: "Electric" },
  { label: "Battery", value: "6.5 kWh" },
];

export function CarSection() {
  return (
    <section id="car" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold tracking-wider uppercase mb-2">
            The Car
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            FS-24 Electric
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our latest creation represents the culmination of thousands of hours
            of design, simulation, and manufacturing.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative group">
            <div className="overflow-hidden rounded-lg border border-border">
              <img
                src={carImage}
                alt="FS-24 Electric Formula Student Car"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute top-4 left-4">
              <Badge className="bg-primary text-primary-foreground">
                2024 Season
              </Badge>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-foreground mb-6">
              Technical Specifications
            </h3>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {specs.map((spec) => (
                <div
                  key={spec.label}
                  className="bg-card border border-border rounded-lg p-4"
                >
                  <p className="text-muted-foreground text-sm mb-1">
                    {spec.label}
                  </p>
                  <p className="text-foreground font-bold text-xl">
                    {spec.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h4 className="font-semibold text-foreground">Key Features</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  Full carbon fiber monocoque chassis
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  Advanced aerodynamics package with DRS
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  Custom in-house designed suspension
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  Regenerative braking system
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
