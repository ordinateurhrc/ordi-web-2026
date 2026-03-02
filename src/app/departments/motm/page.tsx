"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Starfield } from "@/components/ui/Starfield";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Award } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { motmData, getMonthOrder } from "@/config/motm";

export default function MOTMPage() {
  const [mounted, setMounted] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState<string | null>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const monthRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    setMounted(true);
    const months = getMonthOrder();
    if (months.length > 0) {
      setSelectedMonth(months[0]);
    }
  }, []);

  useEffect(() => {
    // Scroll the selected month to center
    if (selectedMonth && scrollContainerRef.current && monthRefs.current[selectedMonth]) {
      const container = scrollContainerRef.current;
      const selectedElement = monthRefs.current[selectedMonth];

      if (selectedElement) {
        const containerWidth = container.clientWidth;
        const elementLeft = selectedElement.offsetLeft;
        const elementWidth = selectedElement.clientWidth;
        
        // Calculate scroll position to center the selected month
        const scrollPosition = elementLeft - (containerWidth / 2) + (elementWidth / 2);
        
        container.scrollTo({
          left: scrollPosition,
          behavior: "smooth"
        });
      }
    }
  }, [selectedMonth]);

  if (!mounted) return null;

  const months = getMonthOrder();
  const currentMembers = selectedMonth ? motmData[selectedMonth] || {} : {};
  return (
    <main className="min-h-screen bg-void text-starlight selection:bg-accretion selection:text-void-dark relative overflow-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Starfield />
      </div>

      <Navbar />

      <div className="relative z-10">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="px-4 pt-8">
          <Link href="/departments" className="inline-flex items-center gap-2 text-starlight/60 hover:text-white transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Departments
          </Link>
        </motion.div>

        {/* HERO SECTION */}
        <section className="w-full px-4 py-24">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <div className="flex items-center justify-center gap-4 mb-8">
                <div className="w-20 h-20 rounded-3xl border border-yellow-400/30 bg-yellow-500/10 flex items-center justify-center text-yellow-400">
                  <Award className="w-10 h-10" />
                </div>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold font-sans tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-b from-starlight to-starlight/40">
                Members of the Month
              </h1>
              <p className="text-starlight/60 text-lg font-light tracking-wide max-w-3xl mx-auto">
                Celebrating the outstanding contributions and achievements of our community members.
              </p>
            </motion.div>
          </div>
        </section>

        {/* TIMELINE SECTION */}
        <section className="w-full px-4 py-16">
          <div className="max-w-7xl mx-auto">
            {/* Creative Timeline with Glowing Line */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <div className="relative py-8">
                {/* Glowing yellow line */}
                <div className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent opacity-40 blur-md top-1/2 -translate-y-1/2" />
                <div className="absolute left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent top-1/2 -translate-y-1/2" />

                {/* Month dots container - scrollable, no scrollbar visible */}
                <div 
                  ref={scrollContainerRef}
                  className="relative w-full flex items-center px-4 overflow-x-auto scrollbar-hide"
                  style={{
                    scrollBehavior: "smooth",
                    msOverflowStyle: "none",
                    scrollbarWidth: "none",
                  }}
                >
                  <style>{`
                    div::-webkit-scrollbar {
                      display: none;
                    }
                  `}</style>
                  
                  <div className="flex gap-16 items-center py-4 px-[50%]">
                    {months.map((month, index) => {
                      const isSelected = selectedMonth === month;

                      return (
                        <motion.div
                          key={month}
                          ref={(el) => {
                            if (el) monthRefs.current[month] = el;
                          }}
                          className="flex flex-col items-center cursor-pointer flex-shrink-0"
                          onClick={() => setSelectedMonth(month)}
                          whileHover={{ scale: 1.05 }}
                        >
                          {/* Month label ABOVE */}
                          <motion.p
                            animate={{
                              scale: isSelected ? 1 : 0.75,
                              opacity: isSelected ? 1 : 0.5,
                            }}
                            transition={{ duration: 0.3 }}
                            className={`font-bold tracking-widest whitespace-nowrap mb-4 transition-all ${
                              isSelected
                                ? "text-yellow-400 text-base"
                                : "text-starlight/40 text-xs"
                            }`}
                          >
                            {month}
                          </motion.p>

                          {/* Dot ON the line */}
                          <motion.div
                            animate={{
                              scale: isSelected ? 1.6 : 1,
                              boxShadow: isSelected
                                ? "0 0 20px rgba(234, 179, 8, 0.9), 0 0 40px rgba(234, 179, 8, 0.4)"
                                : "0 0 5px rgba(234, 179, 8, 0.2)",
                            }}
                            transition={{ duration: 0.3 }}
                            className="w-3 h-3 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-600 border-2 border-yellow-200"
                          />
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Solar System Members Display */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              {Object.keys(currentMembers).length > 0 ? (
                <div className="hidden lg:flex items-center justify-center relative min-h-[700px] w-full">
                  {/* CIRCULAR ROTATING ORBIT */}
                  <div className="absolute w-[600px] h-[600px] rounded-full border border-yellow-500/10 animate-orbit-slow z-10">
                    {/* Orbital Ring Decoration */}
                    <div className="absolute inset-0 rounded-full border border-dashed border-yellow-400/20" />

                    {/* All Members - positioned on the circle */}
                    {Object.entries(currentMembers).map((entry, idx) => {
                      const [name, dept] = entry;
                      const totalMembers = Object.keys(currentMembers).length;
                      const angle = (360 / totalMembers) * idx - 90; // Start from top
                      const angleRad = (angle * Math.PI) / 180;
                      const radius = 300; // Half of 600

                      const x = Math.cos(angleRad) * radius;
                      const y = Math.sin(angleRad) * radius;

                      return (
                        <div
                          key={name}
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
                              <div className="relative w-24 h-24 rounded-full p-1 bg-void border-2 border-yellow-400/30 group-hover:border-yellow-400 shadow-[0_0_40px_rgba(0,0,0,0.8)] group-hover:shadow-[0_0_60px_rgba(234,179,8,0.3)] group-hover:scale-110 transition-all duration-500 cursor-pointer">
                                <div className="w-full h-full rounded-full overflow-hidden bg-gradient-to-br from-yellow-500/30 to-yellow-500/10 flex items-center justify-center">
                                  <span className="text-xl font-bold text-yellow-400/80">
                                    {name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                                  </span>
                                </div>
                                {/* Glow effect on hover */}
                                <div className="absolute -inset-2 bg-yellow-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
                              </div>

                              {/* Name Label */}
                              <div className="mt-2 text-center bg-void/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-yellow-400/20 group-hover:border-yellow-400/40 transition-colors whitespace-nowrap">
                                <h4 className="text-white text-xs font-bold group-hover:text-yellow-300 transition-colors">
                                  {name}
                                </h4>
                                <span className="text-[8px] text-yellow-400/50 uppercase tracking-wider">
                                  {dept}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Outer decorative static circle */}
                  <div className="absolute w-[700px] h-[700px] rounded-full border border-yellow-400/5 pointer-events-none" />
                </div>
              ) : (
                <div className="text-center py-16 rounded-2xl border border-white/10 bg-white/[0.02]">
                  <p className="text-starlight/60 text-lg">
                    No members recognized for {selectedMonth} yet.
                  </p>
                </div>
              )}

              {/* Mobile/Tablet fallback */}
              {Object.keys(currentMembers).length > 0 && (
                <div className="lg:hidden grid grid-cols-2 md:grid-cols-3 gap-4">
                  {Object.entries(currentMembers).map((entry, index) => {
                    const [name, dept] = entry;

                    return (
                      <motion.div
                        key={name}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="bg-white/[0.03] border border-yellow-400/20 rounded-2xl p-4 flex flex-col items-center text-center hover:bg-white/[0.06] hover:border-yellow-400/40 transition-all duration-300"
                      >
                        <div className="w-16 h-16 rounded-full bg-gradient-to-br from-yellow-500/30 to-yellow-500/10 flex items-center justify-center mb-3 border border-yellow-400/30">
                          <span className="text-lg font-bold text-yellow-400">
                            {name.split(" ").map(n => n[0]).join("").slice(0, 2)}
                          </span>
                        </div>
                        <h4 className="text-white text-sm font-bold leading-tight mb-1">{name}</h4>
                        <p className="text-[9px] text-yellow-400/50 uppercase tracking-wider">{dept}</p>
                      </motion.div>
                    );
                  })}
                </div>
              )}
            </motion.div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
