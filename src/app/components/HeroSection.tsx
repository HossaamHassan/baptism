import { Button } from '@/app/components/ui/button';
import { Play, Calendar, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

interface HeroSectionProps {
  onBookNow: () => void;
  onVirtualTour: () => void;
}

export function HeroSection({ onBookNow, onVirtualTour }: HeroSectionProps) {
  return (
    <section className="relative h-[90vh] min-h-[500px] max-h-[900px] overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1627734553274-f9840516d027?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxKb3JkYW4lMjBSaXZlciUyMGJhcHRpc20lMjBob2x5JTIwc2l0ZSUyMGFlcmlhbHxlbnwxfHx8fDE3Njk1ODQ2MDN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Baptism Site of Jesus - Aerial View"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
      </div>

      {/* Content */}
      <div className="container relative mx-auto px-4 h-full flex items-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl text-white"
        >
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-xs sm:text-sm uppercase tracking-[0.2em] mb-3 sm:mb-4 text-[#E8DCC4] font-sans"
          >
            UNESCO World Heritage Site
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl mb-4 sm:mb-6 leading-tight"
          >
            The Baptism Site <br />of Jesus Christ
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="text-lg sm:text-xl md:text-2xl mb-3 sm:mb-4 text-gray-200 italic font-serif"
          >
            "This is my beloved Son, in whom I am well pleased."
          </motion.p>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="text-sm sm:text-base md:text-lg mb-8 sm:mb-10 text-gray-300 max-w-2xl"
          >
            Walk where Jesus walked. Experience the sacred waters of the Jordan River 
            at Bethany Beyond the Jordan, where John the Baptist baptized Jesus Christ 
            over 2,000 years ago.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4"
          >
            <Button 
              size="lg" 
              className="bg-[#5B8FA3] hover:bg-[#4A7A8A] text-white text-base sm:text-lg h-12 sm:h-14 px-6 sm:px-8 w-full sm:w-auto"
              onClick={onBookNow}
            >
              <Calendar className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Book Your Visit
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 text-base sm:text-lg h-12 sm:h-14 px-6 sm:px-8 w-full sm:w-auto"
              onClick={onVirtualTour}
            >
              <Play className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
              Start Virtual Tour
            </Button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.6 }}
            className="flex items-center gap-2 mt-6 sm:mt-8 text-xs sm:text-sm text-gray-300"
          >
            <MapPin className="h-3 w-3 sm:h-4 sm:w-4 shrink-0" />
            <span>Bethany Beyond the Jordan, Al-Maghtas, Jordan</span>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-white/70 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}