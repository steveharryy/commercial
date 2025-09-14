import React, { useState } from 'react';
import { Menu, X, ChevronDown, Sun, Moon, GraduationCap } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { isDark, toggleTheme } = useTheme();

  const courseDropdownItems = [
    { label: 'Class 9-10', href: '#courses-9-10' },
    { label: 'Class 11-12', href: '#courses-11-12' },
    { label: 'English', href: '#english' },
    { label: 'Mathematics', href: '#mathematics' },
    { label: 'Science', href: '#science' },
    { label: 'Commerce', href: '#commerce' },
    { label: 'Humanities', href: '#humanities' }
  ];

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About Us', href: '#about' },
    { 
      label: 'Courses', 
      href: '#courses',
      dropdown: courseDropdownItems
    },
    { label: 'Faculty', href: '#faculty' },
    { label: 'Results & Achievers', href: '#results' },
    { label: 'Life @ YKC', href: '#gallery' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Resources', href: '#resources' },
    { label: 'Contact Us', href: '#contact' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border-b border-gray-200 dark:border-slate-700 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-gradient-to-br from-amber-400 to-amber-600 rounded-lg">
              <GraduationCap className="h-6 w-6 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-gray-900 dark:text-white">YKC</span>
              <span className="text-xs text-gray-600 dark:text-gray-300 hidden sm:block">Since 2005</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                {item.dropdown ? (
                  <div
                    className="relative"
                    onMouseEnter={() => setActiveDropdown(item.label)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    <button className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-200">
                      {item.label}
                      <ChevronDown className="ml-1 h-4 w-4" />
                    </button>
                    {activeDropdown === item.label && (
                      <div className="absolute top-full left-0 mt-1 w-48 bg-white dark:bg-slate-800 rounded-lg shadow-lg border border-gray-200 dark:border-slate-700 py-2">
                        {item.dropdown.map((dropdownItem) => (
                          <a
                            key={dropdownItem.label}
                            href={dropdownItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-slate-700 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-200"
                          >
                            {dropdownItem.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="px-3 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-200"
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-2">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-all duration-200"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-all duration-200"
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200 dark:border-slate-700">
            <div className="space-y-1">
              {navItems.map((item) => (
                <div key={item.label}>
                  <a
                    href={item.href}
                    className="block px-4 py-2 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-amber-600 dark:hover:text-amber-400 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-all duration-200"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </a>
                  {item.dropdown && (
                    <div className="ml-4 mt-1 space-y-1">
                      {item.dropdown.map((dropdownItem) => (
                        <a
                          key={dropdownItem.label}
                          href={dropdownItem.href}
                          className="block px-4 py-1 text-sm text-gray-600 dark:text-gray-300 hover:text-amber-600 dark:hover:text-amber-400 transition-colors duration-200"
                          onClick={() => setIsOpen(false)}
                        >
                          {dropdownItem.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;