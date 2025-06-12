import { useActiveSection } from "../hooks/useActiveSection";

export default function IndexPage() {
  const sections = [
    "home",
    "about",
    "skills",
    "projects",
    "experience",
    "contact",
  ];
  const activeSection = useActiveSection(sections);
  return (
    <div className="bg-blue-600">
      <p>sasd</p>
    </div>
  );
}
