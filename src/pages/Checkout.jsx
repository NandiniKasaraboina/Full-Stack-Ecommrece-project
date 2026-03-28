import { useContext } from "react";
import { CartContext } from "../context/CartContext";

function Checkout() {
  const { cart, clearCart } = useContext(CartContext);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleOrder = () => {
    if (cart.length === 0) {
      alert("🛒 Cart is empty");
      return;
    }

    alert("🛍️ Order Placed Successfully!");
    clearCart();
  };

  return (
    <div className="p-5 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Checkout 💳</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        <>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border p-3 mb-3 rounded"
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.image}
                  alt={item.title}   // ✅ ALT ADDED
                  className="h-16 w-16 object-contain"
                />
                <div>
                  <p className="font-semibold">{item.title}</p>
                  <p>₹{item.price} × {item.quantity}</p>
                </div>
              </div>

              <p className="font-bold">
                ₹{item.price * item.quantity}
              </p>
            </div>
          ))}

          <h2 className="text-xl font-bold mt-4">
            Total: ₹{total}
          </h2>

          <button
            onClick={handleOrder}
            className="bg-black text-white px-4 py-2 mt-4 w-full rounded hover:bg-gray-800"
          >
            Pay Now 💳
          </button>
        </>
      )}
    </div>
  );
}

export default Checkout;