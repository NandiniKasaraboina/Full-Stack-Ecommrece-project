import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <nav className="flex justify-between items-center p-4 bg-black text-white">
      <h2
        className="text-xl font-bold cursor-pointer"
        onClick={() => navigate("/")}
      >
        E-Shop 🛍️
      </h2>

      <div className="space-x-4">
        <button onClick={() => navigate("/login")} className="hover:underline">
          Login
        </button>

        <button
          onClick={() => navigate("/cart")}
          className="bg-white text-black px-3 py-1 rounded"
        >
          Cart 🛒 ({totalItems})
        </button>
      </div>
    </nav>
  );
}

export default Navbar;