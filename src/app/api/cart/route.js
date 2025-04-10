  import { products } from "../products/route";
  

  export async function POST(request){
  
    try{

      const product = await request.json();
  
      console.log("Products... ",product)
      //add new product
      const add_product = {
        id: products.length + 1,
        title: product.title,
        price: product.price,
        quantity: product.quantity
      }
  
      //add product to the list
      products.push(add_product);
  
      return new Response(
        JSON.stringify( { message: 'Item added to cart successfully', item: body }),
        {
          status: 200,
          headers: { 'Content-Type': 'application/json' },
        }
      );
  
    }
    catch(error){
  
      return new Response(
        JSON.stringify({ error: 'Oh!! Invalid request' }),
        {
          status: 400,
          headers: { 'Content-Type': 'application/json' },
        }
      );
  
    }
  }