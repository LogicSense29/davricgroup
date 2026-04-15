"use client";

import React, { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight, MessageSquare, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export default function ContactPage() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [responseMessage, setResponseMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    sector: "Oil & Gas Operations",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      if (res.ok) {
        setStatus("success");
        setResponseMessage(data.message);
        setFormData({ name: "", email: "", sector: "Oil & Gas Operations", message: "" });
      } else {
        setStatus("error");
        setResponseMessage(data.error || "Something went wrong.");
      }
    } catch (error) {
      setStatus("error");
      setResponseMessage("Failed to connect to the server.");
    }
  };

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      <PageHero 
        title="CONNECT"
        subtitle="Reach out to our global headquarters or local subsidiaries to discuss how we can partner on your next landmark project."
        image="/davricgroup-oilandgas2.jpg"
        category="Contact Us"
      />

      <section className="py-32">
        <div className="px-8 md:px-16 lg:px-24">
          <div className="max-w-7xl mx-auto">
             <div className="grid grid-cols-1 lg:grid-cols-12 gap-24">
                
                {/* Contact Info */}
                <div className="lg:col-span-4 space-y-16">
                   <div className="space-y-8">
                      <div className="flex items-center gap-4 text-davic-primary">
                        <div className="w-12 h-[2px] bg-davic-primary" />
                        <span className="text-[10px] uppercase font-black tracking-[0.5em]">Global HQ</span>
                      </div>
                      <h2 className="text-4xl font-black text-davic-accent uppercase tracking-tighter">Get in <br /> Touch</h2>
                   </div>

                   <div className="space-y-12">
                      <div className="flex gap-6 group">
                         <div className="w-12 h-12 flex items-center justify-center border border-davic-gray-medium text-davic-primary group-hover:bg-davic-primary group-hover:text-white transition-all duration-500">
                            <MapPin className="w-5 h-5" />
                         </div>
                         <div className="space-y-2">
                            <span className="text-[9px] font-black text-davic-primary uppercase tracking-widest">Address</span>
                            <p className="text-xs font-bold text-davic-accent uppercase tracking-widest leading-loose">
                                Ibadan, Oyo State, Nigeria <br />
                             26a, Block 27 Alaafin Avenue, Oluyole
                            </p>
                         </div>
                      </div>

                      <div className="flex gap-6 group">
                         <div className="w-12 h-12 flex items-center justify-center border border-davic-gray-medium text-davic-primary group-hover:bg-davic-primary group-hover:text-white transition-all duration-500">
                            <Phone className="w-5 h-5" />
                         </div>
                         <div className="space-y-2">
                            <span className="text-[9px] font-black text-davic-primary uppercase tracking-widest">Phone</span>
                            <p className="text-xs font-bold text-davic-accent uppercase tracking-widest">
                               +234 (0) 8039154016
                            </p>
                         </div>
                      </div>

                      <div className="flex gap-6 group">
                         <div className="w-12 h-12 flex items-center justify-center border border-davic-gray-medium text-davic-primary group-hover:bg-davic-primary group-hover:text-white transition-all duration-500">
                            <Mail className="w-5 h-5" />
                         </div>
                         <div className="space-y-2">
                            <span className="text-[9px] font-black text-davic-primary uppercase tracking-widest">Email</span>
                            <p className="text-xs font-bold text-davic-accent uppercase tracking-widest">
                               info@davricgroup.com
                            </p>
                         </div>
                      </div>
                   </div>
                </div>

                {/* Contact Form */}
                <div className="lg:col-span-8">
                   <div className="p-12 md:p-20 bg-davic-gray-light border border-davic-gray-medium relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-64 h-64 bg-davic-primary/5 rounded-full blur-3xl -mr-32 -mt-32" />
                      
                      <AnimatePresence mode="wait">
                        {status === "success" ? (
                          <motion.div 
                            key="success"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="relative z-10 py-12 text-center space-y-8"
                          >
                            <div className="w-20 h-20 bg-davic-primary/10 rounded-full flex items-center justify-center mx-auto">
                              <CheckCircle2 className="w-10 h-10 text-davic-primary" />
                            </div>
                            <div className="space-y-4">
                              <h3 className="text-2xl font-black text-davic-accent uppercase tracking-wider">Inquiry Received</h3>
                              <p className="text-sm font-bold text-davic-accent/60 uppercase tracking-widest leading-loose max-w-md mx-auto">
                                {responseMessage}
                              </p>
                            </div>
                            <button 
                              onClick={() => setStatus("idle")}
                              className="px-8 py-4 border border-davic-accent/10 text-xs font-black uppercase tracking-widest hover:bg-davic-accent hover:text-white transition-all duration-500"
                            >
                              Send another message
                            </button>
                          </motion.div>
                        ) : (
                          <motion.form 
                            key="form"
                            onSubmit={handleSubmit}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="space-y-12 relative z-10"
                          >
                             <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                <div className="space-y-4">
                                   <label className="text-[9px] font-black text-davic-primary uppercase tracking-[0.3em]">Full Name</label>
                                   <input 
                                    required
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    type="text" 
                                    placeholder="Iyke Agwu" 
                                    className="w-full bg-transparent border-b border-davic-gray-medium py-4 text-xs font-bold uppercase tracking-widest focus:border-davic-primary outline-none transition-all" 
                                   />
                                </div>
                                <div className="space-y-4">
                                   <label className="text-[9px] font-black text-davic-primary uppercase tracking-[0.3em]">Email Address</label>
                                   <input 
                                    required
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    type="email" 
                                    placeholder="iyke@example.com" 
                                    className="w-full bg-transparent border-b border-davic-gray-medium py-4 text-xs font-bold uppercase tracking-widest focus:border-davic-primary outline-none transition-all" 
                                   />
                                </div>
                             </div>

                             <div className="space-y-4">
                                <label className="text-[9px] font-black text-davic-primary uppercase tracking-[0.3em]">Sector of Inquiry</label>
                                <select 
                                  name="sector"
                                  value={formData.sector}
                                  onChange={handleChange}
                                  className="w-full bg-transparent border-b border-davic-gray-medium py-4 text-xs font-bold uppercase tracking-widest focus:border-davic-primary outline-none transition-all cursor-pointer"
                                >
                                   <option>Oil & Gas Operations</option>
                                   <option>Construction & Civil Works</option>
                                   <option>Real Estate Development</option>
                                   <option>The Dav-Ric Foundation</option>
                                </select>
                             </div>

                             <div className="space-y-4">
                                <label className="text-[9px] font-black text-davic-primary uppercase tracking-[0.3em]">Your Message</label>
                                <textarea 
                                  required
                                  name="message"
                                  value={formData.message}
                                  onChange={handleChange}
                                  rows={4} 
                                  placeholder="How can we assist you?" 
                                  className="w-full bg-transparent border-b border-davic-gray-medium py-4 text-xs font-bold uppercase tracking-widest focus:border-davic-primary outline-none transition-all resize-none"
                                ></textarea>
                             </div>

                             {status === "error" && (
                               <motion.div 
                                 initial={{ opacity: 0, scale: 0.95 }}
                                 animate={{ opacity: 1, scale: 1 }}
                                 className="flex items-center gap-4 p-4 bg-red-50 text-red-600 rounded-lg border border-red-100"
                               >
                                 <AlertCircle className="w-5 h-5 flex-shrink-0" />
                                 <p className="text-[10px] font-bold uppercase tracking-widest">{responseMessage}</p>
                               </motion.div>
                             )}

                             <button 
                              type="submit"
                              disabled={status === "loading"}
                              className="w-full md:w-auto px-12 py-6 bg-davic-accent text-white text-[10px] font-black uppercase tracking-[0.5em] hover:bg-davic-primary disabled:bg-davic-accent/50 disabled:cursor-not-allowed transition-all duration-500 shadow-2xl flex items-center justify-center gap-6"
                             >
                                {status === "loading" ? (
                                  <>Sending... <Loader2 className="w-5 h-5 animate-spin" /></>
                                ) : (
                                  <>Send Inquiry <ArrowRight className="w-5 h-5" /></>
                                )}
                             </button>
                          </motion.form>
                        )}
                      </AnimatePresence>
                   </div>
                </div>

             </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
