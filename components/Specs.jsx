'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Wifi, Maximize, BatteryCharging, Layers, Activity, Check, X } from 'lucide-react';
import { useState } from 'react';

const modelsData = {
  "Nexus Ultra": [
    {
      category: "Processor",
      items: [
        { label: "Chip", value: "S9 SiP Dual-core" },
        { label: "Neural Engine", value: "4-core" },
        { label: "Storage", value: "64GB" }
      ],
      icon: <Cpu className="w-5 h-5" />
    },
    {
      category: "Connectivity",
      items: [
        { label: "Wi-Fi", value: "Wi-Fi 6E" },
        { label: "Bluetooth", value: "5.3 Ultra" },
        { label: "GPS", value: "L1 + L5 Precision" }
      ],
      icon: <Wifi className="w-5 h-5" />
    },
    {
      category: "Display",
      items: [
        { label: "Type", value: "LTPO OLED" },
        { label: "Brightness", value: "3000 nits" },
        { label: "Protection", value: "Sapphire Crystal" }
      ],
      icon: <Maximize className="w-5 h-5" />
    },
    {
      category: "Power",
      items: [
        { label: "Battery Life", value: "36h / 72h Low Power" },
        { label: "Charging", value: "0-80% in 45m" },
        { label: "Type", value: "MagSafe Wireless" }
      ],
      icon: <BatteryCharging className="w-5 h-5" />
    },
    {
      category: "Sensors",
      items: [
        { label: "Heart Rate", value: "Optical Gen 3" },
        { label: "Temperature", value: "Skin + Water" },
        { label: "Motion", value: "High-g Accelerometer" }
      ],
      icon: <Activity className="w-5 h-5" />
    },
    {
      category: "Build",
      items: [
        { label: "Material", value: "Aerospace Titanium" },
        { label: "Water", value: "100m ISO 22810" },
        { label: "Dust", value: "IP6X Certified" }
      ],
      icon: <Layers className="w-5 h-5" />
    }
  ],
  "Nexus Pro": [
    {
      category: "Processor",
      items: [
        { label: "Chip", value: "S8 SiP Dual-core" },
        { label: "Neural Engine", value: "2-core" },
        { label: "Storage", value: "32GB" }
      ],
      icon: <Cpu className="w-5 h-5" />
    },
    {
      category: "Connectivity",
      items: [
        { label: "Wi-Fi", value: "Wi-Fi 6" },
        { label: "Bluetooth", value: "5.0" },
        { label: "GPS", value: "L1 Precision" }
      ],
      icon: <Wifi className="w-5 h-5" />
    },
    {
      category: "Display",
      items: [
        { label: "Type", value: "OLED Retina" },
        { label: "Brightness", value: "2000 nits" },
        { label: "Protection", value: "Ion-X Glass" }
      ],
      icon: <Maximize className="w-5 h-5" />
    },
    {
      category: "Power",
      items: [
        { label: "Battery Life", value: "18h / 36h Low Power" },
        { label: "Charging", value: "0-80% in 60m" },
        { label: "Type", value: "Magnetic Fast Charge" }
      ],
      icon: <BatteryCharging className="w-5 h-5" />
    },
    {
      category: "Sensors",
      items: [
        { label: "Heart Rate", value: "Optical Gen 2" },
        { label: "Temperature", value: "Skin Only" },
        { label: "Motion", value: "Accelerometer" }
      ],
      icon: <Activity className="w-5 h-5" />
    },
    {
      category: "Build",
      items: [
        { label: "Material", value: "Stainless Steel" },
        { label: "Water", value: "50m Water Resistant" },
        { label: "Dust", value: "IP6X Certified" }
      ],
      icon: <Layers className="w-5 h-5" />
    }
  ],
  "Nexus Air": [
    {
      category: "Processor",
      items: [
        { label: "Chip", value: "S7 SiP Dual-core" },
        { label: "Neural Engine", value: "2-core" },
        { label: "Storage", value: "16GB" }
      ],
      icon: <Cpu className="w-5 h-5" />
    },
    {
      category: "Connectivity",
      items: [
        { label: "Wi-Fi", value: "Wi-Fi 5" },
        { label: "Bluetooth", value: "5.0" },
        { label: "GPS", value: "L1 GPS" }
      ],
      icon: <Wifi className="w-5 h-5" />
    },
    {
      category: "Display",
      items: [
        { label: "Type", value: "Retina Display" },
        { label: "Brightness", value: "1000 nits" },
        { label: "Protection", value: "Ion-X Glass" }
      ],
      icon: <Maximize className="w-5 h-5" />
    },
    {
      category: "Power",
      items: [
        { label: "Battery Life", value: "18h All Day" },
        { label: "Charging", value: "Standard" },
        { label: "Type", value: "Magnetic Charger" }
      ],
      icon: <BatteryCharging className="w-5 h-5" />
    },
    {
      category: "Sensors",
      items: [
        { label: "Heart Rate", value: "Optical Gen 2" },
        { label: "Temperature", value: "None" },
        { label: "Motion", value: "Accelerometer" }
      ],
      icon: <Activity className="w-5 h-5" />
    },
    {
      category: "Build",
      items: [
        { label: "Material", value: "Recycled Aluminum" },
        { label: "Water", value: "50m Water Resistant" },
        { label: "Dust", value: "IP6X Certified" }
      ],
      icon: <Layers className="w-5 h-5" />
    }
  ]
};

export default function Specs({ isOpen, onClose }) {
  const [selectedModels, setSelectedModels] = useState(["Nexus Ultra", "Nexus Pro", "Nexus Air"]);
  const categories = modelsData["Nexus Ultra"].map(cat => cat.category);

  const toggleModel = (model) => {
    if (selectedModels.includes(model)) {
      if (selectedModels.length > 1) {
        setSelectedModels(selectedModels.filter(m => m !== model));
      }
    } else {
      setSelectedModels([...selectedModels, model]);
    }
  };

  const gridCols = selectedModels.length === 1 ? 'grid-cols-2' : selectedModels.length === 2 ? 'grid-cols-3' : 'grid-cols-4';

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-xl p-4 md:p-8"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            className="bg-zinc-900 w-full max-w-6xl max-h-[90vh] rounded-3xl border border-white/10 overflow-hidden flex flex-col relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              onClick={onClose}
              className="absolute top-6 right-6 z-30 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Header Section */}
            <div className="p-8 pb-0 text-center shrink-0">
              <p className="text-gray-400 text-lg mb-6">Select models to compare features.</p>
              
              <div className="flex flex-wrap justify-center gap-3 mb-6">
                {Object.keys(modelsData).map((model) => (
                  <button
                    key={model}
                    onClick={() => toggleModel(model)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm transition-all ${
                      selectedModels.includes(model)
                        ? 'bg-white text-black border-white'
                        : 'bg-transparent text-zinc-500 border-zinc-800 hover:border-zinc-600'
                    }`}
                  >
                    {selectedModels.includes(model) && <Check className="w-3 h-3" />}
                    <span className="font-medium">{model}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Scrollable Content */}
            <div className="overflow-y-auto overflow-x-auto flex-1 p-4 md:p-8 pt-0 custom-scrollbar">
              <div className={`${selectedModels.length > 2 ? 'min-w-[600px] md:min-w-[700px]' : 'w-full'}`}>
                {/* Sticky Header Row */}
                <div className={`grid ${gridCols} gap-2 md:gap-4 mb-6 border-b border-white/10 pb-4 sticky top-0 bg-zinc-900 z-20 pt-4`}>
                  <div className="col-span-1 flex items-end">
                    <span className="text-zinc-500 font-mono text-[10px] md:text-xs tracking-wider">SPECIFICATIONS</span>
                  </div>
                  {selectedModels.map((model) => (
                    <div key={model} className="col-span-1 text-center">
                      <h3 className="text-sm md:text-lg font-bold text-white mb-1">{model}</h3>
                      <div className="text-[10px] md:text-xs text-zinc-500">From {model === "Nexus Ultra" ? "₹79,900" : model === "Nexus Pro" ? "₹39,900" : "₹24,900"}</div>
                    </div>
                  ))}
                </div>

                {/* Specs Rows */}
                {categories.map((category, catIdx) => (
                  <div key={category} className="mb-6 md:mb-8">
                    <div className="flex items-center gap-2 mb-3 px-2">
                      <div className="p-1.5 bg-white/10 rounded-md text-white">
                        {modelsData["Nexus Ultra"][catIdx].icon}
                      </div>
                      <h4 className="text-sm md:text-base font-bold text-white">{category}</h4>
                    </div>

                    <div className="space-y-1">
                      {modelsData["Nexus Ultra"][catIdx].items.map((item, itemIdx) => (
                        <motion.div 
                          key={item.label}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: itemIdx * 0.02 }}
                          className={`grid ${gridCols} gap-2 md:gap-4 py-2.5 border-b border-white/5 hover:bg-white/5 transition-colors rounded-lg px-2`}
                        >
                          <div className="col-span-1 text-zinc-400 text-xs md:text-sm font-medium flex items-center">
                            {item.label}
                          </div>
                          {selectedModels.map((model) => (
                            <div key={`${model}-${item.label}`} className="col-span-1 text-center text-white text-xs md:text-sm font-medium flex items-center justify-center">
                              {modelsData[model][catIdx].items[itemIdx].value}
                            </div>
                          ))}
                        </motion.div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
