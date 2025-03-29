
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Search, Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import ThemeToggle from '@/components/ui/ThemeToggle';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-sm py-2"
          : "bg-transparent py-4"
      )}
    >
      <nav className="container flex items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center space-x-2 font-bold text-xl text-brand-700 dark:text-brand-300"
        >
          <span className="text-2xl font-bold bg-gradient-to-r from-brand-600 to-teal-500 bg-clip-text text-transparent">
            DiscoverVerse
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-foreground hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
            Home
          </Link>
          <Link to="/categories" className="text-foreground hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
            Categories
          </Link>
          <Link to="/businesses" className="text-foreground hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
            Businesses
          </Link>
          <Link to="/map" className="text-foreground hover:text-brand-600 dark:hover:text-brand-400 transition-colors">
            Map
          </Link>
        </div>

        {/* Right side items */}
        <div className="hidden md:flex items-center space-x-3">
          <Button variant="outline" size="icon">
            <Search className="h-4 w-4" />
          </Button>
          <ThemeToggle />
          <Button variant="outline" className="font-medium">
            Sign In
          </Button>
          <Button className="bg-gradient-to-r from-brand-600 to-teal-500 hover:from-brand-700 hover:to-teal-600 text-white font-medium">
            Register
          </Button>
        </div>
        
        {/* Mobile menu button */}
        <div className="flex md:hidden items-center space-x-3">
          <ThemeToggle />
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 p-4 bg-white dark:bg-gray-900 border-b border-border animate-slide-in">
          <div className="flex flex-col space-y-4 py-2">
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-2 hover:bg-muted rounded-md transition-colors"
            >
              Home
            </Link>
            <Link
              to="/categories"
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-2 hover:bg-muted rounded-md transition-colors"
            >
              Categories
            </Link>
            <Link
              to="/businesses"
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-2 hover:bg-muted rounded-md transition-colors"
            >
              Businesses
            </Link>
            <Link
              to="/map"
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-2 hover:bg-muted rounded-md transition-colors"
            >
              Map
            </Link>
            <div className="pt-2 flex flex-col space-y-2">
              <Button variant="outline" className="w-full justify-start">
                <Search className="h-4 w-4 mr-2" />
                Search
              </Button>
              <Button variant="outline" className="w-full">
                Sign In
              </Button>
              <Button className="w-full bg-gradient-to-r from-brand-600 to-teal-500">
                Register
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
