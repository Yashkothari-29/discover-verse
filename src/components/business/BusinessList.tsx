
import React from 'react';
import BusinessCard, { Business } from '@/components/business/BusinessCard';

const BusinessList = () => {
  // Mock data for businesses
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
    {
      id: "4",
      name: "Vertex Fitness Center",
      category: "Health & Fitness",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      description: "Modern fitness facility with personal training, group classes, and state-of-the-art equipment.",
      address: "101 Fitness Blvd, Westside",
      rating: 4.5,
      reviewCount: 78,
      isOpen: true,
      isVerified: false,
    },
    {
      id: "5",
      name: "Artisan Boutique",
      category: "Shopping",
      image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      description: "Curated collection of locally-made clothing, accessories, and home goods from independent designers.",
      address: "555 Craft Lane, Arts District",
      rating: 4.6,
      reviewCount: 102,
      isOpen: false,
      isVerified: true,
    },
    {
      id: "6",
      name: "Golden Door Theater",
      category: "Entertainment",
      image: "https://images.unsplash.com/photo-1516307365426-bea591f05011?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
      description: "Historic theater featuring independent films, live performances, and community events.",
      address: "222 Stage Road, Old Town",
      rating: 4.4,
      reviewCount: 67,
      isOpen: true,
      isPremium: false,
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {businesses.map((business) => (
        <BusinessCard key={business.id} business={business} />
      ))}
    </div>
  );
};

export default BusinessList;
