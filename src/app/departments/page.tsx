"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Starfield } from "@/components/ui/Starfield";
import { motion } from "framer-motion";
import Link from "next/link";
import { Terminal, PenTool, Users, Code, Share2, ArrowRight, Zap } from "lucide-react";
import { useState, useEffect } from "react";

const departments = [
  {
    id: "tech",
    name: "Technical",
    short: "Tech",
    label: "INFRASTRUCTURE",
    description: "The backbone of the society. We handle the technical infrastructure, CTFs, and workshops.",
    icon: <Terminal className="w-6 h-6" />,
    tags: ["SysAdmin", "Security", "DevOps"],
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    accent: "text-blue-400"
  },
  {
    id: "edm",
    name: "Editorial",
    short: "EDM",
    label: "VOICE",
    description: "The voice of Ordinateur. Creating content, managing socials, and spreading the word.",
    icon: <PenTool className="w-6 h-6" />,
    tags: ["Content", "Socials", "Strategy"],
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    accent: "text-purple-400"
  },
  {
    id: "org",
    name: "Organising",
    short: "Org",
    label: "MANAGEMENT",
    description: "The heart of our events. Managing logistics, coordination, and ensuring seamless execution.",
    icon: <Users className="w-6 h-6" />,
    tags: ["Logistics", "Events", "Coordination"],
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
    accent: "text-green-400"
  },
  {
    id: "dev",
    name: "Developers",
    short: "Dev",
    label: "BUILDERS",
    description: "Building websites, apps, and software solutions for real-world problems.",
    icon: <Code className="w-6 h-6" />,
    tags: ["Full Stack", "Native", "Web3"],
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-500/10",
    accent: "text-orange-400"
  },
  {
    id: "dynamics",
    name: "Dynamics",
    short: "Dyn",
    label: "CREATIVE",
    description: "The creative engine. Graphic design, video editing, and visual storytelling.",
    icon: <Share2 className="w-6 h-6" />,
    tags: ["Design", "VFX", "Motion"],
    color: "from-rose-500 to-red-500",
    bgColor: "bg-rose-500/10",
    accent: "text-rose-400"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const floatingVariants = {
  initial: { y: 0, rotate: 0 },
  animate: {
    y: [0, -20, 0],
    rotate: [0, 5, -5, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const glowVariants = {
  initial: { opacity: 0.5, scale: 1 },
  animate: {
    opacity: [0.5, 0.8, 0.5],
    scale: [1, 1.1, 1],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function DepartmentsPage() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <main className="min-h-screen bg-void text-starlight selection:bg-accretion selection:text-void-dark relative overflow-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Starfield />
      </div>

      <Navbar />

      <div className="relative z-10">
        {/* Header Section */}
        <section className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="mb-6 inline-block">
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-starlight/60 text-xs font-medium tracking-wider uppercase">
                Explore Our Teams
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold font-sans tracking-tighter mb-8 text-transparent bg-clip-text bg-gradient-to-b from-starlight via-starlight to-starlight/40">
              Departments
            </h1>
            <p className="text-starlight/60 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto">
              Five specialized pillars that drive Ordinateur's vision forward. Choose your path and make an impact.
            </p>
          </motion.div>
        </section>

        {/* Departments Grid */}
        <section className="px-4 py-20 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
              {departments.map((dept, index) => (
                <motion.div
                  key={dept.id}
                  variants={itemVariants}
                  onMouseEnter={() => setHoveredId(dept.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="group relative h-96 cursor-pointer"
                >
                  {/* Animated background orb */}
                  <motion.div
                    variants={glowVariants}
                    initial="initial"
                    animate="animate"
                    className={`absolute -inset-0.5 rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 ${dept.bgColor}`}
                  />

                  {/* Card Container */}
                  <motion.div
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="relative h-full bg-white/[0.05] border border-white/10 rounded-2xl p-8 backdrop-blur-sm overflow-hidden group-hover:border-white/30 transition-all duration-300"
                  >
                    {/* Gradient accent line */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                      className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${dept.color} origin-left`}
                    />

                    {/* Top Section - Icon and Label */}
                    <div className="flex items-start justify-between mb-6 relative z-10">
                      <motion.div
                        variants={floatingVariants}
                        initial="initial"
                        animate={hoveredId === dept.id ? "animate" : "initial"}
                        className={`w-14 h-14 rounded-xl border border-white/20 ${dept.bgColor} flex items-center justify-center ${dept.accent} group-hover:border-white/50 transition-all duration-300`}
                      >
                        {dept.icon}
                      </motion.div>
                      <span className={`text-xs uppercase tracking-widest font-bold border border-white/20 px-2.5 py-1.5 rounded-md bg-white/5 group-hover:border-white/50 transition-all duration-300 ${dept.accent}`}>
                        {dept.label}
                      </span>
                    </div>

                    {/* Middle Section - Name and Description */}
                    <div className="mb-6 relative z-10">
                      <h3 className="text-3xl md:text-4xl font-bold text-white mb-3 tracking-tight group-hover:text-white transition-colors">
                        {dept.name}
                      </h3>
                      <p className="text-starlight/70 text-sm md:text-base leading-relaxed line-clamp-3">
                        {dept.description}
                      </p>
                    </div>

                    {/* Bottom Section - Tags and CTA */}
                    <div className="absolute bottom-0 left-0 right-0 top-0 p-8 flex flex-col justify-end pointer-events-none">
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="flex flex-wrap gap-2 mb-4"
                      >
                        {dept.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs font-mono text-white/50 bg-white/10 px-2.5 py-1.5 rounded-md border border-white/10 group-hover:bg-white/20 group-hover:text-white/70 transition-colors"
                          >
                            {tag}
                          </span>
                        ))}
                      </motion.div>

                      {/* CTA Button */}
                      <div className="pointer-events-auto relative z-10">
                        <motion.div
                          initial={{ opacity: 0 }}
                          whileHover={{ opacity: 1 }}
                          transition={{ duration: 0.2 }}
                        >
                          <span className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-white/20 text-white font-semibold tracking-wide group/btn hover:border-white/50 hover:bg-white/5 transition-all`}>
                            Explore More
                            <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                          </span>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Decorative corner accent */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 rounded-full blur-3xl opacity-0 group-hover:opacity-30 ${dept.bgColor} transition-opacity duration-300`}
                  />

                  {/* Full card link overlay */}
                  <Link href={`/departments/${dept.id}`} className="absolute inset-0" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Info Section */}
        <section className="px-4 py-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-gradient-to-r from-white/5 to-white/0 border border-white/10 rounded-3xl p-12 text-center backdrop-blur-sm"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Explore Our Departments</h2>
            <p className="text-starlight/70 text-lg max-w-2xl mx-auto">
              Ordinateur is a departmental society with five specialized pillars. Each department has dedicated team members and unique responsibilities. Explore each department to learn more about their work and vision.
            </p>
          </motion.div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
