'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: "Alex Morgan",
    role: "Professional Athlete",
    text: "The accuracy of the health tracking is unmatched. It's become an essential part of my training regime.",
    rating: 5
  },
  {
    name: "Sarah Chen",
    role: "Tech Reviewer",
    text: "A masterpiece of engineering. The battery life finally keeps up with my busy lifestyle without compromising features.",
    rating: 5
  },
  {
    name: "James Wilson",
    role: "Designer",
    text: "The aesthetic is simply stunning. It feels less like a gadget and more like a piece of high-end jewelry.",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section id="reviews" className="py-12 md:py-32 bg-black relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-20"
        >
          <h2 className="text-3xl md:text-6xl font-bold text-white mb-6">
            Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-800">Professionals</span>
          </h2>
        </motion.div>

        <div className="flex overflow-x-auto snap-x snap-mandatory md:grid md:grid-cols-3 gap-4 md:gap-8 pb-8 md:pb-0 -mx-4 px-4 md:mx-0 md:px-0 scrollbar-hide">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, type: "spring", stiffness: 50 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="snap-center shrink-0 w-[85vw] md:w-auto relative p-8 md:p-10 rounded-[2rem] md:rounded-3xl bg-zinc-900/30 border border-white/5 backdrop-blur-sm group"
            >
              {/* Glowing Border Effect */}
              <div className="absolute inset-0 rounded-[2rem] md:rounded-3xl border border-white/0 group-hover:border-white/20 transition-colors duration-500" />
              <div className="absolute -inset-px bg-gradient-to-b from-white/10 to-transparent opacity-0 group-hover:opacity-100 rounded-[2rem] md:rounded-3xl transition-opacity duration-500 pointer-events-none" />

              <Quote className="w-8 h-8 md:w-10 md:h-10 text-white/10 mb-4 md:mb-6 group-hover:text-white/30 transition-colors" />
              
              <p className="text-base md:text-lg text-gray-300 mb-6 md:mb-8 leading-relaxed font-light">"{review.text}"</p>
              
              <div className="flex items-center justify-between border-t border-white/5 pt-6">
                <div>
                  <div className="text-white font-bold tracking-wide text-sm md:text-base">{review.name}</div>
                  <div className="text-[10px] md:text-xs text-gray-500 uppercase tracking-wider mt-1">{review.role}</div>
                </div>
                <div className="flex gap-1">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-white text-white" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
