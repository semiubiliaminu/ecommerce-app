
"use client"

import { useEffect, useState } from 'react'
import { useCartStore } from './store/cart'

export default function Home() {
  const [products, setProducts] = useState([])
  const { cart, addToCart, removeFromCart } = useCartStore()

  useEffect(() => {
    fetch('api/products') 
      .then(res => res.json())
      .then(setProducts)
      return;
  }, [])

  

  const total = cart.reduce((acc, item) => acc + item.price * item.quantity, 0)

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-6">Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {products.map(product => (
          <div key={product.id} className="border p-4 rounded shadow">
            <img src={product.image} className="h-32 w-full object-cover mb-2" alt={product.title} />
            <h2 className="text-lg font-semibold">{product.title}</h2>
            <p className="mb-2">${product.price}</p>
            <button
              onClick={() => addToCart(product)}
              className="bg-blue-600 text-white px-4 py-1 rounded"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      <div className="mt-10 border-t pt-6">
        <h2 className="text-2xl font-semibold mb-4">Cart</h2>
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div>
            {cart.map(item => (
              <div key={item.id} className="flex justify-between mb-2">
                <span>{item.title} x {item.quantity}</span>
                <div>
                  <span>${item.price * item.quantity}</span>
                  <button
                    className="ml-4 text-red-500"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
            <div className="mt-4 font-bold">Total: ${total.toFixed(2)}</div>
            <button className="mt-2 px-4 py-2 bg-green-600 text-white rounded">
              Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  )
}