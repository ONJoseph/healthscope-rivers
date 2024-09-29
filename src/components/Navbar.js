// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="bg-green-600 p-4">
      <ul className="flex space-x-4 justify-center">
        <li>
          <Link to="/" className="text-white hover:text-gray-200">
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" className="text-white hover:text-gray-200">
            About
          </Link>
        </li>
        <li>
          <Link to="/map" className="text-white hover:text-gray-200">
            Map
          </Link>
        </li>
        <li>
          <Link to="/contact" className="text-white hover:text-gray-200">
            Contact
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
