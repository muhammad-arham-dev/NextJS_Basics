const products = [
  { id: "1", name: "Laptop" },
  { id: "2", name: "Phone" },
  { id: "3", name: "Headphones" }
];

export default function ProductDetail({ params }) {
  const product = products.find(p => p.id === params.id);

  if (!product) {
    return <h1>Product Not Found</h1>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>ID: {params.id}</p>
    </div>
  );
}