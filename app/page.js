import Header from "./components/Header";
import Counter from "./components/Counter";
import ProductList from "./components/ProductList";

export default function Page() {
  return (
    <main className="p-6 max-w-4xl mx-auto">
      <Header />

      <h1 className="text-2xl font-bold mt-6">
        Server vs Client Components
      </h1>

      {/* Client Component */}
      <Counter />

      {/* Server Component */}
      <ProductList />
    </main>
  );
}