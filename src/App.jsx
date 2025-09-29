import React, { createContext, useState, useEffect, useContext } from 'react';
import { HashRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import TaskManagement from './components/TaskManagement';
import PerformanceManagement from './components/PerformanceManagement';
import Events from './components/Events';
import Users from './components/Users';

// Theme Context
const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});

export const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('theme') || 'light';
    }
    return 'light';
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

const AppContent = () => {
  const location = useLocation();

  const getPageTitle = (pathname) => {
    const path = pathname.split('/').pop() || 'dashboard';
    if (path === 'tasks') return 'Task Management';
    if (path === 'performance') return 'Performance Management';
    return path.charAt(0).toUpperCase() + path.slice(1);
  };

  return (
    <div className="flex h-screen bg-background dark:bg-dm-background text-text-primary dark:text-dm-text-primary">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header pageTitle={getPageTitle(location.pathname)} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-background dark:bg-dm-background p-6">
          <div className="animate-fade-in">
            <Routes>
              <Route path="/" element={<Navigate to="/dashboard" replace />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/tasks" element={<TaskManagement />} />
              <Route path="/performance" element={<PerformanceManagement />} />
              <Route path="/events" element={<Events />} />
              <Route path="/users" element={<Users />} />
            </Routes>
          </div>
        </main>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <HashRouter>
        <AppContent />
      </HashRouter>
    </ThemeProvider>
  );
};

export default App;
