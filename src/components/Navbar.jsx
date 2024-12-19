import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux'; 
import { logout } from '../Slices/authSlice';

const Navbar = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold">
          <NavLink to="/" className="hover:text-gray-300">
            E-Learning
          </NavLink>
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-4">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `hover:text-gray-300 ${isActive ? 'border-b-2 border-white' : ''}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `hover:text-gray-300 ${isActive ? 'border-b-2 border-white' : ''}`
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `hover:text-gray-300 ${isActive ? 'border-b-2 border-white' : ''}`
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/courses"
              className={({ isActive }) =>
                `hover:text-gray-300 ${isActive ? 'border-b-2 border-white' : ''}`
              }
            >
              Courses
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/mocktest"
              className={({ isActive }) =>
                `hover:text-gray-300 ${isActive ? 'border-b-2 border-white' : ''}`
              }
            >
              MockTest
            </NavLink>
          </li>

          {/* Conditionally render Login/Signup or Logout based on authentication status */}
          {isAuthenticated ? (
            <>
              <li>
                <NavLink
                  to="/login"
                  className={({ isActive }) =>
                    `hover:text-gray-300 ${isActive ? 'border-b-2 border-white' : ''}`
                  }
                >
                  Login
                </NavLink>
              </li>
            </>
          ) : (
            <li>
              <button
                onClick={handleLogout}
                className="hover:text-gray-300"
              >
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
