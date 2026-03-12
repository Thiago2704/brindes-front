import type { ReactNode } from 'react'

export type HomeProduto = {
  id: number
  nome: string
  preco: string
  minimo: string
  img: string
}

export type HomeCategoria = {
  label: string
  icon: ReactNode
}

export type HomeBeneficio = {
  label: string
  desc: string
  icon: ReactNode
}

export const HOME_NAV_LINKS = ['Início', 'Produtos', 'Meus Orçamentos', 'Contato']

export const HOME_FOOTER_LINKS = ['Sobre Nós', 'Produtos', 'Catálogo', 'Blog', 'Contato']

export const HOME_FOOTER_CATEGORIAS = [
  'Vestuário',
  'Canecas e Copos',
  'Escritório',
  'Tecnologia',
  'Kits Corporativos',
]

export const HOME_PRODUTOS: HomeProduto[] = [
  { id: 1, nome: 'Caneca Personalizado', preco: 'R$ 25,90', minimo: '50 unidades', img: 'https://picsum.photos/seed/caneca/400/300' },
  { id: 2, nome: 'Ecobag Personalizada', preco: 'R$ 18,50', minimo: '100 unidades', img: 'https://picsum.photos/seed/ecobag/400/300' },
  { id: 3, nome: 'Kit Escritório', preco: 'R$ 32,00', minimo: '30 unidades', img: 'https://picsum.photos/seed/kitesc/400/300' },
  { id: 4, nome: 'Camiseta Personalizada', preco: 'R$ 44,90', minimo: '80 unidades', img: 'https://picsum.photos/seed/camis/400/300' },
  { id: 5, nome: 'Garrafa Térmica', preco: 'R$ 42,00', minimo: '40 unidades', img: 'https://picsum.photos/seed/garrafa/400/300' },
  { id: 6, nome: 'Boné Personalizado', preco: 'R$ 28,90', minimo: '60 unidades', img: 'https://picsum.photos/seed/bone/400/300' },
  { id: 7, nome: 'Kit Corporativo Premium', preco: 'R$ 89,90', minimo: '20 unidades', img: 'https://picsum.photos/seed/kitcorp/400/300' },
  { id: 8, nome: 'Material Promocional', preco: 'R$ 15,90', minimo: '100 unidades', img: 'https://picsum.photos/seed/matprom/400/300' },
]

export const HOME_CATEGORIAS: HomeCategoria[] = [
  {
    label: 'Vestuário',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M6 2L2 7l4 2v11h12V9l4-2-4-5-3 2a3 3 0 01-6 0L6 2z" />
      </svg>
    ),
  },
  {
    label: 'Canecas',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 6h14v11a2 2 0 01-2 2H5a2 2 0 01-2-2V6z" />
        <path d="M17 9h2a2 2 0 010 4h-2" />
      </svg>
    ),
  },
  {
    label: 'Brindes',
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 00-4 0v2M8 7V5a2 2 0 014 0v2M12 7v14M2 11h20" />
      </svg>
    ),
  },
]

export const HOME_BENEFICIOS: HomeBeneficio[] = [
  {
    label: 'Entrega Rápida',
    desc: 'Prazo de entrega ágil para todo o Brasil',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="1" y="3" width="15" height="13" rx="1" />
        <path d="M16 8h4l3 4v5h-7V8z" />
        <circle cx="5.5" cy="18.5" r="2.5" />
        <circle cx="18.5" cy="18.5" r="2.5" />
      </svg>
    ),
  },
  {
    label: 'Qualidade Garantida',
    desc: 'Produtos premium com garantia de satisfação',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M9 12l2 2 4-4" />
      </svg>
    ),
  },
  {
    label: 'Atendimento 24/7',
    desc: 'Suporte dedicado para seu projeto',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    label: 'Melhor Custo-Benefício',
    desc: 'Preço competitivo sem comprometer a qualidade',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M20 7H4a2 2 0 00-2 2v6a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z" />
        <circle cx="12" cy="12" r="2" />
        <path d="M6 12h.01M18 12h.01" />
      </svg>
    ),
  },
]
