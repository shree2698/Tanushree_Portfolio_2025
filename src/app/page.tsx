import About from "@/components/About";
import Contact from "@/components/Contact";
import Experience from "@/components/ExperienceCard";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import SkillsGrid from "@/components/SkillGrid";

export default function Home() {
  return (
    <div
      className="min-h-screen w-full p-5 sm:p-20 items-center"
      style={{ fontFamily: "var(--font-geist-sans)" }}
    >
      <main className="w-full">
        <div className=" p-5 md:p-5 ">
        <Hero />
        <About />
        <SkillsGrid />
        <Experience />
        <Projects/>
        <Contact/>
        <Footer/>
        </div>
      </main>
    </div>
  );
}
