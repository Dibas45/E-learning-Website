import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../Slices/authSlice';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md relative">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <NavLink to="/" className="hover:text-gray-300">
            E-Learning
          </NavLink>
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="block md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d={isMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
            ></path>
          </svg>
        </button>

        {/* Navigation Links */}
        <ul
          className={`${
            isMenuOpen ? 'block' : 'hidden'
          } md:flex md:space-x-4 md:items-center absolute md:static bg-blue-600 top-full left-0 w-full md:w-auto z-20 shadow-lg md:shadow-none`}
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block py-2 px-4 md:inline hover:text-gray-300 ${
                  isActive ? 'border-b-2 border-white' : ''
                }`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `block py-2 px-4 md:inline hover:text-gray-300 ${
                  isActive ? 'border-b-2 border-white' : ''
                }`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block py-2 px-4 md:inline hover:text-gray-300 ${
                  isActive ? 'border-b-2 border-white' : ''
                }`
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/courses"
              className={({ isActive }) =>
                `block py-2 px-4 md:inline hover:text-gray-300 ${
                  isActive ? 'border-b-2 border-white' : ''
                }`
              }
            >
              Courses
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/mocktest"
              className={({ isActive }) =>
                `block py-2 px-4 md:inline hover:text-gray-300 ${
                  isActive ? 'border-b-2 border-white' : ''
                }`
              }
            >
              MockTest
            </NavLink>
          </li>

          {/* Conditionally render Login/Signup or Logout based on authentication status */}
          {isAuthenticated ? (
            <li>
              <button
                onClick={handleLogout}
                className="block py-2 px-4 md:inline hover:text-gray-300"
              >
                Logout
              </button>
            </li>
          ) : (
            <li>
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  `block py-2 px-4 md:inline hover:text-gray-300 ${
                    isActive ? 'border-b-2 border-white' : ''
                  }`
                }
              >
                Login
              </NavLink>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
