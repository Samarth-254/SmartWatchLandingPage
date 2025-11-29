'use client';

import { motion } from 'framer-motion';
import { Smartphone, Headphones, Laptop, Activity, Music } from 'lucide-react';
import { useState } from 'react';

export default function Ecosystem() {
  const [activeNode, setActiveNode] = useState(0); // Default to first item (iPhone)

  const devices = [
    { 
      id: 0,
      icon: <Smartphone className="w-8 h-8" />, 
      label: "Smartphone", 
      title: "Universal Sync.",
      description: "Seamlessly connects with iOS and Android. Receive notifications, take calls, and reply to messages instantly from your wrist."
    },
    { 
      id: 1,
      icon: <Headphones className="w-8 h-8" />, 
      label: "Audio", 
      title: "Immersive Sound.",
      description: "Pair with any Bluetooth headphones. Control playback, adjust volume, and manage noise cancellation settings effortlessly."
    },
    { 
      id: 2,
      icon: <Laptop className="w-8 h-8" />, 
      label: "Laptop", 
      title: "Smart Unlock.",
      description: "Automatically unlock your laptop when you're nearby. Securely authenticate logins and approve payments with a simple tap."
    },
    { 
      id: 3,
      icon: <Activity className="w-8 h-8" />, 
      label: "Health Hub", 
      title: "Data Synchronization.",
      description: "Sync your fitness data across all your devices. View detailed analytics and progress reports on your tablet or desktop."
    },
    { 
      id: 4,
      icon: <Music className="w-8 h-8" />, 
      label: "Streaming", 
      title: "Unlimited Media.",
      description: "Access your favorite music and podcast apps. Download playlists for offline listening during your adventures."
    },
  ];

  return (
    <section className="py-12 md:py-24 bg-black border-t border-white/5 overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-8xl font-bold text-white mb-6 tracking-tighter whitespace-nowrap"
          >
            Seamless <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-800">Ecosystem.</span>
          </motion.h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Left: Interactive Hub - Hidden on Mobile */}
          <div className="hidden md:flex relative h-[400px] md:h-[600px] w-full items-center justify-center bg-zinc-900/20 rounded-[3rem] border border-white/5">
             {/* Central Core */}
             <div className="absolute z-10 w-32 h-32 bg-black rounded-full border border-white/20 flex items-center justify-center shadow-[0_0_50px_rgba(255,255,255,0.05)]">
                <div className="text-center">
                   <div className="text-2xl font-bold text-white tracking-tighter">NEXUS</div>
                   <div className="text-[10px] text-zinc-500 font-bold tracking-widest">CORE</div>
                </div>
             </div>

             {/* Connecting Lines Layer */}
             <svg className="absolute inset-0 w-full h-full pointer-events-none z-0">
                {devices.map((device, i) => {
                   const angle = (i * (360 / devices.length)) * (Math.PI / 180);
                   const radius = 180; 
                   const xOffset = Math.round(Math.cos(angle) * radius);
                   const yOffset = Math.round(Math.sin(angle) * radius);
                   
                   return (
                      <line 
                        key={i}
                        x1="50%" 
                        y1="50%" 
                        x2={`calc(50% + ${xOffset}px)`} 
                        y2={`calc(50% + ${yOffset}px)`} 
                        stroke={activeNode === i ? "white" : "rgba(255,255,255,0.05)"} 
                        strokeWidth={activeNode === i ? "2" : "1"} 
                      />
                   );
                })}
             </svg>

             {/* Orbiting Devices */}
             {devices.map((device, i) => {
               const angle = (i * (360 / devices.length)) * (Math.PI / 180);
               const radius = 180; // Distance from center
               const x = Math.round(Math.cos(angle) * radius);
               const y = Math.round(Math.sin(angle) * radius);

               return (
                 <motion.div
                   key={i}
                   className="absolute z-20"
                   style={{ x, y }}
                   initial={{ scale: 0, opacity: 0 }}
                   whileInView={{ scale: 1, opacity: 1 }}
                   transition={{ delay: i * 0.1 }}
                 >
                   <motion.button
                     onClick={() => setActiveNode(i)}
                     onMouseEnter={() => setActiveNode(i)}
                     whileHover={{ scale: 1.1 }}
                     animate={{ 
                       scale: activeNode === i ? 1.2 : 1,
                       backgroundColor: activeNode === i ? "rgba(255,255,255,0.1)" : "rgba(0,0,0,1)",
                       borderColor: activeNode === i ? "rgba(255,255,255,1)" : "rgba(255,255,255,0.1)"
                     }}
                     className="w-20 h-20 rounded-2xl border backdrop-blur-xl flex flex-col items-center justify-center transition-all duration-300"
                   >
                     <div className={`mb-1 ${activeNode === i ? 'text-white' : 'text-zinc-500'}`}>
                       {device.icon}
                     </div>
                   </motion.button>
                 </motion.div>
               );
             })}
          </div>

          {/* Mobile View: Horizontal Scroll List */}
          <div className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 -mx-4 px-4 scrollbar-hide">
            {devices.map((device, i) => (
              <div 
                key={device.id}
                onClick={() => setActiveNode(i)}
                className={`snap-center shrink-0 w-[160px] p-6 rounded-3xl border transition-all duration-300 flex flex-col items-center justify-center gap-4 ${
                  activeNode === i 
                    ? 'bg-white text-black border-white' 
                    : 'bg-zinc-900/50 text-zinc-500 border-white/10'
                }`}
              >
                {device.icon}
                <span className="font-bold text-sm">{device.label}</span>
              </div>
            ))}
          </div>

          {/* Right: Description Panel */}
          <div className="h-full flex flex-col justify-center">
            <motion.div
              key={activeNode}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4 }}
              className="p-8 md:p-12 rounded-[2rem] md:rounded-[3rem] bg-zinc-900/30 border border-white/10 backdrop-blur-md min-h-[300px] md:min-h-[400px] flex flex-col justify-center"
            >
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 md:mb-8">
                {devices[activeNode].icon}
              </div>
              <h3 className="text-zinc-500 text-lg md:text-xl font-medium mb-2 uppercase tracking-widest">{devices[activeNode].label}</h3>
              <h4 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">{devices[activeNode].title}</h4>
              <p className="text-lg md:text-xl text-zinc-400 leading-relaxed">
                {devices[activeNode].description}
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
