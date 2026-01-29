import { Button } from '@/app/components/ui/button';
import { Input } from '@/app/components/ui/input';
import { Separator } from '@/app/components/ui/separator';
import { 
  BookOpen, 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin,
  Send
} from 'lucide-react';
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#2C2A26] to-[#1a1917] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* About */}
          <div>
            <div className="mb-6">
              <img 
                src={logo} 
                alt="The Baptism Site of Jesus Christ" 
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <p className="text-sm text-gray-300 mb-4 leading-relaxed">
              UNESCO World Heritage Site where Jesus was baptized by John the Baptist. 
              A sacred place of pilgrimage for Christians worldwide.
            </p>
            <div className="flex gap-3">
              <Button size="icon" variant="ghost" className="rounded-full hover:bg-[#5B8FA3] hover:text-white">
                <Facebook className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full hover:bg-[#5B8FA3] hover:text-white">
                <Instagram className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full hover:bg-[#5B8FA3] hover:text-white">
                <Twitter className="h-4 w-4" />
              </Button>
              <Button size="icon" variant="ghost" className="rounded-full hover:bg-[#5B8FA3] hover:text-white">
                <Youtube className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-[#E8DCC4]">Quick Links</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#about" className="text-gray-300 hover:text-[#E8DCC4] transition-colors">
                  About the Site
                </a>
              </li>
              <li>
                <a href="#history" className="text-gray-300 hover:text-[#E8DCC4] transition-colors">
                  History & Archaeology
                </a>
              </li>
              <li>
                <a href="#book" className="text-gray-300 hover:text-[#E8DCC4] transition-colors">
                  Book Your Visit
                </a>
              </li>
              <li>
                <a href="#tour" className="text-gray-300 hover:text-[#E8DCC4] transition-colors">
                  Virtual Tour
                </a>
              </li>
              <li>
                <a href="#planner" className="text-gray-300 hover:text-[#E8DCC4] transition-colors">
                  Trip Planner
                </a>
              </li>
              <li>
                <a href="#shop" className="text-gray-300 hover:text-[#E8DCC4] transition-colors">
                  E-Shop
                </a>
              </li>
            </ul>
          </div>

          {/* Visitor Info */}
          <div>
            <h4 className="font-semibold mb-4 text-[#E8DCC4]">Visitor Information</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="#" className="text-gray-300 hover:text-[#E8DCC4] transition-colors">
                  Opening Hours
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#E8DCC4] transition-colors">
                  Entry Fees
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#E8DCC4] transition-colors">
                  Mass Schedule
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#E8DCC4] transition-colors">
                  Visitor Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#E8DCC4] transition-colors">
                  Accessibility
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#E8DCC4] transition-colors">
                  FAQs
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div>
            <h4 className="font-semibold mb-4 text-[#E8DCC4]">Stay Connected</h4>
            <div className="space-y-4 text-sm mb-6">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 text-[#5B8FA3] mt-0.5 shrink-0" />
                <span className="text-gray-300">
                  Al-Maghtas, Bethany Beyond the Jordan, Jordan
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-[#5B8FA3] shrink-0" />
                <span className="text-gray-300">+962 5 359 0700</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-[#5B8FA3] shrink-0" />
                <span className="text-gray-300">info@baptismsite.com</span>
              </div>
            </div>

            <div>
              <p className="text-sm text-gray-300 mb-3">Subscribe to our newsletter</p>
              <div className="flex gap-2">
                <Input 
                  placeholder="Your email" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400"
                />
                <Button size="icon" className="bg-[#5B8FA3] hover:bg-[#4A7A8A] shrink-0">
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        <Separator className="my-8 bg-white/10" />

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <div className="flex flex-wrap justify-center gap-6">
            <a href="#" className="hover:text-[#E8DCC4] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#E8DCC4] transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-[#E8DCC4] transition-colors">
              Cookie Policy
            </a>
            <a href="#" className="hover:text-[#E8DCC4] transition-colors">
              Accessibility
            </a>
          </div>
          <div className="text-center md:text-right">
            <p>© 2026 Baptism Site of Jesus. All rights reserved.</p>
            <p className="text-xs mt-1">
              UNESCO World Heritage Site • Jordan Tourism Board
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}