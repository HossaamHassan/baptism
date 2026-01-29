import { useState, useRef } from 'react';
import { Card, CardContent, CardFooter } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Input } from '@/app/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { ShoppingBag, Search, Heart, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion } from 'motion/react';

export function EShop() {
  const [searchQuery, setSearchQuery] = useState('');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = scrollContainerRef.current.offsetWidth;
      const newScrollPosition = scrollContainerRef.current.scrollLeft + (direction === 'right' ? scrollAmount : -scrollAmount);
      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: 'smooth'
      });
    }
  };

  const products = [
    {
      id: 1,
      name: 'Olive Wood Cross',
      description: 'Handcrafted from Holy Land olive wood',
      price: '25 JOD',
      image: 'https://images.unsplash.com/photo-1765120828282-63dc950b6f90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kY3JhZnRlZCUyMHJlbGlnaW91cyUyMGNyYWZ0cyUyMG9saXZlJTIwd29vZHxlbnwxfHx8fDE3Njk1ODQ2MDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Religious Items',
      rating: 4.9,
      badge: 'Bestseller',
    },
    {
      id: 2,
      name: 'Jordan River Water',
      description: 'Sacred water from the baptism site',
      price: '15 JOD',
      image: 'https://images.unsplash.com/photo-1627734553274-f9840516d027?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxKb3JkYW4lMjBSaXZlciUyMGJhcHRpc20lMjBob2x5JTIwc2l0ZSUyMGFlcmlhbHxlbnwxfHx8fDE3Njk1ODQ2MDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Keepsakes',
      rating: 5.0,
      badge: 'New',
    },
    {
      id: 3,
      name: 'Prayer Book',
      description: 'Multilingual devotional guide',
      price: '18 JOD',
      image: 'https://images.unsplash.com/photo-1655856631455-8f35e48c6722?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBhbHRhciUyMGNhbmRsZXMlMjBzYWNyZWR8ZW58MXx8fHwxNzY5NTg0NjA0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Books',
      rating: 4.8,
    },
    {
      id: 4,
      name: 'Handwoven Tapestry',
      description: 'Traditional Jordanian craftsmanship',
      price: '45 JOD',
      image: 'https://images.unsplash.com/photo-1678221668916-2b356309ce8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWRkbGUlMjBlYXN0ZXJuJTIwYXJjaGl0ZWN0dXJlJTIwaGVyaXRhZ2V8ZW58MXx8fHwxNzY5NTg0NjA1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Crafts',
      rating: 4.7,
    },
    {
      id: 5,
      name: 'Rosary Beads',
      description: 'Hand-carved olive wood rosary',
      price: '22 JOD',
      image: 'https://images.unsplash.com/photo-1765120828282-63dc950b6f90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kY3JhZnRlZCUyMHJlbGlnaW91cyUyMGNyYWZ0cyUyMG9saXZlJTIwd29vZHxlbnwxfHx8fDE3Njk1ODQ2MDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Religious Items',
      rating: 4.9,
    },
    {
      id: 6,
      name: 'Commemorative Medal',
      description: 'Limited edition baptism site medal',
      price: '30 JOD',
      image: 'https://images.unsplash.com/photo-1655856631455-8f35e48c6722?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBhbHRhciUyMGNhbmRsZXMlMjBzYWNyZWR8ZW58MXx8fHwxNzY5NTg0NjA0fDA&ixlib=rb-4.1.0&q=80&w=1080',
      category: 'Keepsakes',
      rating: 4.6,
      badge: 'Limited',
    },
  ];

  const categories = ['All', 'Religious Items', 'Keepsakes', 'Books', 'Crafts'];

  return (
    <section id="shop" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl mb-4">Authentic E-Shop</h2>
          <p className="text-lg text-[#8B8680] max-w-2xl mx-auto">
            Take home authentic handcrafted souvenirs and sacred items from the Holy Land
          </p>
        </motion.div>

        <div className="max-w-7xl mx-auto">
          {/* Search and Filter */}
          <div className="mb-8">
            <div className="relative max-w-xl mx-auto mb-6">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12"
              />
            </div>

            <Tabs defaultValue="All" className="w-full">
              <TabsList className="w-full justify-start overflow-x-auto">
                {categories.map((category) => (
                  <TabsTrigger key={category} value={category}>
                    {category}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>

          {/* Products Grid */}
          <div className="relative">
            {/* Navigation Arrows */}
            <Button
              variant="secondary"
              size="icon"
              onClick={() => scroll('left')}
              className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 h-12 w-12 rounded-full shadow-lg bg-white hover:bg-gray-100"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              onClick={() => scroll('right')}
              className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 h-12 w-12 rounded-full shadow-lg bg-white hover:bg-gray-100"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>

            <div className="flex gap-4 sm:gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin scroll-smooth" ref={scrollContainerRef}>
              {products.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="min-w-[280px] sm:min-w-[calc(50%-0.75rem)] lg:min-w-[calc(33.333%-1rem)] snap-start"
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-shadow group border-[#6B7A5A]/20 h-full">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      {product.badge && (
                        <Badge className="absolute top-3 left-3 bg-[#5B8FA3]">
                          {product.badge}
                        </Badge>
                      )}
                      <Button
                        size="icon"
                        variant="secondary"
                        className="absolute top-3 right-3 rounded-full bg-white/90 backdrop-blur-sm hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity"
                      >
                        <Heart className="h-4 w-4" />
                      </Button>
                    </div>
                    <CardContent className="p-4">
                      <div className="mb-2">
                        <Badge variant="outline" className="text-xs">
                          {product.category}
                        </Badge>
                      </div>
                      <h3 className="font-semibold mb-2">{product.name}</h3>
                      <p className="text-sm text-muted-foreground mb-3">
                        {product.description}
                      </p>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-amber-400 text-amber-400" />
                          <span className="text-sm font-medium">{product.rating}</span>
                        </div>
                        <span className="text-sm text-muted-foreground">
                          ({Math.floor(Math.random() * 100) + 20} reviews)
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold text-[#5B8FA3]">
                          {product.price}
                        </span>
                      </div>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button className="w-full bg-[#6B7A5A] hover:bg-[#5A6649]">
                        <ShoppingBag className="mr-2 h-4 w-4" />
                        Add to Cart
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Info Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="p-6 bg-[#F5F0E8] rounded-lg text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#5B8FA3] text-white mb-4">
                ✓
              </div>
              <h4 className="font-semibold mb-2">Authentic Products</h4>
              <p className="text-sm text-muted-foreground">
                All items are handcrafted by local artisans
              </p>
            </div>
            <div className="p-6 bg-[#F5F0E8] rounded-lg text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#5B8FA3] text-white mb-4">
                ✈
              </div>
              <h4 className="font-semibold mb-2">Worldwide Shipping</h4>
              <p className="text-sm text-muted-foreground">
                Fast and secure delivery to your doorstep
              </p>
            </div>
            <div className="p-6 bg-[#F5F0E8] rounded-lg text-center">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#5B8FA3] text-white mb-4">
                ♥
              </div>
              <h4 className="font-semibold mb-2">Support Local Communities</h4>
              <p className="text-sm text-muted-foreground">
                Proceeds support site preservation efforts
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}