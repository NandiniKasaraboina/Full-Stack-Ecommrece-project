import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cart, increaseQty, decreaseQty, removeItem } = useContext(CartContext);
  const navigate = useNavigate();

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="p-5 max-w-3xl mx-auto">
      <h2 className="text-xl font-bold mb-4">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between items-center border p-3 mb-3 rounded"
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.title}   // ✅ ALT FIX
                  className="h-16 w-16 object-contain"
                />

                <div>
                  <h3>{item.title}</h3>
                  <p>₹{item.price}</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button onClick={() => decreaseQty(item.id)}>➖</button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQty(item.id)}>➕</button>
              </div>

              <button
                onClick={() => removeItem(item.id)}
                className="text-red-500"
              >
                Remove
              </button>
            </div>
          ))}

          <h2 className="text-xl font-bold mt-4">
            Total: ₹{total}
          </h2>

          <button
            onClick={() => navigate("/checkout")}
            className="bg-black text-white px-4 py-2 mt-4 rounded w-full hover:bg-gray-800"
          >
            Checkout 💳
          </button>
        </>
      )}
    </div>
  );
}

export default Cart;