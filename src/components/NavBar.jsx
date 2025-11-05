import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-gray-900 text-white p-4 flex justify-between items-center">
      <div className="text-2xl font-bold">AI Side Hustle</div>
      <div className="space-x-6">
        <Link to="/" className="hover:text-yellow-400">Home</Link>
        <Link to="/hustles" className="hover:text-yellow-400">Hustles</Link>
        <Link to="/tools" className="hover:text-yellow-400">Tools</Link>
        <Link to="/guides" className="hover:text-yellow-400">Guides</Link>
        <Link to="/contact" className="hover:text-yellow-400">Contact</Link>
      </div>
    </nav>
  );
};

export default NavBar;

