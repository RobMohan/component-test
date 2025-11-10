import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function DocsLayout({ children }) {
  const location = useLocation();
  
  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/button', label: 'Button' },
    { path: '/card', label: 'Card' },
    { path: '/stat-card', label: 'Stat Card' },
  ];
  
  const isActive = (path) => {
    if (path === '/') {
      return location.pathname === '/';
    }
    return location.pathname.startsWith(path);
  };
  
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Left Sidebar Navigation */}
      <div className="fixed left-0 top-0 h-full w-64 bg-white border-r border-gray-200 overflow-y-auto">
        <div className="p-6">
          <Link to="/" className="block mb-8">
            <h1 className="text-2xl font-bold mb-1">AI Design System</h1>
            <p className="text-sm text-gray-600">Component Documentation</p>
          </Link>
          
          <nav className="space-y-1">
            <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-4">
              Components
            </div>
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block w-full text-left px-4 py-2.5 rounded-lg transition-colors ${
                  isActive(item.path)
                    ? 'bg-primary text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <span className="font-medium">{item.label}</span>
              </Link>
            ))}
          </nav>

          <div className="mt-8 pt-8 border-t border-gray-200 space-y-3">
            <a 
              href="https://github.com/RobMohan/component-test" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 px-4 transition-colors"
            >
              <span>GitHub</span>
              <span>→</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/robmohan" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 px-4 transition-colors"
            >
              <span>LinkedIn</span>
              <span>→</span>
            </a>
            <a 
              href="mailto:rob@robertmohandesign.com"
              className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 px-4 transition-colors"
            >
              <span>Email</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="ml-64">
        {children}
      </div>
    </div>
  );
}