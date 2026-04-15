"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const GALLERY_IMAGES = [
  {
    src: "https://res.cloudinary.com/di8ycbpyj/image/upload/v1775404152/davric-telecom-maintenance_wpuiqu.jpg",
    title: "Strategic Survey",
    category: "Site Acquisition",
  },
  {
    src: "/telecom-2.jpg",
    title: "Structural Engineering",
    category: "Infrastructure",
  },
  {
    src: "https://res.cloudinary.com/di8ycbpyj/image/upload/v1775404150/telecom-3_pqum51.jpg",
    title: "Precision Integration",
    category: "Power Solutions",
  },
  {
    src: "https://res.cloudinary.com/di8ycbpyj/image/upload/v1775403797/Add_a_heading_5_tedcvp.png",
    title: "Network Maintenance",
    category: "Ongoing Support",
  },
  {
    src: "https://res.cloudinary.com/di8ycbpyj/image/upload/v1775403827/telecom-together_b6f69o.png",
    title: "Perpetual Uptime",
    category: "24/7 Operations",
  },
];

export default function TelecomGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 0]);

  return (
    <section ref={containerRef} className="py-40 bg-davic-gray-light relative overflow-hidden">
      {/* Ghost Title */}
      <div className="absolute top-0 right-0 opacity-[0.03] select-none pointer-events-none overflow-hidden">
        <h2 className="text-[18vw] font-black uppercase tracking-tighter leading-none">NETWORK</h2>
      </div>

      <div className="px-8 md:px-16 lg:px-24 relative z-10">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <div className="space-y-6 self-start ">
              <div className="flex items-center gap-4 text-davic-primary">
                <div className="w-12 h-[2px] bg-davic-primary" />
                <span className="text-[10px] uppercase font-black tracking-[0.5em]">Visual Documentation</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-davic-accent uppercase tracking-tighter leading-none">
                MAINTENANCE <br />
                <span className="text-davic-primary">OPERATIONS</span>
              </h2>
            </div>
            <p className="md:max-w-xs text-[11px] font-bold text-davic-secondary uppercase tracking-widest leading-loose mt-12 md:mt-0">
              Showcasing precision, integrity, and relentless dedication to unparalleled global network maintenance.
            </p>
          </div>

          {/* Mobile gallery — simple 2-col grid */}
          <div className="grid grid-cols-2 gap-2 md:hidden">
            {GALLERY_IMAGES.map((img, i) => (
              <motion.div
                key={img.src}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className={`group relative overflow-hidden ${
                  i === 0 ? "col-span-2 aspect-video" : "aspect-square"
                }`}
              >
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  unoptimized 
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-[1.05] group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-davic-accent/70 via-transparent to-transparent" />
                {/* <div className="absolute bottom-0 left-0 p-4">
                  <p className="text-[8px] font-black text-davic-primary uppercase tracking-widest mb-0.5">{img.category}</p>
                  <h3 className="text-xs font-black text-white uppercase leading-tight">{img.title}</h3>
                </div> */}
              </motion.div>
            ))}
          </div>

          {/* Desktop gallery — shaped grid */}
          <div
            className="hidden md:grid gap-2"
            style={{
              gridTemplateColumns: "repeat(12, 1fr)",
              gridTemplateRows: "420px 260px 320px",
            }}
          >
            {/* Image 1 — Large Feature, Left */}
            <motion.div
              style={{ y: y1 }}
              className="md:[grid-column:1/9] md:[grid-row:1/3] group relative overflow-hidden"
            >
              <Image
                src={GALLERY_IMAGES[0].src}
                alt={GALLERY_IMAGES[0].title}
                fill
                unoptimized 
                className="object-cover transition-all duration-1000 scale-[1.06] group-hover:scale-100 grayscale group-hover:grayscale-0"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-davic-accent/70 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-davic-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* <div className="absolute bottom-0 left-0 p-10 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-[9px] font-black text-davic-primary uppercase tracking-[0.4em] mb-2">{GALLERY_IMAGES[0].category}</p>
                <h3 className="text-3xl font-black text-white uppercase tracking-tight leading-none">{GALLERY_IMAGES[0].title}</h3>
              </div> */}
              <div className="absolute top-6 right-6 w-5 h-5 border-t-2 border-r-2 border-white/20 group-hover:border-davic-primary transition-colors duration-300" />
            </motion.div>

            {/* Image 2 — Top Right Upper */}
            <motion.div
              style={{ y: y2 }}
              className="md:[grid-column:9/13] md:[grid-row:1/2] group relative overflow-hidden"
            >
              <Image src={GALLERY_IMAGES[1].src} alt={GALLERY_IMAGES[1].title} fill  unoptimized  className="object-cover transition-all duration-1000 scale-[1.06] group-hover:scale-100 grayscale group-hover:grayscale-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-davic-accent/70 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-davic-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* <div className="absolute bottom-0 left-0 p-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-[9px] font-black text-davic-primary uppercase tracking-[0.4em] mb-1">{GALLERY_IMAGES[1].category}</p>
                <h3 className="text-base font-black text-white uppercase">{GALLERY_IMAGES[1].title}</h3>
              </div> */}
            </motion.div>

            {/* Image 3 — Top Right Lower */}
            <motion.div
              style={{ y: y1 }}
              className="md:[grid-column:9/13] md:[grid-row:2/3] group relative overflow-hidden"
            >
              <Image src={GALLERY_IMAGES[2].src} alt={GALLERY_IMAGES[2].title} fill className="object-cover transition-all duration-1000 scale-[1.06] group-hover:scale-100 grayscale group-hover:grayscale-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-davic-accent/70 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-davic-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* <div className="absolute bottom-0 left-0 p-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-[9px] font-black text-davic-primary uppercase tracking-[0.4em] mb-1">{GALLERY_IMAGES[2].category}</p>
                <h3 className="text-base font-black text-white uppercase">{GALLERY_IMAGES[2].title}</h3>
              </div> */}
            </motion.div>

            {/* Image 4 — Bottom Left Strip */}
            <motion.div
              style={{ y: y1 }}
              className="md:[grid-column:1/6] md:[grid-row:3/4] group relative overflow-hidden"
            >
              <Image src={GALLERY_IMAGES[3].src} alt={GALLERY_IMAGES[3].title} fill unoptimized className="object-cover transition-all duration-1000 scale-[1.06] group-hover:scale-100 grayscale group-hover:grayscale-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-davic-accent/70 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-davic-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* <div className="absolute bottom-0 left-0 p-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-[9px] font-black text-davic-primary uppercase tracking-[0.4em] mb-1">{GALLERY_IMAGES[3].category}</p>
                <h3 className="text-base font-black text-white uppercase">{GALLERY_IMAGES[3].title}</h3>
              </div> */}
            </motion.div>

            {/* Image 5 — Bottom Right Wide */}
            <motion.div
              style={{ y: y1 }}
              className="md:[grid-column:6/13] md:[grid-row:3/4] group relative overflow-hidden"
            >
              <Image src={GALLERY_IMAGES[4].src} alt={GALLERY_IMAGES[4].title} fill className="object-cover transition-all duration-1000 scale-[1.06] group-hover:scale-100 grayscale group-hover:grayscale-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-davic-accent/70 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-davic-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              {/* <div className="absolute bottom-0 left-0 p-8 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-[9px] font-black text-davic-primary uppercase tracking-[0.4em] mb-1">{GALLERY_IMAGES[4].category}</p>
                <h3 className="text-xl font-black text-white uppercase">{GALLERY_IMAGES[4].title}</h3>
              </div> */}
              <div className="absolute bottom-6 right-6 w-5 h-5 border-b-2 border-r-2 border-white/20 group-hover:border-davic-primary transition-colors duration-300" />
            </motion.div>
          </div>

          {/* Bottom stat strip */}
          <div className="grid grid-cols-3 border border-t-0 border-davic-gray-medium -mt-10">
            {[
              { num: "10", label: "States Covered" },
              { num: "500+", label: "Sites Maintained" },
              { num: "100%", label: "Uptime Goal" },
            ].map((stat, i) => (
              <div key={i} className={`py-8 px-10 flex flex-col items-center gap-2 ${i < 2 ? "border-r border-davic-gray-medium" : ""}`}>
                <span className="text-xl md:text-3xl font-black text-davic-accent tracking-tighter text-center">{stat.num}</span>
                <span className="text-[9px] font-black text-davic-secondary uppercase tracking-[0.3em] text-center">{stat.label}</span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
