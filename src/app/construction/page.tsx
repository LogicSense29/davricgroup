"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, MapPin, HardHat, Home, Building2, Construction, ShieldCheck, Factory, Hotel, School, Store } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const CORE_VALUES = ["Focus on Detail", "Partnership", "Excellence", "Team Spirit", "Innovation"];

const EXPERTISE_SECTIONS = [
  {
    index: "01",
    icon: <Construction className="w-6 h-6" />,
    title: "General Civil Contracting",
    location: "Infrastructure Development",
    description:
      "On a Project-by-project basis and by Contract, we offer comprehensive General Civil Contracting services where we ensure each project is led by a dedicated project manager, with the support of experienced site supervisors, engineers, and registered subcontractors.",
    detail:
      "Our Civil construction work covers: 1. Road Construction, 2. Bridge Construction, 3. Drainage and Paved Walkway Construction, 4. Bus-Stop and Terminal Station Construction.",
    image: "/general-contracting-davric.png",
  },
  {
    index: "02",
    icon: <Home className="w-6 h-6" />,
    title: "Residential-Use Construction",
    location: "Community Development",
    description:
      "Our expertise lies in delivering projects with an understanding of the community masterplan and with focus on the homeowner's building plan. We regularly check on adherence to scope and standards, taking great pride in the positive impact of our developments.",
    detail:
      "Our range of residential construction projects include: 1. Terrace Houses, 2. Townhouses, 3. Semi- and Fully-detached Houses, 4. Maisonettes, 5. Country Homes.",
    image: "/residential-davric.png",
  },
  {
    index: "03",
    icon: <Building2 className="w-6 h-6" />,
    title: "Commercial-Use Construction",
    location: "Business & Institutional",
    description:
      "Through direct partnerships with our trusted consultants, we assemble a top-notch team of experts dedicated to serving our clients. We deliver mixed-use properties for retail, dining, and financial institutions.",
    detail:
      "Our Commercial construction work includes: 1. Retail Store and Warehouse, 2. School Construction, 3. Restaurant Buildings, 4. Bank Buildings, 5. Hotel Buildings.",
    image: "/commercial-davric.png",
  },
];

export default function ConstructionPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <PageHero
        title="BUILT FOR TOMORROW"
        subtitle="We build today with tomorrow in mind. We are a building and civil construction company delivering excellence across all areas of infrastructure, residential, and mixed-use development."
        image="/davricgroup-construction.png"
        category="Civil Construction"
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
                    Our Philosophy
                  </span>
                </div>
                <h2 className="text-5xl md:text-6xl font-black text-davic-accent uppercase tracking-tighter leading-none">
                  BUILDING <br />
                  <span className="text-davic-primary">STANDARDS</span>
                </h2>
                <div className="space-y-6">
                  <p className="text-[13px] font-bold text-davic-secondary uppercase tracking-widest leading-loose">
                    Our work encompasses design, construction, and project financing. We build to modern standards of safety and quality, ensuring client satisfaction by ensuring expectations are understood and met by our Project teams.
                  </p>
                  <p className="text-[13px] font-bold text-davic-secondary uppercase tracking-widest leading-loose">
                    We deliver across all areas of infrastructure development, residential, and mixed-use construction.
                  </p>
                </div>

                <div className="pt-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-4 text-[10px] font-black uppercase tracking-[0.3em] text-davic-primary hover:gap-8 transition-all duration-300"
                  >
                    Discuss Your Project <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>

              {/* Right: Vision / Mission / Values */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, delay: 0.2 }}
                className="lg:col-span-5 border-l-4 border-davic-primary bg-davic-gray-light/30"
              >
                <div className="pl-8 py-8 border-b border-davic-gray-medium">
                  <h4 className="text-[9px] font-black text-davic-primary uppercase tracking-[0.4em] mb-3">
                    Our Vision
                  </h4>
                  <p className="text-[11px] font-black text-davic-accent uppercase leading-relaxed tracking-widest">
                    To be the First Choice for Safety & Quality in Creating Places and Linking Spaces in Cities and Communities.
                  </p>
                </div>
                <div className="pl-8 py-8 border-b border-davic-gray-medium">
                  <h4 className="text-[9px] font-black text-davic-primary uppercase tracking-[0.4em] mb-3">
                    Our Mission
                  </h4>
                  <p className="text-[11px] font-black text-davic-accent uppercase leading-relaxed tracking-widest">
                    We build today for tomorrow by designing and delivering construction projects that stand the test of time through our culture of high performance.
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
                        <span className="text-[10px] font-black text-davic-accent uppercase tracking-[0.2em]">
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
          src="/industrial_construction_hero.png"
          alt="Modern construction standards"
          fill
          className="object-cover grayscale brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-davic-accent/90 via-davic-accent/60 to-transparent" />
        <div className="absolute inset-0 flex items-center px-8 md:px-16 lg:px-24">
          <div className="max-w-xl">
            <p className="text-[10px] font-black text-davic-primary uppercase tracking-[0.5em] mb-6">
              Engineering Excellence
            </p>
            <h3 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none">
              MODERN <br />
              <span className="text-davic-primary">STANDARDS</span>
            </h3>
            <p className="mt-8 text-[11px] font-bold text-white/50 uppercase tracking-widest leading-loose max-w-sm">
              We go a step further to ensure client satisfaction by ensuring their expectations are understood and met by our Project teams.
            </p>
          </div>
        </div>
      </div>

      {/* Sections */}
      <section className="py-32 bg-davic-gray-light">
        <div className="px-8 md:px-16 lg:px-24">
          <div className="max-w-7xl mx-auto">

            <div className="flex items-center gap-4 text-davic-primary mb-20">
              <div className="w-12 h-[2px] bg-davic-primary" />
              <span className="text-[10px] uppercase font-black tracking-[0.5em]">
                Areas of Deliverance
              </span>
            </div>

            <div className="space-y-0">
              {EXPERTISE_SECTIONS.map((op, i) => (
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
                      <HardHat className="w-4 h-4 text-davic-primary flex-shrink-0" />
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

      {/* Final CTA */}
      <section className="py-24 bg-davic-accent">
        <div className="px-8 md:px-16 lg:px-24">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start justify-between gap-10">
            <div>
              <p className="text-[10px] font-black text-davic-primary uppercase tracking-[0.5em] mb-4">
                Partner With Us
              </p>
              <h3 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tighter leading-none">
                BUILDING TODAY <br />
                <span className="text-davic-primary">FOR TOMORROW.</span>
              </h3>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-6 text-[10px] font-black uppercase tracking-[0.3em] text-davic-accent bg-davic-primary px-10 py-6 hover:gap-10 transition-all duration-300 flex-shrink-0"
            >
              Start Your Project <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
