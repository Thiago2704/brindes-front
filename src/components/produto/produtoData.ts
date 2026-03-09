// ─── Tipos ───────────────────────────────────────────────────────────────────

export type ProdutoAvaliacao = {
  id: number
  nome: string
  empresa: string
  estrelas: number
  texto: string
  data: string
}

export type ProdutoDetalhe = {
  id: number
  nome: string
  categoria: string
  preco: number
  minimoUnidades: number
  estrelas: number
  totalAvaliacoes: number
  descricao: string
  cores: string[]
  caracteristicas: string[]
  imagens: string[]
  avaliacoes: ProdutoAvaliacao[]
}

// ─── Dados estáticos ─────────────────────────────────────────────────────────

const AVALIACOES_PADRAO: ProdutoAvaliacao[] = [
  {
    id: 1,
    nome: 'João Silva',
    empresa: 'Tech Solutions',
    estrelas: 5,
    texto: 'Excelente qualidade! Nossos clientes adoraram os brindes. Recomendo!',
    data: '15 de fevereiro, 2026',
  },
  {
    id: 2,
    nome: 'Maria Santos',
    empresa: 'Marketing Digital',
    estrelas: 5,
    texto: 'Atendimento impecável e produtos de primeira qualidade. Já fizemos vários pedidos.',
    data: '10 de fevereiro, 2026',
  },
  {
    id: 3,
    nome: 'Pedro Costa',
    empresa: 'Eventos & Cia',
    estrelas: 4,
    texto: 'Ótimo custo-benefício. Entregas sempre no prazo.',
    data: '5 de fevereiro, 2026',
  },
]

export const PRODUTOS_DETALHE: ProdutoDetalhe[] = [
  {
    id: 1,
    nome: 'Caneca Personalizado',
    categoria: 'Canecas',
    preco: 25.90,
    minimoUnidades: 50,
    estrelas: 4.5,
    totalAvaliacoes: 98,
    descricao: 'Caneca de cerâmica resistente com impressão de alta qualidade. Suporta lava-louças e micro-ondas. Ideal para brindes corporativos e presentes personalizados.',
    cores: ['Branco', 'Preto', 'Azul'],
    caracteristicas: [
      'Cerâmica resistente',
      'Capacidade 325ml',
      'Impressão 360°',
      'Apto para micro-ondas',
      'Apto para lava-louças',
      'Personalização full color',
    ],
    imagens: [
      'https://picsum.photos/seed/caneca1/600/500',
      'https://picsum.photos/seed/caneca2/200/200',
      'https://picsum.photos/seed/caneca3/200/200',
      'https://picsum.photos/seed/caneca4/200/200',
      'https://picsum.photos/seed/caneca5/200/200',
    ],
    avaliacoes: AVALIACOES_PADRAO,
  },
  {
    id: 2,
    nome: 'Ecobag Personalizada',
    categoria: 'Brindes',
    preco: 18.50,
    minimoUnidades: 100,
    estrelas: 4,
    totalAvaliacoes: 74,
    descricao: 'Sacola ecológica em algodão cru com alças reforçadas. Sustentável e durável, ideal para feiras, eventos e brindes corporativos.',
    cores: ['Natural', 'Preto', 'Verde'],
    caracteristicas: [
      'Algodão cru 180g/m²',
      'Alças reforçadas',
      'Capacidade 10kg',
      'Impressão serigrafia',
      'Material sustentável',
      'Personalização total',
    ],
    imagens: [
      'https://picsum.photos/seed/ecobag1/600/500',
      'https://picsum.photos/seed/ecobag2/200/200',
      'https://picsum.photos/seed/ecobag3/200/200',
      'https://picsum.photos/seed/ecobag4/200/200',
      'https://picsum.photos/seed/ecobag5/200/200',
    ],
    avaliacoes: AVALIACOES_PADRAO,
  },
  {
    id: 3,
    nome: 'Kit Escritório',
    categoria: 'Escritório',
    preco: 32.00,
    minimoUnidades: 30,
    estrelas: 4.5,
    totalAvaliacoes: 56,
    descricao: 'Kit completo para escritório com caneta, bloco e porta-caneta personalizados. Apresentação elegante em caixa personalizada.',
    cores: ['Preto', 'Azul', 'Cinza'],
    caracteristicas: [
      'Caneta esferográfica metal',
      'Bloco 50 folhas',
      'Porta-caneta acrílico',
      'Caixa personalizada',
      'Gravação laser',
      'Personalização completa',
    ],
    imagens: [
      'https://picsum.photos/seed/kitesc1/600/500',
      'https://picsum.photos/seed/kitesc2/200/200',
      'https://picsum.photos/seed/kitesc3/200/200',
      'https://picsum.photos/seed/kitesc4/200/200',
      'https://picsum.photos/seed/kitesc5/200/200',
    ],
    avaliacoes: AVALIACOES_PADRAO,
  },
  {
    id: 4,
    nome: 'Camiseta Personalizada',
    categoria: 'Vestuário',
    preco: 44.90,
    minimoUnidades: 80,
    estrelas: 4,
    totalAvaliacoes: 112,
    descricao: 'Camiseta 100% algodão fio 30 com silk screen de alta qualidade. Disponível em vários tamanhos e cores. Ideal para eventos e uniformes.',
    cores: ['Branco', 'Preto', 'Cinza', 'Azul Marinho'],
    caracteristicas: [
      'Algodão 100% fio 30',
      'Silk screen frente e costas',
      'Tamanhos P ao XGG',
      'Gola reforçada',
      'Corte regular fit',
      'Personalização full color',
    ],
    imagens: [
      'https://picsum.photos/seed/camis1/600/500',
      'https://picsum.photos/seed/camis2/200/200',
      'https://picsum.photos/seed/camis3/200/200',
      'https://picsum.photos/seed/camis4/200/200',
      'https://picsum.photos/seed/camis5/200/200',
    ],
    avaliacoes: AVALIACOES_PADRAO,
  },
  {
    id: 5,
    nome: 'Garrafa Térmica',
    categoria: 'Brindes',
    preco: 42.00,
    minimoUnidades: 40,
    estrelas: 5,
    totalAvaliacoes: 89,
    descricao: 'Garrafa térmica inox de alto padrão com isolamento a vácuo. Mantém bebidas quentes por 12h e frias por 24h. Perfeita para brindes premium.',
    cores: ['Prata', 'Preto', 'Azul'],
    caracteristicas: [
      'Aço inox dupla parede',
      'Isolamento a vácuo',
      'Capacidade 500ml',
      'Mantém temperatura 12/24h',
      'Tampa rosqueável',
      'Gravação laser inclusa',
    ],
    imagens: [
      'https://picsum.photos/seed/garrafa1/600/500',
      'https://picsum.photos/seed/garrafa2/200/200',
      'https://picsum.photos/seed/garrafa3/200/200',
      'https://picsum.photos/seed/garrafa4/200/200',
      'https://picsum.photos/seed/garrafa5/200/200',
    ],
    avaliacoes: AVALIACOES_PADRAO,
  },
  {
    id: 6,
    nome: 'Boné Personalizado',
    categoria: 'Vestuário',
    preco: 28.90,
    minimoUnidades: 60,
    estrelas: 4,
    totalAvaliacoes: 67,
    descricao: 'Boné aba curva em tecido de nylon com bordado de alta definição. Ajuste em velcro. Ideal para uniformes, eventos e brindes.',
    cores: ['Preto', 'Branco', 'Azul Marinho', 'Vermelho'],
    caracteristicas: [
      'Tecido nylon resistente',
      'Bordado computadorizado',
      'Aba estruturada curva',
      'Ajuste em velcro',
      'Forro interno respirável',
      'Personalização bordado',
    ],
    imagens: [
      'https://picsum.photos/seed/bone1/600/500',
      'https://picsum.photos/seed/bone2/200/200',
      'https://picsum.photos/seed/bone3/200/200',
      'https://picsum.photos/seed/bone4/200/200',
      'https://picsum.photos/seed/bone5/200/200',
    ],
    avaliacoes: AVALIACOES_PADRAO,
  },
  {
    id: 7,
    nome: 'Kit Corporativo Premium',
    categoria: 'Kits',
    preco: 89.90,
    minimoUnidades: 20,
    estrelas: 4.5,
    totalAvaliacoes: 127,
    descricao: 'Kit executivo de luxo com múltiplos itens premium. Apresentação impecável em estojo personalizado. Ideal para clientes VIP.',
    cores: ['Preto', 'Prata', 'Dourado'],
    caracteristicas: [
      'Caneta metal executiva',
      'Caderno premium capa couro',
      'Pen drive 32GB personalizado',
      'Porta cartões metálico',
      'Estojo rígido personalizado',
      'Gravação laser inclusa',
    ],
    imagens: [
      'https://picsum.photos/seed/kitcorp1/600/500',
      'https://picsum.photos/seed/kitcorp2/200/200',
      'https://picsum.photos/seed/kitcorp3/200/200',
      'https://picsum.photos/seed/kitcorp4/200/200',
      'https://picsum.photos/seed/kitcorp5/200/200',
    ],
    avaliacoes: AVALIACOES_PADRAO,
  },
  {
    id: 8,
    nome: 'Material Promocional',
    categoria: 'Brindes',
    preco: 15.90,
    minimoUnidades: 100,
    estrelas: 4,
    totalAvaliacoes: 43,
    descricao: 'Conjunto de materiais promocionais para divulgação da sua marca. Canetas, panfletos e adesivos personalizados com a identidade visual da empresa.',
    cores: ['Personalizado'],
    caracteristicas: [
      'Canetas esferográficas',
      'Panfletos couchê 150g',
      'Adesivos vinil',
      'Impressão full color',
      'Arte inclusa',
      'Entrega expressa disponível',
    ],
    imagens: [
      'https://picsum.photos/seed/matprom1/600/500',
      'https://picsum.photos/seed/matprom2/200/200',
      'https://picsum.photos/seed/matprom3/200/200',
      'https://picsum.photos/seed/matprom4/200/200',
      'https://picsum.photos/seed/matprom5/200/200',
    ],
    avaliacoes: AVALIACOES_PADRAO,
  },
]
