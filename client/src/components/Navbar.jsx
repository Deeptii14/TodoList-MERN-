import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
   const navigate=useNavigate();
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const handleLogout = () => {
        // Remove the token from local storage
        localStorage.removeItem('token');
        localStorage.removeItem('isLoggedIn');
        // Redirect to the home page
        navigate("/");
    };
    return (
        <nav className="bg-gray-800">
            <div className="container mx-auto px-10 py-3 flex justify-between items-center">
                <div>
                    <a href="/" className="text-white font-bold text-xl">Todo APP</a>
                </div>
                <div className="lg:hidden">
                    <button onClick={toggleMenu} className="text-white focus:outline-none">
                        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                </div>
                <ul className={`lg:flex ${isOpen ? "block" : "hidden"} mt-4 lg:mt-0`}>
                <button onClick={handleLogout} className=" text-white py-2 px-4 rounded-md">
            Logout
        </button>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
