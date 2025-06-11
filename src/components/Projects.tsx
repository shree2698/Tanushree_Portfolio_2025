"use client";

import Image from "next/image";
import { useState } from "react";
import { ExternalLink, Github, Code, Users, Calendar, ArrowRight, Zap, Database, Globe, Mail, Settings, Leaf } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

// Mock images for demonstration
const crm = "/api/placeholder/600/400";
const mail = "/api/placeholder/600/400";
const pms = "/api/placeholder/600/400";
const icar = "/api/placeholder/600/400";

interface Project {
  id: number;
  title: string;
  description: string;
  imgSrc: string;
  category: string;
  technologies: string[];
  features: string[];
  status: "Completed" | "In Progress" | "Live";
  duration: string;
  teamSize: string;
  icon: any;
  color: string;
  demoUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Customer Relationship Management",
    description: "A comprehensive CRM solution that revolutionizes customer interactions through advanced data analytics, automated workflows, and intelligent customer insights. Features real-time dashboard, lead management, and predictive analytics.",
    imgSrc: crm,
    category: "Enterprise Software",
    technologies: ["React", "Node.js", "MongoDB", "Express", "TypeScript", "Chart.js"],
    features: ["Customer Analytics", "Lead Management", "Automated Workflows", "Real-time Dashboard"],
    status: "Completed",
    duration: "6 months",
    teamSize: "5 developers",
    icon: Database,
    color: "from-blue-500 to-cyan-500",
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: 2,
    title: "BulkEmail Marketing Platform",
    description: "A powerful email marketing solution with advanced segmentation, A/B testing, and comprehensive analytics. Delivers high-performance bulk email campaigns with enterprise-grade deliverability and automation.",
    imgSrc: mail,
    category: "Marketing Tool",
    technologies: ["React", "Python", "Redis", "PostgreSQL", "AWS SES", "Docker"],
    features: ["A/B Testing", "Email Templates", "Advanced Analytics", "Campaign Automation"],
    status: "Live",
    duration: "4 months",
    teamSize: "3 developers",
    icon: Mail,
    color: "from-emerald-500 to-teal-500",
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: 3,
    title: "Project Management System",
    description: "An intuitive project management platform that streamlines team collaboration, task tracking, and resource allocation. Features Kanban boards, Gantt charts, time tracking, and comprehensive reporting.",
    imgSrc: pms,
    category: "Productivity Tool",
    technologies: ["Vue.js", "Laravel", "MySQL", "Socket.io", "Chart.js", "PWA"],
    features: ["Kanban Boards", "Time Tracking", "Team Collaboration", "Resource Management"],
    status: "Completed",
    duration: "8 months",
    teamSize: "4 developers",
    icon: Settings,
    color: "from-purple-500 to-pink-500",
    demoUrl: "#",
    githubUrl: "#"
  },
  {
    id: 4,
    title: "ICAR-CIWA Agricultural Platform",
    description: "A government initiative for sustainable agricultural development, featuring research data management, farmer support systems, and innovative farming technique dissemination to enhance food security across India.",
    imgSrc: icar,
    category: "Government Project",
    technologies: ["Angular", "Spring Boot", "Oracle DB", "Jenkins", "Kubernetes", "GIS"],
    features: ["Research Management", "Farmer Portal", "Data Analytics", "GIS Integration"],
    status: "Live",
    duration: "12 months",
    teamSize: "8 developers",
    icon: Leaf,
    color: "from-green-500 to-lime-500",
    demoUrl: "#"
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const [isHovered, setIsHovered] = useState(false);
  const IconComponent = project.icon;

  return (
    <div className="group relative">
      <Card 
        className="overflow-hidden border-0 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 hover:shadow-2xl transition-all duration-700 hover:-translate-y-3"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Status Badge */}
        <div className="absolute top-6 right-6 z-20">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            project.status === 'Live' ? 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900 dark:text-emerald-200' :
            project.status === 'In Progress' ? 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200' :
            'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200'
          }`}>
            {project.status}
          </span>
        </div>

        <CardContent className="p-0">
          <div className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'}`}>
            {/* Image Section */}
            <div className="lg:w-1/2 relative overflow-hidden">
              <div className="relative h-80 lg:h-96">
                <Image
                  src={project.imgSrc}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                
                {/* Floating Icon */}
                <div className="absolute top-6 left-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color} p-1 shadow-xl`}>
                    <div className="w-full h-full bg-white dark:bg-slate-800 rounded-xl flex items-center justify-center">
                      <IconComponent className="w-8 h-8 text-slate-700 dark:text-slate-300" />
                    </div>
                  </div>
                </div>

                {/* Project Number */}
                <div className="absolute bottom-6 left-6">
                  <span className="text-6xl font-black text-white/20">0{project.id}</span>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="lg:w-1/2 p-8 lg:p-12 flex flex-col justify-center">
              <div className="mb-4">
                <span className="text-sm font-semibold text-accent uppercase tracking-wider">
                  {project.category}
                </span>
              </div>

              <h3 className="text-3xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors duration-300">
                {project.title}
              </h3>

              <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Project Info */}
              <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                  <Calendar className="w-4 h-4" />
                  <span>{project.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400">
                  <Users className="w-4 h-4" />
                  <span>{project.teamSize}</span>
                </div>
              </div>

              {/* Features */}
              <div className="mb-6">
                <h4 className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-3 flex items-center gap-2">
                  <Zap className="w-4 h-4" />
                  Key Features
                </h4>
                <div className="grid grid-cols-2 gap-2">
                  {project.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-accent rounded-full" />
                      <span className="text-sm text-slate-600 dark:text-slate-400">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technologies */}
              <div className="mb-8">
                <h4 className="text-sm font-semibold text-slate-600 dark:text-slate-400 mb-3 flex items-center gap-2">
                  <Code className="w-4 h-4" />
                  Technologies
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-accent/10 text-accent rounded-full text-xs font-medium border border-accent/20 hover:bg-accent/20 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-4">
                {project.demoUrl && (
                  <button className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent to-cta text-white rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                    <Globe className="w-4 h-4" />
                    Live Demo
                  </button>
                )}
                {project.githubUrl && (
                  <button className="flex items-center gap-2 px-6 py-3 border-2 border-accent text-accent rounded-xl font-semibold hover:bg-accent hover:text-white transition-all duration-300">
                    <Github className="w-4 h-4" />
                    Code
                  </button>
                )}
                <button className="flex items-center gap-2 px-6 py-3 text-accent hover:text-cta transition-colors group">
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-20 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-cta/5" />
      <div className="absolute top-40 left-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      <div className="absolute bottom-40 right-20 w-80 h-80 bg-cta/10 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-5xl font-bold text-foreground mb-4">
              Featured{" "}
              <span className="bg-gradient-to-r from-accent to-cta bg-clip-text text-transparent">
                Projects
              </span>
            </h2>
            <div className="h-1 bg-gradient-to-r from-accent to-cta rounded-full w-24 mx-auto" />
          </div>
          <p className="text-xl text-slate-600 dark:text-slate-400 mt-6 max-w-3xl mx-auto">
            Showcasing innovative solutions and cutting-edge technologies that solve real-world problems
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-slate-100 dark:bg-slate-800 rounded-2xl p-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  filter === category
                    ? 'bg-gradient-to-r from-accent to-cta text-white shadow-lg'
                    : 'text-slate-600 dark:text-slate-400 hover:text-accent'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="space-y-16 max-w-7xl mx-auto">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-accent/10 to-cta/10 rounded-3xl p-12 border border-accent/20">
            <h3 className="text-3xl font-bold text-foreground mb-4">
              Ready to bring your ideas to life?
            </h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
              Let's collaborate on your next project and create something amazing together.
            </p>
            <button className="px-8 py-4 bg-gradient-to-r from-accent to-cta text-white rounded-2xl font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300">
              Start a Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}