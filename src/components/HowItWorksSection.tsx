import { Card, CardContent } from "@/components/ui/card";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "1",
      title: "Permanent Frame Installation",
      description: "Our U-shaped frame is permanently attached to your door, window, or opening. The bottom can be flush with the floor or inserted into the ground for a clean look.",
      icon: "🔧"
    },
    {
      number: "2", 
      title: "Flood Warning Received",
      description: "When flooding is imminent, you receive advance warning from weather services or local authorities. Now it's time to act quickly.",
      icon: "⚠️"
    },
    {
      number: "3",
      title: "Quick Barrier Installation", 
      description: "Simply slide the WPC barrier panel into the pre-installed frame. The custom-fit design ensures a perfect seal every time.",
      icon: "⚡"
    },
    {
      number: "4",
      title: "Lock & Secure",
      description: "Lock the barrier in place using the integrated locking mechanism. Your property is now protected with a watertight seal.",
      icon: "🔒"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            How FloodBlock Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Simple 4-step process for professional flood protection
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative border-border hover:shadow-soft transition-all duration-300 group">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">{step.icon}</div>
                <div className="bg-primary text-primary-foreground rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.number}
                </div>
                <h3 className="text-lg font-semibold text-card-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {step.description}
                </p>
              </CardContent>
              
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-border"></div>
              )}
            </Card>
          ))}
        </div>

        <div className="mt-16 bg-primary/5 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            Installation in Minutes, Protection for Years
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The permanent frame means you're always ready. When floods threaten, 
            you can secure your property in just a few minutes with our easy-to-use barrier system.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;