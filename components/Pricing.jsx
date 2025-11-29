'use client';

import { motion } from 'framer-motion';
import { Check, ArrowRight } from 'lucide-react';

const tiers = [
  {
    name: "Nexus One",
    price: "$399",
    description: "Essential features for everyday life.",
    features: ["Aluminum Body", "Retina Display", "24h Battery", "Water Resistant 50m"],
    highlight: false
  },
  {
    name: "Nexus Pro",
    price: "$599",
    description: "Advanced sensors and premium finish.",
    features: ["Stainless Steel", "Always-On Retina", "48h Battery", "ECG & Blood Oxygen", "Fast Charging"],
    highlight: true
  },
  {
    name: "Nexus Ultra",
    price: "$799",
    description: "The ultimate rugged powerhouse.",
    features: ["Titanium Aerospace", "Sapphire Crystal", "72h Battery", "Dual-Frequency GPS", "Action Button", "Depth Gauge"],
    highlight: false
  }
];

export default function Pricing() {
  return (
    <section className="py-32 bg-black relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">Choose Your Nexus</h2>
          <p className="text-gray-400">Find the perfect companion for your journey.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 items-center">
          {tiers.map((tier, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative p-8 rounded-[2rem] border ${tier.highlight ? 'bg-zinc-900/50 border-white/20 scale-105 z-10 shadow-2xl' : 'bg-black border-white/10'}`}
            >
              {tier.highlight && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-white text-black text-xs font-bold rounded-full uppercase tracking-widest">
                  Most Popular
                </div>
              )}

              <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
              <p className="text-gray-400 text-sm mb-6 h-10">{tier.description}</p>
              
              <div className="text-4xl font-bold text-white mb-8">{tier.price}</div>

              <ul className="space-y-4 mb-8">
                {tier.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-gray-300">
                    <Check className="w-4 h-4 text-white" />
                    {feature}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-bold transition-all duration-300 ${tier.highlight ? 'bg-white text-black hover:bg-gray-200' : 'bg-white/10 text-white hover:bg-white/20'}`}>
                Buy Now
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
