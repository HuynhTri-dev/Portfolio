import { Award, Cpu, Github, Globe, GraduationCap } from "lucide-react";

export default function EduAndActiSection() {
  const achievements = [
    "Database Design Champion 2024",
    "HUTECH's Net Cracking Challenges 2024",
    "Building Data Platform on AWS",
    "Faculty-level volleyball tournament participant",
    "Various seminars on Agile, Data Analytics",
  ];

  return (
    <div className="animate-fade-in container mx-auto pb-20 max-w-5xl px-5">
      <div className="flex items-center gap-3 mb-8">
        <GraduationCap className="w-8 h-8 text-blue-400" />
        <h2 className="text-4xl font-bold">Education & Achievements</h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Education */}
        <div className="bg-gradient-to-r from-gray-800/50 to-blue-900/30 p-8 rounded-2xl border border-blue-700/30">
          <h3 className="text-2xl font-bold text-blue-300 mb-6">Education</h3>
          <div className="space-y-4">
            <h4 className="text-xl font-semibold">
              Ho Chi Minh City University of Technology (HUTECH)
            </h4>
            <p className="text-gray-300">
              Major: Information Technology (In Progress)
            </p>
            <div className="flex items-center gap-4">
              <span className="px-3 py-1 bg-green-600/20 text-green-300 rounded-full">
                GPA: 3.57 / 4.0
              </span>
              <span className="text-gray-400">
                Expected Graduation: 04/2026
              </span>
            </div>
          </div>
        </div>

        {/* Achievements */}
        <div className="bg-gradient-to-r from-gray-800/50 to-blue-900/30 p-8 rounded-2xl border border-blue-700/30">
          <h3 className="text-2xl font-bold text-blue-300 mb-6">
            Achievements
          </h3>
          <div className="space-y-3">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-center gap-3">
                <Award className="w-5 h-5 text-yellow-400" />
                <span className="text-gray-300">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interests */}
      <div className="mt-8 bg-gradient-to-r from-gray-800/50 to-blue-900/30 p-8 rounded-2xl border border-blue-700/30">
        <h3 className="text-2xl font-bold text-blue-300 mb-6">
          Interests & Skills
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Cpu className="w-8 h-8 text-blue-400" />
            </div>
            <h4 className="font-semibold mb-2">3D Design</h4>
            <p className="text-gray-400 text-sm">
              Basic skills in 3D modeling with Blender
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Github className="w-8 h-8 text-blue-400" />
            </div>
            <h4 className="font-semibold mb-2">Open Source</h4>
            <p className="text-gray-400 text-sm">
              Contributing to GitHub projects
            </p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Globe className="w-8 h-8 text-blue-400" />
            </div>
            <h4 className="font-semibold mb-2">Language</h4>
            <p className="text-gray-400 text-sm">
              Confident in English communication
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
