import { createContext, useState, useEffect, type ReactNode } from 'react'

export type CartItem = {
  cartItemId: string
  produtoId: number
  nome: string
  categoria: string
  preco: number
  cor: string
  impressao: string
  quantidade: number
  imagem: string
  minimoUnidades: number
}

type CartContextType = {
  items: CartItem[]
  addToCart: (item: Omit<CartItem, 'cartItemId'>) => void
  removeFromCart: (cartItemId: string) => void
  updateQuantity: (cartItemId: string, quantidade: number) => void
  clearCart: () => void
  cartCount: number
  cartTotal: number
}

export const CartContext = createContext<CartContextType>({} as CartContextType)

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const stored = localStorage.getItem('bb_cart')
      return stored ? JSON.parse(stored) : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('bb_cart', JSON.stringify(items))
  }, [items])

  const addToCart = (item: Omit<CartItem, 'cartItemId'>) => {
    const cartItemId = `${item.produtoId}-${item.cor}-${item.impressao}`
    setItems((prev) => {
      const existing = prev.find((i) => i.cartItemId === cartItemId)
      if (existing) {
        return prev.map((i) =>
          i.cartItemId === cartItemId
            ? { ...i, quantidade: i.quantidade + item.quantidade }
            : i,
        )
      }
      return [...prev, { ...item, cartItemId }]
    })
  }

  const removeFromCart = (cartItemId: string) => {
    setItems((prev) => prev.filter((i) => i.cartItemId !== cartItemId))
  }

  const updateQuantity = (cartItemId: string, quantidade: number) => {
    setItems((prev) =>
      prev.map((i) => (i.cartItemId === cartItemId ? { ...i, quantidade } : i)),
    )
  }

  const clearCart = () => setItems([])

  const cartCount = items.reduce((acc, i) => acc + i.quantidade, 0)
  const cartTotal = items.reduce((acc, i) => acc + i.preco * i.quantidade, 0)

  return (
    <CartContext.Provider
      value={{ items, addToCart, removeFromCart, updateQuantity, clearCart, cartCount, cartTotal }}
    >
      {children}
    </CartContext.Provider>
  )
}
