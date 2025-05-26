import React from "react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-gray-500 py-8">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        <div>
          <h3 className="text-cyan-400 font-semibold mb-3">About Us</h3>
          <p>
            We are a modern sneaker store focused on bringing you the latest and
            greatest in footwear.
          </p>
        </div>

        <div>
          <h3 className="text-cyan-400 font-semibold mb-3">Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-cyan-400">
                Home
              </Link>
            </li>
            <li>
              <Link to="/products" className="hover:text-cyan-400">
                Products
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-cyan-400">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-cyan-400 font-semibold mb-3">Contact</h3>
          <p>Email: info@shoestore.com</p>
          <p>Phone: +420 123 456 789</p>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-8 pt-4 text-center text-xs text-gray-600">
        &copy; {new Date().getFullYear()} ShoeStore. All rights reserved.
      </div>
    </footer>
  );
};
