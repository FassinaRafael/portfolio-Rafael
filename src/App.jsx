import { motion } from "framer-motion";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProjectCard from "./components/ProjectCard";
import TechBadge from "./components/TechBadge";
import About from "./components/About";
import Footer from "./components/Footer"; // Importando o Footer
import { projects } from "./data/projects";

export default function Portfolio() {
  return (
    <div className="min-h-screen text-neutral-200 p-8 font-sans selection:bg-blue-500/30">
      <div className="max-w-6xl mx-auto space-y-24">
        {/* Componentes Estruturais de Topo */}
        <div className="space-y-8">
          <Header />
          <Hero />
        </div>

        {/* Seção de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} {...project} index={index} />
          ))}

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="md:col-span-1 p-6 rounded-3xl border border-neutral-800 bg-neutral-900/30 backdrop-blur-sm"
          >
            <h3 className="text-xl font-bold text-white mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {["React", "Node.js", "Tailwind", "SQL"].map((tech) => (
                <TechBadge key={tech} name={tech} />
              ))}
            </div>
          </motion.div>
        </div>

        {/* Seção Sobre Mim */}
        <About />

        {/* Rodapé Final */}
        <Footer />
      </div>
    </div>
  );
}
