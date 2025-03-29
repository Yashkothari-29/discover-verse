
import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import BusinessList from '@/components/business/BusinessList';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Slider } from '@/components/ui/slider';
import { Switch } from '@/components/ui/switch';
import { Separator } from '@/components/ui/separator';
import { Search, SlidersHorizontal } from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const BusinessesPage = () => {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-20 pb-16">
        <div className="container">
          <div className="mb-8">
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                {category && (
                  <>
                    <BreadcrumbItem>
                      <BreadcrumbLink href="/categories">Categories</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                      <BreadcrumbPage>{category?.replace('-', ' & ')}</BreadcrumbPage>
                    </BreadcrumbItem>
                  </>
                )}
                {!category && (
                  <BreadcrumbItem>
                    <BreadcrumbPage>All Businesses</BreadcrumbPage>
                  </BreadcrumbItem>
                )}
              </BreadcrumbList>
            </Breadcrumb>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Filter sidebar for desktop */}
            <div className="hidden lg:block">
              <div className="sticky top-24 bg-card rounded-lg border p-6">
                <h3 className="text-lg font-bold mb-4">Filters</h3>
                
                <div className="space-y-6">
                  <div>
                    <Label className="mb-2 block">Search</Label>
                    <div className="relative">
                      <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                      <Input 
                        placeholder="Search businesses..." 
                        className="pl-9" 
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label className="mb-2 block">Categories</Label>
                    <div className="space-y-2">
                      {['Food & Dining', 'Shopping', 'Professional Services', 'Health & Beauty', 'Entertainment'].map((cat) => (
                        <div key={cat} className="flex items-center">
                          <Switch id={`cat-${cat}`} />
                          <Label htmlFor={`cat-${cat}`} className="ml-2 cursor-pointer">{cat}</Label>
                        </div>
                      ))}
                      <Button variant="link" className="p-0 h-auto text-sm">Show more</Button>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <Label>Distance (miles)</Label>
                      <span className="text-sm">5 miles</span>
                    </div>
                    <Slider 
                      defaultValue={[5]} 
                      max={50} 
                      step={1}
                      className="mb-2" 
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>0</span>
                      <span>50</span>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <Label className="mb-2 block">Rating</Label>
                    <div className="space-y-2">
                      {[5, 4, 3, 2, 1].map((rating) => (
                        <div key={rating} className="flex items-center">
                          <Switch id={`rating-${rating}`} />
                          <Label htmlFor={`rating-${rating}`} className="ml-2 cursor-pointer">
                            {rating}+ Stars
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div>
                    <Label className="mb-2 block">Features</Label>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Switch id="open-now" />
                        <Label htmlFor="open-now" className="ml-2 cursor-pointer">Open Now</Label>
                      </div>
                      <div className="flex items-center">
                        <Switch id="verified" />
                        <Label htmlFor="verified" className="ml-2 cursor-pointer">Verified Business</Label>
                      </div>
                      <div className="flex items-center">
                        <Switch id="offers" />
                        <Label htmlFor="offers" className="ml-2 cursor-pointer">Special Offers</Label>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex flex-col space-y-2">
                    <Button className="w-full">Apply Filters</Button>
                    <Button variant="outline" className="w-full">Reset</Button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Main content */}
            <div className="lg:col-span-3">
              <div className="flex justify-between items-center mb-6 flex-wrap gap-4">
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold">
                    {category 
                      ? `${category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' & ')} Businesses` 
                      : 'All Businesses'}
                  </h1>
                  <p className="text-muted-foreground">Showing 1-6 of 156 businesses</p>
                </div>
                
                <div className="flex gap-2">
                  <Button 
                    variant="outline" 
                    className="md:hidden"
                    onClick={() => setIsFilterOpen(!isFilterOpen)}
                  >
                    <SlidersHorizontal className="h-4 w-4 mr-2" />
                    Filters
                  </Button>
                  <div className="hidden md:flex relative">
                    <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
                    <Input 
                      placeholder="Search businesses..." 
                      className="pl-9 w-[250px]" 
                    />
                  </div>
                </div>
              </div>
              
              {/* Mobile filters */}
              {isFilterOpen && (
                <div className="md:hidden bg-card rounded-lg border p-6 mb-6 animate-slide-in">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="font-bold">Filters</h3>
                    <Button variant="ghost" size="sm" onClick={() => setIsFilterOpen(false)}>
                      Close
                    </Button>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <Label className="mb-2 block">Categories</Label>
                      <div className="space-y-2">
                        {['Food & Dining', 'Shopping', 'Professional Services'].map((cat) => (
                          <div key={cat} className="flex items-center">
                            <Switch id={`mobile-cat-${cat}`} />
                            <Label htmlFor={`mobile-cat-${cat}`} className="ml-2">{cat}</Label>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <Label>Distance</Label>
                        <span className="text-sm">5 miles</span>
                      </div>
                      <Slider defaultValue={[5]} max={50} step={1} />
                    </div>
                    
                    <div>
                      <Label className="mb-2 block">Features</Label>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="flex items-center">
                          <Switch id="mobile-open-now" />
                          <Label htmlFor="mobile-open-now" className="ml-2">Open Now</Label>
                        </div>
                        <div className="flex items-center">
                          <Switch id="mobile-verified" />
                          <Label htmlFor="mobile-verified" className="ml-2">Verified</Label>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex gap-2 pt-2">
                      <Button className="flex-1">Apply</Button>
                      <Button variant="outline" className="flex-1">Reset</Button>
                    </div>
                  </div>
                </div>
              )}
              
              <BusinessList />
              
              <div className="mt-8 flex justify-center">
                <Button variant="outline" className="mr-2">Previous</Button>
                <Button variant="outline" className="bg-primary text-primary-foreground">1</Button>
                <Button variant="outline" className="mx-1">2</Button>
                <Button variant="outline" className="mx-1">3</Button>
                <Button variant="outline" className="ml-2">Next</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BusinessesPage;
