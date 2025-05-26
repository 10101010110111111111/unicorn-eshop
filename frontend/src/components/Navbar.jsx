import { useState } from "react";
import { NavLink, Link, useNavigate, useLocation } from "react-router-dom";
import { Search, ShoppingCart } from "lucide-react";
import { useAuth, UserButton } from "@clerk/clerk-react";
import { SignInOAuthButton } from "./SignInOAuthButton.jsx";

export const Navbar = () => {
  const activeStyle = "text-cyan-400 underline underline-offset-4";
  const baseStyle =
    "hover:text-cyan-400 hover:underline underline-offset-4 transition-all duration-300 ease-in-out";

  const { isSignedIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    const params = new URLSearchParams(location.search);
    if (search) {
      params.set("search", search);
    } else {
      params.delete("search");
    }

    navigate(`/products?${params.toString()}`);
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-[#1a1a1a] px-6 py-5 flex items-center justify-between shadow-md">
      <div className="text-3xl font-bold text-white tracking-tight">
        <Link to="/">ShoeStore</Link>
      </div>

      <ul className="hidden md:flex justify-center space-x-10 text-white font-medium text-lg ml-45">
        <li>
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? activeStyle : baseStyle)}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/products"
            className={({ isActive }) => (isActive ? activeStyle : baseStyle)}
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contacts"
            className={({ isActive }) => (isActive ? activeStyle : baseStyle)}
          >
            Contacts
          </NavLink>
        </li>
      </ul>

      <div className="flex space-x-4 items-center text-white">
        <form
          onSubmit={handleSearch}
          className="flex items-center bg-[#2a2a2a] px-2 py-1 rounded-md focus-within:ring-2 focus-within:ring-cyan-400 transition-all duration-300"
        >
          <Search size={18} className="text-gray-400 mr-2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search..."
            className="bg-transparent outline-none text-lg text-white placeholder-gray-500"
          />
        </form>

        {isSignedIn ? (
          <>
            <UserButton
              appearance={{
                elements: {
                  userButtonAvatarBox: "w-8 h-8",
                },
              }}
            />

            <Link
              to="/cart"
              className="relative hover:text-cyan-400 transition-colors duration-200"
            >
              <ShoppingCart size={20} />
            </Link>
          </>
        ) : (
          <SignInOAuthButton />
        )}
      </div>
    </nav>
  );
};
