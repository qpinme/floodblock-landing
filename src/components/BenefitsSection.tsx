import { Shield, Clock, Wrench, Leaf, CheckCircle, Droplets } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Ultimate Flood Protection",
      description: "Custom-fit barriers that create a watertight seal against flooding water."
    },
    {
      icon: <Clock className="h-8 w-8 text-primary" />,
      title: "Quick Installation",
      description: "Insert and lock the barrier in minutes when flood warnings are issued."
    },
    {
      icon: <Wrench className="h-8 w-8 text-primary" />,
      title: "Custom Made",
      description: "Each barrier is precisely manufactured to fit your specific opening dimensions."
    },
    {
      icon: <Leaf className="h-8 w-8 text-primary" />,
      title: "WPC Material Benefits",
      description: "Wood Plastic Composite offers superior durability and weather resistance."
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-primary" />,
      title: "Permanent Frame",
      description: "U-shaped frame stays attached permanently - ready when you need it."
    },
    {
      icon: <Droplets className="h-8 w-8 text-primary" />,
      title: "Waterproof Seal",
      description: "Professional-grade sealing ensures complete water protection."
    }
  ];

  const wpcBenefits = [
    "100% Waterproof - Never absorbs water unlike wood",
    "Termite & Pest Resistant - No biological degradation",
    "Low Maintenance - No painting or staining required",
    "Weather Resistant - UV stable, won't fade or crack",
    "Eco-Friendly - Made from recycled materials",
    "Durable - 25+ year lifespan with minimal upkeep"
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Main Benefits */}
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Why Choose FloodBlock?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional flood protection designed for Indian conditions with cutting-edge WPC technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-border hover:shadow-soft transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-card-foreground mb-3">
                  {benefit.title}
                </h3>
                <p className="text-muted-foreground">
                  {benefit.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* WPC Benefits Spotlight */}
        <div className="bg-accent rounded-2xl p-8 lg:p-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl lg:text-3xl font-bold text-accent-foreground mb-6">
                WPC: The Superior Material Choice
              </h3>
              <p className="text-accent-foreground/80 mb-6">
                Wood Plastic Composite combines the best of both worlds - the natural look of wood 
                with the durability of plastic, perfect for flood protection applications.
              </p>
            </div>
            <div className="space-y-3">
              {wpcBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-accent-foreground">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;