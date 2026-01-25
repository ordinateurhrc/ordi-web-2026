"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Terminal, PenTool, Users, Code, Share2 } from "lucide-react";
import { cn } from "@/lib/utils";

const departments = [
  {
    id: "tech",
    name: "Technical",
    short: "Tech",
    label: "INFRASTRUCTURE",
    description: "The backbone of the society. We handle the technical infrastructure, CTFs, and workshops.",
    icon: <Terminal className="w-5 h-5" />,
    tags: ["SysAdmin", "Security", "DevOps"]
  },
  {
    id: "edm",
    name: "Editorial",
    short: "EDM",
    label: "VOICE",
    description: "The voice of Ordinateur. Creating content, managing socials, and spreading the word.",
    icon: <PenTool className="w-5 h-5" />,
    tags: ["Content", "Socials", "Strategy"]
  },
  {
    id: "org",
    name: "Organising",
    short: "Org",
    label: "MANAGEMENT",
    description: "The heart of our events. Managing logistics, coordination, and ensuring seamless execution.",
    icon: <Users className="w-5 h-5" />,
    tags: ["Logistics", "Events", "Coordination"]
  },
  {
    id: "dev",
    name: "Developers",
    short: "Dev",
    label: "BUILDERS",
    description: "Building websites, apps, and software solutions for real-world problems.",
    icon: <Code className="w-5 h-5" />,
    tags: ["Full Stack", "Native", "Web3"]
  },
  {
    id: "dynamics",
    name: "Dynamics",
    short: "Dyn",
    label: "CREATIVE",
    description: "The creative engine. Graphic design, video editing, and visual storytelling.",
    icon: <Share2 className="w-5 h-5" />,
    tags: ["Design", "VFX", "Motion"]
  },
];

export function DepartmentDeck() {
  const [active, setActive] = useState("tech");

  return (
    <section className="w-full relative px-4 py-24">
        <div className="max-w-7xl mx-auto">
             {/* Header */}
            <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-8">
                <div>
                     <div className="flex items-center gap-3 mb-6">
                        <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-starlight/60 text-xs font-medium tracking-wider uppercase">
                            Team structure
                        </span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-bold font-sans tracking-tighter mb-8 text-transparent bg-clip-text bg-gradient-to-b from-starlight to-starlight/40">
                        Departments
                    </h2>
                </div>
                 <p className="text-starlight/60 text-lg font-light tracking-wide max-w-md md:text-right">
                    The five specialized pillars that drive our operations.
                </p>
            </div>

            {/* Boxed Deck */}
            <div className="flex flex-col md:flex-row h-[500px] border border-white/10 rounded-3xl overflow-hidden bg-white/[0.02]">
                {departments.map((dept, i) => (
                <motion.div
                    key={dept.id}
                    layout
                    onClick={() => setActive(dept.id)}
                    className={cn(
                    "relative overflow-hidden cursor-pointer bg-transparent border-b md:border-b-0 md:border-r border-white/10 last:border-0",
                    "transition-all duration-500 ease-spring",
                    active === dept.id 
                        ? "flex-[3] bg-white/[0.02]" 
                        : "flex-[0.5] hover:bg-white/[0.02]"
                    )}
                >
                    <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-between z-10">
                        {/* Vertical Label (When Collapsed) */}
                        {active !== dept.id && (
                            <div className="h-full flex items-center justify-center">
                                <div className="md:-rotate-90 whitespace-nowrap text-xl font-bold text-white/40 tracking-widest uppercase group-hover:text-white transition-colors">
                                    {dept.short}
                                </div>
                            </div>
                        )}

                        {/* Content (When Active) */}
                        {active === dept.id && (
                            <motion.div 
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.2 }}
                                className="h-full flex flex-col h-full"
                            >
                                <div className="flex items-start justify-between mb-auto">
                                   <div className="w-12 h-12 rounded-xl border border-accretion/20 bg-accretion/5 flex items-center justify-center text-accretion">
                                        {dept.icon}
                                    </div>
                                    <span className="text-[10px] uppercase tracking-widest text-accretion font-bold border border-accretion/20 px-2 py-1 rounded">
                                        {dept.label}
                                    </span>
                                </div>
                                
                                <div>
                                     <h3 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">{dept.name}</h3>
                                     <p className="text-starlight/60 text-lg leading-relaxed mb-8 max-w-lg">{dept.description}</p>
                                     
                                     {/* Fruitful Tags */}
                                     <div className="flex gap-2 mb-8">
                                         {dept.tags.map(tag => (
                                             <span key={tag} className="text-xs font-mono text-white/50 bg-white/5 px-2 py-1 rounded border border-white/5">
                                                 {tag}
                                             </span>
                                         ))}
                                     </div>

                                     <Link href="/departments" className="flex items-center gap-2 text-white font-bold tracking-wide hover:text-accretion transition-colors">
                                        Explore <ArrowRight className="w-4 h-4" />
                                     </Link>
                                </div>
                            </motion.div>
                        )}
                    </div>
                    {/* Active Border Overlay */}
                    {active === dept.id && <div className="absolute top-0 left-0 w-full h-[2px] bg-accretion" />}
                </motion.div>
                ))}
            </div>
        </div>
    </section>
  );
}

