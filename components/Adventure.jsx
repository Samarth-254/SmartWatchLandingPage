'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const environments = [
  {
    title: "ALPINE",
    subtitle: "Conquer the peaks.",
    description: "Designed for -20°C to 55°C operation. Altimeter active.",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=2070&auto=format&fit=crop",
    color: "from-blue-500/20"
  },
  {
    title: "OCEAN",
    subtitle: "Dive deeper.",
    description: "WR100 water resistance. Depth gauge and water temp sensor.",
    image: "https://images.unsplash.com/photo-1682687220742-aba13b6e50ba?q=80&w=2070&auto=format&fit=crop",
    color: "from-cyan-500/20"
  },
  {
    title: "TRAIL",
    subtitle: "Endurance redefined.",
    description: "60-hour GPS battery life. Dual-frequency GPS tracking.",
    image: "https://images.unsplash.com/photo-1478131143081-80f7f84ca84d?q=80&w=2070&auto=format&fit=crop",
    color: "from-orange-500/20"
  }
];

export default function Adventure() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    <section id="adventure" ref={containerRef} className="relative bg-black">
      {environments.map((env, index) => (
        <EnvironmentSection key={index} env={env} index={index} />
      ))}
    </section>
  );
}

function EnvironmentSection({ env, index }) {
  return (
    <div className="relative h-screen w-full overflow-hidden flex items-center justify-center sticky top-0">
      {/* Background Image with Parallax Scale */}
      <motion.div 
        className="absolute inset-0 z-0"
        initial={{ scale: 1.1 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 1.5 }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${env.image})` }}
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className={`absolute inset-0 bg-gradient-to-b ${env.color} via-transparent to-black/80`} />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 md:px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block py-1 px-3 rounded-full border border-white/30 text-xs font-bold tracking-[0.2em] text-white mb-6 backdrop-blur-md">
            {env.title}
          </span>
          <h2 className="text-4xl md:text-8xl font-black text-white mb-4 tracking-tighter uppercase">
            {env.subtitle}
          </h2>
          <p className="text-lg md:text-2xl text-white/80 max-w-2xl mx-auto font-light">
            {env.description}
          </p>
        </motion.div>
      </div>
    </div>
  );
}
