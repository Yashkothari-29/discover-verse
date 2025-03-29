
import React from 'react';
import { MapPin } from 'lucide-react';

const MapView = () => {
  return (
    <div className="relative h-[500px] bg-gray-100 dark:bg-gray-800 rounded-xl overflow-hidden">
      {/* Placeholder for actual map implementation */}
      <div className="absolute inset-0 flex items-center justify-center flex-col">
        <MapPin className="h-16 w-16 text-muted-foreground mb-4" />
        <p className="text-muted-foreground">Interactive map would be implemented here</p>
        <p className="text-sm text-muted-foreground">Using Mapbox, Google Maps, or Leaflet</p>
      </div>

      {/* Example map pins */}
      <div className="absolute left-[20%] top-[30%]">
        <div className="relative group">
          <MapPin className="h-6 w-6 text-brand-600 fill-brand-200 animate-pulse" />
          <div className="hidden group-hover:block absolute bottom-full mb-2 -left-1/2 p-2 bg-card shadow-lg rounded-lg border border-border whitespace-nowrap z-10">
            <p className="font-medium text-sm">Coastal Breeze Café</p>
            <p className="text-xs text-muted-foreground">Food & Dining</p>
          </div>
        </div>
      </div>

      <div className="absolute left-[60%] top-[50%]">
        <div className="relative group">
          <MapPin className="h-6 w-6 text-teal-500 fill-teal-200" />
          <div className="hidden group-hover:block absolute bottom-full mb-2 -left-1/2 p-2 bg-card shadow-lg rounded-lg border border-border whitespace-nowrap z-10">
            <p className="font-medium text-sm">Urban Tech Solutions</p>
            <p className="text-xs text-muted-foreground">Professional Services</p>
          </div>
        </div>
      </div>

      <div className="absolute left-[40%] top-[60%]">
        <div className="relative group">
          <MapPin className="h-6 w-6 text-brand-600 fill-brand-200" />
          <div className="hidden group-hover:block absolute bottom-full mb-2 -left-1/2 p-2 bg-card shadow-lg rounded-lg border border-border whitespace-nowrap z-10">
            <p className="font-medium text-sm">Evergreen Wellness Spa</p>
            <p className="text-xs text-muted-foreground">Health & Beauty</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MapView;
