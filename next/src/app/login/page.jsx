"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import axios from "axios";
import { SmilePlus } from "lucide-react";

function LoginPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/auth/login", formData);
      localStorage.setItem("token", response.data.token);
      alert("Login successful!");
      router.push("/");
    } catch (error) {
      alert(error.response?.data.error || "Invalid credentials!");
    }
  };
  return (
    <div className="min-h-screen flex justify-center items-center p-4">
      <form className="w-lg rounded-lg flex flex-col justify-center items-center bg-gradient-to-br from-purple-50 via-blue-50 to-purple-50 p-8 space-y-4">
        <div className="flex w-full justify-center items-center mb-6">
          <p className="text-4xl font-bold bg-gradient-to-br from-purple-600 via-purple-500 to-purple-600 bg-clip-text text-transparent">
            mindcare
          </p>
          <SmilePlus size={40} className="ml-3 text-purple-500" />
        </div>

        <div className="w-full">
          <label className="block text-purple-500 font-mono font-semibold mb-2">
            Email
          </label>
          <input
            type="email"
            className="w-full p-3 font-mono text-purple-600 bg-gray-100 border border-purple-200 focus:outline-none focus:border-purple-500"
            required
          />
        </div>

        <div className="w-full">
          <label className="block text-purple-500 font-mono font-semibold mb-2">
            Password
          </label>
          <input
            type="password"
            className="w-full p-3 font-mono text-purple-600 bg-gray-100 border border-purple-200 focus:outline-none focus:border-purple-500"
            required
          />
        </div>

        <div className="w-full mt-3.5">
          <button className="p-3 w-full bg-transparent border border-purple-500 text-purple-500 font-semibold font-mono hover:text-white hover:bg-purple-500 transition-all duration-300">
            Login
          </button>
        </div>
      </form>
    </div>
  );
}
export default LoginPage;
