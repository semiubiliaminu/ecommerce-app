export async function GET() {
  const products = [
    { id: 1, title: 'Laptop', price: 1200, image: '/laptop.jpg' },
    { id: 2, title: 'Headphones', price: 150, image: '/headphones.jpg' },
    { id: 3, title: 'Keyboard', price: 80, image: '/keyboard.jpg' },
  ];

  return new Response(JSON.stringify(products), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
  