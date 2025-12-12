import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import SocialLink from "./SocialLink";

export default function Header() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex justify-between items-center mb-12"
    >
      <h1 className="text-2xl font-bold text-blue-400">Rafael.dev</h1>
      <div className="flex gap-4">
        <SocialLink href="#" icon={<Github size={20} />} />
        <SocialLink href="#" icon={<Linkedin size={20} />} />
        <SocialLink href="#" icon={<Mail size={20} />} />
      </div>
    </motion.header>
  );
}
