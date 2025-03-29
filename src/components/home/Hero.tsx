
import React from 'react';
import { Search } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-brand-50 to-white dark:from-brand-950/20 dark:to-background -z-10" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-24 h-24 bg-teal-300/20 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 right-10 w-32 h-32 bg-brand-300/20 rounded-full blur-3xl" />
      
      <div className="container relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-slide-in text-balance">
            <span className="bg-gradient-to-r from-brand-600 to-teal-500 bg-clip-text text-transparent">
              Discover & Connect
            </span>{" "}
            with Local Businesses
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground mb-8 animate-slide-in animation-delay-100">
            Find, review, and engage with the best local businesses in your area. 
            Join our community of savvy consumers and business owners.
          </p>
          
          <div className="relative max-w-xl mx-auto animate-scale-in">
            <div className="flex flex-col md:flex-row gap-2 p-2 bg-card rounded-2xl shadow-lg">
              <div className="flex-grow relative">
                <Input
                  placeholder="Search for businesses, categories, or locations..."
                  className="pl-10 h-12 text-base border-none focus:ring-0 rounded-xl"
                />
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              </div>
              <Button size="lg" className="bg-gradient-to-r from-brand-600 to-teal-500 hover:from-brand-700 hover:to-teal-600 text-white font-medium h-12 rounded-xl">
                Search
              </Button>
            </div>
          </div>
          
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="text-sm bg-muted px-3 py-1 rounded-full text-muted-foreground">Restaurants</span>
            <span className="text-sm bg-muted px-3 py-1 rounded-full text-muted-foreground">Services</span>
            <span className="text-sm bg-muted px-3 py-1 rounded-full text-muted-foreground">Shopping</span>
            <span className="text-sm bg-muted px-3 py-1 rounded-full text-muted-foreground">Health</span>
            <span className="text-sm bg-muted px-3 py-1 rounded-full text-muted-foreground">Entertainment</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
