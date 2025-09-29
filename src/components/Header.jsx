import React from 'react';
import { useTheme } from '../App';
import { SunIcon, MoonIcon, LogoutIcon } from './icons';

const Header = ({ pageTitle }) => {
  const { theme, toggleTheme } = useTheme();

  const handleLogout = () => {
    console.log('User logged out.');
    // In a real app, you would clear auth tokens and redirect
  };

  return (
    <header className="flex-shrink-0 bg-card dark:bg-dm-card border-b border-border dark:border-dm-border p-4 flex justify-between items-center">
      <div className="flex items-center">
        <h1 className="text-xl font-semibold text-text-primary dark:text-dm-text-primary">
          {pageTitle}
        </h1>
      </div>
      <div className="flex items-center space-x-4">
        <button
          onClick={toggleTheme}
          className="p-2 rounded-full text-text-secondary dark:text-dm-text-secondary hover:bg-background dark:hover:bg-dm-background focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Toggle theme"
        >
          {theme === 'light' ? (
            <MoonIcon className="w-5 h-5" />
          ) : (
            <SunIcon className="w-5 h-5" />
          )}
        </button>

        <button className="relative p-2 rounded-full text-text-secondary dark:text-dm-text-secondary hover:bg-background dark:hover:bg-dm-background focus:outline-none focus:ring-2 focus:ring-primary">
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
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            ></path>
          </svg>
          <span className="absolute top-2 right-2 block h-2 w-2 rounded-full bg-red-500 ring-2 ring-card dark:ring-dm-card"></span>
        </button>

        <div className="w-px h-6 bg-border dark:bg-dm-border"></div>

        <div className="flex items-center">
          <img
            className="h-9 w-9 rounded-full object-cover"
            src="https://picsum.photos/seed/admin/100"
            alt="Admin User"
          />
          <div className="ml-3 hidden sm:block">
            <p className="text-sm font-medium text-text-primary dark:text-dm-text-primary">
              Admin
            </p>
            <p className="text-xs text-text-secondary dark:text-dm-text-secondary">
              HR Administrator
            </p>
          </div>
        </div>

        <button
          onClick={handleLogout}
          className="flex items-center space-x-2 p-2 rounded-md text-text-secondary dark:text-dm-text-secondary hover:bg-background dark:hover:bg-dm-background focus:outline-none focus:ring-2 focus:ring-red-500"
          aria-label="Logout"
        >
          <LogoutIcon className="w-5 h-5" />
          <span className="hidden lg:block text-sm font-medium">Logout</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
