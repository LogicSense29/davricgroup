"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { ArrowRight, Cable, MapPin, Radio, Wrench, Zap } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import TelecomGallery from "@/components/TelecomGallery";

const CORE_VALUES = [
  "Resilient Commitment",
  "Unrivalled Support",
  "Competence",
  "Partnership",
  "Reliability",
];

const OPERATIONS = [
  {
    index: "01",
    icon: <Radio className="w-6 h-6" />,
    title: "Turnkey Cell Site Build",
    location: "Nigeria",
    description:
      "Our Civil and Structural team deploys the engineering of Cell Site build. We recognize that the most critical part of cell site build is the safety of the structures housing the equipment.",
    services: [
      "Site Acquisition",
      "Subsoil Investigation: DCP test and Borehole logging",
      "Site Topography Survey",
      "Technical Site Survey",
      "Site Component Design Drawing",
      "Tower Foundation & Erection",
      "Shelter Build, Generator & Fuel Tank Installation",
      "ATP on HOLD Point Inspection",
    ],
    image: "/turkey-cell-site-build-telecom.jpeg",
  },
  {
    index: "02",
    icon: <Wrench className="w-6 h-6" />,
    title: "Cell Site Maintenance",
    location: "Nigeria",
    description:
      "Dav-Ric Telecoms Services offers an extensive range of Cell Site Maintenance services tailored to meet your needs, ensuring maximum network uptime and structural reliability.",
    services: [
      "Cell Site AMC (Annual Maintenance Contract)",
      "BTS (Base Transceiver Stations) Maintenance",
      "Transmission Systems / Microwave Maintenance",
      "RF Cables / Waveguides / Connectors",
      "Antenna Maintenance",
      "Alarms, Switch and Control Panel Management",
      "Aviation Lights Service and Repairs",
      "Air Conditioner Installation & Maintenance",
      "Diesel Supply according to the BEET Plan",
    ],
    image: "/cell-site-maintainance-telecom.jpeg",
  },
  {
    index: "03",
    icon: <Zap className="w-6 h-6" />,
    title: "Cell Site Power Solutions",
    location: "Nigeria",
    description:
      "Our engineering and technical team offers a comprehensive suite of power services including provision of mains power, alternative power generation, and hybrid power solutions.",
    services: [
      "Generator Supply and Installation (10KVA – 120KVA)",
      "Hybrid Power Solution Integration & Maintenance",
      "Power Equipment Assembly and Installation",
      "Battery Bank / Rectifier Module Maintenance",
      "Earthing System Maintenance",
      "PHCN Installation and Management",
      "Efficient Energy Monitoring Solution",
    ],
    image: "/cell-site-powersolutions-telecom.jpeg",
  },
  {
    index: "04",
    icon: <Cable className="w-6 h-6" />,
    title: "OFC Laying & Civil Works",
    location: "Nigeria",
    description:
      "Our Optical Fibre Cable (OFC) Laying service showcases our expertise in every step of the process, from meticulous surveying and planning to precise execution across all terrain types.",
    services: [
      "Survey and Assessment of Trenching terrain and routes",
      "Acquisition and liaising for Optimal Trenching routes",
      "Adherence with Regulatory Agencies and Standards",
      "Trenching and Ducting works for highways, arterial roads, feeder roads, and residential streets",
      "Trenching and Ducting works for BTS connectivity",
      "HDPE Ducts Laying",
      "Cable Blowing and Splicing works",
      "Construction of Manholes, Handholes and FRP Pull Boxes",
    ],
    image: "/ofc-laying-and-civilworks-telecom.png",
  },
];

export default function TelecomPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <PageHero
        title="CONNECTED WORLD"
        subtitle="Engineering Services set up to provide much-needed and reliable services to clients with critical operations across the Telecommunications Industry."
        image="/davricgroup-telecom.png"
        category="Telecommunications"
      />

      {/* About + Vision / Mission / Values */}
      <section className="py-32">
        <div className="px-8 md:px-16 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

              {/* Left: About */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1 }}
                className="lg:col-span-7 space-y-10"
              >
                <div className="flex items-center gap-4 text-davic-primary">
                  <div className="w-12 h-[2px] bg-davic-primary" />
                  <span className="text-[10px] uppercase font-black tracking-[0.5em]">
                    Engineering Services
                  </span>
                </div>
                <h2 className="text-5xl md:text-6xl font-black text-davic-accent uppercase tracking-tighter leading-none">
                  CRITICAL <br />
                  <span className="text-davic-primary">INFRASTRUCTURE</span>
                </h2>
                <p className="text-sm font-bold text-davic-secondary uppercase tracking-widest leading-loose">
                  Renowned for our meticulous approach and forward-thinking strategies, we excel
                  in designing and delivering resilient solutions tailored to the unique needs of
                  each client. From turnkey cell site builds to power solutions and ongoing
                  maintenance, we keep the networks that keep Nigeria connected.
                </p>

                <div className="pt-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-davic-primary hover:gap-8 transition-all duration-300"
                  >
                    Partner With Us <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>

              {/* Right: Vision / Mission / Values */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="lg:col-span-5 border-l-4 border-davic-primary"
              >
                <div className="pl-8 py-8 border-b border-davic-gray-medium">
                  <h4 className="text-[9px] font-black text-davic-primary uppercase tracking-[0.4em] mb-3">
                    Our Vision
                  </h4>
                  <p className="text-sm font-black text-davic-accent uppercase leading-tight tracking-tighter">
                    To be the Premier Partner of Choice Driving Progress for All with Integrity and a Commitment to Excellence.
                  </p>
                </div>
                <div className="pl-8 py-8 border-b border-davic-gray-medium">
                  <h4 className="text-[9px] font-black text-davic-primary uppercase tracking-[0.4em] mb-3">
                    Our Mission
                  </h4>
                  <p className="text-sm font-black text-davic-accent uppercase leading-tight tracking-tighter">
                    To provide Unparalleled Solutions and Long-term Partnerships Leveraging our Expertise in Supply, Installations and Project Management Empowering Businesses and Communities.
                  </p>
                </div>
                <div className="pl-8 py-8">
                  <h4 className="text-[9px] font-black text-davic-primary uppercase tracking-[0.4em] mb-5">
                    Core Values
                  </h4>
                  <div className="space-y-3">
                    {CORE_VALUES.map((v, i) => (
                      <div key={v} className="flex items-center gap-4">
                        <span className="text-[8px] font-black text-davic-primary/50 tabular-nums">
                          0{i + 1}
                        </span>
                        <span className="text-xs font-black text-davic-accent uppercase tracking-[0.2em]">
                          {v}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Cinematic strip */}
      <div className="relative h-[380px] lg:h-[500px] overflow-hidden">
        <Image
          src="/telecom-together.png"
          alt="Telecom operations"
          fill
          className="object-cover grayscale brightness-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-davic-accent/95 via-davic-accent/70 to-transparent" />
        <div className="absolute inset-0 flex items-center px-8 md:px-16 lg:px-24">
          <div className="max-w-xl">
            <p className="text-[10px] font-black text-davic-primary uppercase tracking-[0.5em] mb-6">
              Our Reach
            </p>
            <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
              RESILIENT <br />
              <span className="text-davic-primary">SOLUTIONS</span>
            </h3>
            <p className="mt-8 text-[11px] font-bold text-white/50 uppercase tracking-widest leading-loose max-w-sm">
              From ground-up cell site construction to 24/7 maintenance and power solutions — we are the backbone behind the networks.
            </p>
          </div>
        </div>
      </div>

      {/* Operations — alternating panels */}
      <section className="py-32 bg-davic-gray-light">
        <div className="px-8 md:px-16 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-4 text-davic-primary mb-20">
              <div className="w-12 h-[2px] bg-davic-primary" />
              <span className="text-[10px] uppercase font-black tracking-[0.5em]">
                Our Services
              </span>
            </div>

            <div className="space-y-0">
              {OPERATIONS.map((op, i) => (
                <motion.div
                  key={op.index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, delay: 0.1 }}
                  className={`grid grid-cols-1 lg:grid-cols-2 border border-b-0 border-davic-gray-medium last:border-b ${
                    i % 2 === 1 ? "lg:grid-flow-dense" : ""
                  }`}
                >
                  {/* Image */}
                  <div
                    className={`relative h-[300px] lg:h-[520px] overflow-hidden group ${
                      i % 2 === 1 ? "lg:col-start-2" : ""
                    }`}
                  >
                    <Image
                      src={op.image}
                      alt={op.title}
                      fill
                      className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-[1.05] group-hover:scale-100"
                    />
                    <div className="absolute inset-0 bg-davic-accent/30 group-hover:bg-davic-accent/10 transition-colors duration-700" />
                    {/* Index overlay */}
                    <div className="absolute top-6 left-6">
                      <span className="text-7xl font-black text-white/10 leading-none">{op.index}</span>
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`p-10 lg:p-16 flex flex-col justify-center bg-white ${
                      i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                    }`}
                  >
                    <div className="flex items-center gap-4 mb-8">
                      <div className="text-davic-primary">{op.icon}</div>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-black text-davic-accent uppercase tracking-tighter leading-none mb-6">
                      {op.title}
                    </h3>

                    <p className="text-[11px] font-bold text-davic-secondary uppercase tracking-widest leading-relaxed mb-8">
                      {op.description}
                    </p>

                    {/* Services list */}
                    <ul className="space-y-2 border-t border-davic-gray-medium pt-6">
                      {op.services.map((s, si) => (
                        <li key={si} className="flex items-start gap-3">
                          <span className="text-[8px] font-black text-davic-primary mt-1 tabular-nums flex-shrink-0">
                            {String(si + 1).padStart(2, "0")}
                          </span>
                          <span className="text-[10px] font-bold text-davic-secondary uppercase tracking-widest leading-relaxed">
                            {s}
                          </span>
                        </li>
                      ))}
                    </ul>

                    <div className="flex items-center gap-3 mt-8 pt-6 border-t border-davic-gray-medium">
                      <MapPin className="w-4 h-4 text-davic-primary flex-shrink-0" />
                      <span className="text-[9px] font-black text-davic-accent uppercase tracking-[0.3em]">
                        {op.location}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <TelecomGallery />

      {/* CTA */}
      <section className="py-24 bg-davic-accent">
        <div className="px-8 md:px-16 lg:px-24">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-10">
            <div>
              <p className="text-[10px] font-black text-davic-primary uppercase tracking-[0.5em] mb-4">
                Work With Us
              </p>
              <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none">
                NEED A RELIABLE <br /> TELECOM PARTNER?
              </h3>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.3em] text-davic-accent bg-davic-primary px-10 py-6 hover:gap-10 transition-all duration-300 flex-shrink-0"
            >
              Get In Touch <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
