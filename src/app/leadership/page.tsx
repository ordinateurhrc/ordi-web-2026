"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Starfield } from "@/components/ui/Starfield";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useState, useEffect } from "react";
import { executiveBoard } from "@/config/departments";

export default function LeadershipPage() {
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
        {/* LEADERSHIP HERO SECTION */}
        <section className="w-full px-4 pt-32 pb-14">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-starlight/60 text-xs font-medium tracking-wider uppercase backdrop-blur-md">
                  Council
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold font-sans tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-b from-starlight to-starlight/40">
                Meet The Team
              </h1>
              <div className="h-1 w-32 bg-gradient-to-r from-accretion via-accretion/50 to-transparent rounded-full" />
              <p className="text-starlight/60 text-lg font-light tracking-wide mt-8 max-w-2xl">
                Meet the visionary leaders driving Ordinateur's mission to foster innovation and community in computer science.
              </p>
            </motion.div>
          </div>
        </section>

        {/* LEADERSHIP SECTION */}
        <section className="w-full px-4 pt-10 pb-40 border-t border-white/5 bg-gradient-to-b from-white/[0.01] to-void relative">
          <div className="max-w-[1400px] mx-auto relative z-10">
            <div className="text-center mb-5 relative z-20">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-accretion/20 bg-accretion/5 text-accretion text-xs font-bold tracking-widest uppercase backdrop-blur-md mb-6">
                <Sparkles className="w-3 h-3" /> 2025-26 Board
              </div>
            </div>

            {/* CONVENORS SECTION */}
            <div className="mb-20">
              <h2 className="text-2xl md:text-3xl font-bold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-accretion to-accretion/60">
                Convenors
              </h2>
              <div className="flex flex-col lg:flex-row gap-8 items-center justify-center max-w-2xl mx-auto">
                {executiveBoard.convenors.map((member, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8, delay: idx * 0.2 }}
                    viewport={{ once: true }}
                    className="w-[160px] h-[220px] relative group"
                  >
                    <div className="absolute -inset-4 bg-accretion/20 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition duration-1000" />
                    <div className="w-full h-full bg-void border border-white/10 rounded-[1.5rem] overflow-hidden p-2 backdrop-blur-xl relative z-10 shadow-2xl hover:border-accretion/50 transition-all duration-500 hover:scale-105">
                      <div className="relative h-[140px] w-full rounded-[1.2rem] overflow-hidden mb-2">
                        <img src={member.photo} alt={member.name} className="w-full h-full object-cover saturate-0 group-hover:saturate-100 transition-all duration-500" />
                        <div className="absolute top-2 left-2">
                          <span className="px-2 py-0.5 rounded-full bg-accretion text-void text-[7px] font-black tracking-widest uppercase">{member.role}</span>
                        </div>
                      </div>
                      <div className="text-center">
                        <h3 className="text-sm font-bold text-white leading-tight mb-1">{member.name}</h3>
                        <div className="w-6 h-[2px] bg-accretion/50 mx-auto rounded-full" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* CORE TEAM SECTION */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-center mt-30 mb-30 text-transparent bg-clip-text bg-gradient-to-r from-accretion to-accretion/60">
                Council
              </h2>

              {/* DESKTOP SOLAR SYSTEM LAYOUT */}
              <div className="hidden lg:flex items-center justify-center relative min-h-[600px] w-full">
                {/* CIRCULAR ROTATING ORBIT */}
                <div className="absolute w-[600px] h-[600px] rounded-full border border-accretion/10 animate-orbit-slow z-10">
                  {/* Orbital Ring Decoration */}
                  <div className="absolute inset-0 rounded-full border border-dashed border-white/10" />

                  {/* All Core Team Members - positioned on the circle */}
                  {executiveBoard.core.map((member, idx) => {
                    const totalMembers = executiveBoard.core.length;
                    const angle = (360 / totalMembers) * idx - 90; // Start from top
                    const angleRad = (angle * Math.PI) / 180;
                    const radius = 300; // Half of 600

                    const x = Math.cos(angleRad) * radius;
                    const y = Math.sin(angleRad) * radius;

                    return (
                      <div
                        key={idx}
                        className="absolute"
                        style={{
                          left: "50%",
                          top: "50%",
                          transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                        }}
                      >
                        {/* Counter-rotate to keep cards upright while orbit spins */}
                        <div className="animate-counter-orbit">
                          <div className="group relative flex flex-col items-center">
                            {/* Planet Card - LARGER SIZE */}
                            <div className="relative w-25 h-25 rounded-full p-1 bg-void border-2 border-white/20 group-hover:border-accretion shadow-[0_0_40px_rgba(0,0,0,0.8)] group-hover:shadow-[0_0_60px_rgba(234,179,8,0.3)] group-hover:scale-110 transition-all duration-500 cursor-pointer">
                              <div className="w-full h-full rounded-full overflow-hidden">
                                <img src={member.photo} alt={member.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" />
                              </div>
                              {/* Glow effect on hover */}
                              <div className="absolute -inset-2 bg-accretion/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                            </div>

                            {/* Name Label */}
                            <div className="mt-2 text-center bg-void/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white/10 group-hover:border-accretion/40 transition-colors whitespace-nowrap">
                              <h4 className="text-white text-xs font-bold group-hover:text-accretion transition-colors">
                                {member.name}
                              </h4>
                              <span className="text-[8px] text-starlight/50 uppercase tracking-wider">
                                {member.role}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Outer decorative static circle */}
                <div className="absolute w-[700px] h-[700px] rounded-full border border-white/5 pointer-events-none" />
              </div>

              {/* --- MOBILE GRID LAYOUT (Hidden on desktop) --- */}
              <div className="lg:hidden grid grid-cols-2 gap-4">
                {executiveBoard.core.map((member, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    viewport={{ once: true }}
                    className="bg-white/[0.03] border border-white/5 rounded-2xl p-4 flex flex-col items-center text-center hover:bg-white/[0.06] hover:border-accretion/30 transition-all duration-300"
                  >
                    <img src={member.photo} alt={member.name} className="w-20 h-20 rounded-full object-cover mb-3 grayscale group-hover:grayscale-0 transition-all" />
                    <h4 className="text-white text-sm font-bold leading-tight mb-1">{member.name}</h4>
                    <p className="text-[9px] text-starlight/40 uppercase tracking-wider">{member.role}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
