import Navbar from "./Navbar";

type NavbarProps = {
  activeSection: string;
  setActiveSection: (section: string) => void;
};

export default function Header({
  activeSection,
  setActiveSection,
}: NavbarProps) {
  return (
    <>
      <div className="fixed inset-0 opacity-10 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.3) 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <Navbar
        activeSection={activeSection}
        setActiveSection={setActiveSection}
      />
    </>
  );
}
