"use client";

import { motion } from "framer-motion";

const TIMELINE = [
  {
    year: "2008",
    title: "The Genesis",
    description: "THE JOURNEY BEGAN WITH A DEDICATION TO PURSUE PURPOSE AND BUILD BUSINESSES INTO INSTITUTIONS."
  },
  {
    year: "2010",
    title: "Oil & Gas Roots",
    description: "STARTED AS A TRADING BUSINESS SOURCING PETROLEUM PRODUCTS AND DISTRIBUTING TO RETAILERS."
  },
  {
    year: "2015",
    title: "Infrastructure Shift",
    description: "LEVERAGING LOGISTICS CAPABILITIES TO EXPAND INTO CIVIL CONSTRUCTION AND TELECOM SERVICING."
  },
  {
    year: "2024",
    title: "Global Conglomerate",
    description: "OPERATING ON 2 CONTINENTS WITH 4 SUBSIDIARIES PROVIDING ENERGY, SHELTER, AND SERVICES."
  }
];

export default function History() {
  return (
    <section className="py-40 bg-white relative overflow-hidden">
      <div className="px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-32 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="max-w-2xl"
          >
            <div className="flex items-center gap-4 text-davic-primary mb-8">
               <div className="w-16 h-[2px] bg-davic-primary" />
               <span className="text-[10px] uppercase font-black tracking-[0.5em]">The Evolution</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-davic-accent uppercase tracking-tighter leading-[0.85]">
              OUR <span className="text-davic-primary">JOURNEY</span> <br />
              & LEGACY
            </h2>
          </motion.div>
          
          <motion.p
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             transition={{ delay: 0.3 }}
             className="text-[10px] font-bold text-davic-secondary uppercase tracking-[0.3em] max-w-xs leading-loose"
          >
            A chronicle of innovation, growth, and the relentless pursuit of industrial mastery.
          </motion.p>
        </div>

        <div className="relative border-t border-davic-gray-medium pt-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {TIMELINE.map((item, index) => (
              <motion.div
                key={item.year}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative"
              >
                <div className="space-y-8">
                  <div className="text-6xl font-black text-davic-gray-medium group-hover:text-davic-primary transition-colors duration-500 flex items-center gap-4">
                     {item.year}
                     <div className="h-[2px] w-0 bg-davic-primary group-hover:w-16 transition-all duration-700" />
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-lg font-black text-davic-accent uppercase tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-[10px] font-bold text-davic-secondary uppercase tracking-widest leading-loose">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Background Year Accent */}
          <div className="absolute top-0 right-0 text-[30vw] font-black text-davic-accent/[0.02] leading-none pointer-events-none select-none">
            EST.
          </div>
        </div>
        </div>
      </div>
    </section>
  );
}
