import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-davic-accent flex flex-col">
      <Navigation />
      
      <div className="flex-grow flex items-center justify-center relative overflow-hidden px-6 pt-32 pb-20">
         {/* Background Elements */}
         <div className="absolute inset-0 bg-industrial opacity-[0.03] pointer-events-none mix-blend-overlay" />
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-[1px] border-white/5 rounded-full z-0 pointer-events-none" />
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-[1px] border-white/5 rounded-full z-0 pointer-events-none" />
         <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] border-[1px] border-davic-primary/20 rounded-full z-0 pointer-events-none" />

        <div className="relative z-10 text-center max-w-3xl mx-auto space-y-10">
          
          <div className="space-y-6">
            <h1 className="text-[150px] md:text-[200px] font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-white/10 leading-none tracking-tighter select-none">
              404
            </h1>
            <div className="w-24 h-[2px] bg-davic-primary mx-auto" />
            <h2 className="text-2xl md:text-4xl font-black text-white uppercase tracking-widest mt-8">
              Page Not Found
            </h2>
          </div>

          <p className="text-sm md:text-base font-bold text-white/50 uppercase tracking-widest leading-loose max-w-xl mx-auto">
            The destination you are looking for does not exist or has been moved. Let's get you back on track.
          </p>

          <div className="pt-0">
            <Link 
              href="/" 
              className="group inline-flex items-center gap-6 bg-davic-primary text-white px-10 py-5 text-xs font-black uppercase tracking-[0.2em] hover:bg-white hover:text-davic-primary transition-all duration-500 shadow-2xl"
            >
              Return Home
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-2" />
            </Link>
          </div>
          
        </div>
      </div>

      <Footer />
    </main>
  );
}
