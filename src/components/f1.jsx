"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Heart, GraduationCap, Cross } from "lucide-react";

export default function Foundation() {
  return (
    <section id="foundation" className="py-24 bg-white relative overflow-hidden">
      {/* Cinematic Background Image Container */}
      <div className="px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
        <div className="relative h-[600px] lg:h-[800px] w-full overflow-hidden group">
          <motion.div 
            initial={{ scale: 1.1 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <Image 
              src="/industrial_construction_hero.png" // Cinematic placeholder
              alt="Ojerinkporo Foundation Impact"
              fill
              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 brightness-40 group-hover:brightness-50"
            />
          </motion.div>

          {/* Industrial Grid Overlay */}
          <div className="absolute inset-0 bg-industrial opacity-10 pointer-events-none" />
          
          {/* Content Overlay */}
          <div className="absolute inset-0 flex flex-col justify-end p-8 lg:p-24 space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="max-w-4xl"
            >
              <div className="flex items-center gap-4 text-davic-primary mb-6">
                <Heart className="w-6 h-6 fill-davic-primary" />
                <span className="text-[10px] uppercase font-black tracking-[0.5em]">Philanthropic Arm</span>
              </div>
              
              <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-[8vw] font-black text-white leading-[0.85] uppercase tracking-tighter">
                OJERINKPORO <br />
                <span className="text-davic-primary text-glow-sm">FOUNDATION</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 1 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-12 border-t border-white/10"
            >
              <div className="space-y-4">
                <GraduationCap className="w-8 h-8 text-davic-primary" />
                <h3 className="text-sm font-black text-white uppercase tracking-widest">Education</h3>
                <p className="text-[11px] font-bold text-white/50 uppercase leading-relaxed">
                  Strategic investments in human capital and specialized training programs.
                </p>
              </div>
              <div className="space-y-4">
                <Heart className="w-8 h-8 text-davic-primary" />
                <h3 className="text-sm font-black text-white uppercase tracking-widest">Healthcare</h3>
                <p className="text-[11px] font-bold text-white/50 uppercase leading-relaxed">
                  Supporting infrastructure projects to improve access to quality medical services.
                </p>
              </div>
              <div className="space-y-4">
                <Cross className="w-8 h-8 text-davic-primary" />
                <h3 className="text-sm font-black text-white uppercase tracking-widest">Social Impact</h3>
                <p className="text-[11px] font-bold text-white/50 uppercase leading-relaxed">
                  Sustainable initiatives designed to empower local communities across emerging markets.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Decorative Corner Accents */}
          <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-davic-primary/30" />
          <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-davic-primary/30" />
        </div>
      </div>
    </div>

      {/* Side Label */}
      <div className="absolute top-1/2 -right-12 -translate-y-1/2 rotate-90 hidden lg:block">
        <span className="text-[10px] font-black text-davic-accent/10 uppercase tracking-[1em]">Corporate Responsibility</span>
      </div>
    </section>
  );
}
