async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products", {
    next: { revalidate: 60 },
  });

  return res.json();
}

export default async function ProductList() {
  const products = await getProducts();

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold mb-4">Products (Server)</h2>

      <div className="grid grid-cols-2 gap-4">
        {products.slice(0, 6).map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded shadow"
          >
            <h3 className="font-semibold">{product.title}</h3>
            <p className="text-green-600 font-bold">
              ${product.price}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}