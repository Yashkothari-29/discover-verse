
import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Star, Clock, ExternalLink } from 'lucide-react';
import { Badge } from "@/components/ui/badge";

export interface Business {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  address: string;
  rating: number;
  reviewCount: number;
  isOpen: boolean;
  isPremium?: boolean;
  isVerified?: boolean;
}

interface BusinessCardProps {
  business: Business;
  featured?: boolean;
}

const BusinessCard = ({ business, featured = false }: BusinessCardProps) => {
  const { id, name, category, image, description, address, rating, reviewCount, isOpen, isPremium, isVerified } = business;
  
  return (
    <Link
      to={`/business/${id}`}
      className={`group flex flex-col bg-card border border-border rounded-2xl overflow-hidden card-hover-effect ${featured ? 'md:flex-row' : ''}`}
    >
      {/* Image container */}
      <div className={`relative overflow-hidden ${featured ? 'md:w-2/5' : 'h-48'}`}>
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {isPremium && (
          <Badge variant="default" className="absolute top-3 left-3 bg-brand-600 hover:bg-brand-600">
            Premium
          </Badge>
        )}
      </div>
      
      {/* Content container */}
      <div className={`flex flex-col p-5 ${featured ? 'md:w-3/5' : ''}`}>
        <div className="flex justify-between items-start mb-2">
          <div>
            <h3 className="font-semibold text-lg">{name}</h3>
            <p className="text-sm text-muted-foreground">{category}</p>
          </div>
          
          <div className="flex items-center">
            <Star 
              className="w-4 h-4 mr-1 fill-yellow-400 text-yellow-400"
              aria-hidden="true"
            />
            <span className="text-sm font-medium">{rating}</span>
            <span className="text-xs text-muted-foreground ml-1">({reviewCount})</span>
          </div>
        </div>
        
        <p className="text-sm mb-4 line-clamp-2 text-muted-foreground">
          {description}
        </p>
        
        <div className="mt-auto flex flex-col space-y-2">
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="w-4 h-4 mr-1.5" aria-hidden="true" />
            <span className="truncate">{address}</span>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Clock className={`w-4 h-4 mr-1.5 ${isOpen ? 'text-green-500' : 'text-red-500'}`} aria-hidden="true" />
              <span className={`text-sm ${isOpen ? 'text-green-500' : 'text-red-500'}`}>
                {isOpen ? 'Open Now' : 'Closed'}
              </span>
            </div>
            
            <div className="flex items-center space-x-2">
              {isVerified && (
                <Badge variant="outline" className="bg-muted text-foreground border-blue-200 dark:border-blue-800 flex items-center gap-1">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-blue-500">
                    <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0112 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 013.498 1.307 4.491 4.491 0 011.307 3.497A4.49 4.49 0 0121.75 12a4.49 4.49 0 01-1.549 3.397 4.491 4.491 0 01-1.307 3.497 4.491 4.491 0 01-3.497 1.307A4.49 4.49 0 0112 21.75a4.49 4.49 0 01-3.397-1.549 4.49 4.49 0 01-3.498-1.306 4.491 4.491 0 01-1.307-3.498A4.49 4.49 0 012.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 011.307-3.497 4.49 4.49 0 013.497-1.307zm7.007 6.387a.75.75 0 10-1.22-.872l-3.236 4.53-1.471-1.47a.75.75 0 00-1.06 1.06l2 2a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs">Verified</span>
                </Badge>
              )}
              
              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                <ExternalLink className="h-4 w-4 text-muted-foreground" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BusinessCard;
