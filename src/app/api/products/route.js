export async function GET() {
  const products = [
    { id: 1, title: 'HD Camera', price: 1200, image: 'images/camera.jpeg' },
    { id: 2, title: 'Headphones', price: 150, image: 'images/headphone.jpeg' },
    { id: 3, title: 'HD Camera', price: 80, image: 'images/camera.jpeg' }
  ];

  return new Response(JSON.stringify(products), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}
  