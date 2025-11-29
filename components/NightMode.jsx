'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

export default function NightMode() {
  const sectionRef = useRef(null);
  const [isNight, setIsNight] = useState(false);
  const [isManual, setIsManual] = useState(false);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start center", "end center"]
  });

  // Auto-toggle effect based on scroll
  useEffect(() => {
    if (isManual) return;
    const unsubscribe = scrollYProgress.on("change", (latest) => {
      if (latest > 0.4 && !isNight) setIsNight(true);
      if (latest < 0.4 && isNight) setIsNight(false);
    });
    return () => unsubscribe();
  }, [scrollYProgress, isNight, isManual]);

  const toggleNightMode = () => {
    setIsManual(true);
    setIsNight(!isNight);
  };

  return (
    <section ref={sectionRef} className="py-32 bg-black relative overflow-hidden">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] pointer-events-none" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Text Content */}
        <div className="order-1 lg:order-1">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tighter">
              Wayfinder <br />
              <span className={`${isNight ? 'text-red-500 drop-shadow-[0_0_15px_rgba(239,68,68,0.8)]' : 'text-white'} transition-all duration-700`}>
                Night Mode
              </span>
            </h2>
            <p className="text-xl text-zinc-400 mb-8 leading-relaxed">
              Designed for low-light conditions. A simple turn of the Digital Crown activates Night Mode, shifting the entire interface to a high-contrast red for better visibility in the dark.
            </p>
            
            <div className="flex items-center gap-4">
              <button 
                onClick={toggleNightMode}
                className={`p-4 rounded-full border transition-all duration-500 cursor-pointer hover:scale-110 active:scale-95 ${isNight ? 'bg-red-500/10 border-red-500 text-red-500 shadow-[0_0_20px_rgba(239,68,68,0.3)]' : 'bg-zinc-800 border-zinc-700 text-zinc-400 hover:bg-zinc-700'}`}
              >
                {isNight ? <Moon className="w-6 h-6" /> : <Sun className="w-6 h-6" />}
              </button>
              <span className="text-sm font-mono text-zinc-500 uppercase tracking-widest">
                {isNight ? 'Night Mode Active' : 'Daylight Mode'}
              </span>
            </div>
          </motion.div>
        </div>

        {/* Watch Face Simulation */}
        <div className="order-2 lg:order-2 flex justify-center">
          <div className={`relative w-full max-w-[300px] h-[380px] md:w-[400px] md:h-[500px] bg-zinc-900 rounded-[2.5rem] md:rounded-[3rem] border-[8px] border-zinc-800 shadow-2xl overflow-hidden transition-all duration-1000 ${isNight ? 'shadow-[0_0_50px_rgba(220,38,38,0.2)]' : ''}`}>
            {/* Screen */}
            <div className={`absolute inset-0 transition-colors duration-1000 ${isNight ? 'bg-black' : 'bg-black'}`}>
              
              {/* Radar Scan Effect (Only in Night Mode) */}
              <div className={`absolute inset-0 bg-gradient-to-b from-red-500/10 to-transparent transition-opacity duration-1000 ${isNight ? 'opacity-100 animate-[scan_4s_linear_infinite]' : 'opacity-0'}`} style={{ height: '20%' }} />

              {/* Watch Face Elements */}
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                {/* Compass Ring */}
                <div className={`w-48 h-48 md:w-64 md:h-64 rounded-full border-2 border-dashed transition-all duration-1000 ${isNight ? 'border-red-600 shadow-[0_0_20px_rgba(220,38,38,0.4)]' : 'border-white/20'} flex items-center justify-center relative animate-[spin_60s_linear_infinite]`}>
                  <div className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1 w-2 h-2 rounded-full ${isNight ? 'bg-red-500 shadow-[0_0_10px_rgba(220,38,38,1)]' : 'bg-white'}`} />
                </div>

                {/* Time */}
                <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
                  <h3 className={`text-5xl md:text-7xl font-bold tracking-tighter transition-all duration-1000 ${isNight ? 'text-red-500 drop-shadow-[0_0_20px_rgba(220,38,38,0.8)]' : 'text-white'}`}>
                    22:45
                  </h3>
                  <span className={`text-xs md:text-sm font-bold tracking-[0.3em] mt-2 transition-colors duration-1000 ${isNight ? 'text-red-700' : 'text-zinc-500'}`}>
                    N 34° 12' 45"
                  </span>
                </div>

                {/* Complications */}
                <div className={`absolute bottom-8 md:bottom-12 flex gap-8 transition-colors duration-1000 ${isNight ? 'text-red-600 drop-shadow-[0_0_5px_rgba(220,38,38,0.5)]' : 'text-white/60'}`}>
                  <div className="flex flex-col items-center">
                    <span className="text-[8px] md:text-[10px] font-bold tracking-wider">UVI</span>
                    <span className="text-base md:text-lg font-mono">0</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] font-bold tracking-wider">WIND</span>
                    <span className="text-lg font-mono">12</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] font-bold tracking-wider">ELEV</span>
                    <span className="text-lg font-mono">420</span>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Glass Reflection */}
            <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
