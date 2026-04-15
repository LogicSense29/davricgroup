"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Activity, Zap, HardHat, Home } from "lucide-react";
import Image from "next/image";

const subsidiaries = [
  {
    id: "oil-gas",
    title: "Dav-Ric Oil & Gas",
    category: "Energy distribution",
    description: "A LEADING ENERGY DISTRIBUTION COMPANY OPERATING IN THE DOWNSTREAM OIL & GAS SECTOR.",
    icon: <Zap className="w-6 h-6" />,
    href: "/oil-gas",
    index: "01",
    image: "/davricgroup-oilandgas.png"
  },
  {
    id: "telecom",
    title: "Telecom Managed Services",
    category: "Engineering Services",
    description: "PROVIDING ESSENTIAL AND RELIABLE SERVICES TO CLIENTS IN THE TELECOMMUNICATIONS INDUSTRY.",
    icon: <Activity className="w-6 h-6" />,
    href: "/telecom",
    index: "02",
    image: "/davricgroup-telecom.png"
  },
  {
    id: "construction",
    title: "Dav-Ric Construction",
    category: "Civil Engineering",
    description: "LEVERAGING THE DISCIPLINES OF ENGINEERING TO DELIVER BUILDING AND INFRASTRUCTURE CONSTRUCTION.",
    icon: <HardHat className="w-6 h-6" />,
    href: "/construction",
    index: "03",
    image: "/davricgroup-construction.png"
  },
  // {
  //   id: "homes",
  //   title: "Dav-Ric Homes",
  //   category: "Real Estate Development",
  //   description: "PROVIDING SERVICES ACROSS ALL AREAS OF RESIDENTIAL, COMMERCIAL & MIXED USE DEVELOPMENT.",
  //   icon: <Home className="w-6 h-6" />, 
  //   href: "/homes",
  //   index: "04",
  //   image: "/davricgroup-homes.png"
  // },
];

export default function Subsidiaries() {
  return (
    <section id="subsidiaries" className="py-40 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-industrial opacity-[0.02] pointer-events-none" />
      
      <div className="px-8 md:px-16 lg:px-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start mb-32 gap-12">
            <motion.div
               initial={{ opacity: 0, y: 30 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
               className="max-w-3xl"
            >
              <div className="flex items-center gap-4 text-davic-primary mb-8">
                 <div className="w-16 h-[2px] bg-davic-primary" />
                 <span className="text-[10px] uppercase font-black tracking-[0.5em]">Global Ecosystem</span>
              </div>
              <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-[6vw] font-black text-davic-accent leading-[0.85] tracking-tight">
                DIVERSIFIED <br />
                <span className="text-davic-primary">OPERATIONS</span>
              </h2>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 1 }}
              className="md:max-w-xs pt-4"
            >
              <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-davic-secondary leading-loose">
                Leveraging collective intelligence and technological prowess to redefine industrial standards across every sector we touch.
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border-y border-davic-gray-medium">
            {subsidiaries.map((sub, index) => (
              <motion.div
                key={sub.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="group relative h-[380px] lg:h-[500px] border-x border-davic-gray-medium overflow-hidden flex flex-col justify-end p-8 lg:p-16 transition-all duration-700"
              >
                {/* Background Reveal on Hover */}
                <div className="absolute inset-0 z-0 bg-davic-accent transform translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[0.77, 0, 0.175, 1]" />
                
                <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-20 transform scale-110 group-hover:scale-100 transition-all duration-1000">
                  <Image 
                    src={sub.image} 
                    alt={sub.title} 
                    fill 
                    className="object-cover grayscale"
                  />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="flex justify-between items-end mb-12">
                     <div className="w-12 h-12 flex items-center justify-center border border-davic-gray-medium text-davic-accent group-hover:border-davic-primary group-hover:text-davic-primary transition-all duration-500">
                        {sub.icon}
                     </div>
                     <span className="text-6xl font-black text-davic-gray-medium/30 group-hover:text-davic-primary/20 transition-colors duration-500">
                       {sub.index}
                     </span>
                  </div>

                  <div className="space-y-6">
                    <p className="text-[9px] font-black text-davic-primary uppercase tracking-[0.4em] mb-4">
                      {sub.category}
                    </p>
                    <h3 className="text-4xl font-black text-davic-accent group-hover:text-white mb-8 leading-none transition-colors duration-500">
                      {sub.title.split(' ').slice(-1)}
                    </h3>
                    
                    <div className="h-0 group-hover:h-32 opacity-0 group-hover:opacity-100 overflow-hidden transition-all duration-700 ease-out">
                      <p className="text-[11px] font-bold text-white/50 uppercase tracking-[0.2em] leading-relaxed mb-10">
                        {sub.description}
                      </p>
                    </div>
                    
                    <Link 
                      href={sub.href}
                      className="inline-flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.3em] text-davic-accent group-hover:text-white transition-all duration-500"
                    >
                      Explore Sector <ArrowRight className="w-5 h-5 text-davic-primary transform group-hover:translate-x-4 transition-transform duration-500" />
                    </Link>
                  </div>
                </div>

                {/* Decorative Accent */}
                <div className="absolute top-0 right-0 w-[1px] h-0 bg-davic-primary group-hover:h-full transition-all duration-1000 delay-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Section Side Tag */}
      <div className="absolute bottom-20 -left-10 rotate-90 hidden lg:block">
         <span className="text-[9px] font-black text-davic-gray-medium uppercase tracking-[1em]">Our Subsidiaries</span>
      </div>
    </section>
  );
}
