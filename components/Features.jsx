'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Battery, Shield, Zap, Activity, Cpu, Wifi, Globe, Heart, Moon, Plus, X, AlertTriangle, Droplets, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useRef } from 'react';

const features = [
  {
    id: 'performance',
    title: 'Performance',
    headline: 'S9 SiP.',
    subheadline: 'Pure Power.',
    description: 'Our custom silicon processes sensor data 100x faster. It\'s the most powerful chip ever in a watch.',
    detail: 'The S9 SiP features a new 4-core Neural Engine that can process machine learning tasks up to twice as fast as the original Nexus chip. This enables innovations like the double tap gesture.',
    // icon: <Cpu className="w-8 h-8 text-white" />,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop',
    stat: '4-CORE'
  },
  {
    id: 'durability',
    title: 'Durability',
    headline: 'Aerospace',
    subheadline: 'Titanium.',
    description: 'Fused with sapphire crystal glass. Virtually scratch-proof and ready for the deepest dives.',
    detail: 'Crafted from the same alloy used in spacecraft missions to Mars. The titanium case strikes the perfect balance between weight, ruggedness, and corrosion resistance.',
    // icon: <Shield className="w-8 h-8 text-white" />,
    image: 'https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?q=80&w=1000&auto=format&fit=crop',
    stat: 'Ti-6Al-4V'
  },
  {
    id: 'power',
    title: 'Power',
    headline: 'All Day',
    subheadline: 'Battery.',
    description: 'Multi-day expeditions on a single charge. Go further than ever before.',
    detail: 'With the new Low Power Mode, you can get up to 72 hours of battery life for multi-day adventures. Fast charging gets you from 0 to 80% in just one hour.',
    // icon: <Battery className="w-8 h-8 text-white" />,
    image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=800&auto=format&fit=crop',
    stat: '60H'
  },
  {
    id: 'connectivity',
    title: 'Connectivity',
    headline: 'Stay Connected',
    subheadline: 'Anywhere.',
    description: 'L1 + L5 GPS for incredible accuracy in urban environments and deep wilderness.',
    detail: 'The precision dual-frequency GPS provides the most accurate distance, pace, and route maps. It connects to satellite networks even in challenging environments.',
    // icon: <Globe className="w-8 h-8 text-white" />,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop',
    stat: 'L1 + L5'
  },
  {
    id: 'health-heart',
    title: 'Health',
    headline: 'Heart Rate',
    subheadline: 'Monitoring.',
    description: 'Advanced biosensors monitor your vitals 24/7. Get alerts for high and low heart rates.',
    detail: 'The electrical heart sensor and optical heart sensor work together to provide critical insights into your heart health. Generate an ECG similar to a single-lead electrocardiogram.',
    // icon: <Heart className="w-8 h-8 text-white" />,
    image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop',
    stat: '72 BPM'
  },
  {
    id: 'health-sleep',
    title: 'Wellness',
    headline: 'Sleep',
    subheadline: 'Tracking.',
    description: 'Understand your sleep stages. See how much time you spent in REM, Core, or Deep sleep.',
    detail: 'Wake up to a detailed report of your sleep quality. The Sleep app doesn\'t just track your sleep, it works with your iPhone to help you create a schedule and bedtime routine.',
    // icon: <Moon className="w-8 h-8 text-white" />,
    image: 'https://images.unsplash.com/photo-1517137879134-48acf67b9043?q=80&w=2070&auto=format&fit=crop',
    stat: '8H 12M'
  },
  {
    id: 'health-oxygen',
    title: 'Vitals',
    headline: 'Blood',
    subheadline: 'Oxygen.',
    description: 'Measure your blood oxygen level with a revolutionary sensor and app.',
    detail: 'Your blood oxygen level is a key indicator of your overall wellness. It can help you understand how well your body is absorbing oxygen and the amount of oxygen delivered to your body.',
    // icon: <Activity className="w-8 h-8 text-white" />,
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop',
    stat: '98%'
  },
  {
    id: 'safety',
    title: 'Safety',
    headline: 'Crash',
    subheadline: 'Detection.',
    description: 'Automatically detects severe car crashes and calls for help if you can\'t.',
    detail: 'Using a high-g accelerometer and gyroscope, Nexus detects the forces of a crash and automatically connects you to emergency services and notifies your emergency contacts.',
    // icon: <AlertTriangle className="w-8 h-8 text-white" />,
    image: 'https://images.unsplash.com/photo-1626668020738-97529854853b?q=80&w=2070&auto=format&fit=crop',
    stat: 'SOS'
  },
  {
    id: 'display',
    title: 'Display',
    headline: 'Always-On',
    subheadline: 'Retina.',
    description: 'The brightest display we\'ve ever created. Easy to read even in direct sunlight.',
    detail: 'With up to 3000 nits of brightness, the Always-On Retina display is legible in the harshest conditions. Night Mode activates automatically in low light to preserve your night vision.',
    // icon: <Zap className="w-8 h-8 text-white" />,
    image: 'https://images.unsplash.com/photo-1551817958-29d0660f9805?q=80&w=2070&auto=format&fit=crop',
    stat: '3000 Nits'
  },
  {
    id: 'water',
    title: 'Water',
    headline: 'Dive',
    subheadline: 'Ready.',
    description: 'Water resistant to 100 meters. Perfect for swimming, surfing, or recreational diving.',
    detail: 'Certified to EN13319, the internationally recognized standard for diving accessories. The Depth app shows you the time, current depth, water temperature, duration under water, and maximum depth you\'ve reached.',
    // icon: <Droplets className="w-8 h-8 text-white" />,
    image: 'https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&w=2070&auto=format&fit=crop',
    stat: '100m'
  }
];

export default function Features() {
  const [selectedFeature, setSelectedFeature] = useState(null);
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const { current } = scrollContainerRef;
      const scrollAmount = direction === 'left' ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="features" className="py-12 md:py-24 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-4xl md:text-8xl font-bold text-white mb-4 md:mb-8 tracking-tighter">
            Engineered for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-800">
              The Impossible.
            </span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg md:text-xl">
            Maximum performance. Extreme conditions.
          </p>
        </motion.div>

        {/* Horizontal Scroll Container */}
        <div className="relative group">
          <div 
            ref={scrollContainerRef}
            className="flex overflow-x-auto snap-x snap-mandatory gap-4 md:gap-6 pb-12 -mx-4 px-4 md:-mx-6 md:px-6 scrollbar-hide"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {features.map((feature, index) => (
              <motion.div 
                key={feature.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="snap-center shrink-0 w-[85vw] md:w-[400px] h-[500px] md:h-[600px] rounded-[2rem] md:rounded-[3rem] bg-zinc-900/30 border border-white/10 relative overflow-hidden group/card cursor-pointer"
              >
                <div className="absolute inset-0 bg-gradient-to-b from-zinc-800/20 to-black" />
                <div className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay transition-transform duration-700 group-hover/card:scale-105" style={{ backgroundImage: `url(${feature.image})` }} />
                
                <div className="relative z-10 p-6 md:p-10 h-full flex flex-col justify-between">
                  <div>
                    <h3 className="text-zinc-400 font-medium text-lg md:text-xl mb-2">{feature.title}</h3>
                    <div className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-none">
                      {feature.headline} <br />
                      <span className="text-zinc-500">{feature.subheadline}</span>
                    </div>
                    <p className="mt-4 md:mt-6 text-zinc-300 text-base md:text-lg leading-relaxed line-clamp-3">
                      {feature.description}
                    </p>
                  </div>
                  
                  <div className="flex items-end justify-between">
                     <div className="flex flex-col">
                        <div className="text-2xl md:text-4xl font-bold text-white/20 mb-2">{feature.stat}</div>
                     </div>
                     
                     <button 
                      onClick={() => setSelectedFeature(feature)}
                      className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white text-black flex items-center justify-center hover:bg-zinc-200 transition-colors shadow-lg z-20"
                     >
                       <Plus className="w-5 h-5 md:w-6 md:h-6" />
                     </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Scroll Buttons (Desktop - Bottom Right) */}
          <div className="hidden md:flex justify-end gap-4 mt-8 px-6">
             <button 
               onClick={() => scroll('left')}
               className="w-12 h-12 rounded-full bg-zinc-800/50 border border-white/10 text-zinc-400 flex items-center justify-center hover:bg-zinc-700 hover:text-white transition-all"
             >
               <ChevronLeft className="w-6 h-6" />
             </button>
             <button 
               onClick={() => scroll('right')}
               className="w-12 h-12 rounded-full bg-zinc-800/50 border border-white/10 text-zinc-400 flex items-center justify-center hover:bg-zinc-700 hover:text-white transition-all"
             >
               <ChevronRight className="w-6 h-6" />
             </button>
          </div>
          
          {/* Mobile Scroll Indicators (Bottom Left/Right) */}
          <div className="flex md:hidden justify-between px-4 mt-4">
             <button 
               onClick={() => scroll('left')}
               className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 text-white flex items-center justify-center active:bg-white active:text-black transition-all"
             >
               <ChevronLeft className="w-5 h-5" />
             </button>
             <button 
               onClick={() => scroll('right')}
               className="w-10 h-10 rounded-full bg-zinc-900 border border-white/10 text-white flex items-center justify-center active:bg-white active:text-black transition-all"
             >
               <ChevronRight className="w-5 h-5" />
             </button>
          </div>
        </div>
      </div>

      {/* Feature Detail Popup */}
      <AnimatePresence>
        {selectedFeature && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-6 bg-black/80 backdrop-blur-xl"
            onClick={() => setSelectedFeature(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-zinc-900 border border-white/10 rounded-[2rem] md:rounded-[3rem] max-w-2xl w-full max-h-[90vh] overflow-y-auto relative flex flex-col md:block"
              onClick={(e) => e.stopPropagation()}
            >
              <button 
                onClick={() => setSelectedFeature(null)}
                className="absolute top-4 right-4 md:top-6 md:right-6 w-8 h-8 md:w-10 md:h-10 rounded-full bg-black/50 text-white flex items-center justify-center hover:bg-black/80 transition-colors z-20 border border-white/10"
              >
                <X className="w-4 h-4 md:w-5 md:h-5" />
              </button>

              <div className="grid md:grid-cols-2 h-full">
                <div className="h-48 md:h-full relative shrink-0">
                   <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${selectedFeature.image})` }} />
                   <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-transparent to-transparent md:bg-gradient-to-r" />
                </div>
                <div className="p-6 md:p-10 flex flex-col justify-center">
                  {/* <div className="mb-4 md:mb-6 p-3 bg-white/5 rounded-2xl w-fit border border-white/10">
                    {selectedFeature.icon}
                  </div> */}
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">{selectedFeature.headline} {selectedFeature.subheadline}</h3>
                  <div className="text-lg md:text-xl font-mono text-zinc-500 mb-4 md:mb-6">{selectedFeature.stat}</div>
                  <p className="text-zinc-300 leading-relaxed text-base md:text-lg">
                    {selectedFeature.detail}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}