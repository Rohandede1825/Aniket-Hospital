import { Link, Outlet } from "react-router-dom";
import { Logo } from "./Logo";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className="flex justify-between items-center bg-purple-900 text-white p-4 w-full">
                <div className="rounded-full bg-purple-900">
                    <Logo />
                </div>
                <div className="lg:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </div>
                <div className={`lg:flex space-x-4 gap-4 font-semibold mr-4 ${isOpen ? "flex flex-col absolute top-16 right-4 bg-purple-800 p-4 rounded-md" : "hidden lg:flex"}`}>
                    
                    <Link to={'/dashboard'} className="block py-2 px-4 hover:font-bold rounded-md">Dashboard</Link>
                    <Link to={'/about'} className="block py-2 px-4 hover:font-bold rounded-md">About</Link>
                    <Link to={'/contact'} className="block py-2 px-4 hover:font-bold rounded-md">Contact</Link>
                    <Link to={'/login'} className="block py-2 px-4 hover:font-bold rounded-md">Login</Link>
                    <Link to={'/signup'} className="block py-2 px-4 hover:font-bold rounded-md">Signup</Link>
                </div>
            </div>
            <Outlet />
        </>
    );
};
