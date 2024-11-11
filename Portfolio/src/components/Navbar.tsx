import { Home, Briefcase, Code2, Mail } from "lucide-react";

const navItems = [
  { icon: Home, label: "Home", href: "#home" },
  { icon: Briefcase, label: "Projects", href: "#projects" },
  { icon: Code2, label: "Skills", href: "#skills" },
  { icon: Mail, label: "Contact", href: "#contact" },
];

export function Navbar() {
  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-50">
      <div className="flex flex-col gap-8 bg-white/80 backdrop-blur-sm p-4 rounded-full shadow-lg">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="group relative flex items-center"
          >
            <span className="absolute right-full mr-4 rounded-md bg-white px-2 py-1 text-sm font-medium text-gray-900 opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
              {item.label}
            </span>
            <item.icon className="h-6 w-6 text-gray-600 transition-colors hover:text-gray-900" />
          </a>
        ))}
      </div>
    </nav>
  );
}
