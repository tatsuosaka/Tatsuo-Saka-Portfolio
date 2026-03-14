import { Project } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "neon-dreams",
    title: "Neon Dreams",
    category: "Vídeo",
    description: "Uma experiência cinematográfica cyberpunk.",
    fullDescription: "Um projeto de edição de videoclipe de alta octanagem focado em gradação de cores e cortes rítmicos. O objetivo era sincronizar a energia visual com a faixa synth-wave, utilizando datamoshing e efeitos de brilho neon para criar uma atmosfera futurista.",
    client: "SynthWave Records",
    year: "2024",
    thumbnail: "https://picsum.photos/id/132/800/600",
    media: [
      { url: "https://picsum.photos/id/136/800/600", type: "image", orientation: "horizontal" },
      { url: "https://picsum.photos/id/142/400/800", type: "image", orientation: "vertical" }
    ],
    tools: ["Premiere Pro", "After Effects", "DaVinci Resolve"]
  },
  {
    id: "horizon-tech",
    title: "Horizon Tech",
    category: "Design",
    description: "Comercial de lançamento de produto.",
    fullDescription: "Um vídeo de lançamento de produto elegante e inspirado na Apple para um novo gadget tecnológico. O foco estava em transições suaves, movimentos de câmera 3D no After Effects e tipografia limpa para destacar os recursos do produto sem distrações.",
    client: "Horizon Corp",
    year: "2023",
    thumbnail: "https://picsum.photos/id/3/800/600",
    media: [
      { url: "https://picsum.photos/id/180/800/600", type: "image", orientation: "horizontal" },
      { url: "https://picsum.photos/id/1/800/600", type: "image", orientation: "horizontal" }
    ],
    tools: ["After Effects", "Cinema 4D", "Illustrator"]
  },
  {
    id: "urban-pulse",
    title: "Urban Pulse",
    category: "Vídeo",
    description: "Documentário estilo cultura de rua.",
    fullDescription: "Um curta documental capturando a essência da moda de rua de Tóquio. O estilo de edição imita a natureza caótica, porém organizada da cidade, usando cortes rápidos intercalados com batidas emocionais pesadas em câmera lenta.",
    client: "Vogue Japan (Mock)",
    year: "2023",
    thumbnail: "https://picsum.photos/id/177/800/600",
    media: [
      { url: "https://picsum.photos/id/204/800/600", type: "image", orientation: "horizontal" },
      { url: "https://picsum.photos/id/250/400/800", type: "image", orientation: "vertical" }
    ],
    tools: ["Premiere Pro", "Lightroom"]
  },
  {
    id: "web-portfolio",
    title: "Creative Folio",
    category: "Site",
    description: "Website interativo 3D.",
    fullDescription: "Embora meu foco seja vídeo, construo sites de alta performance. Este projeto demonstra integração WebGL para mostrar ativos criativos em um espaço 3D.",
    client: "Pessoal",
    year: "2024",
    thumbnail: "https://picsum.photos/id/60/800/600",
    media: [
      { url: "https://picsum.photos/id/119/800/600", type: "image", orientation: "horizontal" }
    ],
    tools: ["React", "Three.js", "Tailwind"]
  },
  {
    id: "fashion-edit",
    title: "Summer Vibes",
    category: "Vídeo",
    description: "Edição dinâmica para marca de roupas.",
    fullDescription: "Edição rápida e vibrante para campanha de verão, focada em cortes invisíveis e sound design imersivo.",
    client: "Local Brand",
    year: "2024",
    thumbnail: "https://picsum.photos/id/338/400/800",
    thumbnailOrientation: "vertical",
    media: [
      { url: "https://picsum.photos/id/339/400/800", type: "image", orientation: "vertical" }
    ],
    tools: ["Premiere Pro", "After Effects"]
  },
  {
    id: "corp-design",
    title: "Identity System",
    category: "Design",
    description: "Identidade visual corporativa.",
    fullDescription: "Rebranding completo incluindo logotipo, paleta de cores e diretrizes de marca para uma startup de fintech.",
    client: "FinStart",
    year: "2023",
    thumbnail: "https://picsum.photos/id/445/800/600",
    media: [
      { url: "https://picsum.photos/id/443/800/600", type: "image", orientation: "horizontal" }
    ],
    tools: ["Figma", "Illustrator"]
  }
];