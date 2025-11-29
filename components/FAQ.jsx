'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: "Is Nexus Ultra compatible with Android and iOS?",
    answer: "Yes, Nexus Ultra features universal compatibility with iOS 15+ and Android 10+ devices via the Nexus Connect app."
  },
  {
    question: "What is the battery life in GPS mode?",
    answer: "In standard GPS mode, Nexus Ultra lasts up to 24 hours. In Ultra-Trac mode, it can extend up to 60 hours for multi-day expeditions."
  },
  {
    question: "Can I swim with the Nexus Ultra?",
    answer: "Absolutely. It is rated WR100 (water resistant to 100 meters) and includes specific modes for pool swimming, open water, and diving."
  },
  {
    question: "Does it support offline music playback?",
    answer: "Yes, with 64GB of internal storage, you can save thousands of songs and podcasts from Spotify, Apple Music, and more for phone-free listening."
  },
  {
    question: "What health metrics does it track?",
    answer: "It tracks Heart Rate (ECG), Blood Oxygen (SpO2), Skin Temperature, Sleep Stages, Stress Levels, and includes Fall Detection."
  }
];

export default function FAQ() {
  return (
    <section id="faq" className="py-12 md:py-32 bg-black relative border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10 md:mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Frequently Asked Questions</h2>
          <p className="text-gray-400">Everything you need to know about the future of your wrist.</p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItem key={index} faq={faq} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ faq, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="border border-white/10 rounded-2xl bg-zinc-900/20 overflow-hidden"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
      >
        <span className="text-lg font-medium text-white">{faq.question}</span>
        <div className={`p-2 rounded-full bg-white/5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          {isOpen ? <Minus className="w-4 h-4 text-white" /> : <Plus className="w-4 h-4 text-white" />}
        </div>
      </button>
      
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5">
          {faq.answer}
        </div>
      </motion.div>
    </motion.div>
  );
}
