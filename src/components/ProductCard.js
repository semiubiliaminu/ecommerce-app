'use client'

export default function ProductCard({ product, onAdd }) {
  return (
    <div className="border p-4 rounded shadow hover:shadow-md transition">
      <img
        src={product.image}
        alt={product.title}
        className="w-full h-40 object-cover mb-4"
      />
      <h2 className="text-lg font-semibold mb-2">{product.title}</h2>
      <p className="text-gray-700 mb-2">${product.price}</p>
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        onClick={() => onAdd(product)}
      >
        Add to Cart
      </button>
    </div>
  )
}