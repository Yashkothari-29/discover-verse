
import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { 
  ShoppingBag, 
  Utensils, 
  Briefcase, 
  Scissors, 
  HeartPulse, 
  Car, 
  GraduationCap, 
  Building, 
  Hammer, 
  Palette, 
  Film, 
  Shirt 
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface CategoryItem {
  id: string;
  name: string;
  description: string;
  icon: React.ElementType;
  count: number;
  color: string;
}

const CategoriesPage: React.FC = () => {
  const categories: CategoryItem[] = [
    {
      id: 'food-dining',
      name: 'Food & Dining',
      description: 'Restaurants, cafes, bakeries, and more',
      icon: Utensils,
      count: 1254,
      color: 'bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400',
    },
    {
      id: 'shopping',
      name: 'Shopping & Retail',
      description: 'Stores, boutiques, malls, and markets',
      icon: ShoppingBag,
      count: 986,
      color: 'bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400',
    },
    {
      id: 'professional',
      name: 'Professional Services',
      description: 'Lawyers, consultants, agencies, and more',
      icon: Briefcase,
      count: 754,
      color: 'bg-amber-100 dark:bg-amber-900/20 text-amber-600 dark:text-amber-400',
    },
    {
      id: 'beauty',
      name: 'Beauty & Wellness',
      description: 'Salons, spas, fitness centers, and more',
      icon: Scissors,
      count: 632,
      color: 'bg-pink-100 dark:bg-pink-900/20 text-pink-600 dark:text-pink-400',
    },
    {
      id: 'health',
      name: 'Health & Medical',
      description: 'Doctors, clinics, hospitals, and pharmacies',
      icon: HeartPulse,
      count: 518,
      color: 'bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400',
    },
    {
      id: 'automotive',
      name: 'Automotive',
      description: 'Car dealerships, repair shops, and services',
      icon: Car,
      count: 431,
      color: 'bg-gray-100 dark:bg-gray-900/20 text-gray-600 dark:text-gray-400',
    },
    {
      id: 'education',
      name: 'Education & Training',
      description: 'Schools, universities, tutoring, and classes',
      icon: GraduationCap,
      count: 387,
      color: 'bg-indigo-100 dark:bg-indigo-900/20 text-indigo-600 dark:text-indigo-400',
    },
    {
      id: 'real-estate',
      name: 'Real Estate',
      description: 'Properties, agencies, brokers, and rentals',
      icon: Building,
      count: 345,
      color: 'bg-teal-100 dark:bg-teal-900/20 text-teal-600 dark:text-teal-400',
    },
    {
      id: 'home-services',
      name: 'Home Services',
      description: 'Cleaning, repairs, renovations, and more',
      icon: Hammer,
      count: 312,
      color: 'bg-orange-100 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400',
    },
    {
      id: 'arts',
      name: 'Arts & Entertainment',
      description: 'Theaters, museums, galleries, and venues',
      icon: Palette,
      count: 289,
      color: 'bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400',
    },
    {
      id: 'media',
      name: 'Media & Communication',
      description: 'Marketing, advertising, PR, and studios',
      icon: Film,
      count: 245,
      color: 'bg-cyan-100 dark:bg-cyan-900/20 text-cyan-600 dark:text-cyan-400',
    },
    {
      id: 'fashion',
      name: 'Fashion & Apparel',
      description: 'Clothing stores, designers, and accessories',
      icon: Shirt,
      count: 234,
      color: 'bg-violet-100 dark:bg-violet-900/20 text-violet-600 dark:text-violet-400',
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      
      <main className="flex-grow pt-20 pb-16">
        <section className="bg-muted/30 py-16">
          <div className="container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Browse All Categories</h1>
              <p className="text-lg text-muted-foreground">
                Explore our comprehensive directory categories to find exactly what you're looking for
              </p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories.map((category) => (
                <Link to={`/businesses?category=${category.id}`} key={category.id}>
                  <Card className="h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg overflow-hidden border-2 hover:border-brand-200 dark:hover:border-brand-800">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className={`p-3 rounded-lg mr-4 ${category.color}`}>
                          <category.icon className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-lg mb-1">{category.name}</h3>
                          <p className="text-muted-foreground text-sm mb-2">{category.description}</p>
                          <div className="text-sm font-medium text-brand-600 dark:text-brand-400">
                            {category.count.toLocaleString()} businesses
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button asChild variant="outline" size="lg">
                <Link to="/businesses">View All Businesses</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CategoriesPage;
