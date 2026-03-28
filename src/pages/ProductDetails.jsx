import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../context/CartContext";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res => res.json())
      .then(data => setProduct(data));
  }, [id]);

  if (!product) {
    return <h2 className="text-center mt-10">Loading...</h2>;
  }

  return (
    <div className="p-10 text-center max-w-3xl mx-auto">
      <img
        src={product.image}
        alt={product.title}   // ✅ ALT FIX
        className="h-60 mx-auto object-contain"
      />

      <h2 className="text-xl font-bold mt-4">
        {product.title}
      </h2>

      <p className="text-green-600 font-bold text-lg mt-2">
        ₹{product.price}
      </p>

      <p className="text-gray-600 mt-3">
        {product.description}
      </p>

      <button
        onClick={() => addToCart(product)}
        className="bg-black text-white px-5 py-2 mt-4 rounded hover:bg-gray-800"
      >
        Add to Cart 🛒
      </button>
    </div>
  );
}

export default ProductDetails;