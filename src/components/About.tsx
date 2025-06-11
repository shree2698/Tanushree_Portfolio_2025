"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ab from "../assets/images/vector.jpg";
import ab1 from "../assets/images/about1.png";
import { useTheme } from "next-themes";
import { 
  Code2, 
  Database, 
  Globe, 
  Users, 
  Award, 
  Calendar,
  Target,
  Lightbulb,
  ArrowRight,
  CheckCircle
} from "lucide-react";

interface Stat {
  value: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface Skill {
  name: string;
  category: string;
}

const About: React.FC = () => {
  const { theme } = useTheme();
   const [mounted, setMounted] = useState(false);
   useEffect(() => {
    setMounted(true);
  }, []);
  const isDarkMode: boolean = theme === "dark";
const absrc = mounted && theme === "dark" ? ab : ab;
  const stats: Stat[] = [
    { value: "2.1+", label: "Years Experience", icon: Calendar },
    { value: "15+", label: "Projects Completed", icon: Target },
    { value: "8+", label: "Technologies", icon: Code2 },
    { value: "90%", label: "Client Satisfaction", icon: Award }
  ];

  const skills: Skill[] = [
    { name: "MongoDB", category: "Database" },
    { name: "Express.js", category: "Backend" },
    { name: "React.js", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "GraphQL", category: "API" },
    { name: "REST APIs", category: "API" },
    { name: "TypeScript", category: "Language" },
    { name: "Next.js", category: "Framework" }
  ];

  const values: string[] = [
    "Clean, maintainable code architecture",
    "Agile development methodologies",
    "Cross-functional team collaboration",
    "Continuous learning and innovation",
    "User-centric design approach",
    "Performance optimization focus"
  ];

  const handleContactScroll = (): void => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="about"
      className="relative py-20 bg-background text-foreground overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-cta/5" />
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cta/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6">
            <Users className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-foreground/80">Get to know me</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-accent to-cta bg-clip-text text-transparent">Me</span>
          </h2>
          <p className="text-xl text-foreground/70 max-w-2xl mx-auto">
            Passionate full-stack developer crafting innovative solutions with modern technologies
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Section */}
          <div className="space-y-8">
            {/* Story */}
            <div className="space-y-6">
              <div className="p-6 bg-background/50 backdrop-blur-sm border border-border rounded-2xl">
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Code2 className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Full-Stack Expertise</h3>
                    <p className="text-foreground/70 leading-relaxed">
                      With <span className="text-accent font-semibold">2.1 years</span> of hands-on experience, 
                      I specialize in the <span className="text-cta font-semibold">MERN stack</span>, building 
                      scalable applications that deliver exceptional user experiences.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-background/50 backdrop-blur-sm border border-border rounded-2xl">
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 bg-cta/10 rounded-lg">
                    <Globe className="w-5 h-5 text-cta" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Modern Web Technologies</h3>
                    <p className="text-foreground/70 leading-relaxed">
                      Proficient in <span className="text-accent font-semibold">GraphQL</span> and 
                      <span className="text-cta font-semibold"> REST APIs</span>, I bring comprehensive 
                      understanding of modern web architecture and best practices.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-background/50 backdrop-blur-sm border border-border rounded-2xl">
                <div className="flex items-start gap-3 mb-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Lightbulb className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Innovation & Problem Solving</h3>
                    <p className="text-foreground/70 leading-relaxed">
                      My passion for innovation drives me to tackle complex challenges and deliver 
                      high-quality solutions through collaborative teamwork and agile methodologies.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Core Values */}
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Target className="w-5 h-5 text-accent" />
                Core Values & Approach
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-background/30 rounded-lg border border-border/50 hover:bg-accent/5 transition-colors"
                  >
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="text-sm text-foreground/80">{value}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <Button
              onClick={handleContactScroll}
              className="group bg-gradient-to-r from-accent to-cta hover:from-accent/90 hover:to-cta/90 text-white shadow-lg shadow-accent/25 hover:shadow-accent/40 transition-all duration-300 px-6 py-3 rounded-full"
            >
              Let's Work Together
              <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Image & Stats Section */}
          <div className="space-y-8">
            {/* Main Image */}
            <div className="relative">
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full blur-xl animate-pulse" />
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-cta/20 rounded-full blur-xl animate-pulse delay-700" />
                
                {/* Image Container */}
                <div className="relative w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br from-accent/10 to-cta/10 backdrop-blur-sm border border-border/20 shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent z-10" />
                  <Image
                    src={absrc}
                    alt="About Tanushreeranjan - Software Developer"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                  
                  {/* Floating Tech Icons */}
                  <div className="absolute top-4 right-4 z-20 p-2 bg-background/80 backdrop-blur-sm rounded-full border border-border/30">
                    <Database className="w-4 h-4 text-accent animate-pulse" />
                  </div>
                  <div className="absolute bottom-4 left-4 z-20 p-2 bg-background/80 backdrop-blur-sm rounded-full border border-border/30">
                    <Globe className="w-4 h-4 text-cta animate-pulse delay-500" />
                  </div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="p-4 bg-background/50 backdrop-blur-sm border border-border rounded-xl text-center hover:bg-accent/5 transition-colors group"
                >
                  <div className="flex justify-center mb-2">
                    <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                      <stat.icon className="w-5 h-5 text-accent" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
                  <div className="text-sm text-foreground/60">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* Skills Tags */}
            <div>
              <h3 className="text-lg font-semibold mb-4 text-center">Technical Expertise</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-background/50 border border-border rounded-full text-sm font-medium text-foreground/80 hover:bg-accent/10 hover:border-accent/30 transition-all duration-200"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;