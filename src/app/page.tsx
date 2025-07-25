import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SkillsSection from "@/components/SkillsSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import BlogSection from "@/components/BlogSection";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <div className="font-sans">
            <Navbar/>
            <HeroSection />
            <SkillsSection />
            <ExperienceSection />
            <ProjectsSection />
            <BlogSection />
            <Footer />
        </div>
    );
}
