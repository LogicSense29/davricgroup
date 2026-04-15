"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Preloader() {
  const [complete, setComplete] = useState(false);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setPercent((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setComplete(true), 800);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    return () => clearInterval(timer);
  }, []);

  return (
    <AnimatePresence>
      {!complete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ 
            y: "-100%",
            transition: { duration: 1, ease: [0.77, 0, 0.175, 1] }
          }}
          className="fixed inset-0 z-[100] bg-davic-accent flex flex-col items-center justify-center overflow-hidden"
        >
          {/* Background Text Overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
             <h1 className="text-[30vw] font-black text-white leading-none uppercase tracking-tighter">
               DAVRIC
             </h1>
          </div>

          {/* Industrial Grain Overlay */}
          <div className="absolute inset-0 bg-industrial opacity-[0.05] pointer-events-none" />

          <div className="relative z-10 flex flex-col items-center">
            {/* Logo Container */}
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="relative w-[300px] h-[80px] mb-12"
            >
              <Image 
                src="/davric-group-logo.png"
                alt="Davic Group Logo"
                fill
                className="object-contain brightness-0 invert"
                priority
              />
            </motion.div>

            {/* Progress Bar Container */}
            <div className="w-[200px] h-[3px] bg-white/10 relative overflow-hidden mb-4">
              <motion.div 
                className="absolute top-0 left-0 h-full bg-davic-primary"
                initial={{ width: "0%" }}
                animate={{ width: `${percent}%` }}
                transition={{ ease: "linear" }}
              />
            </div>

            {/* Percent Text */}
            <div className="overflow-hidden h-6">
               <motion.p 
                 key={percent}
                 initial={{ y: "100%", opacity: 0 }}
                 animate={{ y: 0, opacity: 1 }}
                 className="text-[10px] font-black text-davic-primary uppercase tracking-[0.5em]"
               >
                 SYSTEMS INITIALIZING — {percent}%
               </motion.p>
            </div>
          </div>

          {/* Corner Structural Elements */}
          <motion.div 
            initial={{ opacity: 0, x: -20, y: -20 }}
            animate={{ opacity: 0.2, x: 0, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute top-12 left-12 w-24 h-24 border-t-2 border-l-2 border-white"
          />
          <motion.div 
            initial={{ opacity: 0, x: 20, y: 20 }}
            animate={{ opacity: 0.2, x: 0, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="absolute bottom-12 right-12 w-24 h-24 border-b-2 border-r-2 border-white"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
