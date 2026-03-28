import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      setProducts(data);
    };

    getProducts();
  }, []);

  // ✅ LOADING UI
  if (products.length === 0) {
    return <h2 className="p-5 text-center">Loading products...</h2>;
  }

  return (
    <div className="flex flex-wrap justify-center gap-5 p-5 bg-gray-100 min-h-screen">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Home;