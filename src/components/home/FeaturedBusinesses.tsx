
import React from 'react';
import { Link } from 'react-router-dom';
import BusinessCard, { Business } from '@/components/business/BusinessCard';

const FeaturedBusinesses = () => {
  // Mock data for featured businesses
  const businesses: Business[] = [
    {
      id: "1",
      name: "Coastal Breeze Café",
      category: "Food & Dining",
      image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      description: "A beachside café offering fresh pastries, specialty coffee, and healthy breakfast options with ocean views.",
      address: "123 Ocean Avenue, Seaside",
      rating: 4.8,
      reviewCount: 127,
      isOpen: true,
      isPremium: true,
      isVerified: true,
    },
    {
      id: "2",
      name: "Urban Tech Solutions",
      category: "Professional Services",
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      description: "Comprehensive IT services for businesses including cybersecurity, cloud solutions, and tech support.",
      address: "456 Tech Drive, Downtown",
      rating: 4.7,
      reviewCount: 89,
      isOpen: true,
      isVerified: true,
    },
    {
      id: "3",
      name: "Evergreen Wellness Spa",
      category: "Health & Beauty",
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      description: "Holistic wellness center offering massage therapy, acupuncture, and personalized health consultations.",
      address: "789 Tranquility Way, Green Hills",
      rating: 4.9,
      reviewCount: 156,
      isOpen: true,
      isPremium: true,
    },
  ];

  return (
    <section className="py-16">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
          <div>
            <h2 className="text-3xl font-bold">Featured Businesses</h2>
            <p className="text-muted-foreground">Discover our hand-picked high-quality local businesses</p>
          </div>
          <Link
            to="/businesses"
            className="text-brand-600 dark:text-brand-400 hover:text-brand-800 dark:hover:text-brand-300 font-medium flex items-center gap-1 transition-colors"
          >
            View all businesses
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        <div className="space-y-6">
          {businesses.map((business) => (
            <BusinessCard key={business.id} business={business} featured={true} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBusinesses;
