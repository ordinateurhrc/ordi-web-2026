"use client";

import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Starfield } from "@/components/ui/Starfield";
import { motion } from "framer-motion";
import Link from "next/link";
import { Terminal, PenTool, Users, Code, Share2, ArrowLeft, Star, Lightbulb, Target, Mail, Linkedin } from "lucide-react";
import { useParams } from "next/navigation";
import { useMemo } from "react";

const departmentsData = {
  tech: {
    name: "Technical",
    label: "INFRASTRUCTURE",
    color: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-500/10",
    accent: "text-blue-400",
    accentBorder: "border-blue-400/30",
    icon: <Terminal className="w-8 h-8" />,
    description: "The backbone of the society. We handle the technical infrastructure, CTFs, and workshops.",
    tags: ["SysAdmin", "Security", "DevOps"],
    longDescription: "Our Technical department is the foundation of Ordinateur. We design and maintain the infrastructure that powers all our initiatives, from hosting secure environments for Capture The Flag competitions to building robust systems that support our community.",
    responsibilities: [
      "Infrastructure management and DevOps",
      "Cybersecurity and CTF organization",
      "Technical workshops and training",
      "System architecture and deployment",
      "Security audits and assessments"
    ],
    focus: "Building secure, scalable systems that power our community",
    opportunities: [
      "Lead CTF events and competitions",
      "Mentor members in security practices",
      "Design cloud infrastructure solutions",
      "Conduct security awareness workshops"
    ],
    heads: [
      { name: "Aditya Sharma", email: "aditya@ordinateur.tech", linkedin: "aditya-sharma", photo: "https://ui-avatars.com/api/?name=Aditya+Sharma&background=3B82F6&color=fff" },
      { name: "Priya Verma", email: "priya@ordinateur.tech", linkedin: "priya-verma", photo: "https://ui-avatars.com/api/?name=Priya+Verma&background=EC4899&color=fff" }
    ],
    members: [
      { name: "Roshan Kumar", email: "roshan@ordinateur.tech", linkedin: "roshan-kumar", photo: "https://ui-avatars.com/api/?name=Roshan+Kumar&background=06B6D4&color=fff" },
      { name: "Isha Patel", email: "isha@ordinateur.tech", linkedin: "isha-patel", photo: "https://ui-avatars.com/api/?name=Isha+Patel&background=A855F7&color=fff" },
      { name: "Nikhil Singh", email: "nikhil@ordinateur.tech", linkedin: "nikhil-singh", photo: "https://ui-avatars.com/api/?name=Nikhil+Singh&background=F97316&color=fff" }
    ]
  },
  edm: {
    name: "Editorial",
    label: "VOICE",
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-500/10",
    accent: "text-purple-400",
    accentBorder: "border-purple-400/30",
    icon: <PenTool className="w-8 h-8" />,
    description: "The voice of Ordinateur. Creating content, managing socials, and spreading the word.",
    tags: ["Content", "Socials", "Strategy"],
    longDescription: "The Editorial department amplifies our message and connects with our audience. We craft compelling narratives, manage our digital presence across platforms, and ensure our community's stories are heard.",
    responsibilities: [
      "Content creation and strategy",
      "Social media management",
      "Newsletter and blog management",
      "Event coverage and documentation",
      "Brand voice and messaging"
    ],
    focus: "Telling stories that inspire and connect our community",
    opportunities: [
      "Create engaging multimedia content",
      "Develop social media campaigns",
      "Write technical blogs and articles",
      "Manage community communication"
    ],
    heads: [
      { name: "Rahul Patel", email: "rahul@ordinateur.tech", linkedin: "rahul-patel", photo: "https://ui-avatars.com/api/?name=Rahul+Patel&background=8B5CF6&color=fff" },
      { name: "Neha Singh", email: "neha@ordinateur.tech", linkedin: "neha-singh", photo: "https://ui-avatars.com/api/?name=Neha+Singh&background=EC4899&color=fff" }
    ],
    members: [
      { name: "Aryan Gupta", email: "aryan@ordinateur.tech", linkedin: "aryan-gupta", photo: "https://ui-avatars.com/api/?name=Aryan+Gupta&background=14B8A6&color=fff" },
      { name: "Shreya Malhotra", email: "shreya@ordinateur.tech", linkedin: "shreya-malhotra", photo: "https://ui-avatars.com/api/?name=Shreya+Malhotra&background=F472B6&color=fff" },
      { name: "Vikram Desai", email: "vikram@ordinateur.tech", linkedin: "vikram-desai", photo: "https://ui-avatars.com/api/?name=Vikram+Desai&background=0EA5E9&color=fff" }
    ]
  },
  org: {
    name: "Organising",
    label: "MANAGEMENT",
    color: "from-green-500 to-emerald-500",
    bgColor: "bg-green-500/10",
    accent: "text-green-400",
    accentBorder: "border-green-400/30",
    icon: <Users className="w-8 h-8" />,
    description: "The heart of our events. Managing logistics, coordination, and ensuring seamless execution.",
    tags: ["Logistics", "Events", "Coordination"],
    longDescription: "The Organising department orchestrates our events and initiatives. From concept to execution, we manage every detail to create memorable experiences for our members and the broader community.",
    responsibilities: [
      "Event planning and logistics",
      "Venue coordination",
      "Volunteer management",
      "Budget and resource allocation",
      "Timeline and deadline management"
    ],
    focus: "Creating seamless experiences through meticulous planning",
    opportunities: [
      "Organize large-scale events and workshops",
      "Coordinate cross-departmental initiatives",
      "Manage logistics and vendor relations",
      "Lead volunteer teams"
    ],
    heads: [
      { name: "Arjun Kumar", email: "arjun@ordinateur.tech", linkedin: "arjun-kumar", photo: "https://ui-avatars.com/api/?name=Arjun+Kumar&background=10B981&color=fff" },
      { name: "Divya Sharma", email: "divya@ordinateur.tech", linkedin: "divya-sharma", photo: "https://ui-avatars.com/api/?name=Divya+Sharma&background=F97316&color=fff" }
    ],
    members: [
      { name: "Ankit Verma", email: "ankit@ordinateur.tech", linkedin: "ankit-verma", photo: "https://ui-avatars.com/api/?name=Ankit+Verma&background=06B6D4&color=fff" },
      { name: "Riya Iyer", email: "riya@ordinateur.tech", linkedin: "riya-iyer", photo: "https://ui-avatars.com/api/?name=Riya+Iyer&background=D946EF&color=fff" },
      { name: "Sanjay Nair", email: "sanjay@ordinateur.tech", linkedin: "sanjay-nair", photo: "https://ui-avatars.com/api/?name=Sanjay+Nair&background=FBBF24&color=fff" }
    ]
  },
  dev: {
    name: "Developers",
    label: "BUILDERS",
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-500/10",
    accent: "text-orange-400",
    accentBorder: "border-orange-400/30",
    icon: <Code className="w-8 h-8" />,
    description: "Building websites, apps, and software solutions for real-world problems.",
    tags: ["Full Stack", "Native", "Web3"],
    longDescription: "The Developers department brings ideas to life through code. We build full-stack applications, mobile apps, and innovative solutions that solve real-world problems and showcase our technical capabilities.",
    responsibilities: [
      "Web and mobile development",
      "Full-stack application building",
      "API and backend development",
      "Frontend UI/UX implementation",
      "Version control and deployment"
    ],
    focus: "Transforming ideas into functional, scalable solutions",
    opportunities: [
      "Build web and mobile applications",
      "Develop APIs and backend systems",
      "Create user-friendly interfaces",
      "Explore emerging technologies"
    ],
    heads: [
      { name: "Vikram Singh", email: "vikram@ordinateur.tech", linkedin: "vikram-singh", photo: "https://ui-avatars.com/api/?name=Vikram+Singh&background=3B82F6&color=fff" },
      { name: "Ananya Gupta", email: "ananya@ordinateur.tech", linkedin: "ananya-gupta", photo: "https://ui-avatars.com/api/?name=Ananya+Gupta&background=EC4899&color=fff" }
    ],
    members: [
      { name: "Harsh Patel", email: "harsh@ordinateur.tech", linkedin: "harsh-patel", photo: "https://ui-avatars.com/api/?name=Harsh+Patel&background=F59E0B&color=fff" },
      { name: "Pooja Singh", email: "pooja@ordinateur.tech", linkedin: "pooja-singh", photo: "https://ui-avatars.com/api/?name=Pooja+Singh&background=A855F7&color=fff" },
      { name: "Arjun Rao", email: "arjun.rao@ordinateur.tech", linkedin: "arjun-rao", photo: "https://ui-avatars.com/api/?name=Arjun+Rao&background=06B6D4&color=fff" },
      { name: "Nisha Kumari", email: "nisha@ordinateur.tech", linkedin: "nisha-kumari", photo: "https://ui-avatars.com/api/?name=Nisha+Kumari&background=F472B6&color=fff" }
    ]
  },
  dynamics: {
    name: "Dynamics",
    label: "CREATIVE",
    color: "from-rose-500 to-red-500",
    bgColor: "bg-rose-500/10",
    accent: "text-rose-400",
    accentBorder: "border-rose-400/30",
    icon: <Share2 className="w-8 h-8" />,
    description: "The creative engine. Graphic design, video editing, and visual storytelling.",
    tags: ["Design", "VFX", "Motion"],
    longDescription: "The Dynamics department is our creative powerhouse. We craft visual identities, produce engaging videos, and create designs that captivate and communicate our message with impact.",
    responsibilities: [
      "Graphic design and branding",
      "Video production and editing",
      "Motion graphics and animations",
      "Visual content creation",
      "Design system development"
    ],
    focus: "Creating compelling visuals that inspire and engage",
    opportunities: [
      "Design event materials and promotional content",
      "Produce videos and documentaries",
      "Create motion graphics and animations",
      "Develop brand guidelines"
    ],
    heads: [
      { name: "Rohan Desai", email: "rohan@ordinateur.tech", linkedin: "rohan-desai", photo: "https://ui-avatars.com/api/?name=Rohan+Desai&background=8B5CF6&color=fff" },
      { name: "Sophia Patel", email: "sophia@ordinateur.tech", linkedin: "sophia-patel", photo: "https://ui-avatars.com/api/?name=Sophia+Patel&background=EC4899&color=fff" }
    ],
    members: [
      { name: "Zara Khan", email: "zara@ordinateur.tech", linkedin: "zara-khan", photo: "https://ui-avatars.com/api/?name=Zara+Khan&background=D946EF&color=fff" },
      { name: "Aditya Bhatt", email: "aditya.bhatt@ordinateur.tech", linkedin: "aditya-bhatt", photo: "https://ui-avatars.com/api/?name=Aditya+Bhatt&background=14B8A6&color=fff" },
      { name: "Manvi Singh", email: "manvi@ordinateur.tech", linkedin: "manvi-singh", photo: "https://ui-avatars.com/api/?name=Manvi+Singh&background=F97316&color=fff" }
    ]
  }
};

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
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const floatingVariants = {
  initial: { y: 0 },
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 5,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function DepartmentPage() {
  const params = useParams();
  const deptId = params.id as string;

  const dept = useMemo(() => {
    return departmentsData[deptId as keyof typeof departmentsData];
  }, [deptId]);

  if (!dept) {
    return (
      <main className="min-h-screen bg-void text-starlight flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Department Not Found</h1>
          <Link href="/departments" className="text-blue-400 hover:text-blue-300">
            ← Back to Departments
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-void text-starlight selection:bg-accretion selection:text-void-dark relative overflow-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <Starfield />
      </div>

      <Navbar />

      <div className="relative z-10">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="px-4 pt-8"
        >
          <Link
            href="/departments"
            className="inline-flex items-center gap-2 text-starlight/60 hover:text-white transition-colors group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Departments
          </Link>
        </motion.div>

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-4 py-20 relative overflow-hidden">
          {/* Animated background elements */}
          <motion.div
            variants={floatingVariants}
            initial="initial"
            animate="animate"
            className={`absolute top-20 -right-32 w-96 h-96 rounded-full blur-3xl opacity-10 ${dept.bgColor}`}
          />
          <motion.div
            variants={floatingVariants}
            initial="initial"
            animate="animate"
            transition={{ delay: 0.5 }}
            className={`absolute bottom-20 -left-32 w-96 h-96 rounded-full blur-3xl opacity-10 ${dept.bgColor}`}
          />

          <div className="max-w-6xl mx-auto w-full relative z-10">
            <motion.div
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-20"
            >
              <span className="px-3 py-1 rounded-full border border-white/10 bg-white/5 text-starlight/60 text-xs font-medium tracking-wider uppercase inline-block mb-6">
                {dept.label}
              </span>
              <h1 className="text-7xl md:text-8xl lg:text-9xl font-bold font-sans tracking-tighter mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white to-starlight/40">
                {dept.name}
              </h1>
              <p className="text-xl md:text-2xl text-starlight/80 max-w-3xl mx-auto font-light">
                {dept.longDescription}
              </p>
            </motion.div>

            {/* Icon and CTA */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col items-center gap-8"
            >
              <div className={`w-24 h-24 rounded-2xl border-2 ${dept.accentBorder} ${dept.bgColor} flex items-center justify-center ${dept.accent}`}>
                {dept.icon}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Two Column Content */}
        <section className="px-4 py-20 relative">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left Column - Responsibilities */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={itemVariants} className="mb-8">
                <h2 className="text-4xl font-bold mb-4 flex items-center gap-3">
                  <Target className={`w-8 h-8 ${dept.accent}`} />
                  Key Responsibilities
                </h2>
                <div className={`h-1 w-20 bg-gradient-to-r ${dept.color} rounded-full`} />
              </motion.div>

              <motion.ul
                variants={containerVariants}
                className="space-y-4"
              >
                {dept.responsibilities.map((responsibility, idx) => (
                  <motion.li
                    key={idx}
                    variants={itemVariants}
                    className="flex items-start gap-4 group"
                  >
                    <span className={`${dept.accent} font-bold text-xl flex-shrink-0 group-hover:scale-125 transition-transform`}>→</span>
                    <span className="text-starlight/80 group-hover:text-white transition-colors text-lg">{responsibility}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>

            {/* Right Column - Opportunities */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={itemVariants} className="mb-8">
                <h2 className="text-4xl font-bold mb-4 flex items-center gap-3">
                  <Lightbulb className={`w-8 h-8 ${dept.accent}`} />
                  Opportunities
                </h2>
                <div className={`h-1 w-20 bg-gradient-to-r ${dept.color} rounded-full`} />
              </motion.div>

              <motion.ul
                variants={containerVariants}
                className="space-y-4"
              >
                {dept.opportunities.map((opportunity, idx) => (
                  <motion.li
                    key={idx}
                    variants={itemVariants}
                    className="flex items-start gap-4 group"
                  >
                    <Star className={`w-5 h-5 ${dept.accent} flex-shrink-0 group-hover:scale-125 transition-transform`} />
                    <span className="text-starlight/80 group-hover:text-white transition-colors text-lg">{opportunity}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </div>
        </section>

        {/* Focus Section */}
        <section className="px-4 py-20 relative">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className={`max-w-4xl mx-auto bg-gradient-to-br ${dept.bgColor} border-2 ${dept.accentBorder} rounded-3xl p-12 backdrop-blur-sm relative overflow-hidden`}
          >
            <motion.div
              variants={floatingVariants}
              initial="initial"
              animate="animate"
              className={`absolute -top-20 -right-20 w-64 h-64 rounded-full blur-3xl opacity-20 ${dept.bgColor}`}
            />
            <div className="relative z-10">
              <h2 className="text-3xl font-bold mb-4">Our Focus</h2>
              <p className="text-xl text-starlight/90">{dept.focus}</p>
            </div>
          </motion.div>
        </section>

        {/* Tags Section */}
        <section className="px-4 py-20 relative">
          <div className="max-w-4xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-3xl font-bold mb-8"
            >
              Core Skills & Areas
            </motion.h2>
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-wrap gap-4"
            >
              {dept.tags.map((tag) => (
                <motion.span
                  key={tag}
                  variants={itemVariants}
                  whileHover={{ scale: 1.1, y: -5 }}
                  className={`px-6 py-3 rounded-full border-2 ${dept.accentBorder} bg-white/5 backdrop-blur-sm font-semibold cursor-pointer hover:${dept.bgColor} transition-all duration-300`}
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Team Members Section */}
        <section className="px-4 py-20 relative">
          <div className="max-w-6xl mx-auto">
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-4xl font-bold mb-4 text-center"
            >
              Meet The Team
            </motion.h2>
            
            {/* Heads Section */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <p className={`text-sm font-semibold tracking-widest uppercase ${dept.accent} mb-8`}>
                Department Heads
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl mx-auto mb-16"
            >
              {dept.heads.map((member, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  whileHover={{ y: -15 }}
                  className={`relative group overflow-hidden rounded-2xl border-2 ${dept.accentBorder} ${dept.bgColor} backdrop-blur-sm`}
                >
                  {/* Gradient accent line */}
                  <motion.div
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${dept.color} origin-left z-10`}
                  />

                  {/* Image Container */}
                  <div className="relative w-full h-56 overflow-hidden bg-white/5">
                    <motion.img
                      src={member.photo}
                      alt={member.name}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.3 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>

                  {/* Content Container */}
                  <div className="relative p-5 z-10">
                    <h3 className="text-lg font-bold text-white mb-1 truncate">{member.name}</h3>
                    <p className={`text-xs font-semibold ${dept.accent} mb-4 uppercase tracking-wider`}>Head</p>
                    
                    <div className="flex gap-3 mt-4">
                      <motion.a
                        whileHover={{ scale: 1.15, rotate: 10 }}
                        href={`mailto:${member.email}`}
                        className="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-white/20 text-starlight/60 hover:text-white hover:border-white/50 hover:bg-white/10 transition-all"
                        title="Email"
                      >
                        <Mail className="w-4 h-4" />
                      </motion.a>
                      <motion.a
                        whileHover={{ scale: 1.15, rotate: -10 }}
                        href={`https://linkedin.com/in/${member.linkedin}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-white/20 text-starlight/60 hover:text-blue-400 hover:border-blue-400/50 hover:bg-blue-400/10 transition-all"
                        title="LinkedIn"
                      >
                        <Linkedin className="w-4 h-4" />
                      </motion.a>
                    </div>
                  </div>

                  {/* Decorative corner accent */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className={`absolute -bottom-8 -right-8 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-30 ${dept.bgColor}`}
                  />
                </motion.div>
              ))}
            </motion.div>

            {/* Members Section */}
            {dept.members && dept.members.length > 0 && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  className="text-center mb-12"
                >
                  <p className={`text-sm font-semibold tracking-widest uppercase ${dept.accent} mb-8`}>
                    Team Members
                  </p>
                </motion.div>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
                >
                  {dept.members.map((member, idx) => (
                    <motion.div
                      key={idx}
                      variants={itemVariants}
                      whileHover={{ y: -15 }}
                      className={`relative group overflow-hidden rounded-2xl border-2 ${dept.accentBorder} ${dept.bgColor} backdrop-blur-sm`}
                    >
                      {/* Gradient accent line */}
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.3 }}
                        className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${dept.color} origin-left z-10`}
                      />

                      {/* Image Container */}
                      <div className="relative w-full h-56 overflow-hidden bg-white/5">
                        <motion.img
                          src={member.photo}
                          alt={member.name}
                          className="w-full h-full object-cover"
                          whileHover={{ scale: 1.1 }}
                          transition={{ duration: 0.3 }}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>

                      {/* Content Container */}
                      <div className="relative p-5 z-10">
                        <h3 className="text-lg font-bold text-white mb-1 truncate">{member.name}</h3>
                        
                        <div className="flex gap-3 mt-4">
                          <motion.a
                            whileHover={{ scale: 1.15, rotate: 10 }}
                            href={`mailto:${member.email}`}
                            className="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-white/20 text-starlight/60 hover:text-white hover:border-white/50 hover:bg-white/10 transition-all"
                            title="Email"
                          >
                            <Mail className="w-4 h-4" />
                          </motion.a>
                          <motion.a
                            whileHover={{ scale: 1.15, rotate: -10 }}
                            href={`https://linkedin.com/in/${member.linkedin}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center w-8 h-8 rounded-lg border border-white/20 text-starlight/60 hover:text-blue-400 hover:border-blue-400/50 hover:bg-blue-400/10 transition-all"
                            title="LinkedIn"
                          >
                            <Linkedin className="w-4 h-4" />
                          </motion.a>
                        </div>
                      </div>

                      {/* Decorative corner accent */}
                      <motion.div
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className={`absolute -bottom-8 -right-8 w-24 h-24 rounded-full blur-2xl opacity-0 group-hover:opacity-30 ${dept.bgColor}`}
                      />
                    </motion.div>
                  ))}
                </motion.div>
              </>
            )}
          </div>
        </section>

        {/* Navigation to other departments */}
        <section className="px-4 py-20 relative">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-center">Explore Other Departments</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {Object.entries(departmentsData)
                .filter(([id]) => id !== deptId)
                .map(([id, d]) => (
                  <motion.div
                    key={id}
                    whileHover={{ y: -5 }}
                    className="group"
                  >
                    <Link
                      href={`/departments/${id}`}
                      className="block p-6 border border-white/10 rounded-xl hover:border-white/30 transition-all duration-300 hover:bg-white/5"
                    >
                      <h3 className="text-xl font-bold mb-2 group-hover:text-white transition-colors">{d.name}</h3>
                      <p className="text-starlight/60 text-sm line-clamp-2">{d.description}</p>
                      <div className="mt-4 flex items-center gap-2 text-starlight/40 group-hover:text-starlight/70 transition-colors">
                        <span className="text-sm">Explore</span>
                        <ArrowLeft className="w-3 h-3 group-hover:translate-x-1 transition-transform" style={{transform: 'scaleX(-1)'}} />
                      </div>
                    </Link>
                  </motion.div>
                ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  );
}
