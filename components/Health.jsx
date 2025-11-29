'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Activity, Moon, Zap } from 'lucide-react';

export default function Health() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section id="health" ref={containerRef} className="py-40 bg-black relative overflow-hidden">
      {/* Background Image Parallax */}
      <div className="absolute inset-0 opacity-20">
        <motion.div 
          style={{ y: useTransform(scrollYProgress, [0, 1], [-100, 100]) }}
          className="w-full h-[120%] bg-[url('https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            style={{ y }}
            className="space-y-12"
          >
            <h2 className="text-5xl md:text-8xl font-bold text-white leading-tight tracking-tighter">
              Guardian of <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-800">
                Your Health.
              </span>
            </h2>
            <p className="text-xl text-zinc-400 leading-relaxed max-w-lg">
              Advanced biosensors monitor your vitals 24/7. From sleep stages to heart rate variability, get a complete picture of your wellness.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {[
                { icon: <Heart className="w-6 h-6 text-white" />, label: "Heart Rate", value: "72 BPM", sub: "Resting Average" },
                { icon: <Moon className="w-6 h-6 text-white" />, label: "Sleep", value: "8h 12m", sub: "Deep Sleep: 2h" },
                { icon: <Activity className="w-6 h-6 text-white" />, label: "Blood Oxygen", value: "98%", sub: "Daily Avg" },
                { icon: <Zap className="w-6 h-6 text-white" />, label: "Stress", value: "Low", sub: "Recovery: High" }
              ].map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-8 rounded-[2rem] bg-zinc-900/50 border border-white/10 backdrop-blur-xl hover:bg-white/5 transition-colors group"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="p-3 rounded-full bg-white/5 border border-white/10">
                      {stat.icon}
                    </div>
                    <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
                  </div>
                  <div className="text-sm text-zinc-500 mb-2 font-medium uppercase tracking-wider">{stat.label}</div>
                  <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-zinc-600">{stat.sub}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div className="relative h-[600px] flex items-center justify-center">
             {/* Professional Health Graph Visualization */}
             <div className="relative w-full max-w-md aspect-square bg-zinc-900/30 rounded-full border border-white/10 flex items-center justify-center overflow-hidden backdrop-blur-sm">
                {/* Grid Lines */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/5 via-transparent to-transparent" />
                
                {/* Animated Graph Line */}
                <svg className="absolute inset-0 w-full h-full p-12" viewBox="0 0 100 100" preserveAspectRatio="none">
                  <motion.path
                    d="M0,50 Q10,50 20,40 T40,50 T60,60 T80,40 T100,50"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.path
                    d="M0,50 Q10,50 20,40 T40,50 T60,60 T80,40 T100,50"
                    fill="none"
                    stroke="white"
                    strokeWidth="8"
                    strokeOpacity="0.1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                  />
                </svg>

                {/* Central Metric */}
                <div className="relative z-10 text-center">
                   <Heart className="w-16 h-16 text-white mx-auto mb-4" />
                   <div className="text-7xl font-bold text-white tracking-tighter">72</div>
                   <div className="text-sm text-zinc-500 font-bold tracking-[0.2em] mt-2">BPM</div>
                </div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
