
import React from 'react';
import { Search, ChevronDown, Filter, MapPin } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";

const SearchFilter = () => {
  return (
    <div className="bg-card border border-border rounded-xl p-4">
      <div className="flex flex-col md:flex-row gap-4">
        {/* Search input */}
        <div className="flex-grow relative">
          <Input
            placeholder="Search businesses..."
            className="pl-10"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
        </div>
        
        {/* Location selector */}
        <div className="relative w-full md:w-auto">
          <div className="relative">
            <Input
              placeholder="Location"
              className="pl-10 pr-10 md:w-48"
            />
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
          </div>
        </div>
        
        {/* Filter button */}
        <Button variant="outline" className="flex gap-2 items-center">
          <Filter className="h-4 w-4" />
          Filters
        </Button>
        
        {/* Search button */}
        <Button className="bg-gradient-to-r from-brand-600 to-teal-500 hover:from-brand-700 hover:to-teal-600">
          Search
        </Button>
      </div>
      
      {/* Active filters */}
      <div className="flex flex-wrap gap-2 mt-4">
        <Badge variant="outline" className="flex items-center gap-1 bg-muted/50">
          Category: Food & Dining
          <button className="ml-1 hover:text-destructive">×</button>
        </Badge>
        <Badge variant="outline" className="flex items-center gap-1 bg-muted/50">
          Open Now
          <button className="ml-1 hover:text-destructive">×</button>
        </Badge>
        <Badge variant="outline" className="flex items-center gap-1 bg-muted/50">
          Rating: 4+ Stars
          <button className="ml-1 hover:text-destructive">×</button>
        </Badge>
        <Button variant="link" size="sm" className="text-xs h-6 text-muted-foreground hover:text-foreground">
          Clear All
        </Button>
      </div>
    </div>
  );
};

export default SearchFilter;
