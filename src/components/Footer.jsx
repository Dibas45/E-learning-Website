import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">About E-Learning</h3>
            <p className="text-gray-400">
              E-Learning is dedicated to providing quality education to learners
              around the world. Empower yourself with knowledge and skills that
              matter.
            </p>
          </div>
          {/* Links Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <NavLink
                  to="/"
                  className="hover:text-gray-300"
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/about"
                  className="hover:text-gray-300"
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/courses"
                  className="hover:text-gray-300"
                >
                  Courses
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="hover:text-gray-300"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="text-gray-400 space-y-2">
              <li>Email: DibasPoudel@elearning.com</li>
              <li>Phone:************</li>
              <li>Address: Ghorahi-15-Dang</li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 pt-4 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} E-Learning. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
