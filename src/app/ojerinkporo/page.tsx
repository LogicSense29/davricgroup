"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { GraduationCap, Users, Heart, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function OjerinkporoPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      <PageHero 
        title="OJERINKPORO"
        subtitle="The Ojerinkporo Foundation is dedicated to empowering the grassroots through education, sustainable health initiatives, and community leadership."
        image="/davricgroup-construction4.jpeg"
        category="Mission & Legacy"
      />

      <section className="py-32">
        <div className="px-8 md:px-16 lg:px-24">
          <div className="max-w-7xl mx-auto">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                <div className="space-y-12 order-2 lg:order-1">
                   <div className="flex items-center gap-4 text-davic-primary">
                     <div className="w-12 h-[2px] bg-davic-primary" />
                     <span className="text-[10px] uppercase font-black tracking-[0.5em]">Grassroots Impact</span>
                   </div>
                   <h2 className="text-5xl font-black text-davic-accent uppercase tracking-tighter leading-none">
                     Community <br />
                     <span className="text-davic-primary">Heritage</span>
                   </h2>
                   <p className="text-xs md:text-sm font-bold text-davic-secondary uppercase tracking-widest leading-loose">
                     Named after our ancestral roots, the Ojerinkporo Foundation represents our commitment to never forgetting where we came from. We focus on direct, high-impact intervention programs that provide immediate relief and long-term empowerment to those in the most underserved regions.
                   </p>
                   
                   <div className="space-y-8">
                      {[
                        { icon: <GraduationCap className="w-6 h-6" />, title: "Scholarship Funds", label: "BRIGHTER FUTURES" },
                        { icon: <Users className="w-6 h-6" />, title: "Youth Mentorship", label: "LEADERSHIP PIPELINE" },
                        { icon: <Heart className="w-6 h-6" />, title: "Emergency Aid", label: "CRITICAL SUPPORT" },
                      ].map((v, i) => (
                        <div key={i} className="flex items-center gap-8 group">
                           <div className="w-12 h-12 flex items-center justify-center border border-davic-gray-medium text-davic-primary group-hover:bg-davic-primary group-hover:text-white transition-all duration-500">
                             {v.icon}
                           </div>
                           <div>
                             <h4 className="text-xs font-black text-davic-accent uppercase tracking-widest">{v.title}</h4>
                             <p className="text-[9px] font-black text-davic-primary uppercase tracking-[0.4em]">{v.label}</p>
                           </div>
                        </div>
                      ))}
                   </div>
                </div>

                <div className="relative aspect-[4/5] md:aspect-square overflow-hidden border border-davic-gray-medium order-1 lg:order-2">
                   <Image src="/davric-ceo2.jpg" alt="Foundation Visionary" fill className="object-cover grayscale" />
                   <div className="absolute inset-0 bg-davic-accent/20" />
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-32 bg-davic-accent text-white relative">
         <div className="absolute inset-0 bg-industrial opacity-[0.03]" />
         <div className="px-8 md:px-16 lg:px-24 relative z-10">
            <div className="max-w-7xl mx-auto">
               <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-left">
                  <div className="p-12 border border-white/5 space-y-4">
                     <span className="text-davic-primary text-[10px] font-black uppercase tracking-widest">Scholarships</span>
                     <p className="text-6xl font-black">500+</p>
                  </div>
                  <div className="p-12 border border-white/5 space-y-4">
                     <span className="text-davic-primary text-[10px] font-black uppercase tracking-widest">Lives Touched</span>
                     <p className="text-6xl font-black">10K+</p>
                  </div>
                  <div className="p-12 border border-white/5 space-y-4">
                     <span className="text-davic-primary text-[10px] font-black uppercase tracking-widest">Communities</span>
                     <p className="text-6xl font-black">25+</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}
