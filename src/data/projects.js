export const projects = [
  {
    id: 1,
    title: "DocuFlow Compliance",
    description:
      "Plataforma de Engenharia de Dados com IA. Pipeline de ingestão de PDFs orquestrado por Temporal.io, extração cognitiva com Google Gemini e arquitetura de microsserviços em Docker.",
    tags: ["Temporal.io", "Python FastAPI", "Docker", "Next.js", "Gemini AI"],
    link: "https://github.com/FassinaRafael/docuflow-compliance", // Link do seu repo
    className: "md:col-span-2", // Destaque grande
    imgUrl: "/docuflow.png", // Veja instrução abaixo sobre a imagem
  },
  {
    id: 2,
    title: "Finance Dashboard",
    description:
      "Gestão financeira pessoal com gráficos interativos e controle de despesas.",
    tags: ["React", "Tailwind", "Recharts"],
    link: "https://financial-dashboard-blue-three.vercel.app/",
    className: "md:col-span-1",
    imgUrl: "/finance.png",
  },
  {
    id: 3,
    title: "NanoLink SaaS",
    description: "Plataforma completa de encurtamento de links.",
    tags: ["React", "Supabase", "Node.js"],
    link: "https://nano-link-iota.vercel.app",
    className: "md:col-span-1",
    imgUrl: "/nanolink.png",
  },
  {
    id: 4,
    title: "TrustLayer Platform",
    description:
      "Plataforma de Governança de APIs Zero-Trust. Implementa autenticação, rate-limiting e segurança centralizada para microsserviços via Kubernetes.",
    tags: ["Kubernetes", "Kong", "OPA", "Helm"],
    link: "https://github.com/FassinaRafael/trustlayer",
    className: "md:col-span-2",
    imgUrl: "/trustlayer.png",
  },
];
