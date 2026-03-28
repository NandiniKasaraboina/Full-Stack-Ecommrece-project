import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    if (!email || !password) {
      alert("⚠️ Please fill all fields");
      return;
    }

    try {
      const url = isRegister
        ? "http://localhost:5000/api/auth/register"
        : "http://localhost:5000/api/auth/login";

      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
      });

      const data = await res.json();

      if (res.ok) {
        alert(data.message);

        // ✅ Save logged-in user
        localStorage.setItem("user", JSON.stringify(data.user || { email }));

        navigate("/");
      } else {
        alert(data.message);
      }

    } catch (error) {
      console.log(error);
      alert("❌ Server error");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-80 text-center">
        <h2 className="text-2xl font-bold mb-5">
          {isRegister ? "Register 📝" : "Login 🔐"}
        </h2>

        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border p-2 w-full mb-3 rounded"
        />

        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border p-2 w-full mb-3 rounded"
        />

        <button
          onClick={handleSubmit}
          className="bg-black text-white px-4 py-2 w-full rounded"
        >
          {isRegister ? "Register" : "Login"}
        </button>

        <p className="mt-3 text-sm">
          {isRegister ? "Already have account?" : "New user?"}
          <span
            className="text-blue-500 cursor-pointer ml-1"
            onClick={() => setIsRegister(!isRegister)}
          >
            {isRegister ? "Login" : "Register"}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;