import CuaHangLogo from "../assets/ProjectLogo/CuaHangQuanAo_Logo.png";
import PersonalHealthLogo from "../assets/ProjectLogo/PersonalHealthLogo.jpg";
import RentalManageLogo from "../assets/ProjectLogo/RentalManageLogo.png";
import StartupInvestmentLogo from "../assets/ProjectLogo/StartupInvestmentLogo.png";

export const projects = [
  {
    title: "Personal Health Management",
    logoUrl: PersonalHealthLogo,
    period: "13/03/2025 – 01/06/2025",
    type: "Academic Project",
    tech: [
      "React",
      "Node.js",
      "MongoDB",
      "Blender",
      "Cloudflare",
      "Ollama",
      "Tailwind",
    ],
    description:
      "Co-led the development of a web app for tracking personal health metrics, offering AI-driven health analysis and interactive 3D data visualization.",
    highlights: [
      "Developed the entire backend and configured MongoDB Atlas and Cloudflare routing",
      "Built the admin dashboard and user profile interface",
      "Integrated Ollama (LLaMA 3) and optimized input/output processing for workout generation",
      "Implemented health tracking logic and 3D rendering preparation for character visualizations",
    ],
    github: "Private",
    report:
      "https://docs.google.com/document/d/1N_X9Yp9EmkKTj3f8XkGKoent3lBrwHxJ/edit?usp=drive_link&ouid=101122410522057441848&rtpof=true&sd=true",
    demo: "https://drive.google.com/file/d/1yNaTZKqx6QcsDiQ6vRZOaCd3UV9dqvFq/view?usp=drive_link",
  },
  {
    title: "Startup Investment Support Platform",
    logoUrl: StartupInvestmentLogo,
    period: "08/03/2025 – 10/04/2025",
    type: "Academic Project",
    tech: ["C#", "ASP.NET Core MVC", "SQL Server", "SignalR", "Bootstrap"],
    description:
      "Led a 4-member team in designing and building a web-based investment platform connecting startups with investors.",
    highlights: [
      "Designed and implemented the entire frontend UI/UX using Razor and Bootstrap",
      "Analyzed and designed system architecture including database schema and user flow",
      "Built real-time chat and investment status update features using SignalR",
      "Implemented user login and role-based authorization for both startups and investors",
    ],
    github: "https://github.com/HuynhTri-dev/QuanLyStartup.git",
    report:
      "https://drive.google.com/file/d/1BhCjDYKf8oS_8Ewoln1FqVtqh1QPfgLI/view?usp=sharing",
  },
  {
    title: "Rental Management",
    logoUrl: RentalManageLogo,
    period: "16/01/2025 – 02/02/2025",
    type: "Personal Project",
    tech: ["C#", ".NET Framework", "SQL Server"],
    description:
      "Built a desktop application to assist my family in efficiently managing rental properties, including tenant tracking, contract handling.",
    highlights: [
      "Independently designed and developed the entire system",
      "Implemented room tracking, tenant profiles, rental history, and billing features",
      "Designed UI/UX using WinForms and managed data persistence with SQL Server",
    ],
    github:
      "https://topcode.vn/source-code/code-phan-mem-quan-ly-nha-tro-52834.htm",
    demo: "https://www.youtube.com/watch?v=AI_xnSI6IxQ",
  },
  {
    title: "Clothing Store Management",
    logoUrl: CuaHangLogo,
    period: "03/2024 – 05/2024",
    type: "Academic Project",
    tech: ["C#", ".NET WinForms", "SQL Server", "Google Maps API"],
    description:
      "Led a team of 4 to develop a desktop application for managing a clothing store, including product pricing, data storage, and sales statistics tracking.",
    highlights: [
      "Served as the main backend developer of the team",
      "Implemented product, inventory, and sales logic with database interaction",
      "Integrated Google Maps API to identify delivery location",
      "Handled printing and revenue reporting functionality",
    ],
    github: "https://github.com/HuynhTri-dev/DoAnWin_ManageClothStore.git",
    report:
      "https://drive.google.com/file/d/1Ctwnjz4G6uI_ByCnYvROO0Rd67apR2Dl/view?usp=drive_link",
  },
];
