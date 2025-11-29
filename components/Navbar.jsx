'use client';

import { motion, useScroll, useMotionValueEvent, AnimatePresence } from 'framer-motion';
import { Watch, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [hidden, setHidden] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious();
    if (latest > previous && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
  });

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <motion.nav 
        variants={{
          visible: { y: 0 },
          hidden: { y: "-100%" },
        }}
        animate={hidden ? "hidden" : "visible"}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4 md:px-6 pointer-events-none"
      >
        <div className="pointer-events-auto flex items-center gap-4 md:gap-8 px-4 py-2 md:px-6 md:py-3 bg-black/50 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl">
          <div className="flex items-center gap-2 cursor-pointer">
            <Watch className="w-5 h-5 text-white" />
            <span className="text-sm font-bold tracking-tight text-white">NEXUS</span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 border-l border-white/10 pl-8">
            <a href="#features" className="text-xs font-medium text-zinc-400 hover:text-white transition-colors uppercase tracking-wide">Features</a>
            <a href="#adventure" className="text-xs font-medium text-zinc-400 hover:text-white transition-colors uppercase tracking-wide">Adventure</a>
            <a href="#collection" className="text-xs font-medium text-zinc-400 hover:text-white transition-colors uppercase tracking-wide">Collection</a>
            <a href="#faq" className="text-xs font-medium text-zinc-400 hover:text-white transition-colors uppercase tracking-wide">FAQ</a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center border-l border-white/10 pl-4">
            <button onClick={toggleMobileMenu} className="text-white p-1">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center md:hidden"
          >
            <button 
              onClick={toggleMobileMenu}
              className="absolute top-8 right-8 text-zinc-400 hover:text-white"
            >
              <X className="w-8 h-8" />
            </button>
            
            <div className="flex flex-col items-center gap-8">
              <a href="#features" onClick={toggleMobileMenu} className="text-2xl font-medium text-zinc-400 hover:text-white transition-colors uppercase tracking-wide">Features</a>
              <a href="#adventure" onClick={toggleMobileMenu} className="text-2xl font-medium text-zinc-400 hover:text-white transition-colors uppercase tracking-wide">Adventure</a>
              <a href="#collection" onClick={toggleMobileMenu} className="text-2xl font-medium text-zinc-400 hover:text-white transition-colors uppercase tracking-wide">Collection</a>
              <a href="#faq" onClick={toggleMobileMenu} className="text-2xl font-medium text-zinc-400 hover:text-white transition-colors uppercase tracking-wide">FAQ</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
