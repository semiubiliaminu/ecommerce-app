// src/app/api/cart/route.js

export async function POST(request) {

    try {
      const body = await request.json();
  
      //log the raw request sent
      console.log('Cart item received:', body);
  
      return new Response(
        JSON.stringify({ message: 'Item added to cart successfully', item: body }),
        {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    } catch (error) {
      return new Response(
        JSON.stringify({ error: 'Oh!! Invalid request' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
    }
  }
  