import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Search, User, ShoppingCart } from "lucide-react";

function Navbar() {
  const activeStyle = "text-[#F83232] hover:underline underline-offset-4";
  const baseStyle = "hover:text-[#FDFEFF] hover:underline underline-offset-4 transition-all duration-300 ease-in-out";

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <nav className="bg-[#1a1a1a] px-6 py-5 flex items-center justify-between shadow-md">
      <div className="text-2xl font-bold text-white tracking-tight">
        <Link to="/">ShoeStore</Link>
      </div>

      {/* Menu položky */}
    <ul className="hidden md:flex justify-center space-x-8 text-white font-medium text-sm ml-45">
        <li>
            <NavLink to="/" end className={({ isActive }) => isActive ? activeStyle : baseStyle}>Home</NavLink>
        </li>
        <li>
            <NavLink to="/products" className={({ isActive }) => isActive ? activeStyle : baseStyle}>Products</NavLink>
        </li>
        <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? activeStyle : baseStyle}>Contact</NavLink>
        </li>
    </ul>

      {/* Ikony + Search */}
      <div className="flex space-x-4 items-center text-white">
        
        <div className="flex items-center bg-[#2a2a2a] px-2 py-1 rounded-md focus-within:ring-2 focus-within:ring-[#F83232] transition-all duration-300">
          <Search size={18} className="text-gray-400 mr-2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search..."
            className="bg-transparent outline-none text-sm text-white placeholder-gray-500"
          />
        </div>

        {/* User icon */}
        <Link to="/login" className="hover:text-[#F83232] transition-colors duration-200">
          <User size={18} />
        </Link>

        {/* Cart icon */}
        <Link to="/cart" className="relative hover:text-[#F83232] transition-colors duration-200">
          <ShoppingCart size={18} />
          <span className="absolute -top-2 -right-3 bg-[#F83232] text-white rounded-full text-[10px] w-4 h-4 flex items-center justify-center font-semibold">
            3
          </span>
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;
