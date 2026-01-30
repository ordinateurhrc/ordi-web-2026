"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Starfield } from "@/components/ui/Starfield";
import { motion, Variants } from "framer-motion";
import { Users, Zap, Target, Heart, Lightbulb, ArrowRight } from "lucide-react";
import Link from "next/link";
// Import centralized data
import { departmentsList } from "@/config/departments";
import { coreValues, milestones as milestonesConfig, stats as statsConfig } from "@/config/about";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.22, 1, 0.36, 1]
    },
  },
};



export default function AboutUs() {
  return (
    <main className="min-h-screen bg-void text-starlight selection:bg-accretion selection:text-void-dark relative overflow-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Starfield />
      </div>

      <Navbar />

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-[60vh] flex flex-col items-center justify-center px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="mb-6 inline-block">
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-starlight/60 text-xs font-medium tracking-wider uppercase">
                Our Story
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold font-sans tracking-tighter mb-8 text-transparent bg-clip-text bg-gradient-to-b from-starlight via-starlight to-starlight/40">
              About Ordinateur
            </h1>
            <p className="text-starlight/60 text-lg md:text-xl font-light tracking-wide max-w-3xl mx-auto">
              Where code meets creativity. Ordinateur is the Departmental Computer Science Society of Hansraj College, Delhi University.
            </p>
          </motion.div>
        </section>

        {/* Mission & Vision */}
        <section className="px-4 py-20">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-white/10 border border-accretion/30">
                  <Lightbulb className="w-6 h-6 text-accretion" />
                </div>
                <h2 className="text-3xl font-bold text-accretion">Our Mission</h2>
              </div>
              <p className="text-starlight/80 text-lg leading-relaxed">
                To inspire, educate, and empower students through technology, fostering a culture of innovation, collaboration, and continuous learning.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 rounded-lg bg-white/10 border border-accretion/30">
                  <Target className="w-6 h-6 text-accretion" />
                </div>
                <h2 className="text-3xl font-bold text-accretion">Our Vision</h2>
              </div>
              <p className="text-starlight/80 text-lg leading-relaxed">
                To become a beacon of technological excellence, creating a vibrant ecosystem where the next generation of tech leaders emerges.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Core Values */}
        <section className="px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Core Values</h2>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
            >
              {coreValues.map((value, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-white/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center text-accretion mb-6 group-hover:scale-110 transition-transform">
                    {value.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-3">{value.title}</h3>
                  <p className="text-starlight/70">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Timeline */}
        <section className="px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Journey</h2>
            </motion.div>

            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 w-px h-full bg-white/10 hidden md:block" />
              <div className="space-y-12">
                {milestonesConfig.map((milestone, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className={`flex flex-col md:flex-row items-center gap-8 ${idx % 2 === 0 ? "md:flex-row-reverse" : ""}`}
                  >
                    <div className="flex-1 w-full">
                      <div className="p-6 rounded-xl border border-white/10 bg-white/5 text-center md:text-left">
                        <span className="text-accretion font-mono text-sm">{milestone.year}</span>
                        <h3 className="text-xl font-bold text-white mt-1">{milestone.title}</h3>
                        <p className="text-starlight/60 mt-2">{milestone.description}</p>
                      </div>
                    </div>
                    <div className="w-4 h-4 rounded-full bg-accretion hidden md:block relative z-10" />
                    <div className="flex-1 hidden md:block" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Centralized Departments Overview */}
        <section className="px-4 py-20">
          <div className="max-w-6xl mx-auto">
            <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Departments</h2>
              <p className="text-starlight/60 text-lg max-w-2xl mx-auto">
                Specialized pillars working together to drive innovation.
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4"
            >
              {departmentsList.map((dept) => (
                <motion.div
                  key={dept.id}
                  variants={itemVariants}
                  className="p-6 rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/5 transition-all duration-300 text-center group"
                >
                  <div className={`w-12 h-12 mx-auto rounded-lg ${dept.bgColor} flex items-center justify-center ${dept.accent} mb-4 group-hover:scale-110 transition-transform`}>
                    {dept.icon}
                  </div>
                  <h3 className="text-lg font-bold text-white group-hover:text-accretion transition-colors">{dept.name}</h3>
                </motion.div>
              ))}
            </motion.div>

            <div className="mt-12 text-center">
              <Link href="/departments" className="inline-flex items-center gap-2 text-accretion font-bold hover:gap-4 transition-all">
                Explore Detailed Structure <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}