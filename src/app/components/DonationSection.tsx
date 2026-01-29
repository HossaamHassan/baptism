import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Label } from '@/app/components/ui/label';
import { Progress } from '@/app/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/app/components/ui/tabs';
import { Heart, Users, Building2, Leaf, TrendingUp, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

export function DonationSection() {
  const projects = [
    {
      title: 'Church Restoration',
      description: 'Preserving Byzantine-era structures',
      raised: 75000,
      goal: 100000,
      icon: Building2,
      color: '#5B8FA3',
    },
    {
      title: 'Community Development',
      description: 'Supporting local families and education',
      raised: 42000,
      goal: 60000,
      icon: Users,
      color: '#6B7A5A',
    },
    {
      title: 'Environmental Conservation',
      description: 'Protecting the Jordan River ecosystem',
      raised: 28000,
      goal: 50000,
      icon: Leaf,
      color: '#E8DCC4',
    },
  ];

  const impactStories = [
    {
      title: 'Archaeological Discovery',
      description: 'Recent excavations uncovered a 4th-century baptismal pool',
      image: 'https://images.unsplash.com/photo-1678221668916-2b356309ce8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaWRkbGUlMjBlYXN0ZXJuJTIwYXJjaGl0ZWN0dXJlJTIwaGVyaXRhZ2V8ZW58MXx8fHwxNzY5NTg0NjA1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      date: 'December 2025',
    },
    {
      title: 'Local Artisan Program',
      description: '50 families now earn sustainable income through our craft initiative',
      image: 'https://images.unsplash.com/photo-1765120828282-63dc950b6f90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kY3JhZnRlZCUyMHJlbGlnaW91cyUyMGNyYWZ0cyUyMG9saXZlJTIwd29vZHxlbnwxfHx8fDE3Njk1ODQ2MDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
      date: 'November 2025',
    },
    {
      title: 'River Cleanup Success',
      description: 'Over 2 tons of waste removed, water quality improved by 40%',
      image: 'https://images.unsplash.com/photo-1763982811982-e4901b18bbe3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHklMjByZXN0b3JhdGlvbiUyMGhhbmRzJTIwdG9nZXRoZXJ8ZW58MXx8fHwxNzY5NTg0NjA1fDA&ixlib=rb-4.1.0&q=80&w=1080',
      date: 'October 2025',
    },
  ];

  return (
    <section id="donate" className="py-20 bg-gradient-to-b from-[#F5F0E8] to-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl mb-4">Support Our Mission</h2>
          <p className="text-lg text-[#8B8680] max-w-2xl mx-auto">
            Help us preserve this sacred heritage site and support the local community 
            with transparent, impactful giving
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <Tabs defaultValue="donate" className="w-full">
            <TabsList className="grid w-full grid-cols-1 sm:grid-cols-2 mb-8 h-auto gap-2 sm:gap-0">
              <TabsTrigger value="donate" className="py-3 sm:py-2">
                <Heart className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                <span className="text-sm sm:text-base">Make a Donation</span>
              </TabsTrigger>
              <TabsTrigger value="impact" className="py-3 sm:py-2">
                <TrendingUp className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                <span className="text-sm sm:text-base">Impact & Transparency</span>
              </TabsTrigger>
            </TabsList>

            {/* Donation Form */}
            <TabsContent value="donate">
              <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
                {/* Donation Form */}
                <div className="lg:col-span-2">
                  <Card className="border-[#6B7A5A]/20 shadow-lg">
                    <CardHeader>
                      <CardTitle>Your Sacred Gift</CardTitle>
                      <CardDescription>
                        Every contribution helps preserve this UNESCO World Heritage Site
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {/* Donation Amount */}
                      <div className="space-y-3">
                        <Label>Select Amount (JOD)</Label>
                        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-3">
                          {[25, 50, 100, 250].map((amount) => (
                            <Button
                              key={amount}
                              variant="outline"
                              className="h-12 sm:h-14 hover:bg-[#5B8FA3] hover:text-white hover:border-[#5B8FA3]"
                            >
                              {amount}
                            </Button>
                          ))}
                        </div>
                        <div className="relative">
                          <Label htmlFor="custom-amount">Or enter custom amount</Label>
                          <Input
                            id="custom-amount"
                            type="number"
                            placeholder="Enter amount"
                            className="mt-2 h-12"
                          />
                        </div>
                      </div>

                      {/* Project Selection */}
                      <div className="space-y-3">
                        <Label>Choose a Project (Optional)</Label>
                        <div className="space-y-3">
                          {projects.map((project, index) => {
                            const Icon = project.icon;
                            const percentage = (project.raised / project.goal) * 100;
                            return (
                              <div
                                key={index}
                                className="p-4 border rounded-lg hover:bg-[#F5F0E8] cursor-pointer transition-colors"
                              >
                                <div className="flex items-start gap-3 mb-3">
                                  <div
                                    className="flex h-10 w-10 items-center justify-center rounded-full"
                                    style={{ backgroundColor: `${project.color}20` }}
                                  >
                                    <Icon className="h-5 w-5" style={{ color: project.color }} />
                                  </div>
                                  <div className="flex-1">
                                    <h4 className="font-semibold">{project.title}</h4>
                                    <p className="text-sm text-muted-foreground">
                                      {project.description}
                                    </p>
                                  </div>
                                </div>
                                <Progress value={percentage} className="h-2 mb-2" />
                                <div className="flex justify-between text-sm">
                                  <span className="text-muted-foreground">
                                    {project.raised.toLocaleString()} JOD raised
                                  </span>
                                  <span className="font-medium">
                                    {project.goal.toLocaleString()} JOD goal
                                  </span>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>

                      {/* Donor Information */}
                      <div className="space-y-3">
                        <Label>Your Information</Label>
                        <div className="grid md:grid-cols-2 gap-4">
                          <Input placeholder="Full Name" />
                          <Input placeholder="Email Address" type="email" />
                        </div>
                      </div>

                      <Button className="w-full h-12 bg-[#5B8FA3] hover:bg-[#4A7A8A]">
                        <Heart className="mr-2 h-5 w-5" />
                        Complete Donation
                      </Button>

                      <p className="text-xs text-center text-muted-foreground">
                        Your donation is secure and tax-deductible. 100% goes to the selected project.
                      </p>
                    </CardContent>
                  </Card>
                </div>

                {/* Quick Stats */}
                <div className="space-y-6">
                  <Card className="border-[#6B7A5A]/20 bg-gradient-to-br from-[#5B8FA3] to-[#6B7A5A] text-white">
                    <CardHeader>
                      <CardTitle className="text-white">Total Impact</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <div className="text-3xl font-bold mb-1">145,000+</div>
                        <div className="text-sm text-white/80">JOD Raised This Year</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold mb-1">12,400+</div>
                        <div className="text-sm text-white/80">Generous Donors</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold mb-1">8</div>
                        <div className="text-sm text-white/80">Active Projects</div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="border-[#6B7A5A]/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <CheckCircle2 className="h-5 w-5 text-green-600" />
                        Why Donate?
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-3 text-sm">
                      <div className="flex items-start gap-2">
                        <span className="text-[#5B8FA3] mt-1">•</span>
                        <span>Preserve UNESCO heritage for future generations</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-[#5B8FA3] mt-1">•</span>
                        <span>Support local communities and families</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-[#5B8FA3] mt-1">•</span>
                        <span>Fund ongoing archaeological research</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="text-[#5B8FA3] mt-1">•</span>
                        <span>Protect the Jordan River ecosystem</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>

            {/* Impact & Transparency */}
            <TabsContent value="impact">
              <div className="space-y-8">
                {/* Financial Transparency */}
                <Card className="border-[#6B7A5A]/20">
                  <CardHeader>
                    <CardTitle>Financial Transparency</CardTitle>
                    <CardDescription>
                      See exactly how your donations are making a difference
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span>Site Restoration & Maintenance</span>
                          <span className="font-semibold">45%</span>
                        </div>
                        <Progress value={45} className="h-3" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span>Community Development Programs</span>
                          <span className="font-semibold">30%</span>
                        </div>
                        <Progress value={30} className="h-3" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span>Archaeological Research</span>
                          <span className="font-semibold">15%</span>
                        </div>
                        <Progress value={15} className="h-3" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span>Operations & Administration</span>
                          <span className="font-semibold">10%</span>
                        </div>
                        <Progress value={10} className="h-3" />
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Impact Stories */}
                <div>
                  <h3 className="text-2xl font-semibold mb-6">Recent Impact Stories</h3>
                  <div className="grid md:grid-cols-3 gap-6">
                    {impactStories.map((story, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <Card className="overflow-hidden border-[#6B7A5A]/20 hover:shadow-lg transition-shadow">
                          <div className="aspect-video relative overflow-hidden">
                            <img
                              src={story.image}
                              alt={story.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <CardContent className="p-4">
                            <div className="text-xs text-[#5B8FA3] mb-2">{story.date}</div>
                            <h4 className="font-semibold mb-2">{story.title}</h4>
                            <p className="text-sm text-muted-foreground">
                              {story.description}
                            </p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </section>
  );
}