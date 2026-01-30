// About page config: core values, milestones, stats

import { Zap, Users, Target, Heart } from "lucide-react";

export const coreValues = [
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Innovation",
    description: "We push boundaries and explore cutting-edge technologies to solve real-world problems."
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Community",
    description: "We believe in the power of collaboration and supporting each other's growth."
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Excellence",
    description: "We strive for perfection in everything we create, from code to design."
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Passion",
    description: "We are driven by our love for technology and the joy of creating."
  }
];

export const milestones = [
  { year: "2018", title: "Founded", description: "Ordinateur was established at Hansraj College, Delhi" },
  { year: "2019", title: "First Hackathon", description: "Organized the inaugural hackathon with 100+ participants" },
  { year: "2021", title: "Magazine Launch", description: "Started Bitwise Magazine for tech content and stories" },
  { year: "2025", title: "Current Session", description: "Expanded to five specialized departments with 40+ members" }
];

export const stats = [
  { value: "2018", label: "Founded", icon: "📅" },
  { value: "40+", label: "Active Members", icon: "👥" },
  { value: "20+", label: "Events Yearly", icon: "🎯" },
  { value: "5", label: "Departments", icon: "🏗️" },
  { value: "1000+", label: "Community Reach", icon: "🌐" },
  { value: "Bitwise", label: "Official Magazine", icon: "📚" }
];
