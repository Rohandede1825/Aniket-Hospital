import { Link, Outlet, useNavigate } from "react-router-dom";
import { Logo } from "./Logo";
import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import { useAuth } from '../context/AuthContext';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const { isAuthenticated, setIsAuthenticated } = useAuth();
    const navigate = useNavigate();
    const menuRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLDivElement>(null);

    const handleLogout = () => {
        document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
        setIsAuthenticated(false);
        setIsOpen(false);
        navigate('/login');
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                menuRef.current && 
                !menuRef.current.contains(event.target as Node) &&
                buttonRef.current &&
                !buttonRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLinkClick = () => {
        setIsOpen(false);
    };

    return (
        <>
            <div className="flex justify-between items-center bg-purple-900 text-white p-4 w-full">
                <div className="rounded-full bg-purple-900">
                    <Logo />
                </div>

                <Link to={'/dashboard'} onClick={handleLinkClick}>
                    <p className="font-bold text-2xl gap-0">
                        Aniket Hospital
                    </p>
                </Link>

                <div 
                    ref={buttonRef}
                    className="lg:hidden cursor-pointer z-50" 
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </div>

                <div 
                    ref={menuRef}
                    className={`lg:flex space-x-4 gap-4 font-semibold mr-4 
                    ${isOpen 
                        ? "flex flex-col fixed top-16 right-4 bg-purple-800 p-4 rounded-md shadow-lg z-40" 
                        : "hidden lg:flex"}`}
                >
                    <Link to={'/dashboard'} className="block py-2 px-4 hover:font-bold rounded-md" onClick={handleLinkClick}>Dashboard</Link>
                    <Link to={'/services'} className="block py-2 px-4 hover:font-bold rounded-md" onClick={handleLinkClick}>Services</Link>
                    <Link to={'/about'} className="block py-2 px-4 hover:font-bold rounded-md" onClick={handleLinkClick}>About</Link>
                    <Link to={'/contact'} className="block py-2 px-4 hover:font-bold rounded-md" onClick={handleLinkClick}>Contact</Link>
                    {isAuthenticated && (
                        <Link to={'/appointment'} className="block py-2 px-4 hover:font-bold rounded-md" onClick={handleLinkClick}>Check-list</Link>
                    )}
                    {!isAuthenticated ? (
                        <>
                            <Link to={'/login'} className="block py-2 px-4 hover:font-bold rounded-md" onClick={handleLinkClick}>Login</Link>
                            <Link to={'/signup'} className="block py-2 px-4 hover:font-bold rounded-md" onClick={handleLinkClick}>Signup</Link>
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
