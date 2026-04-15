"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface PageHeroProps {
  title: string;
  subtitle: string;
  image: string;
  category?: string;
}

export default function PageHero({ title, subtitle, image, category }: PageHeroProps) {

    // 1. Split words by space
  const words = title.split(" ");
  
  // 2. Decide how to group them
  // If exactly 3 words, group the first two together
  const lines = words.length === 3 
    ? [`${words[0]} ${words[1]}`, words[2]] 
    : words;

  return (
    <section className="relative h-[70vh] min-h-[500px] w-full overflow-hidden bg-davic-accent">
      {/* Background Image with Parallax-ready scale */}
      <motion.div 
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="absolute inset-0 z-0"
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover grayscale brightness-50 contrast-125"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-davic-accent/60 via-davic-accent/40 to-davic-accent/80" />
      </motion.div>

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto w-full">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="space-y-6"
          >
            {category && (
              <div className="flex items-center gap-4 text-davic-primary">
                <div className="w-12 h-[2px] bg-davic-primary" />
                <span className="text-[10px] uppercase font-black tracking-[0.5em]">{category}</span>
              </div>
            )}
            <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[7vw] font-black text-white leading-[0.85] tracking-tighter uppercase">
              {
                // title.split(" ").map((line, index) => (
                //   <span key={index} className="block">
                //     {line}
                //   </span>
                // ))
                // title
                lines.map((line, index) => (
          <span key={index} className="block">
            {line}
          </span>
        ))
              }
            </h1>
            <p className="max-w-2xl text-xs md:text-sm font-bold text-white/50 uppercase tracking-[0.2em] leading-loose">
              {subtitle}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Decorative Grid */}
      <div className="absolute inset-0 bg-industrial opacity-[0.05] pointer-events-none" />
      
      {/* Bottom Corner Accent */}
      <div className="absolute bottom-10 right-10">
        <div className="w-20 h-[1px] bg-white/20" />
        <div className="h-20 w-[1px] bg-white/20 absolute bottom-0 right-0" />
      </div>
    </section>
  );
}
