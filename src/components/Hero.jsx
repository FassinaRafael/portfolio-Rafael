import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="mb-16">
      <motion.h2
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }} // Delay para aparecer depois do Header
        className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6"
      >
        Full Stack Developer <br />
        <span className="text-neutral-500">focado em produtos reais.</span>
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }} // Delay maior para aparecer por último
        className="text-xl text-neutral-400 max-w-2xl"
      >
        Transformo ideias complexas em aplicações web performáticas.
      </motion.p>
    </section>
  );
}
