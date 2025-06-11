"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, Download, X, Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet"
import { Separator } from "@/components/ui/separator"
import ModeToggle from "@/components/ModeToggle"

import sr from "@/assets/images/tanulight.png"
import sr1 from "@/assets/images/tanudark.png"
import { useTheme } from "next-themes"

const Navbar: React.FC = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  const isDarkMode = theme === "dark"
  const [activeSection, setActiveSection] = React.useState("home")

  const handleDownload = () => {
    const link = document.createElement("a")
    link.href = "/TanushreeMahato_FullStackDeveloper.pdf"
    link.setAttribute("download", "TanushreeMahato_FullStackDeveloper.pdf")
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const navItems = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ]
 React.useEffect(() => {
    setMounted(true);
  }, []);
const logoSrc = mounted && theme === "dark" ? sr1 : sr;
  // Track active section on scroll
  React.useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.href.substring(1))
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const offsetTop = element.offsetTop
          const offsetHeight = element.offsetHeight
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-background/80 border-b border-border/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo Section */}
          <Link 
            href="#home" 
            className="flex items-center space-x-3 group transition-transform hover:scale-105"
          >
            <div className="relative">
              <Image 
                src={logoSrc} 
                alt="Tanushree Logo" 
                width={50} 
                height={50} 
                className="rounded-full ring-2 ring-accent/10 group-hover:ring-accent/40 transition-all"
              />
              <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-accent/20 to-cta/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
                Tanushree
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 font-mono">
                Full Stack Developer
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 bg-background/50 rounded-full px-2 py-2 backdrop-blur-sm border border-border/20">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 relative ${
                  activeSection === item.href.substring(1)
                    ? "text-white bg-gradient-to-r from-accent to-cta shadow-lg shadow-accent/25"
                    : "text-foreground/70 hover:text-accent hover:bg-background/80"
                }`}
              >
                {item.label}
                {activeSection === item.href.substring(1) && (
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent to-cta opacity-20 animate-pulse" />
                )}
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Social Links - Hidden on mobile */}
            <div className="hidden md:flex items-center gap-2">
              <Button 
                variant="ghost" 
                size="icon" 
                className="w-9 h-9 rounded-full hover:bg-accent/10 hover:text-accent transition-colors"
                asChild
              >
                <Link href="https://github.com/yourusername" target="_blank" aria-label="GitHub">
                  <Github className="h-4 w-4" />
                </Link>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="w-9 h-9 rounded-full hover:bg-accent/10 hover:text-accent transition-colors"
                asChild
              >
                <Link href="https://www.linkedin.com/in/tanushree-mahato-a6a16920a" target="_blank" aria-label="LinkedIn">
                  <Linkedin className="h-4 w-4" />
                </Link>
              </Button>
            </div>

            <Separator orientation="vertical" className="h-6 hidden md:block opacity-30" />

            {/* Theme Toggle */}
            <ModeToggle />

            {/* Download Resume */}
            <Button 
              onClick={handleDownload}
              className="hidden sm:flex items-center gap-2 bg-gradient-to-r from-accent to-cta hover:from-accent/90 hover:to-cta/90 text-white shadow-lg shadow-accent/25 hover:shadow-accent/40 transition-all duration-200 rounded-full px-4 py-2"
            >
              <Download className="h-4 w-4" />
              <span className="font-medium">Resume</span>
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="lg:hidden w-10 h-10 rounded-full hover:bg-accent/10 hover:text-accent transition-colors"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent 
                side="right" 
                className="w-80 p-0 bg-background/95 backdrop-blur-xl border-l border-border/20"
              >
                {/* Mobile Header */}
                <div className="flex items-center justify-between p-6 border-b border-border/20">
                  <Link href="#home" className="flex items-center space-x-3">
                    <Image 
                      src={logoSrc} 
                      alt="Logo" 
                      width={32} 
                      height={32} 
                      className="rounded-full"
                    />
                    <div className="flex flex-col">
                      <span className="text-lg font-bold">Tanushree</span>
                      <span className="text-xs text-foreground/60 font-mono">Full Stack Developer</span>
                    </div>
                  </Link>
                  {/* <SheetClose asChild>
                    <Button variant="ghost" size="icon" className="rounded-full">
                      <X className="h-5 w-5" />
                    </Button>
                  </SheetClose> */}
                </div>

                {/* Mobile Navigation */}
                <div className="p-6">
                  <nav className="flex flex-col gap-2 mb-8">
                    {navItems.map((item) => (
                      <SheetClose asChild key={item.href}>
                        <Link
                          href={item.href}
                          className={`flex items-center gap-3 px-4 py-3 rounded-xl text-base font-medium transition-all ${
                            activeSection === item.href.substring(1)
                              ? "bg-gradient-to-r from-accent to-cta text-white shadow-lg"
                              : "hover:bg-background/80 hover:text-accent"
                          }`}
                        >
                          {item.label}
                        </Link>
                      </SheetClose>
                    ))}
                  </nav>

                  <Separator className="mb-6 opacity-30" />

                  {/* Mobile Actions */}
                  <div className="space-y-4">
                    <Button 
                      onClick={handleDownload}
                      className="w-full bg-gradient-to-r from-accent to-cta hover:from-accent/90 hover:to-cta/90 text-white shadow-lg rounded-xl py-3"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download Resume
                    </Button>

                    {/* Mobile Social Links */}
                    <div className="flex justify-center gap-4">
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="rounded-full border-border hover:bg-accent/10"
                        asChild
                      >
                        <Link href="https://github.com/shree2698" target="_blank">
                          <Github className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="rounded-full border-border hover:bg-accent/10"
                        asChild
                      >
                        <Link href="https://www.linkedin.com/in/tanushree-mahato-a6a16920a" target="_blank">
                          <Linkedin className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="rounded-full border-border hover:bg-accent/10"
                        asChild
                      >
                        <Link href="mailto:tanushreemahato.261298@gmail.com">
                          <Mail className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar