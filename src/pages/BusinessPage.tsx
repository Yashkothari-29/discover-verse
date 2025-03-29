
import React from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import BusinessDetails from '@/components/business/BusinessDetails';
import { Business } from '@/components/business/BusinessCard';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const BusinessPage = () => {
  const { id } = useParams<{ id: string }>();
  
  // Mock data for a single business
  const businessData: Business = {
    id: "1",
    name: "Coastal Breeze Café",
    category: "Food & Dining",
    image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    description: "A beachside café offering fresh pastries, specialty coffee, and healthy breakfast options with ocean views. Our café is committed to using locally sourced ingredients and sustainable practices to provide a delightful dining experience for our customers. With a team of passionate baristas and chefs, we pride ourselves on delivering exceptional quality and service.",
    address: "123 Ocean Avenue, Seaside",
    rating: 4.8,
    reviewCount: 127,
    isOpen: true,
    isPremium: true,
    isVerified: true,
  };
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow pt-20 pb-16">
        <div className="container">
          <div className="mb-8">
            <Button variant="ghost" size="sm" asChild>
              <Link to="/" className="flex items-center text-muted-foreground hover:text-foreground">
                <ArrowLeft className="h-4 w-4 mr-1" />
                Back to results
              </Link>
            </Button>
          </div>
          
          <BusinessDetails business={businessData} />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default BusinessPage;
