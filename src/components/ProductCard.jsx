import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function ProductCard({ product }) {
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  return (
    <div className="border p-4 w-60 rounded-2xl shadow hover:shadow-xl transition duration-300 bg-white">
      
      {/* CLICK AREA */}
      <div onClick={() => navigate(`/product/${product.id}`)} className="cursor-pointer">
        <img
          src={product.image}
          alt={product.title}   // ✅ ALT FIX
          className="h-40 w-full object-contain mb-2"
        />

        <h3 className="font-semibold text-sm line-clamp-2">
          {product.title}
        </h3>

        <p className="text-green-600 font-bold mt-1">
          ₹{product.price}
        </p>
      </div>

      {/* BUTTON */}
      <button
        onClick={() => addToCart(product)}
        className="bg-black text-white px-3 py-2 rounded mt-3 w-full hover:bg-gray-800"
      >
        Add to Cart 🛒
      </button>
    </div>
  );
}

export default ProductCard;