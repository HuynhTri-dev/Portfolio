import { Github, Mail, Phone, MapPin, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900/95 border-t border-blue-700/30 py-10">
      <div className="max-w-6xl mx-auto px-6 text-center text-gray-300">
        <p className="text-sm mb-6">
          Huynh Minh Tri – Fullstack Developer specializing in building scalable
          and maintainable software applications.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 justify-items-center text-left text-sm">
          <div className="flex items-center gap-2">
            <Github className="w-5 h-5 text-blue-400" />
            <a
              href="https://github.com/HuynhTri-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition-colors"
            >
              github.com/HuynhTri-dev
            </a>
          </div>

          <div className="flex items-center gap-2">
            <Linkedin className="w-5 h-5 text-blue-400" />
            <a
              href="https://www.linkedin.com/in/tr%C3%AD-hu%E1%BB%B3nh-minh-bb71a0259/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-300 transition-colors"
            >
              linkedin.com
            </a>
          </div>

          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5 text-blue-400" />
            <a
              href="mailto:huynhminhtri1109@gmail.com"
              className="hover:text-blue-300 transition-colors"
            >
              huynhminhtri1109@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-2">
            <Phone className="w-5 h-5 text-blue-400" />
            <a
              href="tel:0982294937"
              className="hover:text-blue-300 transition-colors"
            >
              0982294937
            </a>
          </div>

          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-blue-400" />
            <span>TP. Hồ Chí Minh, Việt Nam</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
