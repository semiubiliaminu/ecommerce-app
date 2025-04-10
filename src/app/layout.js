import './globals.css'

export const metadata = {
  title: 'My eCommerce Store',
  description: 'A simple product listing with cart',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <header className="bg-blue-600 text-white p-4 shadow">
          <div className="max-w-6xl mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold">Click Shop</h1>
            <nav className="space-x-4">
              <a href="/" className="hover:underline">Home</a>
              <a href="/cart" className="hover:underline">Cart</a>
            </nav>
          </div>
        </header>

        <main className="flex-1 max-w-6xl mx-auto p-4">
          {children}
        </main>

        <footer className="bg-gray-100 p-4 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} Click Shop. All rights reserved.
        </footer>
      </body>
    </html>
  )
}