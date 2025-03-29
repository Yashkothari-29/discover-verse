
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/home/Hero';
import Categories from '@/components/home/Categories';
import FeaturedBusinesses from '@/components/home/FeaturedBusinesses';
import MapView from '@/components/map/MapView';
import { Button } from '@/components/ui/button';

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-16">
        <Hero />
        <Categories />
        <FeaturedBusinesses />
        
        {/* Map Section */}
        <section className="py-16 bg-muted/30">
          <div className="container">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
              <div>
                <h2 className="text-3xl font-bold">Explore Nearby</h2>
                <p className="text-muted-foreground">Discover businesses in your local area</p>
              </div>
              <Button variant="outline" className="font-medium" asChild>
                <Link to="/map">View Full Map</Link>
              </Button>
            </div>
            
            <MapView />
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16">
          <div className="container">
            <div className="bg-gradient-to-r from-brand-600 to-teal-500 rounded-2xl p-8 md:p-12 text-white">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold mb-4">Own a Local Business?</h2>
                  <p className="text-white/90 mb-6">
                    Join our directory to reach more customers, manage your online presence, and grow your business with powerful tools.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button className="bg-white text-brand-600 hover:bg-white/90 hover:text-brand-700 font-medium" asChild>
                      <Link to="/register">Register Your Business</Link>
                    </Button>
                    <Button variant="outline" className="border-white text-white hover:bg-white/20" asChild>
                      <Link to="/businesses">Learn More</Link>
                    </Button>
                  </div>
                </div>
                <div className="hidden md:block">
                  <img 
                    src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80" 
                    alt="Business owner" 
                    className="rounded-xl w-full h-64 object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
