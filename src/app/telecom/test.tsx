"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { Radio, Wifi, Server, ShieldCheck, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const SERVICES = [
  {
    icon: <Radio className="w-6 h-6" />,
    title: "Tower & Site Management",
    desc: "End-to-end management of telecommunications towers, ensuring maximum uptime and structural integrity.",
  },
  {
    icon: <Wifi className="w-6 h-6" />,
    title: "Network Deployment",
    desc: "Rapid deployment of telecom infrastructure for 4G and 5G networks across urban and rural terrains.",
  },
  {
    icon: <Server className="w-6 h-6" />,
    title: "Managed Services",
    desc: "Proactive maintenance and monitoring of critical network equipment to guarantee service continuity.",
  },
  {
    icon: <ShieldCheck className="w-6 h-6" />,
    title: "Quality & Compliance",
    desc: "Rigorous adherence to telecoms regulatory standards, delivering safe and certified engineering outcomes.",
  },
];

const STATS = [
  { num: "5,000+", label: "Sites Managed" },
  { num: "99.9%", label: "Network Uptime" },
  { num: "15+", label: "Years Experience" },
  { num: "ISO 9001", label: "Certified" },
];

export default function TelecomPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <PageHero
        title="CONNECTED WORLD"
        subtitle="Dav-Ric Telecom Managed Services provides essential and reliable engineering support to clients across the telecommunications industry — building the infrastructure that keeps nations connected."
        image="/davricgroup-telecom.png"
        category="Telecommunications"
      />

      {/* Narrative Section */}
      <section className="py-32">
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
                  <span className="text-[10px] uppercase font-black tracking-[0.5em]">
                    Engineering Services
                  </span>
                </div>
                <h2 className="text-5xl font-black text-davic-accent uppercase tracking-tighter leading-none mb-10">
                  Critical <br />
                  <span className="text-davic-primary">Structure</span>
                </h2>
                <p className="text-xs md:text-sm font-bold text-davic-secondary uppercase tracking-widest leading-loose mb-12">
                  In an era where connectivity is as essential as power and water,
                  Dav-Ric Telecom Managed Services operates at the frontier of
                  telecommunications engineering. We deploy, maintain, and optimise
                  the infrastructure that underpins digital economies — with a
                  commitment to precision that the industry demands.
                </p>

                <div className="grid grid-cols-2 gap-8 py-8 border-y border-davic-gray-medium">
                  <div>
                    <span className="text-[9px] font-black text-davic-primary uppercase tracking-widest">
                      Coverage
                    </span>
                    <p className="text-2xl font-black text-davic-accent">Nation-Wide</p>
                  </div>
                  <div>
                    <span className="text-[9px] font-black text-davic-primary uppercase tracking-widest">
                      Standard
                    </span>
                    <p className="text-2xl font-black text-davic-accent">4G / 5G Ready</p>
                  </div>
                </div>

                <div className="pt-8">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-davic-primary hover:gap-8 transition-all duration-300"
                  >
                    Work With Us <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>

              {/* Image panel */}
              <div className="relative aspect-square">
                <motion.div
                  initial={{ opacity: 0, scale: 1.05 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="absolute inset-0 border border-davic-gray-medium overflow-hidden"
                >
                  <Image
                    src="/telecom-together.png"
                    alt="Telecom infrastructure"
                    fill
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
                  />
                </motion.div>
                {/* Accent badge */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-davic-accent p-10 flex flex-col justify-end">
                  <Wifi className="text-davic-primary mb-4" />
                  <span className="text-[8px] font-black text-white uppercase tracking-[0.3em]">
                    Always Connected
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Strip */}
      <section className="border-y border-davic-gray-medium">
        <div className="px-8 md:px-16 lg:px-24">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
            {STATS.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className={`py-12 px-6 flex flex-col gap-2 ${
                  i < 3 ? "border-r border-davic-gray-medium" : ""
                }`}
              >
                <span className="text-3xl font-black text-davic-accent tracking-tighter">
                  {s.num}
                </span>
                <span className="text-[9px] font-black text-davic-secondary uppercase tracking-[0.3em]">
                  {s.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-davic-accent text-white relative">
        <div className="px-8 md:px-16 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 text-davic-primary mb-16">
              <div className="w-12 h-[2px] bg-davic-primary" />
              <span className="text-[10px] uppercase font-black tracking-[0.5em]">
                What We Do
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {SERVICES.map((s, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="p-10 border border-white/5 hover:border-davic-primary transition-all duration-500 group"
                >
                  <div className="text-davic-primary mb-8 transition-transform group-hover:scale-110">
                    {s.icon}
                  </div>
                  <h3 className="text-xs font-black uppercase tracking-[0.3em] mb-4">
                    {s.title}
                  </h3>
                  <p className="text-[10px] font-bold text-white/40 uppercase tracking-widest leading-relaxed">
                    {s.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
