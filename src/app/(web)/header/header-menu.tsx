"use client"

import React from 'react';
import HeaderLogo from './header-logo';
import NavBar from './nav-bar';
import AppHeader from './app-header';
import { useTheme } from 'next-themes';

export default function Header() {
  const { theme } = useTheme();

  return (
    // <header className={`${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'} shadow-md fixed top-0 left-0 right-0 w-full z-50 opacity-95`}>
    //   <div className="container mx-auto flex flex-wrap justify-between gap-5 p-5 flex-col md:flex-row items-center">
    //     <HeaderLogo />
    //     <AppHeader />
    //   </div>
    // </header>
    

<nav className={`${theme === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'} shadow-md fixed top-0 left-0 right-0 w-full z-50 opacity-95`}>
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
    <HeaderLogo />
    {/* Burger Menu */}
    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
        <span className="sr-only">Open main menu</span>
        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
    <AppHeader />
    </div>
  </div>
</nav>

  );
}
