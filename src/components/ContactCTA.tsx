"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ContactCTA() {
  return (
    <section className="py-24 bg-davic-accent relative overflow-hidden">
      {/* Structural Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-white/[0.02] -skew-x-12 translate-x-20" />
      
      <div className="px-8 md:px-16 lg:px-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-10"
          >
            <div className="flex items-center gap-3 text-davic-primary">
               <div className="w-12 h-[1px] bg-davic-primary" />
               <span className="text-[10px] uppercase font-black tracking-[0.4em]">Get in Touch</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black text-white leading-[0.9] uppercase">
              Ready to build <br />
              <span className="text-davic-primary">The Future?</span>
            </h2>
            
            <p className="text-sm md:text-base font-bold uppercase tracking-widest text-white/40 max-w-2xl leading-relaxed">
              Partner with Dav-Ric Group for industrial excellence, sustainable energy projects, 
              and transformative social impact initiatives.
            </p>
            
            <div className="flex flex-wrap gap-6 pt-4">
              <Link 
                href="/contact"
                className="group flex items-center gap-4 bg-davic-primary text-white px-12 py-6 text-xs font-black uppercase tracking-[0.2em] hover:bg-white hover:text-davic-accent transition-all shadow-2xl shadow-davic-primary/20"
              >
                Start a Conversation <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
              </Link>
              
              <Link 
                href="mailto:info@davricgroup.com"
                className="flex items-center gap-4 border border-white/10 text-white px-12 py-6 text-xs font-black uppercase tracking-[0.2em] hover:bg-white/5 transition-all"
              >
                Email our office
              </Link>
            </div>
          </motion.div>
        </div>
        </div>
      </div>
    </section>
  );
}
