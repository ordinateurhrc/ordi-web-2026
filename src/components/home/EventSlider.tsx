"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Calendar, MapPin, Clock } from "lucide-react";

const homeEvents = [
  {
    id: 1,
    title: "HansInnoverse",
    category: "HACKATHON 5.0",
    date: "OCT 2024",
    time: "24 Hours",
    location: "Auditorium",
    description:
      "The flagship 24-hour hackathon. Where code meets consciousness. Join 500+ developers in building the future.",
  },
  {
    id: 2,
    title: "Encrypto",
    category: "CRYPTHUNT",
    date: "FEB 2025",
    time: "48 Hours",
    location: "Online",
    description:
      "Decipher the unknown. A hunt across the digital void testing your cryptography and problem solving skills.",
  },
  {
    id: 3,
    title: "Construct",
    category: "DEV SPRINT",
    date: "MAR 2025",
    time: "2 Days",
    location: "Lab 1",
    description:
      "Building the impossible in 48 hours. A sprint for the most dedicated builders to ship real products.",
  },
];

export function EventSlider() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % homeEvents.length);

  return (
    <section className="w-full relative px-4 py-24">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-starlight/60 text-xs font-medium tracking-wider uppercase">
                Timeline
              </span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold font-sans tracking-tighter mb-8 text-transparent bg-clip-text bg-gradient-to-b from-starlight to-starlight/40">
              Flagship Events
            </h2>
          </div>
          <div className="flex gap-4">
            <button
              onClick={next}
              className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white hover:text-black transition-all group"
            >
              <ArrowRight className="w-5 h-5 group-hover:-rotate-45 transition-transform duration-300" />
            </button>
          </div>
        </div>

        {/* Compact Split Card */}
        <div className="relative border border-white/10 rounded-3xl bg-white/[0.02] overflow-hidden grid grid-cols-1 lg:grid-cols-5 min-h-[500px]">
          {/* Left: Content (3 Cols) */}
          <div className="lg:col-span-3 p-8 md:p-12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-white/10">
            <div>
              <span className="inline-block px-3 py-1 rounded-md border border-accretion/20 bg-accretion/5 text-accretion text-xs font-bold tracking-widest uppercase mb-6">
                {homeEvents[current].category}
              </span>

              <h3 className="text-4xl md:text-6xl font-bold text-white mb-6">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={`title-${current}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="block"
                  >
                    {homeEvents[current].title}
                  </motion.span>
                </AnimatePresence>
              </h3>

              <AnimatePresence mode="wait">
                <motion.p
                  key={`desc-${current}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="text-starlight/60 text-lg leading-relaxed max-w-lg mb-8"
                >
                  {homeEvents[current].description}
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Dense Metadata Grid */}
            <div className="grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
              <MetaItem
                icon={<Calendar className="w-4 h-4" />}
                label="Date"
                value={homeEvents[current].date}
              />
              <MetaItem
                icon={<Clock className="w-4 h-4" />}
                label="Duration"
                value={homeEvents[current].time}
              />
              <MetaItem
                icon={<MapPin className="w-4 h-4" />}
                label="Location"
                value={homeEvents[current].location}
              />
            </div>
          </div>

          {/* Right: Visual (2 Cols) */}
          <div className="lg:col-span-2 relative bg-void-light flex items-center justify-center overflow-hidden">
            <img
              src="/braindump/event_placeholder_nano_banana.png"
              alt="Event Visual"
              className="absolute inset-0 w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent" />

            {/* Visual Decoration Overlay */}
            <div
              key={current}
              className="relative z-10 w-full aspect-square max-w-[200px] border border-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
            >
              <div className="absolute inset-0 border border-t-accretion/80 border-r-transparent border-b-white/20 border-l-transparent rounded-full animate-spin-slow" />
              <div className="text-6xl font-bold text-white tracking-tighter drop-shadow-lg">
                {homeEvents[current].id.toString().padStart(2, "0")}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function MetaItem({
  icon,
  label,
  value,
}: {
  icon: any;
  label: string;
  value: string;
}) {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2 text-starlight/40 text-xs uppercase tracking-wider font-medium">
        {icon} {label}
      </div>
      <div className="text-white font-medium text-lg tracking-tight">
        {value}
      </div>
    </div>
  );
}
