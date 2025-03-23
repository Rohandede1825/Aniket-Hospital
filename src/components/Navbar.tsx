import { Link, Outlet, useNavigate } from "react-router-dom";
import { Logo } from "./Logo";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { useAuth } from '../context/AuthContext';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { isAuthenticated, setIsAuthenticated } = useAuth();
    const navigate = useNavigate();

    const handleLogout = () => {
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        setIsAuthenticated(false);
        navigate('/login');
    };

    return (
        <>
            <div className="flex justify-between items-center bg-purple-900 text-white p-4 w-full">
                <div className="rounded-full bg-purple-900">
                    <Logo />
                </div>

                
                <Link to={'/dashboard'} >
                <p className="font-bold text-2xl gap-0">
                   Aniket Hospital
                </p>
                </Link>

                <div className="lg:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </div>
                <div className={`lg:flex space-x-4 gap-4 font-semibold mr-4 ${isOpen ? "flex flex-col absolute top-16 right-4 bg-purple-800 p-4 rounded-md" : "hidden lg:flex"}`}>
                    <Link to={'/dashboard'} className="block py-2 px-4 hover:font-bold rounded-md">Dashboard</Link>
                    <Link to={'/services'} className="block py-2 px-4 hover:font-bold rounded-md">Services</Link>
                    <Link to={'/about'} className="block py-2 px-4 hover:font-bold rounded-md">About</Link>
                    <Link to={'/contact'} className="block py-2 px-4 hover:font-bold rounded-md">Contact</Link>
                    {isAuthenticated && (
                        <Link to={'/appointment'} className="block py-2 px-4 hover:font-bold rounded-md">Check-list</Link>
                    )}
                    {!isAuthenticated ? (
                        <>
                            <Link to={'/login'} className="block py-2 px-4 hover:font-bold rounded-md">Login</Link>
                            <Link to={'/signup'} className="block py-2 px-4 hover:font-bold rounded-md">Signup</Link>
                        </>
                    ) : (
                        <button onClick={handleLogout} className="block py-2 px-4 hover:font-bold rounded-md">
                            Logout
                        </button>
                    )}
                </div>
            </div>
            <Outlet />
        </>
    );
};
