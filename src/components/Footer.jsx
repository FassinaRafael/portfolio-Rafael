import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";
import SocialLink from "./SocialLink";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-neutral-800 mt-20">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="flex flex-col md:flex-row justify-between items-center gap-6"
      >
        {/* Lado Esquerdo: Copyright */}
        <div className="text-center md:text-left">
          <p className="text-neutral-500 text-sm">
            © {new Date().getFullYear()} Rafael.dev. <br />
            Construído com React, Tailwind e Framer Motion.
          </p>
        </div>

        {/* Lado Direito: Chamada para Ação + Links */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <a
            href="mailto:seuemail@exemplo.com"
            className="text-neutral-200 hover:text-blue-400 transition-colors font-medium flex items-center gap-2"
          >
            <Mail size={18} />
            Vamos trabalhar juntos?
          </a>

          <div className="flex gap-4">
            <SocialLink href="#" icon={<Github size={18} />} />
            <SocialLink href="#" icon={<Linkedin size={18} />} />
          </div>
        </div>
      </motion.div>
    </footer>
  );
}
