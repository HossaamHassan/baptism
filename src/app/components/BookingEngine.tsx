import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Calendar } from '@/app/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/app/components/ui/popover';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/app/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { Calendar as CalendarIcon, Users, Clock, Heart, Ticket } from 'lucide-react';
import { format } from 'date-fns';
import { motion } from 'motion/react';

export function BookingEngine() {
  const [generalDate, setGeneralDate] = useState<Date>();
  const [massDate, setMassDate] = useState<Date>();
  const [visitors, setVisitors] = useState('1');

  const availableTimes = [
    '08:00 AM', '09:00 AM', '10:00 AM', '11:00 AM',
    '12:00 PM', '01:00 PM', '02:00 PM', '03:00 PM', '04:00 PM'
  ];

  const massSchedule = [
    { time: '06:00 AM', language: 'English', availability: 'Available' },
    { time: '08:00 AM', language: 'Arabic', availability: 'Available' },
    { time: '10:00 AM', language: 'Spanish', availability: 'Available' },
    { time: '04:00 PM', language: 'Italian', availability: 'Limited' },
  ];

  return (
    <section id="book" className="py-20 bg-gradient-to-b from-white to-[#F5F0E8]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl mb-4">Plan Your Sacred Journey</h2>
          <p className="text-lg text-[#8B8680] max-w-2xl mx-auto">
            Book your visit to experience this holy site with real-time availability and instant confirmation
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <Tabs defaultValue="general" className="w-full">
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-2 mb-8 h-auto gap-2 sm:gap-0">
              <TabsTrigger value="general" className="py-3 sm:py-4 flex items-center justify-center sm:justify-start gap-2">
                <Ticket className="h-5 w-5 shrink-0" />
                <div className="text-left">
                  <div className="font-semibold text-sm sm:text-base">General Entry</div>
                  <div className="text-xs text-muted-foreground hidden sm:block">Individual & Group Visits</div>
                </div>
              </TabsTrigger>
              <TabsTrigger value="mass" className="py-3 sm:py-4 flex items-center justify-center sm:justify-start gap-2">
                <Heart className="h-5 w-5 shrink-0" />
                <div className="text-left">
                  <div className="font-semibold text-sm sm:text-base">Mass & Events</div>
                  <div className="text-xs text-muted-foreground hidden sm:block">Christian Services & Baptisms</div>
                </div>
              </TabsTrigger>
            </TabsList>

            {/* General Entry Booking */}
            <TabsContent value="general">
              <Card className="border-[#6B7A5A]/20 shadow-lg">
                <CardHeader>
                  <CardTitle>Book General Entry</CardTitle>
                  <CardDescription>
                    Schedule your visit to the Baptism Site with flexible timing options
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Date Selection */}
                    <div className="space-y-2">
                      <Label>Select Date</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {generalDate ? format(generalDate, 'PPP') : 'Pick a date'}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={generalDate}
                            onSelect={setGeneralDate}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    {/* Time Selection */}
                    <div className="space-y-2">
                      <Label>Preferred Time</Label>
                      <Select>
                        <SelectTrigger>
                          <Clock className="mr-2 h-4 w-4" />
                          <SelectValue placeholder="Select time slot" />
                        </SelectTrigger>
                        <SelectContent>
                          {availableTimes.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Number of Visitors */}
                    <div className="space-y-2">
                      <Label>Number of Visitors</Label>
                      <Select value={visitors} onValueChange={setVisitors}>
                        <SelectTrigger>
                          <Users className="mr-2 h-4 w-4" />
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                            <SelectItem key={num} value={num.toString()}>
                              {num} {num === 1 ? 'Visitor' : 'Visitors'}
                            </SelectItem>
                          ))}
                          <SelectItem value="group">Group (10+)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="your.email@example.com"
                        className="bg-white"
                      />
                    </div>
                  </div>

                  {/* Pricing Summary */}
                  <div className="bg-[#F5F0E8] rounded-lg p-4 space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm">Entry Fee ({visitors} {visitors === '1' ? 'visitor' : 'visitors'})</span>
                      <span className="font-semibold">12 JOD</span>
                    </div>
                    <div className="flex justify-between items-center pt-2 border-t border-[#6B7A5A]/20">
                      <span className="font-semibold">Total</span>
                      <span className="text-xl font-bold text-[#5B8FA3]">12 JOD</span>
                    </div>
                  </div>

                  <Button className="w-full bg-[#5B8FA3] hover:bg-[#4A7A8A] h-12">
                    Confirm Booking
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>

            {/* Mass & Events Booking */}
            <TabsContent value="mass">
              <Card className="border-[#6B7A5A]/20 shadow-lg">
                <CardHeader>
                  <CardTitle>Register for Mass & Christian Events</CardTitle>
                  <CardDescription>
                    Join us for Holy Mass, baptisms, and special Christian ceremonies
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Date Selection */}
                  <div className="space-y-2">
                    <Label>Select Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className="w-full justify-start text-left font-normal"
                        >
                          <CalendarIcon className="mr-2 h-4 w-4" />
                          {massDate ? format(massDate, 'PPP') : 'Pick a date'}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={massDate}
                          onSelect={setMassDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>
                  </div>

                  {/* Mass Schedule */}
                  <div className="space-y-3">
                    <Label>Available Mass Times</Label>
                    {massSchedule.map((mass, index) => (
                      <div
                        key={index}
                        className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border rounded-lg hover:bg-[#F5F0E8] cursor-pointer transition-colors gap-3"
                      >
                        <div className="flex items-center gap-3 sm:gap-4 w-full sm:w-auto">
                          <div className="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-full bg-[#5B8FA3]/10 shrink-0">
                            <Heart className="h-5 w-5 sm:h-6 sm:w-6 text-[#5B8FA3]" />
                          </div>
                          <div>
                            <div className="font-semibold text-sm sm:text-base">{mass.time}</div>
                            <div className="text-xs sm:text-sm text-muted-foreground">{mass.language}</div>
                          </div>
                        </div>
                        <div className="flex items-center gap-2 sm:gap-3 w-full sm:w-auto">
                          <span className={`text-xs sm:text-sm px-2 sm:px-3 py-1 rounded-full flex-1 sm:flex-none text-center ${
                            mass.availability === 'Available' 
                              ? 'bg-green-100 text-green-700' 
                              : 'bg-amber-100 text-amber-700'
                          }`}>
                            {mass.availability}
                          </span>
                          <Button size="sm" variant="outline" className="whitespace-nowrap">Select</Button>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Contact Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="Your full name"
                        className="bg-white"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="mass-email">Email Address</Label>
                      <Input
                        id="mass-email"
                        type="email"
                        placeholder="your.email@example.com"
                        className="bg-white"
                      />
                    </div>
                  </div>

                  <Button className="w-full bg-[#6B7A5A] hover:bg-[#5A6649] h-12">
                    <Heart className="mr-2 h-5 w-5" />
                    Register for Mass
                  </Button>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}