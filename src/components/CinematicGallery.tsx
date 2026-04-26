"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

const GALLERY_IMAGES = [
    {
    src: "https://res.cloudinary.com/di8ycbpyj/image/upload/v1775404152/office-work_zhrtpa.jpg",
    title: "Work Ethic",
    category: "Our People",
  },
  {
    src: "/telecom-together.png",
    title: "Sustainable Power",
    category: "Future Energy",
  },
  {
    src: "/davricgroup-construction.png",
    title: "Structural Integrity",
    category: "Infrastructure",
  },
  {
    src: "https://res.cloudinary.com/di8ycbpyj/image/upload/v1775404152/davricgroup-oilandgas5_mewjog.jpg",
    title: "Engineering Excellence",
    category: "Advanced Engineering",
  },
    {
    src: "https://res.cloudinary.com/di8ycbpyj/image/upload/v1775404153/oil-together_uvbqst.jpg",
    title: "Precision Operations",
    category: "Oil & Gas",
  },
];

function GalleryItem({
  image,
  index,
  className,
}: {
  image: (typeof GALLERY_IMAGES)[0];
  index: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
      className={`group relative overflow-hidden ${className}`}
    >
      <Image
        src={image.src}
        alt={image.title}
        fill
        className="object-cover transition-all duration-1000 scale-[1.08] group-hover:scale-100 grayscale group-hover:grayscale-0"
      />
      {/* Permanent light vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-davic-accent/70 via-transparent to-transparent" />
      {/* Hover overlay */}
      <div className="absolute inset-0 bg-davic-accent/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Label */}
      <div className="absolute bottom-0 left-0 p-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
        <p className="text-[9px] font-black text-davic-primary uppercase tracking-[0.4em] mb-1">
          {image.category}
        </p>
        <h3 className="text-base font-black text-white uppercase tracking-tight leading-tight">
          {image.title}
        </h3>
      </div>

      {/* Corner accent */}
      <div className="absolute top-4 right-4 w-4 h-4 border-t border-r border-white/20 group-hover:border-davic-primary transition-colors duration-500" />
      <div className="absolute bottom-4 left-4 w-4 h-4 border-b border-l border-white/20 group-hover:border-davic-primary transition-colors duration-500" />
    </motion.div>
  );
}

export default function CinematicGallery() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <section ref={containerRef} className="py-40 bg-davic-gray-light relative overflow-hidden">
      {/* Ghost Title */}
      <div className="absolute top-0 right-0 opacity-[0.03] select-none pointer-events-none overflow-hidden">
        <h2 className="text-[18vw] font-black uppercase tracking-tighter leading-none">SCALE</h2>
      </div>

      <div className="px-8 md:px-16 lg:px-24 relative z-10">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-20">
            <div className="space-y-6 self-start ">
              <div className="flex items-center gap-4 text-davic-primary">
                <div className="w-12 h-[2px] bg-davic-primary" />
                <span className="text-[10px] uppercase font-black tracking-[0.5em]">Visual Identity</span>
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-davic-accent uppercase tracking-tighter leading-none">
                OPERATIONS <br />
                <span className="text-davic-primary">AT SCALE</span>
              </h2>
            </div>
            <p className="md:max-w-xs text-[11px] font-bold text-davic-secondary uppercase tracking-widest leading-loose mt-12 md:mt-0">
              Capturing the precision and ambition of our global footprint across every sector.
            </p>
          </div>

          {/*
            Grid Layout — 12 columns, 2 rows:
            ┌───────────────────┬──────────┬──────────┐
            │                   │    2     │    3     │
            │        1          ├──────────┴──────────┤
            │                   │         4           │
            ├──────────┬────────┴─────────────────────┤
            │    5     │                               │  ← row 2 bottom strip
            └──────────┴───────────────────────────────┘
            
            Actually cleaner to do:
            Row 1: [1: col 1-7, h-[420px]] [2: col 8-10, h-[200px]] [3: col 11-12, h-[200px]]
                                           [4: col 8-12, h-[210px]]
            Row 2: [5: col 1-5, h-[300px]] [1 continues col 6-12]
            
            Simplest solid layout:
            - Image 1: cols 1-8, rows 1-2 (tall feature)
            - Image 2: cols 9-12, row 1
            - Image 3: cols 9-12, row 2
            - Image 4: cols 1-4, row 3 (wide strip bottom)
            - Image 5: cols 5-12, row 3
          */}
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
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-[1.05] group-hover:scale-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-davic-accent/70 via-transparent to-transparent" />
                <div className="absolute bottom-0 left-0 p-4">
                  <p className="text-[8px] font-black text-davic-primary uppercase tracking-widest mb-0.5">{img.category}</p>
                  <h3 className="text-xs font-black text-white uppercase leading-tight">{img.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Desktop gallery — shaped grid (hidden on mobile) */}
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
                className="object-cover transition-all duration-1000 scale-[1.06] group-hover:scale-100 grayscale group-hover:grayscale-0"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-davic-accent/70 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-davic-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 p-10 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-[9px] font-black text-davic-primary uppercase tracking-[0.4em] mb-2">{GALLERY_IMAGES[0].category}</p>
                <h3 className="text-3xl font-black text-white uppercase tracking-tight leading-none">{GALLERY_IMAGES[0].title}</h3>
              </div>
              <div className="absolute top-6 right-6 w-5 h-5 border-t-2 border-r-2 border-white/20 group-hover:border-davic-primary transition-colors duration-300" />
            </motion.div>

            {/* Image 2 — Top Right Upper */}
            <motion.div
              style={{ y: y2 }}
              className="md:[grid-column:9/13] md:[grid-row:1/2] group relative overflow-hidden"
            >
              <Image src={GALLERY_IMAGES[1].src} alt={GALLERY_IMAGES[1].title} fill className="object-cover transition-all duration-1000 scale-[1.06] group-hover:scale-100 grayscale group-hover:grayscale-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-davic-accent/70 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-davic-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 p-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-[9px] font-black text-davic-primary uppercase tracking-[0.4em] mb-1">{GALLERY_IMAGES[1].category}</p>
                <h3 className="text-base font-black text-white uppercase">{GALLERY_IMAGES[1].title}</h3>
              </div>
            </motion.div>

            {/* Image 3 — Top Right Lower */}
            <motion.div
              style={{ y: y1 }}
              className="md:[grid-column:9/13] md:[grid-row:2/3] group relative overflow-hidden"
            >
              <Image src={GALLERY_IMAGES[2].src} alt={GALLERY_IMAGES[2].title} fill className="object-cover transition-all duration-1000 scale-[1.06] group-hover:scale-100 grayscale group-hover:grayscale-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-davic-accent/70 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-davic-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 p-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-[9px] font-black text-davic-primary uppercase tracking-[0.4em] mb-1">{GALLERY_IMAGES[2].category}</p>
                <h3 className="text-base font-black text-white uppercase">{GALLERY_IMAGES[2].title}</h3>
              </div>
            </motion.div>

            {/* Image 4 — Bottom Left Strip */}
            <motion.div
              style={{ y: y1 }}
              className="md:[grid-column:1/6] md:[grid-row:3/4] group relative overflow-hidden"
            >
              <Image src={GALLERY_IMAGES[3].src} alt={GALLERY_IMAGES[3].title} fill className="object-cover transition-all duration-1000 scale-[1.06] group-hover:scale-100 grayscale group-hover:grayscale-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-davic-accent/70 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-davic-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 p-6 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-[9px] font-black text-davic-primary uppercase tracking-[0.4em] mb-1">{GALLERY_IMAGES[3].category}</p>
                <h3 className="text-base font-black text-white uppercase">{GALLERY_IMAGES[3].title}</h3>
              </div>
            </motion.div>

            {/* Image 5 — Bottom Right Wide */}
            <motion.div
              style={{ y: y1 }}
              className="md:[grid-column:6/13] md:[grid-row:3/4] group relative overflow-hidden"
            >
              <Image src={GALLERY_IMAGES[4].src} alt={GALLERY_IMAGES[4].title} fill className="object-cover transition-all duration-1000 scale-[1.06] group-hover:scale-100 grayscale group-hover:grayscale-0" />
              <div className="absolute inset-0 bg-gradient-to-t from-davic-accent/70 via-transparent to-transparent" />
              <div className="absolute inset-0 bg-davic-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 p-8 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-[9px] font-black text-davic-primary uppercase tracking-[0.4em] mb-1">{GALLERY_IMAGES[4].category}</p>
                <h3 className="text-xl font-black text-white uppercase">{GALLERY_IMAGES[4].title}</h3>
              </div>
              <div className="absolute bottom-6 right-6 w-5 h-5 border-b-2 border-r-2 border-white/20 group-hover:border-davic-primary transition-colors duration-300" />
            </motion.div>
          </div>

          {/* Bottom stat strip */}
          <div className="grid grid-cols-3 border border-t-0 border-davic-gray-medium md:-mt-10">
            {[
              { num: "4+", label: "Active Sectors" },
              { num: "20+", label: "Years of Operations" },
              { num: "100%", label: "Client Retention" },
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
