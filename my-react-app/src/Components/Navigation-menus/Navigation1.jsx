import React, { useState } from 'react';
import Dark_mode from '../Dark-mode';
import { useNavigate } from "react-router-dom";

export function Navigation1(){
  const navigate = useNavigate();
    
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const onLogout = () => {
    localStorage.removeItem('isLoggedIn'); // Borra el estado de autenticación al cerrar sesión
    navigate("/login", {
      replace: true,
    });
  };

  return (
    <div>
      <nav className="border-gray-200 bg-blue-200 dark:bg-gray-800 dark:border-gray-700">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <button
            onClick={toggleMenu}
            type="button"
            className="inline-flex items-center justify-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-hamburger"
            aria-expanded={isMenuOpen ? 'true' : 'false'}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <Dark_mode/>
          <div className={`w-full ${isMenuOpen ? '' : 'hidden'}`} id="navbar-hamburger">
            <ul className="flex flex-col font-medium mt-4 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
              <li>
                <a href="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-blue-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" aria-current="page">Home</a>
              </li>
              <li>
                <a href="/overview" className="block py-2 px-3 text-gray-900 rounded hover:bg-blue-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Overview</a>
              </li>
              <li>
                <a href="/contact" className="block py-2 px-3 text-gray-900 rounded hover:bg-blue-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white">Contact</a>
              </li>
              <li>
                <a href="/" className="block py-2 px-3 text-gray-900 rounded hover:bg-blue-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white">Settings</a>
              </li>
              <li>
                <button className="block py-2 px-3 text-gray-900 rounded hover:bg-blue-100 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white"  onClick={onLogout}>Log out</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
