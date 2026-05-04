import Link from 'next/link';

const products = [
  { id: 1, name: "Laptop" },
  { id: 2, name: "Phone" },
  { id: 3, name: "Headphones" }
];

export default function Products() {
  return (
    <div>
      <h1>Products</h1>

      {products.map(product => (
        <div key={product.id}>
          <Link href={`/products/${product.id}`}>
            {product.name}
          </Link>
        </div>
      ))}
    </div>
  );
}