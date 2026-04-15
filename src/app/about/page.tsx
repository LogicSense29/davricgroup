"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import Image from "next/image";
import { Award, Target, History as HistoryIcon, ShieldCheck } from "lucide-react";

const MILESTONES = [
  { year: "2010", event: "Establishment of Dav-Ric Group as a specialized construction firm." },
  { year: "2014", event: "Strategic expansion into the downstream oil & gas sector." },
  { year: "2018", event: "Launch of Dav-Ric Homes and major residential developments." },
  { year: "2022", event: "Consolidation of all operations into a unified industrial conglomerate." }
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      <PageHero 
        title="OUR HERITAGE"
        subtitle="Dav-Ric Group is a diversified industrial conglomerate with a legacy built on integrity, technical precision, and unwavering commitment to excellence."
        image="/davricgroup-construction.png"
        category="Who we are"
      />

      {/* Philosophy Section */}
      <section className="py-32 border-b border-davic-gray-medium">
        <div className="px-8 md:px-16 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-20 items-start">
              <div className="lg:w-1/3">
                <div className="flex items-center gap-4 text-davic-primary mb-8">
                   <div className="w-12 h-[2px] bg-davic-primary" />
                   <span className="text-[10px] uppercase font-black tracking-[0.5em]">Philosophy</span>
                </div>
                <h2 className="text-4xl font-black text-davic-accent uppercase tracking-tighter leading-none">
                  THE <br />
                  <span className="text-davic-primary">DAV-RIC WAY</span>
                </h2>
              </div>
              <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-12">
                <p className="text-xs md:text-sm font-bold text-davic-secondary uppercase tracking-widest leading-loose">
                  Our approach is defined by an uncompromising focus on quality. We believe that every project, whether it's a critical energy pipeline or a luxury residential development, deserves the highest level of engineering discipline and operational care.
                </p>
                <p className="text-xs md:text-sm font-bold text-davic-secondary uppercase tracking-widest leading-loose">
                  We don't just build structures or move resources; we build institutions. By integrating cutting-edge technology with deep-rooted values, we are redefining what it means to be an industrial leader in the 21st century.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* History/Timeline Section */}
      <section className="py-32 bg-davic-accent text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-industrial opacity-[0.03]" />
        
        <div className="px-8 md:px-16 lg:px-24 relative z-10">
          <div className="max-w-7xl mx-auto">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
                <div className="space-y-12">
                   <div className="space-y-4">
                      <span className="text-davic-primary text-xs font-black uppercase tracking-[0.4em]">Our Journey</span>
                      <h2 className="text-5xl font-black uppercase tracking-tighter">Decades of <br /> Excellence</h2>
                   </div>
                   <div className="space-y-8 pl-10 border-l border-white/10">
                      {MILESTONES.map((m, i) => (
                        <div key={i} className="relative">
                           <div className="absolute -left-[45px] top-0 w-2 h-2 rounded-full bg-davic-primary" />
                           <span className="text-davic-primary text-xs font-black tracking-widest block mb-2">{m.year}</span>
                           <p className="text-[10px] font-bold text-white/50 uppercase tracking-widest leading-relaxed">{m.event}</p>
                        </div>
                      ))}
                   </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                   <div className="aspect-[3/4] relative overflow-hidden border border-white/10">
                      <Image src="/davricgroup-oilandgas2.jpg" alt="Heritage" fill className="object-cover grayscale" />
                   </div>
                   <div className="aspect-[3/4] relative overflow-hidden border border-white/10 mt-12">
                      <Image src="/davricgroup-construction4.jpeg" alt="Heritage" fill className="object-cover grayscale" />
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Core Values / Stats */}
      <section className="py-32 bg-white">
        <div className="px-8 md:px-16 lg:px-24">
          <div className="max-w-7xl mx-auto">
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                {[
                  { icon: <Award />, title: "Integrity", label: "OUR WORD IS BOND" },
                  { icon: <Target />, title: "Precision", label: "TECHNICAL RIGOR" },
                  { icon: <HistoryIcon />, title: "Resilience", label: "ADAPTIVE STRENGTH" },
                  { icon: <ShieldCheck />, title: "Excellence", label: "BEYOND STANDARDS" },
                ].map((v, i) => (
                  <div key={i} className="space-y-6 text-center lg:text-left">
                     <div className="text-davic-primary flex justify-center lg:justify-start">{v.icon}</div>
                     <h3 className="text-sm font-black text-davic-accent uppercase tracking-[0.3em]">{v.title}</h3>
                     <p className="text-[9px] font-black text-davic-primary uppercase tracking-[0.4em]">{v.label}</p>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
