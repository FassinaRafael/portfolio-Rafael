import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import TechBadge from "./TechBadge";

export default function ProjectCard({
  title,
  description,
  tags,
  link,
  className = "",
  index,
  imgUrl,
}) {
  return (
    <motion.div
      // Animação de Entrada
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 + 0.5 }}
      // Animação de Interação
      whileHover={{ y: -10, scale: 1.02 }}
      className={`p-6 rounded-3xl border border-blue-500/30 bg-blue-900/10 ${className} flex flex-col`}
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

      <p className="text-neutral-400 mb-4 flex-grow">{description}</p>

      <div className="flex flex-wrap gap-2 mb-6">
        {tags.map((tag) => (
          <TechBadge key={tag} name={tag} />
        ))}
      </div>

      {/* Container da Imagem */}
      <div className="rounded-xl overflow-hidden border border-neutral-800 bg-neutral-950 h-64 flex items-center justify-center">
        {imgUrl ? (
          <img
            src={imgUrl}
            alt={`Imagem do projeto ${title}`}
            className="w-full h-full max-h-64 object-contain hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="text-neutral-600 font-medium">
            (Imagem do Projeto)
          </div>
        )}
      </div>
    </motion.div>
  );
}
