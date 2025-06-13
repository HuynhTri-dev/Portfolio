import { User } from "lucide-react";

export default function AboutSection() {
  return (
    <div className="animate-fade-in container mx-auto pb-20 max-w-5xl px-5">
      <div className="bg-gradient-to-r from-gray-800/50 to-blue-900/30 p-8 rounded-2xl border border-blue-700/30 backdrop-blur-sm">
        <div className="flex items-center gap-3 mb-6">
          <User className="w-6 h-6 text-blue-400" />
          <h2 className="text-3xl font-bold">Career Objective</h2>
        </div>
        <p className="text-gray-300 text-lg leading-relaxed">
          A passionate Software Engineer focused on building optimized, secure,
          scalable web systems and always experimenting with new ideas,
          function. Seeking to contribute to challenging web app, cloud service,
          or real-time interactive system projects leveraging experience with
          ASP.NET, React, Node.js, and databases like MongoDB/SQL Server.
        </p>
      </div>
    </div>
  );
}
