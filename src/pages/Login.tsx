import { useState, ChangeEvent, FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from '../context/AuthContext';

export const Login = () => {
  const navigate = useNavigate();
  const { setIsAuthenticated } = useAuth();
  const [userData, setUserData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserData((prevData) => ({
      ...prevData,
      [event.target.id]: event.target.value,
    }));
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
        credentials: "include",
      });

      if (response.ok) {
        setIsAuthenticated(true);
        navigate('/dashboard');
      } else {
        alert("Invalid credentials");
      }
    } catch (error) {
      console.error(error);
      alert("Login failed");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <form className="bg-white p-6 rounded-lg shadow-md w-full max-w-md" onSubmit={handleSubmit}>
        <h2 className="text-2xl font-semibold mb-4 text-center text-black">Login</h2>
        <input
          type="email"
          id="email"
          placeholder="Email"
          onChange={handleChange}
          className="w-full text-black p-2 mb-3 border border-gray-300 rounded-md"
        />
        <input
          type="password"
          id="password"
          placeholder="Password"
          onChange={handleChange}
          className="w-full text-black p-2 mb-3 border border-gray-300 rounded-md"
        />
        <button type="submit" className="w-full bg-purple-900 text-white py-2 rounded-md hover:opacity-85 transition">
          Login
        </button>
        <p className="text-center text-sm text-gray-500 mt-4">
          Don't have an account?{' '}
          <Link to="/signup" className="text-purple-900 hover:text-purple-700 transition">
            Signup
          </Link>
        </p>
      </form>
    </div>
  );
};