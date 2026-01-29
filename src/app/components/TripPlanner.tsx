import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { 
  MapPin, 
  Cloud, 
  Bus, 
  Car, 
  FileText, 
  Clock,
  Thermometer,
  Droplets,
  Wind,
  ExternalLink
} from 'lucide-react';
import { motion } from 'motion/react';

export function TripPlanner() {
  const weatherData = [
    { day: 'Today', temp: '24°C', condition: 'Sunny', icon: '☀️' },
    { day: 'Tomorrow', temp: '26°C', condition: 'Clear', icon: '🌤️' },
    { day: 'Friday', temp: '23°C', condition: 'Partly Cloudy', icon: '⛅' },
    { day: 'Saturday', temp: '25°C', condition: 'Sunny', icon: '☀️' },
  ];

  const shuttleSchedule = [
    { from: 'Amman', time: '07:00 AM', duration: '1h 15min', price: '15 JOD' },
    { from: 'Amman', time: '09:00 AM', duration: '1h 15min', price: '15 JOD' },
    { from: 'Dead Sea Hotels', time: '08:30 AM', duration: '45min', price: '12 JOD' },
    { from: 'Dead Sea Hotels', time: '11:00 AM', duration: '45min', price: '12 JOD' },
  ];

  const parkingInfo = [
    { zone: 'Main Parking - Zone A', capacity: 'Large Buses', distance: '200m from entrance', status: 'Available' },
    { zone: 'Parking - Zone B', capacity: 'Cars & Vans', distance: '150m from entrance', status: 'Available' },
    { zone: 'Premium Parking', capacity: 'Limited VIP', distance: '50m from entrance', status: 'Limited' },
  ];

  return (
    <section id="planner" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl mb-4">Trip Planner</h2>
          <p className="text-lg text-[#8B8680] max-w-2xl mx-auto">
            Everything you need to plan your perfect visit to the Baptism Site
          </p>
        </motion.div>

        <Tabs defaultValue="weather" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
            <TabsTrigger value="weather">
              <Cloud className="mr-2 h-4 w-4" />
              Weather
            </TabsTrigger>
            <TabsTrigger value="transport">
              <Bus className="mr-2 h-4 w-4" />
              Transport
            </TabsTrigger>
            <TabsTrigger value="parking">
              <Car className="mr-2 h-4 w-4" />
              Parking
            </TabsTrigger>
            <TabsTrigger value="visa">
              <FileText className="mr-2 h-4 w-4" />
              Visa Info
            </TabsTrigger>
          </TabsList>

          {/* Weather Tab */}
          <TabsContent value="weather">
            <Card className="border-[#6B7A5A]/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Cloud className="h-5 w-5 text-[#5B8FA3]" />
                  Local Weather Forecast
                </CardTitle>
                <CardDescription>
                  Plan your visit according to the weather conditions at Al-Maghtas
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-4 gap-4 mb-6">
                  {weatherData.map((day, index) => (
                    <div key={index} className="bg-[#F5F0E8] rounded-lg p-4 text-center">
                      <div className="text-sm text-muted-foreground mb-2">{day.day}</div>
                      <div className="text-4xl mb-2">{day.icon}</div>
                      <div className="text-2xl font-bold mb-1">{day.temp}</div>
                      <div className="text-sm">{day.condition}</div>
                    </div>
                  ))}
                </div>

                <div className="grid md:grid-cols-3 gap-4 bg-gradient-to-br from-[#5B8FA3]/10 to-[#6B7A5A]/10 rounded-lg p-6">
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
                      <Thermometer className="h-6 w-6 text-[#5B8FA3]" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Temperature</div>
                      <div className="font-semibold">24°C / 75°F</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
                      <Droplets className="h-6 w-6 text-[#5B8FA3]" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Humidity</div>
                      <div className="font-semibold">45%</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white">
                      <Wind className="h-6 w-6 text-[#5B8FA3]" />
                    </div>
                    <div>
                      <div className="text-sm text-muted-foreground">Wind Speed</div>
                      <div className="font-semibold">12 km/h</div>
                    </div>
                  </div>
                </div>

                <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                  <p className="text-sm text-amber-900">
                    <strong>Tip:</strong> Visit early morning (8-10 AM) or late afternoon (3-5 PM) 
                    for the most comfortable experience. Bring sun protection and water.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Transport Tab */}
          <TabsContent value="transport">
            <Card className="border-[#6B7A5A]/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Bus className="h-5 w-5 text-[#5B8FA3]" />
                  Shuttle Services
                </CardTitle>
                <CardDescription>
                  Convenient shuttle services from major locations in Jordan
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {shuttleSchedule.map((shuttle, index) => (
                  <div key={index} className="flex items-center justify-between p-4 border rounded-lg hover:bg-[#F5F0E8] transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#5B8FA3]/10">
                        <Bus className="h-6 w-6 text-[#5B8FA3]" />
                      </div>
                      <div>
                        <div className="font-semibold">{shuttle.from}</div>
                        <div className="text-sm text-muted-foreground flex items-center gap-2">
                          <Clock className="h-3 w-3" />
                          {shuttle.time} • {shuttle.duration}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="font-bold text-[#5B8FA3]">{shuttle.price}</div>
                        <div className="text-sm text-muted-foreground">per person</div>
                      </div>
                      <Button size="sm" variant="outline">Book Shuttle</Button>
                    </div>
                  </div>
                ))}

                <div className="mt-6 p-4 bg-[#E8DCC4]/30 rounded-lg">
                  <h4 className="font-semibold mb-2">Getting There by Car</h4>
                  <p className="text-sm text-muted-foreground mb-3">
                    The site is located 50km from Amman (1 hour drive) via Highway 40. 
                    Follow signs to "Baptism Site" or "Al-Maghtas".
                  </p>
                  <Button variant="outline" size="sm">
                    <MapPin className="mr-2 h-4 w-4" />
                    Open in Maps
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Parking Tab */}
          <TabsContent value="parking">
            <Card className="border-[#6B7A5A]/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Car className="h-5 w-5 text-[#5B8FA3]" />
                  Parking Information
                </CardTitle>
                <CardDescription>
                  Free parking available for all visitors with multiple zones
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {parkingInfo.map((parking, index) => (
                  <div key={index} className="p-4 border rounded-lg">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h4 className="font-semibold">{parking.zone}</h4>
                        <p className="text-sm text-muted-foreground">{parking.capacity}</p>
                      </div>
                      <Badge variant={parking.status === 'Available' ? 'default' : 'secondary'}>
                        {parking.status}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4" />
                      {parking.distance}
                    </div>
                  </div>
                ))}

                <div className="mt-6 grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                    <h4 className="font-semibold text-green-900 mb-2">Free Parking</h4>
                    <p className="text-sm text-green-800">
                      All parking zones are complimentary for visitors
                    </p>
                  </div>
                  <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">Accessible Parking</h4>
                    <p className="text-sm text-blue-800">
                      Dedicated spaces available near main entrance
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Visa Tab */}
          <TabsContent value="visa">
            <Card className="border-[#6B7A5A]/20">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <FileText className="h-5 w-5 text-[#5B8FA3]" />
                  Visa Requirements
                </CardTitle>
                <CardDescription>
                  Essential information for international visitors to Jordan
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  <div className="p-4 bg-[#F5F0E8] rounded-lg">
                    <h4 className="font-semibold mb-2">Visa on Arrival</h4>
                    <p className="text-sm text-muted-foreground">
                      Most nationalities can obtain a visa on arrival at Queen Alia International Airport 
                      or land border crossings. Cost: 40 JOD for single entry.
                    </p>
                  </div>

                  <div className="p-4 bg-[#F5F0E8] rounded-lg">
                    <h4 className="font-semibold mb-2">Jordan Pass</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Purchase the Jordan Pass online (from 70 JOD) which includes visa fee and 
                      entry to 40+ attractions including the Baptism Site.
                    </p>
                    <Button variant="outline" size="sm">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Learn More About Jordan Pass
                    </Button>
                  </div>

                  <div className="p-4 bg-[#F5F0E8] rounded-lg">
                    <h4 className="font-semibold mb-2">Entry Requirements</h4>
                    <ul className="text-sm text-muted-foreground space-y-2 mt-3">
                      <li className="flex items-start gap-2">
                        <span className="text-[#5B8FA3] mt-1">•</span>
                        <span>Valid passport with at least 6 months validity</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#5B8FA3] mt-1">•</span>
                        <span>Proof of accommodation in Jordan</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-[#5B8FA3] mt-1">•</span>
                        <span>Return or onward travel ticket</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <Button className="w-full bg-[#5B8FA3] hover:bg-[#4A7A8A]">
                  <ExternalLink className="mr-2 h-5 w-5" />
                  Check Visa Requirements (Ministry of Interior)
                </Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
