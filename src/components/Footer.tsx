import { Mail } from "lucide-react";
import floodblockLogo from "@/assets/floodblock-logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-2">
            <img 
              src={floodblockLogo} 
              alt="FloodBlock Logo" 
              className="h-12 mb-4 brightness-0 invert"
            />
            <p className="text-primary-foreground/80 mb-4 max-w-md">
              Professional flood protection systems made from premium WPC materials. 
              Custom-manufactured for perfect fit and reliable protection.
            </p>
            <div className="flex items-center gap-2">
              <Mail className="h-4 w-4" />
              <span>floodblock.me@gmail.com</span>
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h4 className="font-semibold mb-4">Product Features</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>WPC Construction</li>
              <li>Custom Manufacturing</li>
              <li>Quick Installation</li>
              <li>Permanent Frames</li>
              <li>Professional Grade</li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-semibold mb-4">Service Areas</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Mumbai & Maharashtra</li>
              <li>Chennai & Tamil Nadu</li>
              <li>Bangalore & Karnataka</li>
              <li>Delhi & NCR</li>
              <li>Pan India Delivery</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-foreground/60">
              © 2024 FloodBlock. All rights reserved. Protecting Indian homes and businesses.
            </p>
            <div className="text-primary-foreground/60 text-sm">
              Made with WPC | Built for India | Trusted by 500+ customers
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;