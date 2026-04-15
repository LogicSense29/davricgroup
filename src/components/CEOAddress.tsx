"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CEOAddress() {
  return (
    <section className="bg-davic-accent py-40 overflow-hidden">
      <div className="px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-[3/4] relative overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000 shadow-3xl">
              <Image 
                src="/davric-ceo2.jpg" // Provided new picture
                alt="Iyke Agwu - Group CEO"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-davic-accent/80 via-transparent to-transparent" />
            </div>
            
            {/* Structural Elements */}
            <div className="absolute -bottom-10 -right-10 w-40 h-40 border-r-4 border-b-4 border-davic-primary z-10" />
            <div className="absolute top-10 -left-10 text-[20vw] font-black text-white/[0.03] leading-none pointer-events-none">CEO</div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="space-y-12"
          >
            <div className="space-y-6">
              <div className="flex items-center gap-4 text-davic-primary">
                 <div className="w-16 h-[2px] bg-davic-primary" />
                 <span className="text-[10px] uppercase font-black tracking-[0.5em]">CEO Address</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-[0.9]">
                LEADERSHIP <br />
                BUILT ON <br />
                <span className="text-davic-primary text-glow-sm">VALUE</span>
              </h2>
            </div>
            
            <div className="space-y-8 text-white/60">
              <p className="text-sm md:text-base font-bold uppercase tracking-widest leading-loose">
                "OUR ORIGINS AT DAVRIC GROUP HAVE BIRTHED OUR FIRMLY HELD VALUES OF COMPETENCE, RESOURCEFULNESS, AND SURPASSING EXPECTATIONS. WE APPROACH OPPORTUNITIES SEEKING TO ADD VALUE FIRST – THIS IS HOW WE HAVE GROWN FROM A SMALL LOGISTICS COMPANY LEASING ALL FLEET ASSETS TO A CONGLOMERATE OF 4 COMPANIES OPERATING IN 7 INDUSTRIES OVER 2 DECADES."
              </p>
              <p className="text-xs md:text-sm font-medium uppercase tracking-widest leading-relaxed opacity-60">
                Guiding us to new heights of Innovation, Resilience, and Excellence. We give Confidence and Direction to those we serve.
              </p>
            </div>

            <div className="pt-12 border-t border-white/10 flex flex-col gap-2">
               <p className="text-lg font-black text-white uppercase tracking-tighter">Iyke Agwu</p>
               <p className="text-[10px] font-black text-davic-primary uppercase tracking-[0.4em]">Group CEO, Dav-Ric Group</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
