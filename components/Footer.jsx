'use client';

import { Watch, Twitter, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black pt-12 md:pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12 mb-10 md:mb-20">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <Watch className="w-5 h-5 text-black" />
              </div>
              <span className="text-2xl font-bold tracking-tighter text-white">NEXUS</span>
            </div>
            <p className="text-gray-500 max-w-xs text-sm leading-relaxed">
              Redefining the boundaries of wearable technology. Designed in California, engineered for the future.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24">
            {[
              { title: "Product", links: ["Features", "Specifications", "Technology", "Design"] },
              { title: "Company", links: ["About", "Careers", "Press", "Contact"] },
              { title: "Support", links: ["Help Center", "Warranty", "Order Status", "Returns"] }
            ].map((column, idx) => (
              <div key={idx}>
                <h4 className="text-white font-bold mb-6">{column.title}</h4>
                <ul className="space-y-4">
                  {column.links.map((link, i) => (
                    <li key={i}>
                      <a href="#" className="text-sm text-gray-500 hover:text-white transition-colors">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xs text-gray-600">
            © 2024 Nexus Technologies Inc. All rights reserved.
          </div>
          
          <div className="flex gap-6">
            {[Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="text-gray-500 hover:text-white transition-colors hover:scale-110 transform duration-200">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
