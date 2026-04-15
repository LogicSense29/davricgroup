"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { Menu, X, ChevronDown } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Subsidiaries",
    href: "/#subsidiaries",
    dropdown: [
      { name: "Oil & Gas", href: "/oil-gas" },
      { name: "Construction", href: "/construction" },
      { name: "Telecom Services", href: "/telecom" },
        { name: "Homes", href: "/homes" },
    ],
  },
  { name: "Ojerinkporo Foundation", href: "https://ojerinkporofoundation.com" },
  { name: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [hoveredLink, setHoveredLink] = useState<string | null>(null);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [mobileMenuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        isScrolled && !mobileMenuOpen
          ? "bg-white/95 backdrop-blur-md py-2 md:py-0 shadow-sm" 
          : "bg-transparent py-10 lg:py-5"
      }`}
    >
      {/* Scroll Progress Bar */}
      <motion.div 
        className="absolute top-0 left-0 right-0 h-[3px] bg-davic-primary origin-left z-[60]" 
        style={{ scaleX }}
      />

      <div className="px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link 
            href="/" 
            className="flex items-center gap-2 group relative z-50"
          >
            <div className="relative w-[220px] h-[55px] sm:w-[280px] sm:h-[65px] md:w-[320px] md:h-[75px] transition-all duration-500 scale-100 group-hover:scale-105">
               <Image 
                 src="/davric-group-logo.png"
                 alt="Davic Group Logo"
                 fill
                 className={`object-contain object-left transition-all duration-500 ${
                   isScrolled && !mobileMenuOpen ? "brightness-100" : "brightness-0 invert"
                 }`}
                 priority
               />
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative"
                onMouseEnter={() => setHoveredLink(link.name)}
                onMouseLeave={() => setHoveredLink(null)}
              >
                <Link
                  href={link.href}
                  className={`text-[10px] font-black uppercase tracking-[0.3em] transition-all duration-300 flex items-center gap-2 py-2 ${
                    isScrolled ? "text-davic-accent" : "text-white"
                  }`}
                >
                  {link.name}
                  {link.dropdown && <ChevronDown className={`w-3 h-3 transition-transform opacity-30 ${hoveredLink === link.name ? 'rotate-180' : ''}`} />}
                  <span className={`absolute bottom-0 left-0 h-[2px] bg-davic-primary transition-all duration-300 ${hoveredLink === link.name ? 'w-full' : 'w-0'}`} />
                </Link>
                
                <AnimatePresence>
                  {link.dropdown && hoveredLink === link.name && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                      className="absolute top-full left-0 pt-4 z-50"
                    >
                      <div className="bg-davic-accent border border-white/10 shadow-3xl p-8 min-w-[280px]">
                        {link.dropdown.map((sub, i) => (
                          <Link
                            key={sub.name}
                            href={sub.href}
                            className="block py-4 text-[9px] font-black uppercase tracking-[0.3em] text-white/50 hover:text-white transition-colors border-b border-white/5 last:border-0 group/sub"
                          >
                            <span className="inline-block transition-transform group-hover/sub:translate-x-2">
                                0{i + 1} — {sub.name}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <button
            className={`lg:hidden relative z-[100] p-2 transition-colors ${
              mobileMenuOpen ? "text-white" : isScrolled ? "text-davic-primary" : "text-white"
            }`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-davic-accent z-40 lg:hidden flex flex-col pt-32 p-8"
          >
            {/* Background Grain for Menu */}
            <div className="absolute inset-0 bg-industrial opacity-[0.05] pointer-events-none" />
            
            <div className="flex-1 overflow-y-auto space-y-8 relative z-10">
              {navLinks.map((link, i) => (
                <motion.div 
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className="space-y-4"
                >
                  <Link
                    href={link.href}
                    className="text-3xl font-black text-white uppercase tracking-tighter hover:text-davic-primary transition-colors block"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <div className="pl-6 flex flex-col gap-4 border-l border-white/10">
                      {link.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          href={sub.href}
                          className="text-[10px] font-black text-white/40 uppercase tracking-widest hover:text-white"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="relative z-10 py-10 border-t border-white/5"
            >
               <p className="text-[9px] font-black text-white/20 uppercase tracking-[0.5em] mb-8">Strategic Partnerships</p>
               <Link 
                 href="/contact" 
                 className="block w-full text-center bg-davic-primary text-white py-6 text-[10px] font-black uppercase tracking-[0.4em] hover:bg-white hover:text-davic-primary transition-all duration-500"
                 onClick={() => setMobileMenuOpen(false)}
                >
                 Collaborate With Us
               </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
