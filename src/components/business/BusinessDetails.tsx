
import React from 'react';
import { MapPin, Star, Clock, Phone, Globe, Mail, MessageSquare, Share2, Heart, Bookmark } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Business } from './BusinessCard';

interface BusinessDetailsProps {
  business: Business;
}

const BusinessDetails = ({ business }: BusinessDetailsProps) => {
  const { name, category, image, description, address, rating, reviewCount, isOpen, isPremium, isVerified } = business;
  
  return (
    <div>
      {/* Hero section with image */}
      <div className="relative h-64 md:h-96 rounded-xl overflow-hidden mb-8">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-0 left-0 p-6">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{name}</h1>
          <div className="flex items-center gap-2 text-white/90">
            <span>{category}</span>
            {isVerified && (
              <Badge variant="outline" className="border-blue-400 text-blue-100 bg-blue-500/20 flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3">
                  <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53-1.471-1.47a.75.75 0 00-1.06 1.06l2 2a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
                <span className="text-xs">Verified</span>
              </Badge>
            )}
          </div>
        </div>
      </div>
      
      {/* Business information and actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          {/* Quick info */}
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center">
              <Star className="w-5 h-5 mr-1 fill-yellow-400 text-yellow-400" aria-hidden="true" />
              <span className="font-medium">{rating}</span>
              <span className="text-muted-foreground ml-1">({reviewCount} reviews)</span>
            </div>
            <div className="flex items-center">
              <MapPin className="w-5 h-5 mr-1 text-muted-foreground" aria-hidden="true" />
              <span>{address}</span>
            </div>
            <div className="flex items-center">
              <Clock className={`w-5 h-5 mr-1 ${isOpen ? 'text-green-500' : 'text-red-500'}`} aria-hidden="true" />
              <span className={`${isOpen ? 'text-green-500' : 'text-red-500'}`}>
                {isOpen ? 'Open Now' : 'Closed'}
              </span>
            </div>
          </div>
          
          {/* Tabs */}
          <Tabs defaultValue="about" className="mt-6">
            <TabsList className="mb-6">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
              <TabsTrigger value="photos">Photos</TabsTrigger>
              <TabsTrigger value="services">Services</TabsTrigger>
            </TabsList>
            
            <TabsContent value="about">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-3">Description</h3>
                  <p className="text-muted-foreground">{description}</p>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-3">Contact Information</h3>
                  <div className="space-y-2">
                    <div className="flex items-center">
                      <Phone className="w-5 h-5 mr-3 text-muted-foreground" />
                      <span>(555) 123-4567</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="w-5 h-5 mr-3 text-muted-foreground" />
                      <span>contact@example.com</span>
                    </div>
                    <div className="flex items-center">
                      <Globe className="w-5 h-5 mr-3 text-muted-foreground" />
                      <a href="#" className="text-brand-600 hover:underline">www.example.com</a>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-medium mb-3">Business Hours</h3>
                  <div className="space-y-1">
                    <div className="flex justify-between">
                      <span>Monday - Friday</span>
                      <span>9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Saturday</span>
                      <span>10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Sunday</span>
                      <span>Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="reviews">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-medium">Customer Reviews</h3>
                  <Button>Write a Review</Button>
                </div>
                
                {/* Sample review - You would map through actual reviews here */}
                <div className="bg-muted/30 rounded-lg p-4">
                  <div className="flex justify-between mb-2">
                    <div className="flex items-center">
                      <div className="w-10 h-10 rounded-full bg-brand-100 dark:bg-brand-800 text-brand-600 dark:text-brand-300 flex items-center justify-center font-medium mr-3">JD</div>
                      <div>
                        <p className="font-medium">John Doe</p>
                        <p className="text-xs text-muted-foreground">2 weeks ago</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < 5 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground">
                    Absolutely loved my experience here! The staff was incredibly friendly and professional. 
                    The atmosphere was perfect, and everything exceeded my expectations. Would definitely recommend!
                  </p>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="photos">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <img src={image} alt="Business photo" className="w-full h-48 object-cover rounded-lg" />
                <img src={image} alt="Business photo" className="w-full h-48 object-cover rounded-lg" />
                <img src={image} alt="Business photo" className="w-full h-48 object-cover rounded-lg" />
              </div>
            </TabsContent>
            
            <TabsContent value="services">
              <div className="space-y-4">
                <p className="text-muted-foreground">Services and offerings provided by this business:</p>
                <ul className="grid grid-cols-2 gap-2">
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Service 1
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Service 2
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Service 3
                  </li>
                  <li className="flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-500 mr-2" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Service 4
                  </li>
                </ul>
              </div>
            </TabsContent>
          </Tabs>
        </div>
        
        {/* Sidebar with actions */}
        <div>
          <div className="bg-card border border-border rounded-xl p-5 sticky top-20">
            <div className="mb-6">
              <Button className="w-full mb-3 bg-brand-600 hover:bg-brand-700">
                <MessageSquare className="h-4 w-4 mr-2" />
                Contact Business
              </Button>
              <div className="grid grid-cols-3 gap-2">
                <Button variant="outline" size="icon" className="h-10 w-full">
                  <Heart className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="h-10 w-full">
                  <Bookmark className="h-4 w-4" />
                </Button>
                <Button variant="outline" size="icon" className="h-10 w-full">
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Location</h4>
              <div className="h-48 bg-muted mb-2 rounded-lg flex items-center justify-center">
                <MapPin className="h-6 w-6 text-muted-foreground" />
              </div>
              <p className="text-sm text-muted-foreground mb-2">{address}</p>
              <Button variant="outline" className="w-full text-sm">Get Directions</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusinessDetails;
