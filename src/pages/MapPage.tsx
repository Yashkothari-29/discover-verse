
import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Search, MapPin, Bookmark, Star, Phone, Clock } from 'lucide-react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import MapView from '@/components/map/MapView';

interface MapListingProps {
  id: string;
  name: string;
  category: string;
  address: string;
  rating: number;
  reviewCount: number;
  isOpen: boolean;
  isVerified: boolean;
  image: string;
}

const MapPage = () => {
  const [selectedListing, setSelectedListing] = useState<string | null>(null);
  
  const mapListings: MapListingProps[] = [
    {
      id: "1",
      name: "Coastal Breeze Café",
      category: "Food & Dining",
      address: "123 Ocean Avenue, Seaside",
      rating: 4.8,
      reviewCount: 127,
      isOpen: true,
      isVerified: true,
      image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "2",
      name: "Urban Tech Solutions",
      category: "Professional Services",
      address: "456 Tech Drive, Downtown",
      rating: 4.7,
      reviewCount: 89,
      isOpen: true,
      isVerified: true,
      image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    },
    {
      id: "3",
      name: "Evergreen Wellness Spa",
      category: "Health & Beauty",
      address: "789 Tranquility Way, Green Hills",
      rating: 4.9,
      reviewCount: 156,
      isOpen: true,
      isVerified: false,
      image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1000&q=80",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-20 pb-10">
        <div className="container">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold">Explore Nearby</h1>
            <div className="hidden md:flex items-center space-x-2">
              <div className="relative">
                <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input 
                  placeholder="Search location or business" 
                  className="pl-9 w-[250px]" 
                />
              </div>
              <Button>Search</Button>
            </div>
          </div>
          
          {/* Mobile search */}
          <div className="md:hidden mb-4">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search location or business" 
                className="pl-9" 
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left sidebar with search filters and results */}
            <div className="order-2 lg:order-1 lg:col-span-1">
              <div className="sticky top-20 space-y-4">
                <Card>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-bold">Filter Map Results</h3>
                      <Button variant="link" className="p-0 h-auto">Reset</Button>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex items-start space-x-2">
                          <Checkbox id="open-now" />
                          <div className="grid gap-1.5">
                            <Label htmlFor="open-now">Open Now</Label>
                          </div>
                        </div>
                        <div className="flex items-start space-x-2">
                          <Checkbox id="verified-business" />
                          <div className="grid gap-1.5">
                            <Label htmlFor="verified-business">Verified Businesses</Label>
                          </div>
                        </div>
                      </div>
                      
                      <Separator />
                      
                      <div>
                        <h4 className="font-medium mb-2">Categories</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {['Food & Dining', 'Shopping', 'Professional', 'Health & Beauty'].map((cat) => (
                            <div key={cat} className="flex items-start space-x-2">
                              <Checkbox id={`cat-${cat}`} />
                              <Label htmlFor={`cat-${cat}`} className="text-sm">{cat}</Label>
                            </div>
                          ))}
                        </div>
                        <Button variant="link" className="p-0 h-auto text-sm mt-1">More categories</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="space-y-4 mt-4">
                  <h3 className="font-bold flex items-center">
                    <MapPin className="h-4 w-4 mr-2" />
                    Nearby Results
                    <Badge className="ml-2">{mapListings.length}</Badge>
                  </h3>
                  
                  {mapListings.map((listing) => (
                    <Card 
                      key={listing.id} 
                      className={`hover:shadow-md transition-all cursor-pointer ${selectedListing === listing.id ? 'border-primary' : ''}`}
                      onClick={() => setSelectedListing(listing.id)}
                    >
                      <CardContent className="p-3">
                        <div className="flex gap-3">
                          <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
                            <img 
                              src={listing.image} 
                              alt={listing.name} 
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-medium line-clamp-1">{listing.name}</h4>
                            <p className="text-sm text-muted-foreground mb-1">{listing.category}</p>
                            <div className="flex items-center text-sm">
                              <Star className="h-3.5 w-3.5 text-yellow-500 mr-1 fill-yellow-500" />
                              <span className="font-medium">{listing.rating}</span>
                              <span className="text-muted-foreground ml-1">({listing.reviewCount})</span>
                            </div>
                            <div className="flex items-center text-xs text-muted-foreground mt-1">
                              <MapPin className="h-3 w-3 mr-1 flex-shrink-0" />
                              <span className="truncate">{listing.address}</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                      <CardFooter className="px-3 py-2 border-t flex justify-between">
                        <div className="flex items-center text-xs">
                          <Clock className="h-3 w-3 mr-1" />
                          <span className={listing.isOpen ? "text-green-600" : "text-red-600"}>
                            {listing.isOpen ? "Open Now" : "Closed"}
                          </span>
                        </div>
                        <div className="flex gap-2">
                          <Button size="sm" variant="ghost" className="h-7 w-7 p-0">
                            <Phone className="h-3.5 w-3.5" />
                          </Button>
                          <Button size="sm" variant="ghost" className="h-7 w-7 p-0">
                            <Bookmark className="h-3.5 w-3.5" />
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Main map container */}
            <div className="order-1 lg:order-2 lg:col-span-2">
              <div className="sticky top-20">
                <MapView />
                
                {/* Map controls - mobile only */}
                <div className="lg:hidden flex justify-center mt-4">
                  <div className="bg-card shadow-lg rounded-full border p-1.5 flex items-center">
                    <Button variant="ghost" size="sm" className="rounded-full h-9 px-4">List</Button>
                    <Separator orientation="vertical" className="h-6" />
                    <Button variant="ghost" size="sm" className="rounded-full h-9 px-4">Map</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default MapPage;
