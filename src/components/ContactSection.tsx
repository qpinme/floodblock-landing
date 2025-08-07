import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    
    try {
      // Google Forms submission
      const googleFormData = new FormData();
      googleFormData.append('entry.123456789', formData.get('name') as string); // Replace with actual entry IDs
      googleFormData.append('entry.987654321', formData.get('email') as string);
      googleFormData.append('entry.456789123', formData.get('phone') as string);
      googleFormData.append('entry.789123456', formData.get('location') as string);
      googleFormData.append('entry.321654987', formData.get('opening-type') as string);
      googleFormData.append('entry.654987321', formData.get('dimensions') as string);
      googleFormData.append('entry.147258369', formData.get('message') as string);
      
      // Note: Replace this URL with your actual Google Form URL
      // Format: https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse
      const response = await fetch('https://docs.google.com/forms/d/e/1FAIpQLSf_YOUR_FORM_ID_HERE/formResponse', {
        method: 'POST',
        body: googleFormData,
        mode: 'no-cors'
      });
      
      toast({
        title: "Enquiry Submitted Successfully!",
        description: "We'll contact you within 24 hours with a custom quote.",
      });
      
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      toast({
        title: "Submission Error",
        description: "Please try again or contact us directly at floodblock.me@gmail.com",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
            Get Your Custom Quote
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional flood protection tailored to your specific requirements
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card className="border-border shadow-soft">
            <CardHeader>
              <CardTitle className="text-2xl text-card-foreground">
                Request Custom Quote
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      required 
                      placeholder="Your full name"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      required 
                      placeholder="your@email.com"
                      className="mt-1"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input 
                      id="phone" 
                      name="phone" 
                      required 
                      placeholder="+91 98765 43210"
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="location">City/Location *</Label>
                    <Input 
                      id="location" 
                      name="location" 
                      required 
                      placeholder="Mumbai, Maharashtra"
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="opening-type">Type of Opening *</Label>
                  <Input 
                    id="opening-type" 
                    name="opening-type" 
                    required 
                    placeholder="Door, Window, Garage, etc."
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="dimensions">Opening Dimensions</Label>
                  <Input 
                    id="dimensions" 
                    name="dimensions" 
                    placeholder="Width x Height (e.g., 3ft x 7ft)"
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="message">Additional Requirements</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    placeholder="Any specific requirements or questions..."
                    className="mt-1"
                    rows={4}
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  {isSubmitting ? "Submitting..." : "Get Custom Quote"}
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="border-border">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-6">
                  Contact Information
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Email</div>
                      <div className="text-muted-foreground">floodblock.me@gmail.com</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Response Time</div>
                      <div className="text-muted-foreground">Within 24 hours</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-primary" />
                    <div>
                      <div className="font-medium">Service Area</div>
                      <div className="text-muted-foreground">Pan India delivery & installation</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-primary/5">
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold text-card-foreground mb-4">
                  Why Choose Custom Manufacturing?
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Perfect fit for any opening size</li>
                  <li>• Professional measurements & installation</li>
                  <li>• Quality WPC materials and hardware</li>
                  <li>• 5-year warranty on all components</li>
                  <li>• Expert guidance for flood preparedness</li>
                </ul>
              </CardContent>
            </Card>

            <div className="bg-secondary/10 border border-secondary/20 rounded-lg p-6">
              <h4 className="font-semibold text-secondary-foreground mb-2">
                🚨 Emergency Orders
              </h4>
              <p className="text-sm text-secondary-foreground/80">
                For urgent flood protection needs, mark your enquiry as "URGENT" 
                and we'll prioritize your custom manufacturing and delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;