"use client";

import { useTheme } from "next-themes";
import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-foreground/20 dark:bg-foreground/20 text-foreground dark:text-foreground py-6 mt-10 rounded-4xl">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        {/* Left Side */}
        <p className="text-sm text-center md:text-left">
          &copy; {year} Tanushree Mahato. All rights reserved.
        </p>

        {/* Right Side - Links */}
        <div className="flex space-x-4 text-sm">
          <Link href="#projects" className="hover:underline">
            Projects
          </Link>
          <Link href="#contact" className="hover:underline">
            Contact
          </Link>
          <a
            href="https://www.linkedin.com/in/tanushree-mahato-a6a16920a"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
