import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import TechBadge from "./TechBadge";

export default function ProjectCard({
  title,
  description,
  tags,
  link,
  className = "",
  index, // Nova prop para controlar o tempo de animação
}) {
  return (
    <motion.div
      // Animação de Entrada
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }} // Delay progressivo + offset inicial
      // Animação de Interação (Hover)
      whileHover={{ y: -10, scale: 1.02 }}
      className={`p-6 rounded-3xl border border-blue-500/30 bg-blue-900/10 ${className}`}
    >
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-bold text-white">{title}</h3>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-neutral-800 rounded-full hover:bg-neutral-700 transition-colors"
          >
            <ExternalLink size={18} />
          </a>
        )}
      </div>

      <p className="text-neutral-400 mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <TechBadge key={tag} name={tag} />
        ))}
      </div>

      <div className="h-64 bg-neutral-900 rounded border border-neutral-800 flex items-center justify-center text-neutral-600">
        (Imagem do Projeto)
      </div>
    </motion.div>
  );
}
