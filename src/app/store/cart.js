import { create } from 'zustand'
import { persist } from 'zustand/middleware'

export const useCartStore = create(
  persist(
    (set, get) => ({
      cart: [],
      addToCart: (product) => {
        const isExist = get().cart.find(item => item.id === product.id)
        if (isExist) {
          set({
            cart: get().cart.map(item =>
              item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            ),
          })
        } else {
          set({ cart: [...get().cart, { ...product, quantity: 1 }] })
        }
      },
      removeFromCart: (id) => {
        set({ cart: get().cart.filter(item => item.id !== id) })
      },
      clearCart: () => set({ cart: [] }),
    }),
    { name: 'cart-storage' }
  )
)
