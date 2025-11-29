'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

export default function ProductShowcase() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 45]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);

  return (
    <section id="showcase" ref={ref} className="py-40 bg-black overflow-hidden relative flex flex-col items-center justify-center min-h-screen">
      
      {/* Layered Glowing Rings */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            style={{ 
              width: 600 + i * 200, 
              height: 600 + i * 200,
              rotate: i % 2 === 0 ? rotate : useTransform(rotate, r => -r),
              opacity: useTransform(scrollYProgress, [0, 0.5, 1], [0, 0.3 - i * 0.1, 0])
            }}
            className="absolute border border-white/5 rounded-full"
          />
        ))}
      </div>

      <motion.div 
        style={{ y, opacity: useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]) }}
        className="relative z-10 text-center mb-20"
      >
        <h2 className="text-5xl md:text-8xl font-bold text-white mb-6 tracking-tighter">
          Design in <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-800">
            Another Dimension
          </span>
        </h2>
      </motion.div>

      <div className="relative w-full max-w-6xl h-[800px] flex items-center justify-center perspective-1000">
        {/* Interactive 3D Product */}
        <motion.div
          style={{ scale, rotateX: useTransform(scrollYProgress, [0, 1], [20, -20]) }}
          className="relative w-[400px] h-[500px] md:w-[500px] md:h-[600px] transform-style-3d"
        >
           {/* Watch Body */}
           <div className="absolute inset-0 bg-gradient-to-b from-zinc-800 to-black rounded-[3.5rem] border border-white/20 shadow-[0_0_100px_rgba(255,255,255,0.1)] flex items-center justify-center transform-style-3d">
              {/* Screen */}
              <div className="w-[96%] h-[96%] bg-black rounded-[3rem] overflow-hidden relative border border-white/5">
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] bg-cover bg-center opacity-60" />
                 
                 {/* UI Overlay */}
                 <div className="absolute inset-0 flex flex-col justify-between p-8">
                    <div className="flex justify-between items-start">
                       <span className="text-xs font-bold text-white/50">NEXUS OS</span>
                       <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    </div>
                    <div className="text-center">
                       <h3 className="text-7xl font-thin text-white tracking-tighter">10:09</h3>
                    </div>
                    <div className="flex justify-between items-end">
                       <div className="text-xs text-white/50">
                          <div>HR</div>
                          <div className="text-lg text-white font-bold">72</div>
                       </div>
                       <div className="text-xs text-white/50 text-right">
                          <div>TEMP</div>
                          <div className="text-lg text-white font-bold">98°</div>
                       </div>
                    </div>
                 </div>
              </div>
           </div>

           {/* Floating Labels - Redesigned to be more "Technical" */}
           {[
             { label: "Aerospace Grade Titanium", x: -250, y: -150, align: "right" },
             { label: "Sapphire Crystal Display", x: 250, y: -50, align: "left" },
             { label: "Action Button", x: -250, y: 50, align: "right" },
             { label: "Dual Speakers", x: 250, y: 150, align: "left" }
           ].map((item, i) => (
             <motion.div
               key={i}
               style={{ 
                 x: item.x, 
                 y: item.y,
                 z: 50
               }}
               className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center gap-4 ${item.align === 'right' ? 'flex-row-reverse' : 'flex-row'}`}
             >
               <div className="flex flex-col">
                 <span className={`text-lg font-bold text-white whitespace-nowrap ${item.align === 'right' ? 'text-right' : 'text-left'}`}>{item.label}</span>
                 <span className={`text-xs text-gray-500 ${item.align === 'right' ? 'text-right' : 'text-left'}`}>High-Performance Alloy</span>
               </div>
               <div className="w-16 h-[1px] bg-gradient-to-r from-white to-transparent" />
               <div className="w-2 h-2 bg-white rounded-full shadow-[0_0_10px_white]" />
             </motion.div>
           ))}
        </motion.div>
      </div>
    </section>
  );
}
