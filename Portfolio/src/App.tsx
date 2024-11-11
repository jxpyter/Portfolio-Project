import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <header
        id="home"
        className="h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white z-0" />
        <div className="container mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2 animate-fade-in">
            <h1 className="text-6xl md:text-8xl font-bold text-gray-900 mb-6">
              developer_
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl leading-relaxed">
              Crafting digital experiences with clean code and minimalist
              design. Full-stack developer specializing in modern web
              technologies.
            </p>
          </div>
          <div className="md:w-1/2 flex justify-center animate-float">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-purple-500 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=1000"
                alt="Profile"
                className="w-64 h-64 object-cover rounded-full border-4 border-white shadow-xl"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Selected Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 duration-300"
              >
                <div className="aspect-video mb-6 overflow-hidden rounded-xl bg-gray-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex gap-2 flex-wrap">
                  {project.tech.map((t, i) => (
                    <span
                      key={i}
                      className="text-sm px-3 py-1 bg-gray-100 rounded-full text-gray-600"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  className="absolute top-4 right-4 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink className="w-4 h-4 text-gray-600" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Technologies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-2xl hover:shadow-md transition-all hover:-translate-y-1 duration-300"
              >
                <h3 className="font-semibold mb-4">{skill.category}</h3>
                <ul className="space-y-2 text-gray-600">
                  {skill.items.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <footer id="contact" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center">
            <a
              href="mailto:jxpyter@hotmail.com"
              className="flex items-center gap-2 hover:text-gray-300 transition-colors"
            >
              <Mail className="w-5 h-5" />
              jxpyter@hotmail.com
            </a>
            <a
              href="https://github.com/jxpyter"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gray-300 transition-colors"
            >
              <Github className="w-5 h-5" />
              GitHub
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-gray-300 transition-colors"
            >
              <Linkedin className="w-5 h-5" />
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A modern e-commerce platform with real-time inventory and seamless checkout experience.",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426",
    tech: ["React", "Node.js", "MongoDB"],
    link: "#",
  },
  {
    title: "AI Dashboard",
    description:
      "Analytics dashboard with AI-powered insights and data visualization.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2340",
    tech: ["TypeScript", "Python", "TensorFlow"],
    link: "#",
  },
  {
    title: "Social Platform",
    description:
      "Real-time social platform with instant messaging and content sharing.",
    image:
      "https://images.unsplash.com/photo-1432888622747-4eb9a8efeb07?auto=format&fit=crop&q=80&w=2340",
    tech: ["React", "Firebase", "WebSocket"],
    link: "#",
  },
  {
    title: "Design System",
    description:
      "Component library and design system for enterprise applications.",
    image:
      "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?auto=format&fit=crop&q=80&w=2340",
    tech: ["React", "Storybook", "Figma"],
    link: "#",
  },
];

const skills = [
  {
    category: "Frontend",
    items: ["React", "TypeScript", "Tailwind CSS", "Next.js"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Python", "PostgreSQL", "Redis"],
  },
  {
    category: "DevOps",
    items: ["Docker", "AWS", "CI/CD", "Kubernetes"],
  },
  {
    category: "Tools",
    items: ["Git", "VS Code", "Figma", "Postman"],
  },
];

export default App;
