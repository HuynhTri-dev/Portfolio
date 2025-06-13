// import { useActiveSection } from "../hooks/useActiveSection";
import Header from "../components/common/layout/Header";
import Hero from "../components/common/layout/Hero";
import { useEffect, useState } from "react";

import AboutSection from "../components/sections/AboutSection";
import SkillSection from "../components/sections/SkillSection";
import ProjectSection from "../components/sections/ProjectSection";
import EducationSection from "../components/sections/EduAndActiSection";
import Footer from "../components/common/layout/Footer";

export default function CVPage() {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeSection]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-800 text-white">
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
      {activeSection === "about" && <Hero />}

      <div>
        {activeSection === "about" && <AboutSection />}
        {activeSection === "skills" && (
          <section className="min-h-screen">
            <SkillSection />
          </section>
        )}
        {activeSection === "projects" && <ProjectSection />}
        {activeSection === "education & Activities" && <EducationSection />}
      </div>

      <Footer />
    </div>
  );
}
