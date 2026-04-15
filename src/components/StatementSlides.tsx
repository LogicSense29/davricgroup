"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

/*
const STATEMENTS = [
  {
    quote: "Our commitment at DavRic Group to serving our Clients operating in multiple industries has become our Compass, which reinforces the passion to deliver above expectations in challenging times, guiding us to new heights of Innovation, Resilience, and Excellence.",
    author: "Dav-Ric Group Compass",
    image: "/renewable_energy_hero.png"
  },
  {
    quote: "We give Confidence and Direction to those we serve through undeterred determination and operational integrity.",
    author: "Client Commitment",
    image: "/industrial_construction_hero.png"
  },
  {
    quote: "Building businesses into institutions: our word is bond and our bond links the world.",
    author: "Institutional Legacy",
    image: "/engineering_precision_hero.png"
  }
];
*/

const SINGLE_QUOTE = {
  quote: "Success is not about where you come from, but where you are going and the distance you are willing to travel to get there.",
  author: "Daymond Johnson",
  image: "/davricgroup-oilandgas3.jpg" // Using one of the industrial images as background for consistency
};

export default function StatementSlides() {
  /*
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % STATEMENTS.length);
    }, 8000);
    return () => clearInterval(timer);
  }, []);
  */

  return (
    <section className="py-32 bg-davic-accent relative overflow-hidden">
      <div className="px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col lg:flex-row items-center gap-20"
          >
            <div className="lg:w-1/2 relative aspect-[4/5] w-full overflow-hidden">
              <Image 
                src={SINGLE_QUOTE.image}
                alt="Davic Group Insight"
                fill
                className="object-cover grayscale brightness-50"
              />
              <div className="absolute inset-0 border-[20px] border-davic-accent/50" />
            </div>

            <div className="lg:w-1/2 space-y-12">
               <div className="flex items-center gap-4 text-davic-primary">
                  <span className="text-[10px] font-black uppercase tracking-[0.5em]">Visionary Statement</span>
                  <div className="w-12 h-[1px] bg-davic-primary" />
               </div>

                <blockquote className="text-2xl sm:text-3xl md:text-5xl font-black text-white leading-tight uppercase tracking-tighter">
                  "{SINGLE_QUOTE.quote}"
                </blockquote>

               <div className="pt-8 border-t border-white/10">
                  <p className="text-xs font-black text-davic-primary uppercase tracking-[0.3em]">
                    {SINGLE_QUOTE.author}
                  </p>
               </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-industrial opacity-[0.03] pointer-events-none" />
    </section>
  );
}
