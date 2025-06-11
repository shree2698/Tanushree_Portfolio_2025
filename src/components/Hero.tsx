"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Banner from "../assets/images/Banner.png";
import Banner1 from "../assets/images/Banner2.png";
import { useTheme } from "next-themes";
import {
    Instagram,
    Linkedin,
    Github,
    Mail,
    Download,
    ArrowRight,
    Code2,
    Sparkles,
    MapPin
} from "lucide-react";
import InteractiveHeroSection from "./ui/InteractiveHeroSection";

const Hero: React.FC = () => {
    const { theme } = useTheme();
    const isDarkMode = theme === "dark";

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "/TanushreeMahato_FullStackDeveloper.pdf";
        link.setAttribute("download", "TanushreeMahato_FullStackDeveloper.pdf");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleScrollToProjects = () => {
        document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
    };

    const socialLinks = [
        {
            icon: Github,
            href: "https://github.com/shree2698",
            label: "GitHub",
            color: "hover:bg-gray-900 hover:text-white"
        },
        {
            icon: Linkedin,
            href: "https://www.linkedin.com/in/tanushree-mahato-a6a16920a",
            label: "LinkedIn",
            color: "hover:bg-blue-600 hover:text-white"
        },
        {
            icon: Instagram,
            href: "https://www.instagram.com/tshree.mahato/",
            label: "Instagram",
            color: "hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white"
        },
        {
            icon: Mail,
            href: "mailto:tanushreemahato.261298@gmail.com",
            label: "Email",
            color: "hover:bg-red-500 hover:text-white"
        }
    ];

    const techStack = ["React", "Node.js", "MongoDB", "Express", "TypeScript", "Next.js"];
    const startDate = new Date("2023-04-20"); // Set your actual start date here
    const now = new Date();
    const experienceInYears = ((now.getTime() - startDate.getTime()) / (1000 * 60 * 60 * 24 * 365)).toFixed(1); // 1 decimal

    return (
        <section
            id="home"
            className="relative min-h-screen bg-background text-foreground overflow-hidden rounded-tl-4xl"
        >
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-cta/5" />
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-accent/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cta/10 rounded-full blur-3xl animate-pulse delay-1000" />

            <div className="container mx-auto px-6 pt-24 pb-12 relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-6rem)]">

                    {/* Content Section */}
                    <div className="space-y-8 lg:pr-8">
                        {/* Status Badge */}
                        <div className="flex items-center gap-2 w-lg px-4 py-2 bg-accent/10 border border-accent/20 rounded-full backdrop-blur-sm">
                            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                            <span className="text-sm font-medium text-foreground/80">Available for work</span>
                            <MapPin className="w-3 h-3 text-foreground/60" />
                            <span className="text-xs text-foreground/80">Bangalore, Bhubaneswar, Hyderabad, Noida, Chennai</span>
                        </div>

                        {/* Main Heading */}
                        <div className="space-y-4">
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                                <span className="text-foreground/90">Hello, I'm</span>
                                <br />
                                <span className="bg-gradient-to-r from-accent via-cta to-accent bg-clip-text text-transparent">
                                    Tanushree
                                </span>
                                <span className="text-foreground">.</span>
                            </h1>

                            <div className="flex items-center gap-3 text-2xl md:text-3xl lg:text-4xl font-semibold">
                                <Code2 className="w-8 h-8 text-accent" />
                                <span className="text-foreground">Software Developer</span>
                                <Sparkles className="w-6 h-6 text-cta animate-pulse" />
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-lg text-foreground/70 leading-relaxed max-w-2xl">
                            Skilled Full-Stack Developer with{" "}
                            <span className="text-accent font-semibold">{experienceInYears}+ years</span> of experience,
                            specializing in the{" "}
                            <span className="text-cta font-semibold">MERN stack</span> for building modern web applications.
                            While MERN is my primary expertise, I'm highly adaptable and comfortable working with{" "}
                            <span className="font-semibold">any language or tech stack</span> to meet project goals.
                            I craft high-performance solutions and thrive on solving complex problems with innovative thinking.
                        </p>


                        {/* Tech Stack */}
                        <div className="space-y-3">
                            <p className="text-sm font-medium text-foreground/60 uppercase tracking-wider">Tech Stack</p>
                            <div className="flex flex-wrap gap-2">
                                {techStack.map((tech, index) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 bg-background/50 border border-border rounded-full text-sm font-medium text-foreground/80 hover:bg-accent/10 hover:border-accent/30 transition-all duration-200"
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="flex flex-wrap gap-4 pt-4">
                            <Button
                                onClick={handleScrollToProjects}
                                className="group bg-gradient-to-r from-accent to-cta hover:from-accent/90 hover:to-cta/90 text-white shadow-lg shadow-accent/25 hover:shadow-accent/40 transition-all duration-300 px-6 py-3 rounded-full"
                            >
                                View My Work
                                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </Button>

                            <Button
                                onClick={handleDownload}
                                variant="outline"
                                className="group border-border hover:bg-accent/10 hover:border-accent/50 px-6 py-3 rounded-full transition-all duration-300"
                            >
                                <Download className="mr-2 w-4 h-4 group-hover:animate-bounce" />
                                Download CV
                            </Button>
                        </div>

                        {/* Social Links */}
                        <div className="pt-8">
                            <p className="text-sm font-medium text-foreground/60 uppercase tracking-wider mb-4">Connect With Me</p>
                            <div className="flex gap-3">
                                {socialLinks.map((social) => (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`group p-3 border border-border rounded-full transition-all duration-300 ${social.color} hover:scale-110 hover:shadow-lg backdrop-blur-sm`}
                                        aria-label={social.label}
                                    >
                                        <social.icon className="w-5 h-5 transition-transform group-hover:scale-110" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Image Section */}
                    <div className="relative lg:order-2 order-1">
                        <div className="relative aspect-square max-w-lg mx-auto">
                            {/* Decorative Elements */}
                            <div className="absolute -top-4 -left-4 w-24 h-24 bg-accent/20 rounded-full blur-xl animate-pulse" />
                            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-cta/20 rounded-full blur-xl animate-pulse delay-500" />

                            {/* Main Image Container */}
                            <div className="relative w-full h-full rounded-3xl overflow-hidden bg-gradient-to-br from-accent/10 to-cta/10 backdrop-blur-sm border border-border/20 shadow-2xl">
                                <InteractiveHeroSection />
                            </div>

                            {/* Experience Badge */}
                            <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 z-20">
                                <div className="px-6 py-3 bg-background border border-border rounded-full shadow-lg backdrop-blur-sm">
                                    <div className="text-center">
                                        <div className="text-xl font-bold text-accent">{experienceInYears}+</div>
                                        <div className="text-xs text-foreground/60 uppercase tracking-wide">Years Experience</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-foreground/30 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;