"use client";

import { Card, CardContent } from "@/components/ui/card";
import { useTheme } from "next-themes";
import Image, { StaticImageData } from "next/image";
import { Calendar, MapPin, Code, Users, Zap } from "lucide-react";

// Mock images for demonstration
const complogo = "/api/placeholder/48/48";
const complogo3 = "/api/placeholder/48/48";
const complogo1 = "/api/placeholder/48/48";

type ExperienceItem = {
  icon: string;
  title: string;
  company: string;
  description: string;
  date: string;
  location: string;
  skills: string[];
  highlights: string[];
};

const experiences: ExperienceItem[] = [
  {
    icon: complogo3,
    title: "Junior Software Development Engineer",
    company: "Jnine Infotech",
    description: `Developing and maintaining scalable web applications using modern MERN stack technologies. Leading frontend optimization initiatives and collaborating with cross-functional teams to deliver exceptional user experiences.`,
    date: "Jan 2024 - Present",
    location: "On-site",
    skills: ["React", "Node.js", "MongoDB", "Express", "TypeScript"],
    highlights: ["Enhanced app performance by 40%", "Led UI/UX improvements", "Mentored junior developers"]
  },
  {
    icon: complogo,
    title: "Junior Software Engineer",
    company: "Technoboot Pvt Ltd",
    description: `Built robust web applications and implemented agile development practices. Collaborated with senior developers on complex projects while maintaining high code quality standards.`,
    date: "Jul 2023 - Dec 2024",
    location: "On-site",
    skills: ["React", "Node.js", "JavaScript", "Git", "Agile"],
    highlights: ["Reduced bug reports by 30%", "Implemented CI/CD pipeline", "Contributed to 5+ major releases"]
  },
  {
    icon: complogo,
    title: "Associate Software Engineer",
    company: "Technoboot Pvt Ltd",
    description: `Focused on feature development and performance optimization. Conducted thorough code reviews and provided technical support to ensure delivery of high-quality software solutions.`,
    date: "Mar 2023 - Jun 2023",
    location: "On-site",
    skills: ["JavaScript", "React", "API Integration", "Testing"],
    highlights: ["Optimized database queries", "Improved code coverage to 85%", "Streamlined debugging process"]
  },
  {
    icon: complogo1,
    title: "Software Development Intern",
    company: "Quantumware Pvt Ltd",
    description: `Gained hands-on experience in full-stack development while contributing to real-world projects. Collaborated with experienced developers to learn industry best practices.`,
    date: "Mar 2022 - Jun 2022",
    location: "On-site",
    skills: ["MERN Stack", "Git", "Problem Solving"],
    highlights: ["Completed 3 projects successfully", "Learned agile methodology", "Received excellence award"]
  },
];

function ExperienceCard({ experience, index }: { experience: ExperienceItem; index: number }) {
  const { resolvedTheme } = useTheme();
  
  return (
    <Card id="experience" className="group relative overflow-hidden border-0 bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">
      {/* Gradient border effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent via-cta to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500 p-[1px] rounded-xl">
        <div className="h-full w-full bg-gradient-to-r from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 rounded-xl" />
      </div>
      
      <CardContent className="relative p-8">
        {/* Header */}
        <div className="flex items-start gap-4 mb-6">
          <div className="relative">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-accent to-cta p-3 shadow-lg">
              <div className="w-full h-full bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center">
                <Code className="w-6 h-6 text-accent" />
              </div>
            </div>
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full animate-pulse" />
          </div>
          
          <div className="flex-1">
            <h3 className="text-xl font-bold text-foreground mb-1 group-hover:text-accent transition-colors">
              {experience.title}
            </h3>
            <p className="text-accent font-semibold text-lg">{experience.company}</p>
            
            <div className="flex items-center gap-4 mt-3 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>{experience.date}</span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>{experience.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed mb-6">
          {experience.description}
        </p>

        {/* Highlights */}
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-3 flex items-center gap-2">
            <Zap className="w-4 h-4" />
            Key Achievements
          </h4>
          <div className="space-y-2">
            {experience.highlights.map((highlight, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                <span className="text-sm text-slate-600 dark:text-slate-400">{highlight}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div>
          <h4 className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-3 flex items-center gap-2">
            <Users className="w-4 h-4" />
            Technologies
          </h4>
          <div className="flex flex-wrap gap-2">
            {experience.skills.map((skill, idx) => (
              <span
                key={idx}
                className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium border border-accent/20 hover:bg-accent/20 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Connecting line for timeline effect */}
        {index < experiences.length - 1 && (
          <div className="absolute left-12 bottom-0 w-0.5 h-8 bg-gradient-to-b from-accent to-transparent" />
        )}
      </CardContent>
    </Card>
  );
}

export default function Experience() {
  return (
    <section className="py-20 bg-background relative overflow-hidden rounded-4xl">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-cta/5" />
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-cta/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-5xl font-bold text-foreground mb-4">
              Professional{" "}
              <span className="bg-gradient-to-r from-accent to-cta bg-clip-text text-transparent">
                Journey
              </span>
            </h2>
            <div className="h-1 bg-gradient-to-r from-accent to-cta rounded-full w-24 mx-auto" />
          </div>
          <p className="text-xl text-slate-600 dark:text-slate-400 mt-6 max-w-2xl mx-auto">
            Crafting digital experiences and building scalable solutions with modern technologies
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                <ExperienceCard experience={exp} index={index} />
              </div>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-accent mb-2">2+</div>
            <div className="text-slate-600 dark:text-slate-400">Years Experience</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-cta mb-2">10+</div>
            <div className="text-slate-600 dark:text-slate-400">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-emerald-500 mb-2">5+</div>
            <div className="text-slate-600 dark:text-slate-400">Technologies Mastered</div>
          </div>
        </div>
      </div>
    </section>
  );
}