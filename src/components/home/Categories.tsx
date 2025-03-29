
import React from 'react';
import { ShoppingBag, Utensils, Briefcase, HeartPulse, Hotel, Scissors, Gamepad2, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";

type CategoryCardProps = {
  title: string;
  icon: React.ReactNode;
  color: string;
  count: number;
};

const CategoryCard = ({ title, icon, color, count }: CategoryCardProps) => {
  return (
    <Link to={`/businesses?category=${title.toLowerCase().replace(' & ', '-')}`}>
      <div className="group card-hover-effect bg-card rounded-2xl p-6 border border-border overflow-hidden h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
        <div className="flex flex-col items-center text-center">
          <div 
            className={`w-16 h-16 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 ${color}`}
          >
            {icon}
          </div>
          <h3 className="font-medium text-lg mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground">{count} businesses</p>
        </div>
      </div>
    </Link>
  );
};

const Categories = () => {
  const categories = [
    { 
      title: "Shopping", 
      icon: <ShoppingBag className="h-8 w-8 text-white" />, 
      color: "bg-brand-600", 
      count: 257,
    },
    { 
      title: "Food & Dining", 
      icon: <Utensils className="h-8 w-8 text-white" />, 
      color: "bg-teal-500", 
      count: 189,
    },
    { 
      title: "Professional", 
      icon: <Briefcase className="h-8 w-8 text-white" />, 
      color: "bg-brand-500", 
      count: 142,
    },
    { 
      title: "Health", 
      icon: <HeartPulse className="h-8 w-8 text-white" />, 
      color: "bg-teal-600", 
      count: 118,
    },
    { 
      title: "Hospitality", 
      icon: <Hotel className="h-8 w-8 text-white" />, 
      color: "bg-brand-700", 
      count: 93,
    },
    { 
      title: "Beauty", 
      icon: <Scissors className="h-8 w-8 text-white" />, 
      color: "bg-teal-400", 
      count: 86,
    },
    { 
      title: "Entertainment", 
      icon: <Gamepad2 className="h-8 w-8 text-white" />, 
      color: "bg-brand-400", 
      count: 72,
    },
    { 
      title: "Education", 
      icon: <GraduationCap className="h-8 w-8 text-white" />, 
      color: "bg-teal-500", 
      count: 64,
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
