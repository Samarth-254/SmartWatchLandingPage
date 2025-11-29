'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ChevronRight, Play } from 'lucide-react';

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollY } = useScroll();
  
  const y = useTransform(scrollY, [0, 1000], [0, 400]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section id="hero" ref={containerRef} className="relative h-screen w-full overflow-hidden bg-black">
      {/* Cinematic Background Image */}
      <motion.div 
        style={{ y, scale: 1.1 }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?q=80&w=2071&auto=format&fit=crop')] bg-cover bg-center opacity-50" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full container mx-auto px-4 md:px-6 flex flex-col justify-end md:justify-center pb-32 md:pb-0">
        <motion.div 
          style={{ opacity }}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="max-w-4xl md:absolute md:top-1/2 md:-translate-y-1/2 md:left-12 space-y-4 md:space-y-6"
        >
          <div className="hidden md:inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/30 bg-white/10 backdrop-blur-md w-fit">
            <span className="text-xs font-bold text-white tracking-widest uppercase">Titanium Edition</span>
          </div>

          <h1 className="text-4xl md:text-9xl font-black text-white tracking-tighter leading-[0.9]">
            NEXUS <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-gray-200 to-gray-500">
              ULTRA
            </span>
          </h1>

          <p className="text-base md:text-xl text-zinc-300 max-w-xs md:max-w-xl font-light tracking-wide leading-relaxed">
            The most rugged and capable Nexus watch ever. <span className="hidden md:inline">Designed for exploration, adventure, and endurance.</span>
          </p>

          <div className="flex flex-row items-center gap-4 pt-4 md:pt-8">
            <button className="px-6 py-3 md:px-10 md:py-4 bg-white hover:bg-gray-200 text-black font-bold rounded-full transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(255,255,255,0.3)] text-sm md:text-base">
              Buy Now
            </button>
            <button className="group flex items-center gap-2 text-white font-medium hover:text-gray-300 transition-colors px-4 py-3 md:px-6 md:py-4 text-sm md:text-base">
              Watch Film <Play className="w-3 h-3 md:w-4 md:h-4 fill-current group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent z-20" />
    </section>
  );
}
