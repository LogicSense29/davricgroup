"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { Home, Key, Map, Ruler, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function HomesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      <PageHero 
        title="MODERN LIVING"
        subtitle="Dav-Ric Homes creates premium residential experiences through architectural elegance, smart integration, and lifestyle-driven development."
        image="/davricgroup-homes.png"
        category="Real Estate"
      />

      <section className="py-32">
        <div className="px-8 md:px-16 lg:px-24">
          <div className="max-w-7xl mx-auto">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
                <div className="relative aspect-[4/5] overflow-hidden border border-davic-gray-medium group">
                   <Image src="/davric-home-w.jpeg" alt="Luxury Interior" fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" />
                   <div className="absolute inset-0 border-[30px] border-white/5" />
                </div>

                <div className="space-y-12">
                   <div className="flex items-center gap-4 text-davic-primary">
                     <div className="w-12 h-[2px] bg-davic-primary" />
                     <span className="text-[10px] uppercase font-black tracking-[0.5em]">Our Promise</span>
                   </div>
                   <h2 className="text-5xl font-black text-davic-accent uppercase tracking-tighter leading-none">
                     Elegance <br />
                     <span className="text-davic-primary">Defined</span>
                   </h2>
                   <p className="text-xs md:text-sm font-bold text-davic-secondary uppercase tracking-widest leading-loose">
                     At Dav-Ric Homes, we believe that a residence is a sanctuary of success. Our developments are designed to provide a seamless blend of comfort, security, and prestige. Every square millimetre is considered, from the structural foundation to the final interior finishes.
                   </p>
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-8">
                      {[
                        { icon: <Map className="w-5 h-5" />, title: "Prime Locations", desc: "Strategic development in elite residential hubs." },
                        { icon: <Key className="w-5 h-5" />, title: "Smart Integration", desc: "Advanced home automation and security systems." },
                        { icon: <Ruler className="w-5 h-5" />, title: "Bespoke Design", desc: "Tailored architectural solutions for discerning clients." },
                        { icon: <Home className="w-5 h-5" />, title: "Facility Mgmt", desc: "Uncompromising after-sales and maintenance services." },
                      ].map((item, i) => (
                        <div key={i} className="space-y-4">
                           <div className="text-davic-primary">{item.icon}</div>
                           <h4 className="text-xs font-black uppercase tracking-[0.2em] mb-2">{item.title}</h4>
                           <p className="text-[10px] font-bold text-davic-secondary uppercase tracking-widest leading-relaxed">{item.desc}</p>
                        </div>
                      ))}
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Narrative Section */}
      <section className="py-40 bg-davic-accent text-white text-center relative overflow-hidden">
         <div className="absolute inset-0 bg-industrial opacity-[0.03]" />
         <div className="px-8 md:px-16 lg:px-24 relative z-10">
            <div className="flex flex-col items-center max-w-4xl mx-auto space-y-12">
               <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-tight italic opacity-80">
                 "WHERE VISION MEETS <span className="text-davic-primary italic-none not-italic">ADDRESS</span>."
               </h3>
               <div className="w-24 h-[1px] bg-davic-primary mx-auto" />
               <p className="text-xs md:text-sm font-bold text-white/40 uppercase tracking-[0.3em] leading-loose">
                  Dav-Ric Homes is more than a developer; we are creators of lifestyles. The Next Generation of Real Estate.
                  {/* Join us as we build the next generation of premium living spaces. */}
               </p>

                              <Link
                href=""
                className="group flex items-center gap-4 bg-davic-primary text-white px-12 py-6 text-xs font-black uppercase tracking-[0.2em] hover:bg-davic-primary/80 hover:text-white transition-all shadow-2xl shadow-davic-primary/20"
              >
                Visit Website <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
              </Link>

            </div>
         </div>
      </section>

      <Footer />
    </main>
  );
}
