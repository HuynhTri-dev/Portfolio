import { Terminal, Menu, X } from "lucide-react";
import { useState } from "react";

type NavbarProps = {
  activeSection: string;
  setActiveSection: (section: string) => void;
};

export default function Navbar({
  activeSection,
  setActiveSection,
}: NavbarProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const sections = ["about", "skills", "projects", "education & Activities"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/95 backdrop-blur-sm border-b border-blue-700/30">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Terminal className="w-6 h-6 text-blue-400" />
            <span className="font-bold text-xl bg-gradient-to-r from-blue-400 to-yellow-400 bg-clip-text text-transparent">
              HMT.dev
            </span>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-blue-400"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>

          <div className="hidden md:flex gap-6">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`px-4 py-2 rounded-lg transition-all duration-300 ${
                  activeSection === section
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                    : "text-gray-300 hover:text-blue-400 hover:bg-blue-900/20"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-2">
            {sections.map((section) => (
              <button
                key={section}
                onClick={() => {
                  setActiveSection(section);
                  setIsMobileMenuOpen(false);
                }}
                className={`px-4 py-2 rounded-lg text-left transition-all duration-300 ${
                  activeSection === section
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-600/30"
                    : "text-gray-300 hover:text-blue-400 hover:bg-blue-900/20"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
