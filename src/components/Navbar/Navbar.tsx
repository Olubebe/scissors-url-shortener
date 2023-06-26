import React, { useState } from 'react';
import Image1 from '../../assets/svg/Logo.svg';
import { Link } from 'react-router-dom';
import { FiChevronDown } from 'react-icons/fi';


import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
 

  return (
    <nav className="bg-white text-black shadow-sm font-sans">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center text-3xl py-5 px-2 font-extrabold text-blue-800">
          <img src={Image1} alt="" />
          </Link>
          <div className={`hidden md:flex text-xl space-x-4 ${isOpen ? 'flex' : 'hidden'}`}>
            <Link to="/" className="py-5 px-3 text-blue-500 hover:text-gray-700">
              My URLs
            </Link>
            <div className='flex items-center cursor-pointer'>
            <Link to="/" className="py-5 px-3 text-gray-500 hover:text-gray-700">
              Features
            </Link>
            <FiChevronDown className={`ml-1 ${isOpen ? 'transform rotate-180' : ''}`} />
            </div>
           
            <Link to="/" className="py-5 px-3 text-gray-500 hover:text-gray-700">
              Pricing
            </Link>
            <Link to="/blogs" className="py-5 px-3 text-gray-500 hover:text-gray-700">
              Analytics
            </Link>       
             <Link to="/blogs" className="py-5 px-3 text-gray-500 hover:text-gray-700">
              FAQs
            </Link>        
          </div>
          <div className="md:flex gap-5 items-center text-xl font-semibold">

                <Link to="/signin">
                  <button className="hidden md:block px-10 py-2 rounded-xl text-blue-500 hover:text-blue-700">
                    Login
                  </button>
                </Link>
                <Link to="/free-demo">
                  <button className="hidden md:block px-3 py-2 rounded-xl text-white bg-blue-700 hover:bg-blue-900">
                    Try for free
                  </button>
                </Link>
              
            <div className="md:hidden">
              <button
                className="outline-none mobile-menu-button"
                onClick={toggleMenu}
              >
                {isOpen ? (
                  <FaTimes className="text-gray-900" />
                ) : (
                  <FaBars className="text-gray-900" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
   
      <div className={`md:hidden text-center font-medium ${isOpen ? 'block' : 'hidden'}`}>
        <Link to="/" className="block py-2 px-4 text-lg hover:bg-gray-200">
          Home
        </Link>
        <Link to="/" className="block py-2 px-4 text-lg hover:bg-gray-200">
          About
        </Link>
        <Link to="/" className="block py-2 px-4 text-lg hover:bg-gray-200">
          Contact
        </Link>
        <Link to="/" className="block py-2 px-4 text-lg hover:bg-gray-200">
          Blogs
        </Link>
        <div className="md:hidden flex flex-col gap-5 text-lg justify-center items-center">
        <button  className=" px-10 py-2 rounded-xl text-white bg-gray-400 hover:bg-gray-700">
              Login
            </button>
            <button className=" px-10 py-2 mb-4 rounded-xl text-white bg-blue-700 hover:bg-blue-900">
              Sign Up
            </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
