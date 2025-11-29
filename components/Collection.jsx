'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';

const watches = [
  {
    id: 1,
    name: "NEXUS ULTRA",
    tagline: "The Ultimate Adventure Watch",
    price: "₹79,900",
    image: "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=800&auto=format&fit=crop",
    features: ["Titanium Case", "100m Water Resistance", "Action Button"],
    badge: "Flagship"
  },
  {
    id: 2,
    name: "NEXUS PRO",
    tagline: "Advanced Health & Fitness",
    price: "₹39,900",
    image: "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?q=80&w=800&auto=format&fit=crop",
    features: ["Stainless Steel", "ECG App", "Always-On Retina"],
    badge: "Best Seller"
  },
  {
    id: 3,
    name: "NEXUS AIR",
    tagline: "Light. Fast. Capable.",
    price: "₹24,900",
    image: "https://images.unsplash.com/photo-1546868871-7041f2a55e12?q=80&w=800&auto=format&fit=crop",
    features: ["Aluminum", "Sleep Tracking", "All-Day Battery"],
    badge: "New"
  }
];

export default function Collection({ onCompareClick }) {
  return (
    <section id="collection" className="py-12 md:py-32 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-zinc-500/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 md:mb-20 flex flex-col md:flex-row justify-between items-end"
        >
          <div>
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-4 tracking-tight">
              The <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-800">Collection</span>
            </h2>
            <p className="text-gray-400 text-xl max-w-xl">Find the perfect Nexus for your wrist.</p>
          </div>
          <button 
            onClick={onCompareClick}
            className="hidden md:flex items-center gap-2 text-white hover:text-zinc-300 transition-colors font-medium group uppercase tracking-widest text-sm"
          >
            Compare Models <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>

        <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-3 gap-4 md:gap-8 pb-8 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
          {watches.map((watch, index) => (
            <motion.div
              key={watch.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="snap-center shrink-0 w-[85vw] md:w-auto group relative min-h-[600px] md:min-h-[650px] h-auto rounded-[2rem] overflow-hidden bg-zinc-900/50 backdrop-blur-sm border border-white/10 hover:border-white/30 transition-all duration-500 hover:shadow-[0_0_50px_rgba(255,255,255,0.05)] flex flex-col"
            >
              {/* Image Container */}
              <div className="relative h-[350px] md:h-[400px] shrink-0 overflow-hidden">
                 <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-900/90 z-10" />
                 <img 
                   src={watch.image} 
                   alt={watch.name}
                   className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:rotate-1"
                 />
                 {watch.badge && (
                   <div className="absolute top-6 left-6 z-20 px-3 py-1 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-[10px] font-bold text-white uppercase tracking-widest">
                     {watch.badge}
                   </div>
                 )}
              </div>

              {/* Content */}
              <div className="flex-1 p-6 md:p-8 flex flex-col justify-between bg-gradient-to-b from-zinc-900/0 to-zinc-900">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-2xl md:text-3xl font-bold text-white tracking-tighter">{watch.name}</h3>
                  </div>
                  <p className="text-zinc-400 mb-6 font-mono text-xs md:text-sm uppercase tracking-wider">{watch.tagline}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {watch.features.map((feature, i) => (
                      <li key={i} className="text-sm text-zinc-400 flex items-center gap-3">
                        <div className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/10">
                  <span className="text-xl md:text-2xl font-bold text-white">{watch.price}</span>
                  <button className="px-6 md:px-8 py-2 md:py-3 bg-white text-black rounded-full font-bold hover:bg-zinc-200 transition-all duration-300 uppercase text-xs tracking-widest">
                    Buy Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <button 
            onClick={onCompareClick}
            className="inline-flex items-center gap-2 text-white font-medium"
          >
            Compare Models <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
