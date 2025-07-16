import { useEffect, useState } from "react";
import {
  Cloud,
  Code,
  Database,
  Facebook,
  Github,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import LinkBlue from "../../ui/link/LinkBlue";
import YellowLink from "../../ui/link/YellowLink";

import avatarUrl from "../../../../assets/avatar.jpg";

export default function Hero() {
  const fullText = "Back-End Developer";
  const [animatedText, setAnimatedText] = useState("");

  const information = {
    name: "Huỳnh Minh Trí",
    position: "Back-End Developer",
    location: "District Go Vap, Ho Chi Minh City, Vietnam",
    phone: "0982294937",
    email: "huynhminhtri1109@gmail.com",
    github: "https://github.com/HuynhTri-dev",
    facebook: "https://www.facebook.com/mien.thao.16/",
    avatarUrl: avatarUrl,
  };

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setAnimatedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
      }
    }, 100);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="pt-30 max-w-6xl mx-auto px-6 py-8">
      {/* Hero Section */}
      <div className="mb-16 text-center relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-yellow-400/20 blur-3xl"></div>
        <div className="relative">
          {/* Profile Picture Frame */}
          <div className="mb-4 flex justify-center">
            <div className="relative">
              {/* Animated gradient border */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-blue-600 to-yellow-400 rounded-full p-1 animate-spin-slow">
                <div className="w-40 h-40 bg-gray-900 rounded-full"></div>
              </div>

              {/* Main profile frame */}
              <div className="relative bg-gradient-to-r from-blue-400 via-blue-600 to-yellow-400 rounded-full p-1">
                <div className="w-40 h-40 bg-gradient-to-br from-gray-800 to-gray-900 rounded-full flex items-center justify-center border-2 border-gray-700">
                  {/* Profile image placeholder with tech pattern */}
                  <div className="w-36 h-36 bg-gradient-to-br from-blue-900/50 to-gray-800/50 rounded-full flex items-center justify-center relative overflow-hidden">
                    {/* Tech pattern overlay */}
                    <div className="absolute inset-0 opacity-30">
                      <div
                        className="absolute inset-0"
                        style={{
                          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.4) 1px, transparent 0)`,
                          backgroundSize: "8px 8px",
                        }}
                      ></div>
                    </div>

                    {/* The Avatar */}
                    <img
                      src={information.avatarUrl}
                      alt="Huỳnh Minh Trí"
                      className="w-36 h-36 rounded-full object-cover relative z-10"
                    />

                    {/* DEV text overlay */}
                    <div className="absolute inset-0 flex items-end justify-center pb-3 z-20">
                      <div className="bg-black/60 backdrop-blur-sm px-3 py-1 rounded-full border border-blue-400/30">
                        <div className="text-xs text-blue-300 font-mono font-semibold">
                          &lt;/&gt; DEV
                        </div>
                      </div>
                    </div>

                    {/* Glowing effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-600/20 to-transparent rounded-full"></div>
                  </div>
                </div>
              </div>

              {/* Status indicator */}
              <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-gray-900 flex items-center justify-center">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              </div>

              {/* Floating tech icons */}
              <div className="absolute -top-2 -left-2 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center animate-bounce">
                <Code className="w-4 h-4 text-white" />
              </div>
              <div
                className="absolute -top-2 -right-2 w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center animate-bounce"
                style={{ animationDelay: "0.5s" }}
              >
                <Database className="w-4 h-4 text-white" />
              </div>
              <div
                className="absolute -bottom-2 -left-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center animate-bounce"
                style={{ animationDelay: "1s" }}
              >
                <Cloud className="w-4 h-4 text-white" />
              </div>
            </div>
          </div>

          <h1 className="animate-fade-in text-3xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-white to-yellow-400 bg-clip-text text-transparent">
            {information.name}
          </h1>

          <div className="text-xl md:text-2xl text-gray-300 mb-6 font-mono">
            <span className="text-blue-400">&gt;</span> {animatedText}
            <span className="animate-pulse">|</span>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-gray-300 mb-8">
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-blue-400" />
              <span>{information.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-5 h-5 text-blue-400" />
              <span>{information.phone}</span>
            </div>
            <div className="flex items-center gap-2">
              <Mail className="w-5 h-5 text-blue-400" />
              <span>{information.email}</span>
            </div>
          </div>

          <div className="flex justify-center flex-wrap gap-4">
            <LinkBlue
              href={information.github}
              icon={<Github className="w-5 h-5" />}
            >
              GitHub Profile
            </LinkBlue>

            <YellowLink
              href={information.facebook}
              icon={<Facebook className="w-5 h-5 text-yellow-400" />}
            >
              Facebook
            </YellowLink>
          </div>
        </div>
      </div>
    </div>
  );
}
