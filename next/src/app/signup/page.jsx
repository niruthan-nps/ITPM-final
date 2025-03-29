"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { SmilePlus } from "lucide-react";

function SignUpPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    gender: "",
    age: "",
    country: "",
    city: "",
    occupation: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/api/auth/signup", formData);
      alert(response.data.message);
      router.push("/login");
    } catch (error) {
      alert(error.response?.data.error || "Something went wrong!");
    }
  };

  return (
    <div className="min-h-screen flex justify-center items-center p-4">
      <form
        onSubmit={handleSubmit}
        className="w-lg rounded-lg flex flex-col justify-center items-center bg-gradient-to-br from-purple-50 via-blue-50 to-purple-50 p-8 space-y-4"
      >
        <div className="flex w-full justify-center items-center mb-6">
          <p className="text-4xl font-bold bg-gradient-to-br from-purple-600 via-purple-500 to-purple-600 bg-clip-text text-transparent">
            mindcare
          </p>
          <SmilePlus size={40} className="ml-3 text-purple-500" />
        </div>

        <div className="flex w-full space-x-4">
          <div className="flex-1">
            <label className="block text-purple-500 font-mono font-semibold mb-2">
              First Name
            </label>
            <input
              name="firstName"
              onChange={handleChange}
              type="text"
              className="w-full p-3 font-mono text-purple-600 bg-gray-100 border border-purple-200 focus:outline-none focus:border-purple-500"
              required
            />
          </div>
          <div className="flex-1">
            <label className="block text-purple-500 font-mono font-semibold mb-2">
              Last Name
            </label>
            <input
              name="lastName"
              onChange={handleChange}
              type="text"
              className="w-full p-3 font-mono text-purple-600 bg-gray-100 border border-purple-200 focus:outline-none focus:border-purple-500"
            />
          </div>
        </div>

        <div className="w-full">
          <label className="block text-purple-500 font-mono font-semibold mb-2">
            Email
          </label>
          <input
            name="email"
            onChange={handleChange}
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
            name="password"
            onChange={handleChange}
            type="password"
            className="w-full p-3 font-mono text-purple-600 bg-gray-100 border border-purple-200 focus:outline-none focus:border-purple-500"
            required
          />
        </div>

        <div className="flex w-full space-x-14">
          <div className="flex-1">
            <label className="block text-purple-500 font-mono font-semibold mb-2">
              Gender
            </label>
            <select
              name="gender"
              onChange={handleChange}
              className="w-full p-3 font-mono text-purple-600 bg-gray-100 border border-purple-200 focus:outline-none focus:border-purple-500"
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="prefer-not-to-say">Prefer not to say</option>
            </select>
          </div>

          <div className="flex-none w-1/4">
            <label
              className="block text-purple-500 font-mono font-semibold mb-2"
              required
            >
              Age
            </label>
            <input
              name="age"
              onChange={handleChange}
              type="text"
              className="w-full p-3 font-mono text-purple-600 bg-gray-100 border border-purple-200 focus:outline-none focus:border-purple-500"
              required
            />
          </div>
        </div>

        <div className="flex w-full space-x-4">
          <div className="flex-1">
            <label className="block text-purple-500 font-mono font-semibold mb-2">
              Country
            </label>
            <input
              name="country"
              onChange={handleChange}
              type="text"
              className="w-full p-3 font-mono text-purple-600 bg-gray-100 border border-purple-200 focus:outline-none focus:border-purple-500"
              required
            />
          </div>
          <div className="flex-1">
            <label className="block text-purple-500 font-mono font-semibold mb-2">
              City
            </label>
            <input
              name="city"
              onChange={handleChange}
              type="text"
              className="w-full p-3 font-mono text-purple-600 bg-gray-100 border border-purple-200 focus:outline-none focus:border-purple-500"
              required
            />
          </div>
        </div>

        <div className="w-full">
          <label className="block text-purple-500 font-mono font-semibold mb-2">
            Occupation
          </label>
          <input
            name="occupation"
            onChange={handleChange}
            type="text"
            className="w-full p-3 font-mono text-purple-600 bg-gray-100 border border-purple-200 focus:outline-none focus:border-purple-500"
            required
          />
        </div>

        <div className="w-full mt-3.5">
          <button className="p-3 w-full bg-transparent border border-purple-500 text-purple-500 font-semibold font-mono hover:text-white hover:bg-purple-500 transition-all duration-300">
            Sign Up
          </button>
        </div>
      </form>
    </div>
  );
}
export default SignUpPage;
