import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Mail, MapPin } from "lucide-react";

const footerLinks = {
  subsidiaries: [
    { name: "Dav-Ric Oil & Gas", href: "/oil-gas" },
    { name: "Dav-Ric Construction", href: "/construction" },
    { name: "Dav-Ric Homes", href: "/homes" },
    { name: "Dav-Ric Telecom", href: "/telecom" },
    // { name: "Dav-Ric Foundation", href: "/foundation" },
    // { name: "Ojerinkporo", href: "/ojerinkporo" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    // { name: "Careers", href: "/careers" },
    // { name: "Global Presence", href: "/news" },
    { name: "Contact", href: "/contact" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-davic-accent text-white pt-32 pb-16 relative overflow-hidden border-t border-white/5">
      {/* Decorative Technical Grid */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:30px_30px] opacity-50" />
      
      <div className="px-8 md:px-16 lg:px-24 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-5 space-y-10">
            <Link href="/" className="group flex items-center gap-3">
               <div className="relative w-[180px] h-[50px] transition-transform group-hover:scale-105 duration-300">
                  <Image 
                    src="/davric-group-logo.png"
                    alt="Davic Group Logo"
                    fill
                    className="object-contain brightness-0 invert"
                  />
               </div>
            </Link>
            
            <p className="text-sm font-bold uppercase tracking-widest text-white/30 leading-relaxed max-w-md">
              ENGINEERING THE INFRASTRUCTURE OF TOMORROW WHILE POWERING THE WORLD TODAY. 
              OPERATIONAL EXCELLENCE ACROSS ALL BUSINESS SECTORS.
            </p>
            
            <div className="flex flex-col gap-4">
               <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-white/50">
                 <Mail className="w-4 h-4 text-davic-primary" />
                 <span>INFO@DAVRICGROUP.COM</span>
               </div>
               <div className="flex items-center gap-4 text-xs font-black uppercase tracking-widest text-white/50">
                 <MapPin className="w-4 h-4 text-davic-primary" />
                 <span>Ibadan, Oyo State, Nigeria <br />
                             26a, Block 27 Alaafin Avenue, Oluyole</span>
               </div>
            </div>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-12 lg:pl-12 border-l border-white/5">
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-davic-primary mb-10 flex items-center gap-3">
                 <div className="w-6 h-[1px] bg-davic-primary" />
                 Subsidiaries
              </h4>
              <ul className="space-y-6">
                {footerLinks.subsidiaries.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-xs font-black uppercase tracking-[0.2em] text-white/40 hover:text-white transition-all flex items-center justify-between group">
                      {link.name}
                      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-davic-primary" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-davic-primary mb-10 flex items-center gap-3">
                 <div className="w-6 h-[1px] bg-davic-primary" />
                 Corporate
              </h4>
              <ul className="space-y-6">
                {footerLinks.company.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-xs font-black uppercase tracking-[0.2em] text-white/40 hover:text-white transition-all flex items-center justify-between group">
                      {link.name}
                      <ArrowRight className="w-4 h-4 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-davic-primary" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        
        <div className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] font-black uppercase tracking-[0.3em] text-white/20">
          <p>&copy; {new Date().getFullYear()} DAVIC GROUP CONGLOMERATE. DATA SECURED.</p>
          <div className="flex gap-10">
             <Link href="/privacy" className="hover:text-davic-primary transition-colors">Privacy Protocols</Link>
             <Link href="/terms" className="hover:text-davic-primary transition-colors">Terminum Systems</Link>
          </div>
        </div>
        </div>
      </div>
      
      {/* Structural Accent Bar */}
      <div className="absolute top-0 right-0 w-32 h-full bg-white/[0.01] skew-x-12 translate-x-12" />
    </footer>
  );
}
