"use client";

import { motion } from "framer-motion";
import { User, ShieldCheck, Cpu, Truck, Users } from "lucide-react";

const LEADERS = [
  {
    name: "Mr. Iyke Agwu",
    role: "Group CEO",
    icon: <User className="w-6 h-6" />
  },
  {
    name: "Mrs. Joyce Igheghe",
    role: "Group COO",
    icon: <ShieldCheck className="w-6 h-6" />
  },
  {
    name: "Mr. Wale Gafar",
    role: "Group CTO",
    icon: <Cpu className="w-6 h-6" />
  },
  {
    name: "Mr. Femi Adekoya",
    role: "Head, Logistics",
    icon: <Truck className="w-6 h-6" />
  },
  {
    name: "Mrs. Chinyere Adeniji",
    role: "Head, Human Resources",
    icon: <Users className="w-6 h-6" />
  }
];

export default function Leadership() {
  return (
    <section className="py-40 bg-davic-accent relative overflow-hidden">
      <div className="px-8 md:px-16 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-4 text-davic-primary mb-8">
               <div className="w-16 h-[2px] bg-davic-primary" />
               <span className="text-[10px] uppercase font-black tracking-[0.5em]">Executive Management</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter leading-[0.85]">
              OUR <span className="text-davic-primary">LEADERSHIP</span>
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-1 border-t border-white/10">
          {LEADERS.map((leader, index) => (
            <motion.div
              key={leader.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group p-10 border-r border-b border-white/10 hover:bg-white/[0.03] transition-colors duration-500"
            >
              <div className="text-davic-primary mb-12 group-hover:scale-110 transition-transform duration-500">
                {leader.icon}
              </div>
              <div className="space-y-2">
                <h3 className="text-sm font-black text-white uppercase tracking-widest leading-none">
                  {leader.name}
                </h3>
                <p className="text-[9px] font-black text-davic-primary uppercase tracking-[0.3em]">
                  {leader.role}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        </div>
      </div>

      {/* Background Text Overlay */}
      <div className="absolute top-0 right-0 text-[20vw] font-black text-white/[0.02] leading-none select-none pointer-events-none">
        MANAGEMENT
      </div>
    </section>
  );
}
