"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const PILLARS = [
  {
    index: "01",
    title: "Education",
    description:
      "Strategic investments in human capital and specialized training programs for underserved communities.",
  },
  {
    index: "02",
    title: "Healthcare",
    description:
      "Supporting infrastructure projects to improve access to quality medical services across emerging regions.",
  },
  {
    index: "03",
    title: "Social Impact",
    description:
      "Sustainable initiatives designed to empower local communities and create lasting generational change.",
  },
];

export default function Foundation() {
  return (
    <section id="foundation" className="relative overflow-hidden">
      {/* Full-bleed image behind everything */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/foundation.jpeg"
          alt="Ojerinkporo Foundation"
          fill
          className="object-cover object-center grayscale brightness-50"
        />
        {/* Gradient vignette bottom-up */}
        <div className="absolute inset-0 bg-gradient-to-t from-davic-accent/90 via-davic-accent/50 to-davic-accent/20" />
        {/* Subtle grid texture */}
        <div className="absolute inset-0 bg-industrial opacity-[0.06] pointer-events-none" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-8 md:px-16 lg:px-24 pt-32 pb-24">
        <div className="max-w-7xl mx-auto">

          {/* Label row */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 text-davic-primary mb-10"
          >
            <div className="w-12 h-[2px] bg-davic-primary" />
            <span className="text-[10px] uppercase font-black tracking-[0.5em]">
              Philanthropic Arm
            </span>
          </motion.div> */}

          {/* Heading + CTA row */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10 mb-24">
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="text-5xl sm:text-6xl md:text-8xl lg:text-[9vw] font-black text-white leading-[0.85] uppercase tracking-tighter"
            >
              OJERINKPORO <br />
              <span className="text-davic-primary">FOUNDATION</span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="lg:max-w-xs space-y-8 flex-shrink-0"
            >
              <p className="text-[11px] font-bold text-white/40 uppercase tracking-widest leading-loose">
                Named after our ancestral roots, the foundation represents our
                commitment to never forgetting where we came from.
              </p>
              <Link
                href="https://ojerinkporofoundation.com"
                className="inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-davic-primary hover:gap-8 transition-all duration-300"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>

          {/* Pillars — no icons, just numbered text columns */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1 }}
            className="grid grid-cols-1 md:grid-cols-3 border-t border-white/10"
          >
            {PILLARS.map((pillar, i) => (
              <div
                key={pillar.index}
                className={`py-12 pr-10 space-y-5 ${
                  i < PILLARS.length - 1 ? "md:border-r border-white/10" : ""
                } ${i > 0 ? "md:pl-10" : ""}`}
              >
                <span className="text-[9px] font-black text-davic-primary uppercase tracking-[0.5em]">
                  {pillar.index}
                </span>
                <h3 className="text-lg md:text-xl font-black text-white uppercase tracking-tight">
                  {pillar.title}
                </h3>
                <p className="text-[11px] font-bold text-white/40 uppercase tracking-widest leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Corner accents */}
      <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-davic-primary/20 pointer-events-none z-10" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-davic-primary/20 pointer-events-none z-10" />
    </section>
  );
}
