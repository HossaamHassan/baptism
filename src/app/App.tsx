import { useState } from 'react';
import { Header } from '@/app/components/Header';
import { HeroSection } from '@/app/components/HeroSection';
import { BookingEngine } from '@/app/components/BookingEngine';
import { TripPlanner } from '@/app/components/TripPlanner';
import { VirtualTour } from '@/app/components/VirtualTour';
import { EShop } from '@/app/components/EShop';
import { DonationSection } from '@/app/components/DonationSection';
import { AIChatbot } from '@/app/components/AIChatbot';
import { Footer } from '@/app/components/Footer';

export default function App() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleBookNow = () => {
    scrollToSection('book');
  };

  const handleVirtualTour = () => {
    scrollToSection('tour');
  };

  return (
    <div className="min-h-screen bg-[#FAFAF8]">
      <Header />
      <main>
        <HeroSection onBookNow={handleBookNow} onVirtualTour={handleVirtualTour} />
        <BookingEngine />
        <VirtualTour />
        <TripPlanner />
        <EShop />
        <DonationSection />
      </main>
      <Footer />
      <AIChatbot />
    </div>
  );
}
