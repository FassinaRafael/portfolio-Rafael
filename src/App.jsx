import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Layout,
  Code2,
  Database,
} from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-200 p-8 font-sans">
      <div className="max-w-6xl mx-auto space-y-8">
        {/* HEADER */}
        <header className="flex justify-between items-center mb-12">
          <h1 className="text-2xl font-bold text-blue-400">Rafael.dev</h1>
          <div className="flex gap-4">
            <SocialLink href="#" icon={<Github size={20} />} />
            <SocialLink href="#" icon={<Linkedin size={20} />} />
            <SocialLink href="#" icon={<Mail size={20} />} />
          </div>
        </header>

        {/* HERO */}
        <section className="mb-16">
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Full Stack Developer <br />
            <span className="text-neutral-500">focado em produtos reais.</span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-2xl">
            Transformo ideias complexas em aplicações web performáticas.
          </p>
        </section>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* CARD NANOLINK */}
          <div className="md:col-span-2 p-6 rounded-3xl border border-blue-500/30 bg-blue-900/10">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-xl font-bold text-white">NanoLink SaaS</h3>
              <a
                href="https://nano-link-iota.vercel.app"
                target="_blank"
                className="p-2 bg-neutral-800 rounded-full"
              >
                <ExternalLink size={18} />
              </a>
            </div>
            <p className="text-neutral-400 mb-4">
              Plataforma completa de encurtamento de links.
            </p>

            {/* Tags */}
            <div className="flex gap-2 mb-4">
              {["React", "Supabase", "Node.js"].map((tag) => (
                <span
                  key={tag}
                  className="text-xs px-2 py-1 rounded bg-blue-900/50 text-blue-200 border border-blue-800"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Placeholder da Imagem */}
            <div className="h-64 bg-neutral-900 rounded border border-neutral-800 flex items-center justify-center text-neutral-600">
              (Sua imagem vai aqui)
            </div>
          </div>

          {/* CARD STACK */}
          <div className="md:col-span-1 p-6 rounded-3xl border border-neutral-800 bg-neutral-900/30">
            <h3 className="text-xl font-bold text-white mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              <TechBadge name="React" />
              <TechBadge name="Node.js" />
              <TechBadge name="Tailwind" />
              <TechBadge name="SQL" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function TechBadge({ name }) {
  return (
    <span className="px-3 py-1 bg-neutral-800 rounded-lg text-sm text-neutral-300 border border-neutral-700">
      {name}
    </span>
  );
}

function SocialLink({ href, icon }) {
  return (
    <a
      href={href}
      className="text-neutral-400 hover:text-white p-2 bg-neutral-900 rounded-full"
    >
      {icon}
    </a>
  );
}
