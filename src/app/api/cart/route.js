import { promises as fs } from 'fs';
import { headers } from 'next/headers';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'src', 'data', 'products.json');

export async function POST(request) {
  try {
    const body = await request.json();

    const data = await fs.readFile(dataFilePath, 'utf-8');
    const products = JSON.parse(data);

    const newProduct = {
      id: products.length + 1,
      ...body,
    };

    products.push(newProduct);

    await fs.writeFile(dataFilePath, JSON.stringify(products, null, 2));

    return new Response(JSON.stringify({ message: 'Added successfully', item: newProduct }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('POST error:', error);
    return new Response(JSON.stringify({ error: 'Could not save product' }), {
      status: 500,
    });
  }
}