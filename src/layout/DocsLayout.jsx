import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import Logo from '../components/Logo';

export default function DocsLayout({ children }) {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(true);
  
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
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 p-2 bg-white rounded-lg shadow-md hover:bg-gray-50 transition-colors lg:hidden"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar Overlay for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Left Sidebar Navigation */}
      <div 
        className={`fixed left-0 top-0 h-full bg-white border-r border-gray-200 overflow-y-auto z-40 transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        } ${isOpen ? 'w-64' : 'lg:w-20'}`}
      >
        <div className="p-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 mb-8">
            <Logo size={isOpen ? 'default' : 'small'} />
            {isOpen && (
              <div>
                <h1 className="text-xl font-bold">AI Design System</h1>
                <p className="text-xs text-gray-600">Component Docs</p>
              </div>
            )}
          </Link>

          {/* Desktop Toggle Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="hidden lg:flex items-center justify-center w-full p-2 mb-4 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            aria-label="Toggle sidebar"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          
          <nav className="space-y-1">
            {isOpen && (
              <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2 px-4">
                Components
              </div>
            )}
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => window.innerWidth < 1024 && setIsOpen(false)}
                className={`flex items-center ${isOpen ? 'justify-start' : 'justify-center'} w-full px-4 py-2.5 rounded-lg transition-colors ${
                  isActive(item.path)
                    ? 'bg-primary text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
                title={!isOpen ? item.label : undefined}
              >
                <span className={`font-medium ${isOpen ? '' : 'text-sm'}`}>
                  {isOpen ? item.label : item.label.charAt(0)}
                </span>
              </Link>
            ))}
          </nav>

          {isOpen && (
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
                href="https://www.linkedin.com/in/robertmohan" 
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
          )}
        </div>
      </div>

      {/* Main Content Area */}
      <div className={`transition-all duration-300 ${isOpen ? 'lg:ml-64' : 'lg:ml-20'} ml-0`}>
        {children}
      </div>
    </div>
  );
}