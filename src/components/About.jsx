import { motion } from "framer-motion";
import { Code2, Rocket, Users } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: <Code2 className="text-blue-400" />,
      title: "Arquitetura Resiliente",
      text: "Código limpo é o básico. Foco em criar sistemas desacoplados e preparados para crescer sem quebrar.",
    },
    {
      icon: <Rocket className="text-blue-400" />,
      title: "Escalabilidade & Segurança",
      text: "Aplicações otimizadas não só para carregar rápido, mas para resistir a picos de tráfego e ataques (Zero Trust).",
    },
    {
      icon: <Users className="text-blue-400" />,
      title: "DevSecOps Mindset",
      text: "Integro desenvolvimento e operações para entregar valor contínuo, reduzindo o atrito entre código e deploy.",
    },
  ];

  return (
    <section className="py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Coluna de Texto */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-6">
            De interfaces pixel-perfect a clusters blindados
          </h2>
          <p className="text-neutral-400 text-lg leading-relaxed mb-6">
            Minha jornada começou no Frontend, criando experiências visuais
            ricas. Mas logo percebi que uma interface bonita não sobrevive sem
            uma fundação sólida.
          </p>
          <p className="text-neutral-400 text-lg leading-relaxed">
            Hoje, atuo como um engenheiro "Full Cycle": tenho a capacidade de
            desenhar a UI, codar a API e provisionar a infraestrutura onde tudo
            isso roda. Acredito que o verdadeiro código limpo é aquele que é
            seguro, escalável e fácil de operar.
          </p>
        </motion.div>

        {/* Coluna de Diferenciais (Cards menores) */}
        <div className="space-y-4">
          {features.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-4 rounded-2xl bg-neutral-900/50 border border-neutral-800 flex items-start gap-4 hover:border-blue-500/30 transition-colors"
            >
              <div className="p-2 bg-blue-500/10 rounded-lg">{item.icon}</div>
              <div>
                <h3 className="font-bold text-white mb-1">{item.title}</h3>
                <p className="text-sm text-neutral-400">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
