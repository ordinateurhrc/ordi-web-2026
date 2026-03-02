"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Starfield } from "@/components/ui/Starfield";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Linkedin, Mail } from "lucide-react";
import { useState, useEffect } from "react";
import { departmentsList } from "@/config/departments";
import { cn } from "@/lib/utils";

export default function DepartmentsPage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-void text-starlight selection:bg-accretion selection:text-void-dark relative">
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
        <Starfield />
      </div>

      <Navbar />

      <div className="relative z-10">
        {/* DEPARTMENTS HERO SECTION */}
        <section className="w-full px-4 pt-32 pb-24">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-starlight/60 text-xs font-medium tracking-wider uppercase backdrop-blur-md">
                    Team Structure
                  </span>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold font-sans tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-b from-starlight to-starlight/40">
                  Departments
                </h1>
                <div className="h-1 w-32 bg-gradient-to-r from-accretion via-accretion/50 to-transparent rounded-full" />
              </motion.div>
              <p className="text-starlight/60 text-lg font-light tracking-wide max-w-md md:text-right">
                The five specialized pillars that drive Ordinateur's vision.
              </p>
            </div>

            {/* DEPARTMENT CARDS */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {departmentsList.map((dept, i) => (
                <motion.div
                  key={dept.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="group relative rounded-3xl border border-white/10 bg-white/[0.02] overflow-hidden hover:border-accretion/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(234,179,8,0.1)]"
                >
                  <Link href={`/departments/${dept.id}`} className="absolute inset-0 z-20" />
                  
                  <div className="absolute inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none mix-blend-overlay" />
                  <div className="h-1.5 w-full bg-gradient-to-r from-accretion/80 via-accretion to-accretion/80 opacity-20 group-hover:opacity-100 transition-opacity" />
                  
                  <div className="absolute -right-20 -top-20 w-64 h-64 bg-accretion/10 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-accretion/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                  
                  <div className="relative p-8 flex flex-col h-full z-10 backdrop-blur-[1px]">
                    <div className="flex items-start gap-4 mb-8">
                       <div className="w-14 h-14 rounded-2xl border border-white/10 bg-void/40 flex items-center justify-center text-starlight/80 group-hover:bg-accretion group-hover:text-void group-hover:border-accretion group-hover:scale-105 transition-all duration-300 shadow-xl relative overflow-hidden">
                           <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                           {dept.icon}
                       </div>
                       <div className="pt-1">
                           <span className="text-[10px] uppercase tracking-[0.2em] text-accretion/60 font-bold block mb-1">
                               {dept.label}
                           </span>
                           <h3 className="text-3xl font-bold text-white tracking-tight leading-none group-hover:text-accretion transition-colors duration-300">
                               {dept.name}
                           </h3>
                       </div>
                    </div>
                    
                    <p className="text-starlight/60 text-base leading-relaxed mb-8 flex-grow font-light">
                      {dept.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-8">
                      {dept.tags.map(tag => (
                        <span key={tag} className="text-[11px] font-mono font-medium text-accretion/60 bg-accretion/[0.03] px-3 py-1.5 rounded-lg border border-accretion/10 group-hover:border-accretion/30 group-hover:text-accretion group-hover:bg-accretion/[0.08] transition-all">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="pt-6 mt-auto border-t border-white/5 flex items-center justify-between group-hover:border-accretion/20 transition-colors">
                      <span className="text-xs uppercase tracking-widest text-starlight/40 font-semibold group-hover:text-accretion transition-colors">
                        Discover
                      </span>
                      <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-starlight/40 group-hover:border-accretion group-hover:text-accretion group-hover:bg-accretion/10 transition-all duration-300">
                         <ArrowRight className="w-4 h-4 -rotate-45 group-hover:rotate-0 transition-transform duration-300" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* LEADERSHIP SECTION - CTA TO LEADERSHIP PAGE */}
        <section className="w-full px-4 pt-20 pb-24 border-t border-white/5 bg-gradient-to-b from-white/[0.01] to-void relative">
          <div className="max-w-7xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <h2 className="text-4xl md:text-5xl font-bold font-sans tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-b from-starlight to-starlight/40">
                Meet Our Leadership
              </h2>
              <p className="text-starlight/60 text-lg font-light tracking-wide mb-8 max-w-2xl mx-auto">
                Discover the visionary leaders and executive council driving Ordinateur's mission forward.
              </p>
              <Link
                href="/leadership"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl border border-accretion/30 bg-accretion/10 text-accretion hover:bg-accretion/20 hover:border-accretion/60 transition-all duration-300 group font-medium tracking-wide"
              >
                View Leadership Core
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
      
      <Footer />
    </main>
  );
}