"use client";

import { motion } from "framer-motion";
import { Target, Shield, Zap } from "lucide-react";
import Image from "next/image";

const VALUES = [
  {
    title: "INTEGRITY",
    description: "OUR WORD IS BOND. WE OPERATE WITH UNCOMPROMISING ETHICAL STANDARDS IN EVERY MARKET AND INDUSTRY.",
    icon: <Shield className="w-8 h-8" />,
    image: "/davricgroup-construction.png"
  },
  {
    title: "EXCELLENCE",
    description: "WE ARE THE FIRST CHOICE FOR QUALITY, EXCEEDING EXPECTATIONS THROUGH PRECISION AND GLOBAL STANDARDS.",
    icon: <Target className="w-8 h-8" />,
    image: "/davricgroup-oilandgas.png"
  },
  {
    title: "COMPETENCE",
    description: "OUR MULTIDISCIPLINARY EXPERTISE ENSURES THAT COMPLEX CHALLENGES ARE MET WITH EFFICIENT SOLUTIONS.",
    icon: <Zap className="w-8 h-8" />,
    image: "/davricgroup-telecom.png"
  }
];

export default function Purpose() {
  return (
    <section className="py-40 bg-white relative overflow-hidden">
      <div className="px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-24 items-start">
          <div className="lg:w-1/3">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="space-y-12"
            >
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-davic-primary">
                  <div className="w-12 h-[2px] bg-davic-primary" />
                  <span className="text-[10px] uppercase font-black tracking-[0.5em]">Who We Are</span>
                </div>
                <h2 className="text-5xl md:text-7xl font-black text-davic-accent leading-[0.85] uppercase tracking-tighter">
                  {/* CONSTELLATION <br /> */}
                  OUR <br />
                  <span className="text-davic-primary text-glow-sm">PURPOSE</span>
                </h2>
                <p className="text-[11px] font-bold text-davic-secondary uppercase tracking-widest leading-loose">
                  THE DAV-RIC GROUP OF COMPANIES IS A CONSTELLATION OF COMPANIES ESTABLISHED TO MAKE LIFE EASIER AND FOR OPERATIONS TO BE MORE EFFICIENT.
                </p>
              </div>

              <div className="space-y-6 pt-12 border-t border-davic-gray-medium">
                <div>
                   <h4 className="text-[10px] font-black text-davic-primary uppercase tracking-[0.4em] mb-2">Our Vision</h4>
                   <p className="text-[13px] font-bold text-davic-accent uppercase leading-relaxed tracking-tight">
                     To be the First and Best at Meeting Needs and Exceeding Expectations with Global Standards.
                   </p>
                </div>
                <div>
                   <h4 className="text-[10px] font-black text-davic-primary uppercase tracking-[0.4em] mb-2">Our Mission</h4>
                   <p className="text-[13px] font-bold text-davic-accent uppercase leading-relaxed tracking-tight">
                     We provide solutions to today’s problems for our clients and communities with resources and capabilities that ensure tomorrow is filled with opportunities.
                   </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-3 lg:pt-12">
            {VALUES.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
                className="group relative overflow-hidden h-[500px] flex flex-col justify-end p-8 border border-davic-gray-medium transition-all duration-700 hover:border-davic-primary"
              >
                {/* Image Overlay */}
                <div className="absolute inset-0 z-0">
                  <Image 
                    src={value.image}
                    alt={value.title}
                    fill
                    className="object-cover grayscale brightness-40 group-hover:grayscale-0 group-hover:scale-110 group-hover:brightness-50 transition-all duration-1000"
                  />
                  <div className="absolute inset-0 bg-davic-accent/60 group-hover:bg-davic-accent/40 transition-colors" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="text-davic-primary mb-8 transform group-hover:-translate-y-2 transition-transform duration-500">
                     {value.icon}
                  </div>
                  <h3 className="text-xl font-black text-white mb-6 uppercase tracking-tight">
                    {value.title}
                  </h3>
                  <p className="text-[11px] font-bold text-white/50 uppercase tracking-widest leading-relaxed">
                    {value.description}
                  </p>
                </div>

                {/* Accent Line */}
                <div className="absolute bottom-0 left-0 w-full h-[1px] bg-white/10 group-hover:bg-davic-primary transition-colors" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Structural Accent */}
      <div className="absolute top-0 right-0 w-1/4 h-full bg-davic-gray-light -z-10 skew-x-12 translate-x-20" />
    </section>
  );
}
