"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Starfield } from "@/components/ui/Starfield";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { Calendar, MapPin, Users, ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";
import { events } from "@/config/eventConfigs/list";

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
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

export default function EventsPage() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

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
                What's Happening
              </span>
            </div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold font-sans tracking-tighter mb-8 text-transparent bg-clip-text bg-gradient-to-b from-starlight via-starlight to-starlight/40">
              Events
            </h1>
            <p className="text-starlight/60 text-lg md:text-xl font-light tracking-wide max-w-2xl mx-auto">
              Discover workshops, competitions, and conferences that bring our
              community together.
            </p>
          </motion.div>
        </section>

        {/* Events Grid */}
        <section className="px-4 py-20 relative">
          <div className="max-w-7xl mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
              {events.map((event: any) => (
                <motion.div
                  key={event.id}
                  variants={itemVariants}
                  onMouseEnter={() => setHoveredId(event.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className="group relative h-96 cursor-pointer"
                >
                  {/* Animated background orb */}
                  <motion.div className="absolute -inset-0.5 rounded-2xl blur-2xl opacity-20 group-hover:opacity-40 transition-opacity duration-300 bg-accretion/20" />

                  {/* Card Container */}
                  <motion.div
                    whileHover={{ y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="relative h-full bg-white/[0.05] border border-white/10 rounded-2xl overflow-hidden backdrop-blur-sm group-hover:border-white/30 transition-all duration-300"
                  >
                    {/* Image Section */}
                    <div className="relative w-full h-48 overflow-hidden bg-white/5">
                      <motion.img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.3 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-void/80" />

                      {/* Category Badge */}
                      <div className="absolute top-4 right-4">
                        <span className="text-xs uppercase tracking-widest font-bold border border-accretion/40 px-2.5 py-1.5 rounded-md bg-white/5 group-hover:border-accretion/80 text-accretion transition-all duration-300">
                          {event.category}
                        </span>
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="relative p-6 h-48 flex flex-col justify-between">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2 line-clamp-2">
                          {event.title}
                        </h3>
                        <p className="text-starlight/70 text-sm line-clamp-2">
                          {event.description}
                        </p>
                      </div>

                      {/* Event Info */}
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-starlight/60 text-sm">
                          <Calendar className="w-4 h-4" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center gap-2 text-starlight/60 text-sm">
                          <MapPin className="w-4 h-4" />
                          <span>{event.location}</span>
                        </div>
                        <div className="flex items-center gap-2 text-starlight/60 text-sm">
                          <Users className="w-4 h-4" />
                          <span>{event.attendees}</span>
                        </div>
                      </div>

                      {/* CTA Link */}
                      <Link
                        href={`/events/${event.id}`}
                        className="inline-flex items-center gap-2 text-white font-semibold tracking-wide group/btn hover:text-accretion transition-colors"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                    </div>

                    {/* Gradient accent line */}
                    <motion.div
                      initial={{ scaleX: 0 }}
                      whileHover={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                      className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-accretion to-orange-500 origin-left"
                    />

                    {/* Full card link overlay */}
                    <Link
                      href={`/events/${event.id}`}
                      className="absolute inset-0"
                    />
                  </motion.div>

                  {/* Decorative corner accent */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-0 right-0 w-32 h-32 -mr-16 -mt-16 rounded-full blur-3xl opacity-0 group-hover:opacity-30 bg-accretion/20 transition-opacity duration-300"
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Call to Action Section */}
        <section className="px-4 py-20 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto bg-gradient-to-r from-white/5 to-white/0 border border-white/10 rounded-3xl p-12 text-center backdrop-blur-sm"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3">
              <Sparkles className="w-8 h-8 text-accretion" />
              Stay Updated
            </h2>
            <p className="text-starlight/70 text-lg mb-8 max-w-2xl mx-auto">
              Follow our social channels to stay informed about upcoming events,
              registrations, and announcements.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-accretion to-orange-500 text-void-dark font-bold rounded-lg hover:shadow-lg hover:shadow-accretion/50 transition-all duration-300"
            >
              Join Our Community
            </motion.button>
          </motion.div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
