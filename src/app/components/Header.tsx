import { useState } from 'react';
import { Button } from '@/app/components/ui/button';
import { 
  Globe, 
  Menu, 
  X, 
  ChevronDown,
  Search,
  BookOpen,
  MapPin,
  Calendar,
  Heart,
  ShoppingBag,
  Users
} from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/app/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
  SheetHeader,
} from '@/app/components/ui/sheet';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/app/components/ui/select';
import logo from "@/assets/logo.png";

const languages = [
  { code: 'ar', name: 'العربية' },
  { code: 'en', name: 'English' },
  { code: 'fr', name: 'Français' },
  { code: 'it', name: 'Italiano' },
  { code: 'hi', name: 'हिन्दी' },
  { code: 'es', name: 'Español' },
  { code: 'tl', name: 'Filipino' },
  { code: 'ru', name: 'Русский' },
  { code: 'pl', name: 'Polski' },
  { code: 'el', name: 'Ελληνικά' },
  { code: 'pt', name: 'Português' },
  { code: 'ko', name: '한국어' },
];

export function Header() {
  const [language, setLanguage] = useState('en');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 m-[0px]">
      <div className="container mx-auto px-4">
        <div className="flex h-20 items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src={logo} 
              alt="The Baptism Site of Jesus Christ - Bethany Beyond the Jordan" 
              className="h-12 w-auto"
            />
          </div>

          {/* Desktop Navigation - Center/Left */}
          <nav className="hidden lg:flex items-center flex-1">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">
                    <BookOpen className="mr-2 h-4 w-4" />
                    The Journey
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-3 p-4">
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#F5F0E8]">
                        <div className="font-medium leading-none">History</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Discover the ancient roots of this sacred site
                        </p>
                      </NavigationMenuLink>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#F5F0E8]">
                        <div className="font-medium leading-none">Biblical Significance</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          The spiritual meaning of the Baptism of Jesus
                        </p>
                      </NavigationMenuLink>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#F5F0E8]">
                        <div className="font-medium leading-none">Archaeology</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Archaeological findings and discoveries
                        </p>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">
                    <MapPin className="mr-2 h-4 w-4" />
                    Visit
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[500px] grid-cols-2 gap-3 p-4">
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#F5F0E8]">
                        <Calendar className="mb-2 h-4 w-4 text-[#5B8FA3]" />
                        <div className="font-medium leading-none">Book General Entry</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Schedule your visit to the site
                        </p>
                      </NavigationMenuLink>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#F5F0E8]">
                        <Heart className="mb-2 h-4 w-4 text-[#5B8FA3]" />
                        <div className="font-medium leading-none">Mass Booking</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Register for Masses and events
                        </p>
                      </NavigationMenuLink>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#F5F0E8]">
                        <MapPin className="mb-2 h-4 w-4 text-[#5B8FA3]" />
                        <div className="font-medium leading-none">Trip Planner</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Plan your journey with guides
                        </p>
                      </NavigationMenuLink>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#F5F0E8]">
                        <Globe className="mb-2 h-4 w-4 text-[#5B8FA3]" />
                        <div className="font-medium leading-none">Virtual Tour</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Experience 360° immersive tour
                        </p>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent">
                    <Users className="mr-2 h-4 w-4" />
                    Community
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid w-[400px] gap-3 p-4">
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#F5F0E8]">
                        <div className="font-medium leading-none">Support & Donations</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Help preserve this sacred heritage
                        </p>
                      </NavigationMenuLink>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#F5F0E8]">
                        <div className="font-medium leading-none">E-Shop</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Authentic products and souvenirs
                        </p>
                      </NavigationMenuLink>
                      <NavigationMenuLink className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-[#F5F0E8]">
                        <div className="font-medium leading-none">Social Media</div>
                        <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                          Connect with our community
                        </p>
                      </NavigationMenuLink>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </nav>

          {/* Right Side Actions - Grouped */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Icon Group: Search, Favorites, Cart */}
            <div className="flex items-center gap-2">
              {/* Search */}
              <Button variant="ghost" size="icon" className="rounded-full">
                <Search className="h-5 w-5" />
              </Button>

              {/* Favourites */}
              <Button variant="ghost" size="icon" className="rounded-full relative">
                <Heart className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-[#5B8FA3] text-white text-xs flex items-center justify-center">
                  0
                </span>
              </Button>

              {/* Shopping Cart */}
              <Button variant="ghost" size="icon" className="rounded-full relative">
                <ShoppingBag className="h-5 w-5" />
                <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-[#5B8FA3] text-white text-xs flex items-center justify-center">
                  0
                </span>
              </Button>
            </div>

            {/* Separator */}
            <div className="h-8 w-px bg-gray-200"></div>

            {/* Language Selector */}
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="w-[140px] border-[#6B7A5A]/30">
                <Globe className="mr-2 h-4 w-4" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {languages.map((lang) => (
                  <SelectItem key={lang.code} value={lang.code}>
                    {lang.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            {/* Book Now CTA */}
            <Button className="bg-[#5B8FA3] hover:bg-[#4A7A8A] text-white">
              Book Now
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="flex items-center gap-3 lg:hidden">
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="w-[120px]">
                <Globe className="mr-2 h-4 w-4" />
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {languages.map((lang) => (
                  <SelectItem key={lang.code} value={lang.code}>
                    {lang.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] px-6">
                <SheetHeader className="sr-only">
                  <SheetTitle>Navigation Menu</SheetTitle>
                  <SheetDescription>
                    Browse and navigate through different sections of the Baptism Site of Jesus
                  </SheetDescription>
                </SheetHeader>
                <nav className="flex flex-col gap-6 mt-8 pb-8">
                  <Button variant="default" className="w-full bg-[#5B8FA3] hover:bg-[#4A7A8A] h-12 text-base">
                    <Calendar className="mr-2 h-5 w-5" />
                    Book Now
                  </Button>
                  
                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="mb-4 font-semibold text-base flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-[#6B7A5A]" />
                      The Journey
                    </h3>
                    <div className="flex flex-col gap-1 ml-7">
                      <a href="#history" className="text-sm py-2.5 hover:text-[#5B8FA3] transition-colors rounded-md hover:bg-[#F5F0E8] px-3 -mx-3">
                        History
                      </a>
                      <a href="#biblical" className="text-sm py-2.5 hover:text-[#5B8FA3] transition-colors rounded-md hover:bg-[#F5F0E8] px-3 -mx-3">
                        Biblical Significance
                      </a>
                      <a href="#archaeology" className="text-sm py-2.5 hover:text-[#5B8FA3] transition-colors rounded-md hover:bg-[#F5F0E8] px-3 -mx-3">
                        Archaeology
                      </a>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="mb-4 font-semibold text-base flex items-center gap-2">
                      <MapPin className="h-5 w-5 text-[#5B8FA3]" />
                      Visit
                    </h3>
                    <div className="flex flex-col gap-1 ml-7">
                      <a href="#book" className="text-sm py-2.5 hover:text-[#5B8FA3] transition-colors rounded-md hover:bg-[#F5F0E8] px-3 -mx-3">
                        Book General Entry
                      </a>
                      <a href="#mass" className="text-sm py-2.5 hover:text-[#5B8FA3] transition-colors rounded-md hover:bg-[#F5F0E8] px-3 -mx-3">
                        Mass Booking
                      </a>
                      <a href="#planner" className="text-sm py-2.5 hover:text-[#5B8FA3] transition-colors rounded-md hover:bg-[#F5F0E8] px-3 -mx-3">
                        Trip Planner
                      </a>
                      <a href="#tour" className="text-sm py-2.5 hover:text-[#5B8FA3] transition-colors rounded-md hover:bg-[#F5F0E8] px-3 -mx-3">
                        Virtual Tour
                      </a>
                    </div>
                  </div>
                  
                  <div className="border-t border-gray-200 pt-6">
                    <h3 className="mb-4 font-semibold text-base flex items-center gap-2">
                      <Users className="h-5 w-5 text-[#6B7A5A]" />
                      Community
                    </h3>
                    <div className="flex flex-col gap-1 ml-7">
                      <a href="#donate" className="text-sm py-2.5 hover:text-[#5B8FA3] transition-colors rounded-md hover:bg-[#F5F0E8] px-3 -mx-3">
                        Support & Donations
                      </a>
                      <a href="#shop" className="text-sm py-2.5 hover:text-[#5B8FA3] transition-colors rounded-md hover:bg-[#F5F0E8] px-3 -mx-3">
                        E-Shop
                      </a>
                      <a href="#social" className="text-sm py-2.5 hover:text-[#5B8FA3] transition-colors rounded-md hover:bg-[#F5F0E8] px-3 -mx-3">
                        Social Media
                      </a>
                    </div>
                  </div>
                  
                  {/* Quick Actions */}
                  <div className="border-t border-gray-200 pt-6">
                    <div className="flex gap-3">
                      <Button variant="outline" size="icon" className="flex-1 h-12">
                        <Search className="h-5 w-5" />
                      </Button>
                      <Button variant="outline" size="icon" className="flex-1 h-12 relative">
                        <Heart className="h-5 w-5" />
                        <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-[#5B8FA3] text-white text-xs flex items-center justify-center">
                          0
                        </span>
                      </Button>
                      <Button variant="outline" size="icon" className="flex-1 h-12 relative">
                        <ShoppingBag className="h-5 w-5" />
                        <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-[#5B8FA3] text-white text-xs flex items-center justify-center">
                          0
                        </span>
                      </Button>
                    </div>
                  </div>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}