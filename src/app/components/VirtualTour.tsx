import { Card, CardContent } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Play, Maximize2, Volume2, Map, Eye } from 'lucide-react';
import { motion } from 'motion/react';

export function VirtualTour() {
  const tourStops = [
    {
      title: 'The Jordan River',
      description: 'Where Jesus was baptized by John the Baptist',
      duration: '5 min',
      image: 'https://images.unsplash.com/photo-1627734553274-f9840516d027?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxKb3JkYW4lMjBSaXZlciUyMGJhcHRpc20lMjBob2x5JTIwc2l0ZSUyMGFlcmlhbHxlbnwxfHx8fDE3Njk1ODQ2MDN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Ancient Churches',
      description: 'Byzantine-era churches and baptismal pools',
      duration: '7 min',
      image: 'https://images.unsplash.com/photo-1678221668916-2b356309ce8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWRkbGUlMjBlYXN0ZXJuJTIwYXJjaGl0ZWN0dXJlJTIwaGVyaXRhZ2V8ZW58MXx8fHwxNzY5NTg0NjA1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Sacred Pathway',
      description: 'Follow the pilgrimage trail through history',
      duration: '6 min',
      image: 'https://images.unsplash.com/photo-1763231185100-66c93ee515f5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGlyaXR1YWwlMjBwYXRod2F5JTIwbmF0dXJlJTIwc3RvbmVzfGVufDF8fHx8MTc2OTU4NDYwNHww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <section id="tour" className="py-20 bg-gradient-to-b from-[#F5F0E8] to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge className="mb-4 bg-[#5B8FA3]">
            <Eye className="mr-2 h-3 w-3" />
            360° Virtual Experience
          </Badge>
          <h2 className="text-4xl md:text-5xl mb-4">Immersive Virtual Tour</h2>
          <p className="text-lg text-[#8B8680] max-w-2xl mx-auto">
            Experience the sacred site from anywhere in the world with our interactive 
            360-degree virtual tour and multimedia storytelling
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          {/* Main Virtual Tour Preview */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="relative mb-12 rounded-2xl overflow-hidden shadow-2xl group"
          >
            <div className="aspect-video relative">
              <img
                src="https://images.unsplash.com/photo-1627734553274-f9840516d027?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxKb3JkYW4lMjBSaXZlciUyMGJhcHRpc20lMjBob2x5JTIwc2l0ZSUyMGFlcmlhbHxlbnwxfHx8fDE3Njk1ODQ2MDN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Virtual Tour Preview"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex h-20 w-20 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm shadow-xl hover:bg-white transition-all"
                >
                  <Play className="h-10 w-10 text-[#5B8FA3] ml-1" />
                </motion.button>
              </div>

              {/* Controls */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="flex items-center gap-2">
                  <Button size="sm" variant="secondary" className="bg-white/90 backdrop-blur-sm">
                    <Volume2 className="h-4 w-4" />
                  </Button>
                </div>
                <div className="flex items-center gap-2">
                  <Button size="sm" variant="secondary" className="bg-white/90 backdrop-blur-sm">
                    <Map className="h-4 w-4 mr-2" />
                    View Map
                  </Button>
                  <Button size="sm" variant="secondary" className="bg-white/90 backdrop-blur-sm">
                    <Maximize2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Tour Stops */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-center">Virtual Tour Highlights</h3>
            <div className="grid md:grid-cols-3 gap-6">
              {tourStops.map((stop, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden hover:shadow-xl transition-shadow group cursor-pointer border-[#6B7A5A]/20">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={stop.image}
                        alt={stop.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <Badge className="mb-2 bg-white/20 backdrop-blur-sm text-white border-white/30">
                          {stop.duration}
                        </Badge>
                      </div>
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/90 backdrop-blur-sm">
                          <Play className="h-6 w-6 text-[#5B8FA3] ml-0.5" />
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h4 className="font-semibold mb-1">{stop.title}</h4>
                      <p className="text-sm text-muted-foreground">{stop.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* QR Code Feature */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mt-12 p-8 bg-gradient-to-br from-[#5B8FA3]/10 to-[#6B7A5A]/10 rounded-2xl border border-[#6B7A5A]/20"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-2xl font-semibold mb-4">On-Site Interactive Experience</h3>
                <p className="text-muted-foreground mb-6">
                  When you visit in person, scan QR codes along the trail to unlock:
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#5B8FA3] text-white text-xs font-bold mt-0.5">
                      1
                    </div>
                    <div>
                      <div className="font-medium">Audio Narrations</div>
                      <div className="text-sm text-muted-foreground">Biblical passages and historical context</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#5B8FA3] text-white text-xs font-bold mt-0.5">
                      2
                    </div>
                    <div>
                      <div className="font-medium">Historical Overlays</div>
                      <div className="text-sm text-muted-foreground">See reconstructions of ancient structures</div>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#5B8FA3] text-white text-xs font-bold mt-0.5">
                      3
                    </div>
                    <div>
                      <div className="font-medium">Digital Certificate</div>
                      <div className="text-sm text-muted-foreground">Download your commemorative visit certificate</div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <div className="bg-white p-8 rounded-2xl shadow-xl">
                  <div className="w-48 h-48 bg-gradient-to-br from-[#5B8FA3] to-[#6B7A5A] rounded-lg flex items-center justify-center">
                    <div className="text-white text-center">
                      <Map className="h-16 w-16 mx-auto mb-4" />
                      <div className="text-sm font-medium">Scan QR Code</div>
                      <div className="text-xs opacity-80">At the site</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
