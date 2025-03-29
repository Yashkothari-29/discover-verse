
import React, { useState } from 'react';
import { ShoppingBag, Utensils, Briefcase, HeartPulse, Hotel, Scissors, Gamepad2, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { 
  Collapsible, 
  CollapsibleContent, 
  CollapsibleTrigger 
} from "@/components/ui/collapsible";
import { 
  Card, 
  CardContent 
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type CategoryCardProps = {
  title: string;
  icon: React.ReactNode;
  color: string;
  count: number;
  examples: Array<{
    id: string;
    name: string;
    rating: number;
    description: string;
  }>;
};

const CategoryCard = ({ title, icon, color, count, examples }: CategoryCardProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="group card-hover-effect bg-card rounded-2xl p-6 border border-border overflow-hidden">
      <div className="flex flex-col items-center text-center">
        <div 
          className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${color}`}
        >
          {icon}
        </div>
        <h3 className="font-medium text-lg mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground mb-3">{count} businesses</p>
        
        <Collapsible
          open={isOpen}
          onOpenChange={setIsOpen}
          className="w-full"
        >
          <CollapsibleTrigger className="w-full">
            <Badge variant="outline" className={cn(
              "bg-transparent hover:bg-transparent transition-all duration-200",
              isOpen ? "opacity-70" : ""
            )}>
              {isOpen ? "Hide examples" : "Show examples"}
            </Badge>
          </CollapsibleTrigger>
          <CollapsibleContent className="mt-4 space-y-3 text-left">
            {examples.map(example => (
              <Link to={`/business/${example.id}`} key={example.id}>
                <Card className="hover:bg-muted/50 transition-colors">
                  <CardContent className="p-3">
                    <div className="flex justify-between items-start mb-1">
                      <h4 className="font-medium text-sm">{example.name}</h4>
                      <div className="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-yellow-400 mr-1">
                          <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                        </svg>
                        <span className="text-xs">{example.rating.toFixed(1)}</span>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-2">{example.description}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
            <Link 
              to={`/categories/${title.toLowerCase()}`}
              className="block text-xs text-center text-brand-600 dark:text-brand-400 hover:underline mt-2"
            >
              View all {title} businesses →
            </Link>
          </CollapsibleContent>
        </Collapsible>
      </div>
    </div>
  );
};

const Categories = () => {
  const categories = [
    { 
      title: "Shopping", 
      icon: <ShoppingBag className="h-8 w-8 text-white" />, 
      color: "bg-brand-600", 
      count: 257,
      examples: [
        {
          id: "shop-1",
          name: "Urban Threads Boutique",
          rating: 4.8,
          description: "Trendy fashion boutique offering unique clothing and accessories for all styles."
        },
        {
          id: "shop-2",
          name: "Tech Haven Electronics",
          rating: 4.6,
          description: "Premium electronics store with the latest gadgets and tech accessories."
        },
        {
          id: "shop-3",
          name: "Green Thumb Garden Center",
          rating: 4.9,
          description: "Complete garden supply store with plants, tools, and expert advice."
        }
      ]
    },
    { 
      title: "Food & Dining", 
      icon: <Utensils className="h-8 w-8 text-white" />, 
      color: "bg-teal-500", 
      count: 189,
      examples: [
        {
          id: "food-1",
          name: "Seaside Bistro",
          rating: 4.7,
          description: "Cozy bistro serving fresh seafood and Mediterranean-inspired dishes."
        },
        {
          id: "food-2",
          name: "Spice Fusion",
          rating: 4.5,
          description: "Vibrant restaurant offering creative fusion cuisine with bold flavors."
        },
        {
          id: "food-3",
          name: "Sweet Delights Bakery",
          rating: 4.9,
          description: "Artisanal bakery specializing in handcrafted pastries and custom cakes."
        }
      ]
    },
    { 
      title: "Professional", 
      icon: <Briefcase className="h-8 w-8 text-white" />, 
      color: "bg-brand-500", 
      count: 142,
      examples: [
        {
          id: "prof-1",
          name: "Clear Vision Legal",
          rating: 4.8,
          description: "Full-service law firm specializing in business, real estate, and family law."
        },
        {
          id: "prof-2",
          name: "Precision Financial Advisors",
          rating: 4.7,
          description: "Expert financial planning and investment management services."
        },
        {
          id: "prof-3",
          name: "Elite Marketing Solutions",
          rating: 4.6,
          description: "Strategic marketing agency offering branding, digital, and content services."
        }
      ]
    },
    { 
      title: "Health", 
      icon: <HeartPulse className="h-8 w-8 text-white" />, 
      color: "bg-teal-600", 
      count: 118,
      examples: [
        {
          id: "health-1",
          name: "Wellness Family Practice",
          rating: 4.9,
          description: "Comprehensive family healthcare focusing on preventative medicine."
        },
        {
          id: "health-2",
          name: "Align Chiropractic Center",
          rating: 4.7,
          description: "Holistic chiropractic care for pain relief and wellness optimization."
        },
        {
          id: "health-3",
          name: "Serenity Mental Health",
          rating: 4.8,
          description: "Compassionate therapy and counseling services for all ages."
        }
      ]
    },
    { 
      title: "Hospitality", 
      icon: <Hotel className="h-8 w-8 text-white" />, 
      color: "bg-brand-700", 
      count: 93,
      examples: [
        {
          id: "hosp-1",
          name: "Horizon Luxury Suites",
          rating: 4.8,
          description: "Elegant accommodation with stunning views and premium amenities."
        },
        {
          id: "hosp-2",
          name: "Cozy Corner Inn",
          rating: 4.6,
          description: "Charming bed and breakfast offering personalized service in a historic building."
        },
        {
          id: "hosp-3",
          name: "Urban Oasis Resort",
          rating: 4.7,
          description: "Modern city hotel featuring spa facilities and fine dining restaurants."
        }
      ]
    },
    { 
      title: "Beauty", 
      icon: <Scissors className="h-8 w-8 text-white" />, 
      color: "bg-teal-400", 
      count: 86,
      examples: [
        {
          id: "beauty-1",
          name: "Glow Aesthetics Salon",
          rating: 4.9,
          description: "Premium salon offering cutting-edge hair styling and coloring services."
        },
        {
          id: "beauty-2",
          name: "Tranquil Day Spa",
          rating: 4.8,
          description: "Full-service spa with massage, facials, and body treatments."
        },
        {
          id: "beauty-3",
          name: "Polished Nail Studio",
          rating: 4.7,
          description: "Specialized nail salon with artistic designs and eco-friendly products."
        }
      ]
    },
    { 
      title: "Entertainment", 
      icon: <Gamepad2 className="h-8 w-8 text-white" />, 
      color: "bg-brand-400", 
      count: 72,
      examples: [
        {
          id: "ent-1",
          name: "Pixel Arcade Lounge",
          rating: 4.6,
          description: "Retro gaming arcade with classic and modern games, plus craft beverages."
        },
        {
          id: "ent-2",
          name: "Spotlight Theater",
          rating: 4.7,
          description: "Independent cinema showing arthouse films and hosting film festivals."
        },
        {
          id: "ent-3",
          name: "Rhythm Live Music Venue",
          rating: 4.8,
          description: "Intimate concert space featuring local and touring musicians."
        }
      ]
    },
    { 
      title: "Education", 
      icon: <GraduationCap className="h-8 w-8 text-white" />, 
      color: "bg-teal-500", 
      count: 64,
      examples: [
        {
          id: "edu-1",
          name: "BrightMinds Learning Center",
          rating: 4.9,
          description: "Tutoring center offering personalized academic support for K-12 students."
        },
        {
          id: "edu-2",
          name: "Creative Arts Academy",
          rating: 4.8,
          description: "Arts school with classes in painting, music, dance, and drama for all ages."
        },
        {
          id: "edu-3",
          name: "Tech Skills Institute",
          rating: 4.7,
          description: "Vocational training in programming, design, and digital marketing."
        }
      ]
    },
  ];

  return (
    <section className="py-16 bg-muted/50">
      <div className="container">
        <div className="flex flex-col items-center mb-12 text-center">
          <h2 className="text-3xl font-bold mb-4">Browse by Category</h2>
          <p className="text-muted-foreground max-w-2xl">
            Find the perfect local business to meet your needs from our wide range of categories
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((category) => (
            <CategoryCard
              key={category.title}
              title={category.title}
              icon={category.icon}
              color={category.color}
              count={category.count}
              examples={category.examples}
            />
          ))}
        </div>
        
        <div className="flex justify-center mt-10">
          <Link 
            to="/categories" 
            className="text-brand-600 dark:text-brand-400 hover:text-brand-800 dark:hover:text-brand-300 font-medium flex items-center gap-1 transition-colors"
          >
            View all categories
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Categories;
