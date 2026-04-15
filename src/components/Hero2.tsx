"use client";

import { motion } from "framer-motion";
import { ArrowRight, Settings, ShieldCheck, Zap } from "lucide-react";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-white pt-20">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-8 space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-3 text-davic-primary"
            >
              <div className="w-12 h-[1px] bg-davic-primary" />
              <span className="text-[10px] uppercase font-black tracking-[0.4em]">Leading Conglomerate</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-8xl lg:text-9xl font-black text-davic-accent leading-[0.85] uppercase"
            >
              Innovation <br />
              <span className="text-davic-primary">Through</span> <br />
              Precision.
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 1 }}
              className="max-w-xl"
            >
              <p className="text-sm md:text-base font-bold uppercase tracking-widest text-davic-secondary leading-relaxed">
                Dav-Ric Group operates at the intersection of industry and impact. 
                Engineering the infrastructure of tomorrow while powering the world today.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <Link 
                href="#subsidiaries"
                className="group flex items-center gap-4 bg-davic-primary text-white border border-davic-primary px-10 py-5 text-xs font-black uppercase tracking-[0.2em] hover:bg-davic-accent hover:border-davic-accent transition-all shadow-xl shadow-davic-primary/10"
              >
                Discover our sectors <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
              </Link>
            </motion.div>
          </div>

          <div className="lg:col-span-4 relative hidden lg:block">
             <motion.div
               initial={{ opacity: 0, scale: 0.8 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ delay: 0.4, duration: 1.2, ease: "easeOut" }}
               className="aspect-[3/4] bg-davic-gray-light border border-davic-gray-medium rounded-sm relative overflow-hidden group shadow-2xl"
             >
                {/* Decorative Elements */}
                <div className="absolute top-6 left-6 z-20">
                   <Settings className="w-12 h-12 text-davic-primary/10 animate-spin-slow" />
                </div>
                <div className="absolute bottom-6 right-6 z-20 text-right">
                   <p className="text-[40px] font-black text-davic-primary/5 leading-none">01</p>
                   <p className="text-[10px] font-black text-davic-primary/20 uppercase tracking-widest">Global Reach</p>
                </div>
                
                {/* Image Placeholder with Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-davic-primary/5 to-davic-secondary/5 group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute inset-0 flex items-center justify-center">
                   <motion.div 
                     animate={{ 
                       y: [0, -20, 0],
                     }}
                     transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                     className="w-40 h-40 border-[2px] border-davic-primary/10 rounded-full flex items-center justify-center"
                   >
                      <div className="w-32 h-32 border-[1px] border-davic-primary/20 rounded-full flex items-center justify-center animate-pulse">
                         <div className="w-24 h-24 bg-davic-primary/5 rounded-full" />
                      </div>
                   </motion.div>
                </div>
             </motion.div>
          </div>
        </div>
      </div>
      
      {/* Technical Info Bar */}
      <div className="absolute bottom-0 left-0 right-0 bg-davic-gray-light border-t border-davic-gray-medium py-10">
        <div className="container mx-auto px-6">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                { icon: <Zap className="w-5 h-5" />, title: "Energy Solutions", desc: "Sustainably powering industries" },
                { icon: <ShieldCheck className="w-5 h-5" />, title: "Infrastructure", desc: "Building resilient foundations" },
                { icon: <Settings className="w-5 h-5" />, title: "Precision", desc: "Engineering with total accuracy" }
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + (i * 0.1) }}
                  className="flex items-start gap-4"
                >
                   <div className="text-davic-primary">{item.icon}</div>
                   <div>
                      <h4 className="text-[10px] font-black uppercase tracking-widest text-davic-accent">{item.title}</h4>
                      <p className="text-[10px] font-bold text-davic-accent/40 uppercase mt-1 tracking-wider">{item.desc}</p>
                   </div>
                </motion.div>
              ))}
           </div>
        </div>
      </div>
    </section>
  );
}
