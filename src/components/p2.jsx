"use client";

import { motion } from "framer-motion";
import { Target, Shield, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";

const VALUES = [
  {
    index: "01",
    title: "INTEGRITY",
    description: "Our word is bond. We operate with uncompromising ethical standards in every market and territory.",
    icon: <Shield className="w-5 h-5" />,
  },
  {
    index: "02",
    title: "EXCELLENCE",
    description: "We are the first choice for quality, consistently exceeding expectations through precision engineering.",
    icon: <Target className="w-5 h-5" />,
  },
  {
    index: "03",
    title: "COMPETENCE",
    description: "Our multidisciplinary expertise ensures complex challenges are met with decisive, efficient solutions.",
    icon: <Zap className="w-5 h-5" />,
  },
];

export default function Purpose() {
  return (
    <section className="bg-white relative overflow-hidden">
      {/* Top Statement Row — Full Width Dark */}
      <div className="bg-davic-accent py-24 px-8 md:px-16 lg:px-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-industrial opacity-[0.04] pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            {/* Tag */}
            <div className="lg:col-span-3">
              <div className="flex items-center gap-4 text-davic-primary mb-4">
                <div className="w-12 h-[2px] bg-davic-primary" />
                <span className="text-[10px] uppercase font-black tracking-[0.5em]">Who We Are</span>
              </div>
              <p className="text-[10px] font-bold text-white/30 uppercase tracking-widest leading-loose">
                Established to make life easier and operations more efficient through a constellation of world-class companies.
              </p>
            </div>
            {/* Statement */}
            <div className="lg:col-span-9">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="text-4xl md:text-6xl lg:text-7xl font-black text-white uppercase leading-[0.85] tracking-tighter"
              >
                OUR <span className="text-davic-primary">PURPOSE</span> IS TO <br className="hidden md:block" />
                BUILD WHAT THE <span className="text-white/30">WORLD NEEDS.</span>
              </motion.h2>
            </div>
          </div>
        </div>
      </div>

      {/* Main Body — Light BG */}
      <div className="px-8 md:px-16 lg:px-24 py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

            {/* Vision & Mission Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="lg:col-span-4 space-y-0 border-l-4 border-davic-primary"
            >
              <div className="pl-8 py-8 border-b border-davic-gray-medium">
                <h4 className="text-[9px] font-black text-davic-primary uppercase tracking-[0.4em] mb-3">Our Vision</h4>
                <p className="text-sm md:text-base font-black text-davic-accent uppercase leading-tight tracking-tighter">
                  To be the First and Best at Meeting Needs and Exceeding Expectations with Global Standards.
                </p>
              </div>
              <div className="pl-8 py-8">
                <h4 className="text-[9px] font-black text-davic-primary uppercase tracking-[0.4em] mb-3">Our Mission</h4>
                <p className="text-sm md:text-base font-black text-davic-accent uppercase leading-tight tracking-tighter">
                  We provide solutions to today's problems for our clients and communities, ensuring tomorrow is filled with opportunities.
                </p>
              </div>

              <div className="pl-8 pt-8">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-davic-primary hover:gap-8 transition-all duration-300"
                >
                  Our Full Story <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Values Column */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-px bg-davic-gray-medium border border-davic-gray-medium">
              {VALUES.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.8 }}
                  className="bg-white p-10 flex flex-col gap-8 group hover:bg-davic-accent transition-colors duration-700"
                >
                  {/* Index */}
                  <span className="text-5xl font-black text-davic-gray-medium group-hover:text-white/10 transition-colors leading-none">
                    {value.index}
                  </span>

                  {/* Icon + Title */}
                  <div className="space-y-3">
                    <div className="text-davic-primary group-hover:text-davic-primary transition-colors">
                      {value.icon}
                    </div>
                    <h3 className="text-sm font-black text-davic-accent group-hover:text-white uppercase tracking-tighter transition-colors">
                      {value.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-[10px] font-bold text-davic-secondary group-hover:text-white/50 uppercase tracking-widest leading-relaxed transition-colors mt-auto">
                    {value.description}
                  </p>

                  {/* Bottom Accent */}
                  <div className="w-8 h-[2px] bg-davic-gray-medium group-hover:bg-davic-primary transition-colors" />
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
