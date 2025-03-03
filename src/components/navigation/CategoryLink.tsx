
import React from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { cn } from "@/lib/utils";
import {
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { SubItem } from '@/config/menuConfig';
import { Check, ChevronRight } from 'lucide-react';
import Image from '@/components/ui/image';

interface CategoryLinkProps {
  href: string;
  topText: string;
  bottomText: string;
  subItems?: SubItem[];
}

const CategoryLink: React.FC<CategoryLinkProps> = ({ 
  href, 
  topText, 
  bottomText, 
  subItems 
}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const isActive = location.pathname === href || location.pathname.startsWith(href + '/');

  const handleMenuTriggerClick = (e: React.MouseEvent) => {
    if (!subItems || subItems.length === 0) {
      navigate(href);
    }
  };

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger 
        className={cn(
          "h-auto py-2 transition-all duration-300",
          isActive 
            ? "border-2 border-primary rounded-md bg-transparent text-primary shadow-sm" 
            : "hover:bg-gray-50"
        )} 
        onClick={handleMenuTriggerClick}
      >
        <div className="flex flex-col text-left min-w-max px-3 rounded-md transition-all">
          <span className="text-sm font-medium text-gray-800 whitespace-nowrap">
            {topText}
          </span>
          <span className="text-xs text-gray-600 whitespace-nowrap">
            {bottomText}
          </span>
        </div>
      </NavigationMenuTrigger>
      {subItems && (
        <NavigationMenuContent className="z-50 absolute left-0 w-screen data-[motion^=from-]:animate-in data-[motion^=to-]:animate-out data-[motion^=from-]:fade-in data-[motion^=to-]:fade-out data-[motion=from-end]:slide-in-from-right-52 data-[motion=from-start]:slide-in-from-left-52 data-[motion=to-end]:slide-out-to-right-52 data-[motion=to-start]:slide-out-to-left-52">
          <div className="w-screen flex justify-center py-2">
            <div className="w-[90vw] lg:w-[80vw] p-3 lg:p-4 bg-white rounded-lg shadow-lg border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3 lg:gap-4">
                <div className="col-span-1 md:col-span-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 lg:gap-3">
                  {subItems.map((item) => {
                    const isItemActive = location.pathname === item.path;
                    return (
                      <Link
                        key={item.path}
                        to={item.path}
                        className={cn(
                          "group block p-2 lg:p-3 space-y-1 rounded-lg transition-all duration-300",
                          isItemActive 
                            ? "bg-gray-50 shadow-sm" 
                            : "hover:bg-gray-50 hover:shadow-md"
                        )}
                      >
                        <div className="aspect-video rounded-lg overflow-hidden bg-gray-100 mb-1 shadow-sm group-hover:shadow-md transition-shadow relative">
                          <Image 
                            src={item.image} 
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-300"
                          />
                          {isItemActive && (
                            <div className="absolute top-1 right-1 bg-primary text-white p-1 rounded-full">
                              <Check className="h-3 w-3" />
                            </div>
                          )}
                        </div>
                        <h3 className={cn(
                          "font-medium text-sm group-hover:text-primary transition-colors truncate",
                          isItemActive ? "text-primary" : "text-gray-900"
                        )}>
                          {item.title}
                        </h3>
                        <p className="text-xs text-gray-500 line-clamp-1">{item.description}</p>
                        {isItemActive && (
                          <div className="flex items-center text-primary text-xs">
                            <Check className="h-3 w-3 mr-1" /> Sélectionné
                          </div>
                        )}
                      </Link>
                    );
                  })}
                </div>
                <div className="col-span-1 flex flex-col items-center md:items-start">
                  <div className="aspect-square md:aspect-[3/4] rounded-lg overflow-hidden bg-gray-100 w-full max-w-[200px] md:max-w-none shadow-md hover:shadow-lg transition-shadow">
                    <Image 
                      src={href === "/vetements-cuisine" ? "/VetementDeCuisine/vestedecuisineImagebanner.jpg" : subItems[0].image} 
                      alt={topText}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="mt-2 lg:mt-4 text-center md:text-left">
                    <h3 className="font-medium text-sm lg:text-base text-gray-900">{topText}</h3>
                    <Link 
                      to={href} 
                      className="text-xs lg:text-sm text-primary hover:underline mt-1 inline-flex items-center group"
                    >
                      <span>Voir tout</span>
                      <ChevronRight className="h-3 w-3 ml-1 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </NavigationMenuContent>
      )}
    </NavigationMenuItem>
  );
};

export default CategoryLink;
