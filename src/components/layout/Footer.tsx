
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-muted/50 border-t border-border mt-auto">
      <div className="container py-12">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Logo and Description */}
          <div className="col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <span className="text-2xl font-bold bg-gradient-to-r from-brand-600 to-teal-500 bg-clip-text text-transparent">
                DiscoverVerse
              </span>
            </Link>
            <p className="text-muted-foreground mb-4">
              Find, review, and connect with trusted local businesses in your area. Join our community today.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-muted-foreground hover:text-brand-600 transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Instagram" className="text-muted-foreground hover:text-brand-600 transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" aria-label="Twitter" className="text-muted-foreground hover:text-brand-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="font-medium mb-4">For Users</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/businesses" className="hover:text-foreground transition-colors">Find Businesses</Link></li>
              <li><Link to="/categories" className="hover:text-foreground transition-colors">Browse Categories</Link></li>
              <li><Link to="/map" className="hover:text-foreground transition-colors">Map View</Link></li>
              <li><Link to="/reviews" className="hover:text-foreground transition-colors">Write Reviews</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">For Businesses</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/business/register" className="hover:text-foreground transition-colors">Add Business</Link></li>
              <li><Link to="/business/dashboard" className="hover:text-foreground transition-colors">Business Portal</Link></li>
              <li><Link to="/business/advertising" className="hover:text-foreground transition-colors">Advertising</Link></li>
              <li><Link to="/business/support" className="hover:text-foreground transition-colors">Business Support</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/about" className="hover:text-foreground transition-colors">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-foreground transition-colors">Careers</Link></li>
              <li><Link to="/press" className="hover:text-foreground transition-colors">Press</Link></li>
              <li><Link to="/contact" className="hover:text-foreground transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/privacy" className="hover:text-foreground transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-foreground transition-colors">Terms of Service</Link></li>
              <li><Link to="/cookies" className="hover:text-foreground transition-colors">Cookie Policy</Link></li>
              <li><Link to="/accessibility" className="hover:text-foreground transition-colors">Accessibility</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} DiscoverVerse. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0">
            <select
              className="bg-background border border-border rounded-md text-sm px-3 py-1.5"
              defaultValue="en"
            >
              <option value="en">English</option>
              <option value="es">Spanish</option>
              <option value="fr">French</option>
              <option value="de">German</option>
            </select>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
