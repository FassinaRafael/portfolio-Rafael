import { motion } from "framer-motion";
import { Code2, Rocket, Users } from "lucide-react";

export default function About() {
  const features = [
    {
      icon: <Code2 className="text-blue-400" />,
      title: "Clean Code",
      text: "Manutenibilidade e escalabilidade são prioridades, não diferenciais.",
    },
    {
      icon: <Rocket className="text-blue-400" />,
      title: "Performance",
      text: "Aplicações otimizadas para carregar rápido e reter usuários.",
    },
    {
      icon: <Users className="text-blue-400" />,
      title: "Colaboração",
      text: "Comunicação clara e trabalho em equipe para atingir objetivos.",
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
            Mais que apenas código
          </h2>
          <p className="text-neutral-400 text-lg leading-relaxed mb-6">
            Minha jornada como desenvolvedor começou com a curiosidade de
            entender como as coisas funcionam. Hoje, uso essa curiosidade para
            criar soluções que resolvem problemas reais.
          </p>
          <p className="text-neutral-400 text-lg leading-relaxed">
            Acredito que um bom software é aquele que passa despercebido de tão
            natural que é o seu uso. Estou sempre em busca de novas tecnologias
            e metodologias para elevar o nível das minhas entregas.
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
