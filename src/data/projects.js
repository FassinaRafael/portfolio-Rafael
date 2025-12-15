export const projects = [
  {
    id: 1,
    title: "NanoLink SaaS",
    description: "Plataforma completa de encurtamento de links.",
    tags: ["React", "Supabase", "Node.js"],
    link: "https://nano-link-iota.vercel.app",
    className: "md:col-span-2", // Controle de tamanho no grid
    imgUrl: "/nanolink.png",
  },
  {
    id: 2,
    title: "Finance Dashboard",
    description:
      "Gestão financeira pessoal com gráficos interativos e controle de despesas.",
    tags: ["React", "Tailwind", "Recharts"],
    link: "https://financial-dashboard-blue-three.vercel.app/",
    className: "md:col-span-1", // Ocupa 1 coluna (card menor)
    imgUrl: "/finance.png",
  },
  {
    id: 3,
    title: "TrustLayer Platform",
    description:
      "Plataforma de Governança de APIs Zero-Trust. Implementa autenticação, rate-limiting e segurança centralizada para microsserviços via Kubernetes.",
    tags: ["Kubernetes", "Kong", "OPA", "Helm"],
    link: "https://github.com/FassinaRafael/trustlayer",
    className: "md:col-span-3",
    imgUrl: "/trustlayer.png",
  },
];
