import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      location: "Mumbai, Maharashtra",
      text: "FloodBlock saved my shop during the monsoon floods. Quick installation and perfect protection. Highly recommended for any business owner in flood-prone areas.",
      rating: 5,
      type: "Business Owner"
    },
    {
      name: "Priya Sharma", 
      location: "Chennai, Tamil Nadu",
      text: "The WPC material is excellent quality. We've used it for 3 monsoon seasons now with zero issues. The custom fit is perfect for our old house doors.",
      rating: 5,
      type: "Homeowner"
    },
    {
      name: "Dr. Anish Patel",
      location: "Ahmedabad, Gujarat",
      text: "As a hospital administrator, I needed reliable flood protection. FloodBlock delivered professional quality and peace of mind. Installation was smooth and efficient.",
      rating: 5,
      type: "Healthcare Professional"
    }
  ];

  const stats = [
    { number: "500+", label: "Happy Customers" },
    { number: "50+", label: "Cities Served" },
    { number: "99%", label: "Success Rate" },
    { number: "5★", label: "Average Rating" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Trusted by Indian Customers
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See what our customers across India say about FloodBlock protection
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border hover:shadow-soft transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-secondary fill-secondary" />
                  ))}
                </div>
                <p className="text-card-foreground mb-6 italic">
                  "{testimonial.text}"
                </p>
                <div className="border-t pt-4">
                  <div className="font-semibold text-card-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {testimonial.type} • {testimonial.location}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary-foreground px-6 py-3 rounded-full">
            <Star className="h-5 w-5 text-secondary fill-secondary" />
            <span className="font-semibold">Join 500+ satisfied customers across India</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;