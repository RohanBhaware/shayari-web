import { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async () => {
    const res = await API.post("/auth/login", { email, password });
    localStorage.setItem("token", res.data.token);
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br">
    <div className="max-w-md mx-auto bg-[#FFF1CB] p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold text-center mb-6">Login Account</h2>

      <input
        className="w-full border p-2 mb-3"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        className="w-full border p-2 mb-3"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={login} className="w-full bg-[#e8c364] text-white py-2 hover:bg-[#f3b313]">
        Login
      </button>
    </div>
    </div>
  );
}
