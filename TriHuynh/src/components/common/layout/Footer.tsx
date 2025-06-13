import { Github, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900/95 border-t border-blue-700/30 py-8">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <p className="text-gray-400">
          © 2025 Huỳnh Minh Trí. Built with React, TypeScript & Tailwind CSS
        </p>
        <div className="flex justify-center gap-6 mt-4">
          <a
            href="https://github.com/HuynhTri-dev"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="mailto:huynhminhtri1109@gmail.com"
            className="text-blue-400 hover:text-blue-300 transition-colors"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>
    </footer>
  );
}
