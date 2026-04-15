"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, Variants, useScroll, useTransform } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const SLIDES = [
    {
    image: "/davricgroup-oilandgas2.jpg",
    title: "SUPPLY",
    subtitle: "ENERGY",
    tagline: "Powering industries with clean, resilient energy",
    cta: "Renewable Energy",
    href: "/oil-gas",
  },
  {
    image: "/davricgroup-telecom2.jpeg",
    title: "SERVICES",
    subtitle: "TELECOM",
    tagline: "Maintenance and services that keep you connected",
    cta: "Our Services",
    href: "/telecom",
  },
        {
    image: "/davricgroup-construction4.jpeg",
    title: "STRUCTURE",
    subtitle: "GLOBAL",
    tagline: "Building the foundations of a sustainable future",
    cta: "Our Infrastructure",
    href: "/construction",
  },
    {
    image: "/davric-home-w.jpeg",
    title: "PRIME",
    subtitle: "ESTATES",
    tagline: "Beautiful Homes for Everyone",
    cta: "Our Homes",
    href: "/home",
  },
];

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % SLIDES.length);
    }, 10000);
    
    return () => {
      clearInterval(timer);
    };
  }, []);

  const slideVariants: Variants = {
    initial: { clipPath: "inset(0 0 0 100%)" },
    animate: { 
      clipPath: "inset(0 0 0 0%)",
      transition: { duration: 1.2, ease: [0.77, 0, 0.175, 1] }
    },
    exit: { 
      clipPath: "inset(0 100% 0 0%)",
      transition: { duration: 1, ease: [0.77, 0, 0.175, 1] }
    }
  };

  const lineVariants: Variants = {
    initial: { y: "110%", rotate: 2 },
    animate: { 
      y: 0, 
      rotate: 0,
      transition: { duration: 1, ease: [0.33, 1, 0.68, 1], delay: 0.8 } 
    }
  };

  return (
    <section ref={sectionRef} className="relative h-[80vh] lg:h-screen min-h-[700px] overflow-hidden bg-davic-accent">
      <div className="relative w-full h-full overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            variants={slideVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute inset-0"
          >
            {/* Background Image with Parallax & Ken Burns */}
            <motion.div 
              style={{ y: y1, opacity }}
              className="absolute inset-0"
            >
              <Image 
                src={SLIDES[currentIndex].image}
                alt={SLIDES[currentIndex].title}
                fill
                className="object-cover scale-110 select-none animate-ken-burns"
                priority
              />
              <div className="absolute inset-0 bg-davic-accent/55 h-full" />
              {/* <div className="absolute inset-0 bg-davic-accent/60" /> */}
              {/* <div className="absolute inset-0 bg-gradient-to-t from-davic-accent via-transparent to-davic-accent/100" /> */}
            </motion.div>
            
            {/* Content Area */}
            <div className="absolute inset-0 z-20 flex flex-col justify-center px-8 md:px-16 lg:px-24">
               <div className="max-w-7xl w-full mx-auto">
                  {/* <div className="overflow-hidden mb-2">
                    <motion.p 
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 1, duration: 0.8 }}
                      className="text-davic-primary font-black tracking-[0.5em] text-[10px] md:text-xs uppercase mb-4 flex items-center gap-4"
                    >
                      <span className="w-12 h-[1px] bg-davic-primary" />
                      Industrial Excellence
                    </motion.p>
                  </div> */}

                  <div className="space-y-1">
                    <div className="overflow-hidden">
                      <motion.h1 
                        variants={lineVariants}
                        className="text-5xl sm:text-7xl md:text-8xl lg:text-[7vw] font-black text-white leading-[0.85] uppercase tracking-tighter"
                      >
                        {SLIDES[currentIndex].subtitle}
                      </motion.h1>
                    </div>
                    <div className="overflow-hidden">
                      <motion.h1 
                        variants={lineVariants}
                        transition={{ duration: 1, ease: [0.33, 1, 0.68, 1], delay: 0.9 }}
                        className="text-5xl sm:text-7xl md:text-8xl lg:text-[7vw] font-black text-white/20 leading-[0.85] uppercase tracking-tighter"
                      >
                        {SLIDES[currentIndex].title}
                      </motion.h1>
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-start gap-8 mt-12 md:mt-16">
                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1.2, duration: 0.8 }}
                      className="text-[10px] sm:text-xs md:text-sm font-bold text-white/60 uppercase tracking-[0.3em] max-w-[280px] sm:max-w-sm leading-relaxed"
                    >
                      {SLIDES[currentIndex].tagline}
                    </motion.p>
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 1.4, duration: 0.8 }}
                    >
                      <Link 
                        href={SLIDES[currentIndex].href} 
                        className="group relative inline-flex items-center gap-4 sm:gap-6 bg-davic-primary text-white pl-8 sm:pl-10 pr-6 sm:pr-8 py-4 sm:py-5 text-[9px] sm:text-[10px] md:text-xs font-black uppercase tracking-[0.3em] hover:bg-davic-primary/80 hover:text-white transition-all duration-500 shadow-[0_20px_50px_rgba(220,38,38,0.3)]"
                      >
                        {SLIDES[currentIndex].cta}
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-3" />
                        <div className="absolute inset-0 border border-white/20 translate-x-1 translate-y-1 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform" />
                      </Link>
                    </motion.div>
                  </div>
               </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Progress Display - Bottom Right for balance */}
        <div className="absolute bottom-12 right-12 lg:bottom-20 lg:right-24 z-30 flex flex-col items-end gap-4">
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="flex flex-col items-end"
          >
            <span className="text-[10px] font-black text-davic-primary tracking-[0.5em] uppercase mb-2">Slide</span>
            <div className="flex gap-3">
            {SLIDES.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className="group relative w-16 h-1 overflow-hidden bg-white/10"
              >
                <motion.div 
                  initial={false}
                  animate={{ 
                    scaleX: index === currentIndex ? 1 : 0,
                  }}
                  transition={{ 
                    duration: index === currentIndex ? 10 : 0.5, 
                    ease: "linear"
                  }}
                  className="absolute inset-0 bg-davic-primary origin-left"
                />
                <div 
                  className={`absolute inset-0 bg-white transition-opacity ${
                    index === currentIndex ? "opacity-20" : "opacity-0 group-hover:opacity-10"
                  }`} 
                />
              </button>
            ))}
          </div>
            <div className="mt-2 text-right">
               <span className="text-6xl font-black text-white/5 block leading-none tracking-tighter">0{currentIndex + 1}</span>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Decorative Grid Overlay (Subtle) */}
      <div className="absolute inset-0 pointer-events-none z-10 bg-industrial opacity-[0.03]" />
    </section>
  );
}
