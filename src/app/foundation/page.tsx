"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { Heart, Users, GraduationCap, ArrowRight, ShieldCheck } from "lucide-react";
import Image from "next/image";

const CORE_VALUES = [
  { 
    icon: <Users className="w-6 h-6" />, 
    title: "Community Growth", 
    desc: "Empowering local populations through sustainable economic development and direct resource allocation." 
  },
  { 
    icon: <GraduationCap className="w-6 h-6" />, 
    title: "Educational Impact", 
    desc: "Providing scholarships and vocational training to bridge the skill gap in industrial sectors." 
  },
  { 
    icon: <Heart className="w-6 h-6" />, 
    title: "Public Health", 
    desc: "Strengthening healthcare systems and providing medical aid in underserved regions." 
  },
  { 
    icon: <ShieldCheck className="w-6 h-6" />, 
    title: "Operational Ethics", 
    desc: "Ensuring transparency and high moral standards in all philanthropic interventions." 
  }
];

export default function FoundationPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      <PageHero 
        title="SOCIAL IMPACT"
        subtitle="The Dav-Ric Foundation is the philanthropic arm of the Dav-Ric Group, dedicated to building sustainable futures in the communities where we operate."
        image="/davricgroup-construction2.jpeg"
        category="Corporate Responsibility"
      />

      {/* Narrative Section */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="px-8 md:px-16 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
              >
                <div className="flex items-center gap-4 text-davic-primary mb-8">
                   <div className="w-12 h-[2px] bg-davic-primary" />
                   <span className="text-[10px] uppercase font-black tracking-[0.5em]">The Mission</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-davic-accent uppercase tracking-tighter leading-none mb-10">
                  BUILDING <br />
                  <span className="text-davic-primary">PEOPLE first</span>
                </h2>
                <div className="space-y-6 text-davic-secondary font-bold text-xs md:text-sm uppercase tracking-widest leading-loose">
                  <p>
                    Beyond industrial excellence, our legacy is defined by the lives we touch and the communities we transform. The Dav-Ric Foundation operates on the principle that true corporate success is measured by social progress.
                  </p>
                  <p>
                    Through strategic partnerships and grassroots interventions, we are addressing critical challenges in education, healthcare, and economic empowerment across our operational hubs.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2 }}
                className="relative aspect-square overflow-hidden border border-davic-gray-medium group"
              >
                <Image 
                  src="/davricgroup-construction3.jpeg" 
                  alt="Foundation Impact" 
                  fill 
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000"
                />
                <div className="absolute inset-0 border-[20px] border-white/10" />
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Grid */}
      <section className="py-32 bg-davic-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-industrial opacity-[0.03] pointer-events-none" />
        
        <div className="px-8 md:px-16 lg:px-24 relative z-10">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 border border-white/10">
              {CORE_VALUES.map((value, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-12 bg-davic-accent space-y-8 hover:bg-davic-primary transition-colors duration-700"
                >
                  <div className="text-davic-primary text-white/40">{value.icon}</div>
                  <h3 className="text-xs font-black uppercase tracking-[0.3em]">{value.title}</h3>
                  <p className="text-[10px] font-bold text-white/50 uppercase tracking-widest leading-relaxed">
                    {value.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 bg-white">
        <div className="px-8 md:px-16 lg:px-24">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="space-y-12"
            >
              <h2 className="text-5xl md:text-8xl font-black text-davic-accent uppercase tracking-tighter">
                BE PART OF THE <br />
                <span className="text-davic-primary">TRANSFORMATION</span>
              </h2>
              <button className="inline-flex items-center gap-6 px-12 py-6 bg-davic-primary text-white text-[10px] font-black uppercase tracking-[0.5em] hover:bg-davic-accent transition-all duration-500">
                Contact the Foundation <ArrowRight className="w-5 h-5" />
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
