import React from 'react';
import { NavLink } from 'react-router-dom';
import { DashboardIcon, TaskIcon, PerformanceIcon, EventIcon, UserIcon, LogoIcon } from './icons';

const NavItem = ({ to, icon, label }) => {
  const baseClasses =
    "flex items-center px-4 py-3 text-text-secondary dark:text-dm-text-secondary rounded-lg transition-colors duration-200 font-medium";
  const hoverClasses =
    "hover:bg-primary-light dark:hover:bg-dm-card hover:text-primary dark:hover:text-primary-light";
  const activeClasses = "bg-primary text-white dark:text-white";

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `${baseClasses} ${hoverClasses} ${isActive ? activeClasses : ''}`
      }
    >
      {icon}
      <span className="ml-4">{label}</span>
    </NavLink>
  );
};

const Sidebar = () => {
  return (
    <aside className="w-64 flex-shrink-0 bg-card dark:bg-dm-card border-r border-border dark:border-dm-border p-4 flex-col hidden lg:flex">
      <div className="flex items-center px-2 mb-8">
        <LogoIcon className="w-8 h-8 text-primary" />
        <h1 className="text-2xl font-bold ml-3 text-text-primary dark:text-dm-text-primary">
          DOVIDA
        </h1>
      </div>
      <nav className="flex flex-col space-y-2">
        <NavItem to="/dashboard" icon={<DashboardIcon className="w-5 h-5" />} label="Dashboard" />
        <NavItem to="/tasks" icon={<TaskIcon className="w-5 h-5" />} label="Task Management" />
        <NavItem to="/performance" icon={<PerformanceIcon className="w-5 h-5" />} label="Performance" />
        <NavItem to="/events" icon={<EventIcon className="w-5 h-5" />} label="Events" />
        <NavItem to="/users" icon={<UserIcon className="w-5 h-5" />} label="Users" />
      </nav>
      <div className="mt-auto p-4 bg-background dark:bg-dm-background rounded-lg text-center">
        <p className="text-sm text-text-secondary dark:text-dm-text-secondary">
          © 2024 DOVIDA HRMS
        </p>
        <p className="text-xs text-slate-400 dark:text-slate-500 mt-1">
          All rights reserved.
        </p>
      </div>
    </aside>
  );
};

export default Sidebar;
