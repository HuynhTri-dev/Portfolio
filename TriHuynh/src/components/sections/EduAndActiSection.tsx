import { Activity, Award, Cpu, Github, GraduationCap } from "lucide-react";
import AchievementBanner from "../common/ui/banner/AchievementBanner";

export default function EduAndActiSection() {
  const achievements = [
    "Database Design Champion 2024",
    "HUTECH's Net Cracking Challenges 2024",
    "Building Data Platform on AWS",
    "Faculty-level volleyball tournament participant",
    "Various seminars on Agile, Data Analytics",
  ];

  return (
    <div className="animate-fade-in container mx-auto pb-16 pt-20 px-4 sm:px-6 lg:px-8 max-w-6xl">
      <div className="flex items-center gap-3 mb-8">
        <GraduationCap className="w-7 h-7 sm:w-8 sm:h-8 text-blue-400" />
        <h2 className="text-xl sm:text-2xl md:text-4xl font-bold">
          Education & Achievements
        </h2>
      </div>

      {/* Education & Achievements */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {/* Education */}
        <div className="bg-gradient-to-r from-gray-800/50 to-blue-900/30 p-6 sm:p-8 rounded-2xl border border-blue-700/30">
          <h3 className="text-xl sm:text-2xl font-bold text-blue-300 mb-4 sm:mb-6">
            Education
          </h3>
          <div className="space-y-3 sm:space-y-4 text-sm sm:text-base">
            <h4 className="text-lg sm:text-xl font-semibold">
              Ho Chi Minh City University of Technology (HUTECH)
            </h4>
            <p className="text-gray-300">
              Major: Information Technology (In Progress)
            </p>
            <div className="flex flex-wrap items-center gap-2 sm:gap-4">
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
        <div className="bg-gradient-to-r from-gray-800/50 to-blue-900/30 p-6 sm:p-8 rounded-2xl border border-blue-700/30">
          <h3 className="text-xl sm:text-2xl font-bold text-blue-300 mb-4 sm:mb-6">
            Achievements
          </h3>
          <div className="space-y-2 sm:space-y-3 text-sm sm:text-base">
            {achievements.map((achievement, index) => (
              <div key={index} className="flex items-start gap-3">
                <Award className="w-4 h-4 mt-1 text-yellow-400" />
                <span className="text-gray-300">{achievement}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Interests */}
      <div className="mt-10 sm:mt-12 bg-gradient-to-r from-gray-800/50 to-blue-900/30 p-6 sm:p-8 rounded-2xl border border-blue-700/30">
        <h3 className="text-xl sm:text-2xl font-bold text-blue-300 mb-6">
          Interests
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Interest Item */}
          <div className="text-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Cpu className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
            </div>
            <h4 className="font-semibold mb-2 text-base sm:text-lg">
              3D Design
            </h4>
            <p className="text-gray-400 text-sm">
              Basic skills in 3D modeling with Blender. Passionate about
              combining creativity with technology.
            </p>
          </div>

          <div className="text-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Github className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
            </div>
            <h4 className="font-semibold mb-2 text-base sm:text-lg">
              Open Source
            </h4>
            <p className="text-gray-400 text-sm">
              Contributing to GitHub projects, interests in learning and
              improving code quality.
            </p>
          </div>

          <div className="text-center">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Activity className="w-6 h-6 sm:w-8 sm:h-8 text-blue-400" />
            </div>
            <h4 className="font-semibold mb-2 text-base sm:text-lg">Sports</h4>
            <p className="text-gray-400 text-sm">
              Enjoy playing volleyball, soccer and gym to maintain health, boost
              teamwork, and reduce stress during intense study periods.
            </p>
          </div>
        </div>
      </div>

      {/* Banner */}
      <div className="mt-16 sm:mt-20">
        <AchievementBanner />
      </div>
    </div>
  );
}
