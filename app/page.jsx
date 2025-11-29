'use client';

import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Collection from '@/components/Collection';
import Features from '@/components/Features';
import Adventure from '@/components/Adventure';
import NightMode from '@/components/NightMode';
import Specs from '@/components/Specs';
import Ecosystem from '@/components/Ecosystem';
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';
import Footer from '@/components/Footer';

export default function Home() {
  const [isCompareOpen, setIsCompareOpen] = useState(false);

  return (
    <main className="bg-black min-h-screen text-white selection:bg-white selection:text-black">
      <Navbar />
      <Hero />
      <Features />
      <Adventure />
      <NightMode />
      <Collection onCompareClick={() => setIsCompareOpen(true)} />
      <Specs isOpen={isCompareOpen} onClose={() => setIsCompareOpen(false)} />
      <Ecosystem />
      <Testimonials />
      <FAQ />
      <Footer />
    </main>
  );
}
