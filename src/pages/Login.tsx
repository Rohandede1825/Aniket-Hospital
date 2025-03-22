import { useState, ChangeEvent, FormEvent } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export  const Login = () => {
  const navigate = useNavigate();
    let [userData, setUserData] = useState({
        email: "",
        password: ""
    })
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setUserData((prevData) => ({
          ...prevData,
          [event.target.id]: event.target.value, 
        }));
      };
      
      const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
              event.preventDefault(); // Prevent page reload
              try{
              const response= await fetch(`${import.meta.env.VITE_API_URL}/api/auth/login`,{
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify(userData),
                credentials: "include",
              });
              const data = await response.json();
              
              if(response.ok){
                navigate('/dashboard');
                return;
              }

            } catch (error) {
              console.error(error);
            }
            };
    return (
        <>
  <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
  <form onClick={handleSubmit} className="bg-white p-6 rounded-lg shadow-md w-full max-w-md" onSubmit={handleSubmit}>
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
    <button className="w-full bg-purple-900 text-white py-2 rounded-md hover:opacity-85 transition">
      Login
    </button>
    <p className="text-center text-sm text-gray-500 mt-4">
      Don't have an account?
      <Link
        to="/signup"
        className="text-purple-900 underline hover:text-purple-700 transition text-sm"
      >
        Signup
      </Link>
    </p>
  </form>
</div>
        </>
    )
}