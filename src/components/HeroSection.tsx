import { Button } from "@/components/ui/button";
import floodblockLogo from "@/assets/floodblock-logo.png";
import floodblockProduct from "@/assets/floodblock-product.png";

const HeroSection = () => {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen bg-hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-grid-pattern"></div>
      </div>
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between min-h-[80vh]">
          {/* Left Content */}
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0 animate-fade-in">
            <img 
              src={`${floodblockLogo}?v=${Date.now()}`} 
              alt="FloodBlock Logo" 
              className="h-20 mx-auto lg:mx-0 mb-8"
            />
            <h1 className="text-4xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Protect Your Property from Floods
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl">
              Custom-made WPC flood barriers that install in minutes. Professional flood protection 
              for doors, windows, and any opening.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                variant="secondary"
                onClick={scrollToContact}
                className="text-lg px-8 py-6 shadow-soft hover:shadow-primary transition-all duration-300"
              >
                Get Custom Quote
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Content - Product Image */}
          <div className="lg:w-1/2 flex justify-center animate-fade-in">
            <div className="relative">
              <img 
                src={`${floodblockProduct}?v=${Date.now()}`} 
                alt="FloodBlock Flood Barrier installed at door" 
                className="max-w-full h-auto rounded-lg shadow-primary"
              />
              <div className="absolute -bottom-4 -right-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-lg font-semibold shadow-soft">
                Quick Install!
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;