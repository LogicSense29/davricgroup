"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Truck, Warehouse, Ship } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CORE_VALUES = ["Partnership", "Excellence", "People", "Customer Satisfaction"];

const OPERATIONS = [
  {
    index: "01",
    icon: <Ship className="w-6 h-6" />,
    title: "AGO Importation",
    location: "Lagos",
    description:
      "In collaboration with Major Petroleum Product Importers in Nigeria who are licensed to import, our Oil & Gas business coordinates the logistics of importing AGO to its Tank Farm at Apapa. This involves arranging transportation, customs clearance, and compliance with local regulations.",
    detail:
      "The partnership ensures efficient handling of the importation process, from sourcing the product overseas to its final delivery to clients. By leveraging the expertise and resources of both parties, we streamline operations and maintain a consistent supply of AGO.",
    image: "/davricgroup-oilandgas4.jpg",
  },
  {
    index: "02",
    icon: <Warehouse className="w-6 h-6" />,
    title: "AGO Distribution",
    location: "All Geopolitical Zones of Nigeria",
    description:
      "The Oil & Gas subsidiary leverages its dedicated storage facilities at the Apapa Tank Farm in Lagos and our AGO Dump at New Garage in Ibadan to ensure a consistent supply of AGO to our clients' Storage and Retail Facilities.",
    detail:
      "By partnering with retail filling stations and smaller energy distribution players, we are able to expand our reach and market penetration, catering to a wide range of consumers across different locations.",
    image: "https://res.cloudinary.com/di8ycbpyj/image/upload/v1775404152/davricgroup-oilandgas5_mewjog.jpg",
  },
  {
    index: "03",
    icon: <Truck className="w-6 h-6" />,
    title: "AGO Last-Mile Logistics",
    location: "All Geopolitical Zones of Nigeria",
    description:
      "We utilise our Distribution Fleet of Tankers and Peddler Trucks to ensure a consistent supply of AGO from our strategic storage facilities to various client locations, including Telecoms cell sites, factories, and operational site fuel dumps.",
    detail:
      "The company employs robust logistics to ensure timely delivery in meeting the specific requirements of each client. Through efficient inventory management and scheduling, we maintain adequate stock levels and fulfill client orders promptly.",
    image: "/davricgroup-oilandgas.png",
  },
];

export default function OilGasPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <PageHero
        title="ENERGY DISTRIBUTION"
        subtitle="A leading Energy Distribution company operating in the Downstream Oil & Gas sector — sourcing and supplying Petroleum products to clients across all geo-political zones of the Nigerian Federation."
        image="/davricgroup-oilandgas.png"
        category="Oil & Gas"
      />

      {/* About + Vision/Mission */}
      <section className="py-32">
        <div className="px-8 md:px-16 lg:px-24">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

              {/* Left: About block */}
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
                    Downstream Energy
                  </span>
                </div>
                <h2 className="text-5xl md:text-6xl font-black text-davic-accent uppercase tracking-tighter leading-none">
                  POWERING <br />
                  <span className="text-davic-primary">NIGERIA</span>
                </h2>
                <p className="text-sm font-bold text-davic-secondary uppercase tracking-widest leading-loose">
                  We specialize in Automotive Gas Oil (AGO) with the capacity to also distribute
                  PMS, LPG and DPK to all geo-political zones of the Nigerian Federation. Our
                  operations are anchored by strategic tank farm facilities and a dedicated
                  last-mile logistics fleet.
                </p>

                {/* Product tags */}
                <div className="flex flex-wrap gap-3 pt-2">
                  {["AGO", "PMS", "LPG", "DPK"].map((p) => (
                    <span
                      key={p}
                      className="text-[9px] font-black text-davic-primary border border-davic-primary px-4 py-2 uppercase tracking-[0.3em]"
                    >
                      {p}
                    </span>
                  ))}
                </div>

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
                    To be the First Choice for Energy Supply and Solutions with Quality & Reliability.
                  </p>
                </div>
                <div className="pl-8 py-8 border-b border-davic-gray-medium">
                  <h4 className="text-[9px] font-black text-davic-primary uppercase tracking-[0.4em] mb-3">
                    Our Mission
                  </h4>
                  <p className="text-sm font-black text-davic-accent uppercase leading-tight tracking-tighter">
                    To consistently Exceed our Client's expectations using Exceptional Products and Processes.
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

      {/* Hero Image Strip */}
      <div className="relative h-[400px] lg:h-[550px] overflow-hidden">
        <Image
          src="/davricgroup-oilandgas2.jpg"
          alt="Oil and Gas operations"
          fill
          className="object-cover grayscale brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-davic-accent/90 via-davic-accent/60 to-transparent" />
        <div className="absolute inset-0 flex items-center px-8 md:px-16 lg:px-24">
          <div className="max-w-xl">
            <p className="text-[10px] font-black text-davic-primary uppercase tracking-[0.5em] mb-6">
              Our Reach
            </p>
            <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
              NATION-WIDE <br />
              <span className="text-davic-primary">COVERAGE</span>
            </h3>
            <p className="mt-8 text-[11px] font-bold text-white/50 uppercase tracking-widest leading-loose max-w-sm">
              From our Tank Farm in Apapa, Lagos to AGO dumps across all six geo-political zones
              of the Nigerian Federation.
            </p>
          </div>
        </div>
      </div>

      {/* Operations Sections */}
      <section className="py-32 bg-davic-gray-light">
        <div className="px-8 md:px-16 lg:px-24">
          <div className="max-w-7xl mx-auto">

            <div className="flex items-center gap-4 text-davic-primary mb-20">
              <div className="w-12 h-[2px] bg-davic-primary" />
              <span className="text-[10px] uppercase font-black tracking-[0.5em]">
                Our Operations
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
                    className={`relative h-[300px] lg:h-[480px] overflow-hidden group ${
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
                  </div>

                  {/* Content */}
                  <div
                    className={`p-10 lg:p-16 flex flex-col justify-center bg-white ${
                      i % 2 === 1 ? "lg:col-start-1 lg:row-start-1" : ""
                    }`}
                  >
                    <div className="flex items-start justify-between mb-8">
                      <span className="text-6xl font-black text-davic-gray-medium/40 leading-none">
                        {op.index}
                      </span>
                      <div className="text-davic-primary">{op.icon}</div>
                    </div>

                    <h3 className="text-2xl md:text-3xl font-black text-davic-accent uppercase tracking-tighter leading-none mb-6">
                      {op.title}
                    </h3>

                    <p className="text-[11px] font-bold text-davic-secondary uppercase tracking-widest leading-relaxed mb-5">
                      {op.description}
                    </p>
                    <p className="text-[11px] font-bold text-davic-secondary uppercase tracking-widest leading-relaxed">
                      {op.detail}
                    </p>

                    <div className="flex items-center gap-3 mt-10 pt-8 border-t border-davic-gray-medium">
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

      {/* CTA */}
      <section className="py-24 bg-davic-accent">
        <div className="px-8 md:px-16 lg:px-24">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-10">
            <div>
              <p className="text-[10px] font-black text-davic-primary uppercase tracking-[0.5em] mb-4">
                Work With Us
              </p>
              <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none">
                NEED A RELIABLE <br /> ENERGY PARTNER?
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
