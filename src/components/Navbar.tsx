import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Heart, Sun, Moon, Volume2, VolumeX, User, Settings } from 'lucide-react';
import { useAppContext } from '../contexts/AppContext';

const Navbar: React.FC = () => {
  const { user, darkMode, setDarkMode, ambience, setAmbience, retakeQuiz } = useAppContext();
  const [isOpen, setIsOpen] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' },
    { path: '/feedback', label: 'Feedback' },
  ];

  // Add role-specific nav items
  if (user.role) {
    if (user.role === 'Pet Owner') {
      navItems.splice(1, 0, 
        { path: '/pet-owner', label: 'Dashboard' },
        { path: '/products', label: 'Products' }
      );
    } else if (user.role === 'Veterinarian') {
      navItems.splice(1, 0, { path: '/veterinarian', label: 'Dashboard' });
    } else if (user.role === 'Shelter') {
      navItems.splice(1, 0, { path: '/shelter', label: 'Dashboard' });
    }
  }

  const ambienceOptions = [
    { value: 'None', label: '🔇 None' },
    { value: 'Cafe', label: '☕ Café' },
    { value: 'Park', label: '🌳 Park' },
    { value: 'Fireplace', label: '🔥 Fireplace' }
  ];

  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className="bg-white/90 dark:bg-gray-900/90 backdrop-blur-md border-b border-cream-200 dark:border-gray-700 sticky top-0 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <motion.div 
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
                className="w-8 h-8 bg-gradient-to-r from-mauve-400 to-mint-400 rounded-full flex items-center justify-center"
              >
                <Heart className="w-4 h-4 text-white" />
              </motion.div>
              <span className="font-nunito font-bold text-xl text-gray-800 dark:text-white">
                FurEver Care
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-poppins font-medium transition-all duration-200 hover:text-mauve-500 ${
                    location.pathname === item.path
                      ? 'text-mauve-600 dark:text-mauve-400'
                      : 'text-gray-600 dark:text-gray-300'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* User Info & Controls */}
            <div className="flex items-center space-x-4">
              {user.name && (
                <motion.div 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="hidden sm:flex items-center space-x-2 bg-cream-100 dark:bg-gray-800 px-3 py-1 rounded-full"
                >
                  <User className="w-4 h-4 text-mauve-600 dark:text-mauve-400" />
                  <span className="font-poppins text-sm text-gray-700 dark:text-gray-300">
                    {user.name}
                  </span>
                  <span className="text-xs bg-mauve-500 text-white px-2 py-0.5 rounded-full">
                    {user.role?.split(' ')[0]}
                  </span>
                </motion.div>
              )}

              {/* Settings Toggle */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setShowSettings(!showSettings)}
                className="p-2 rounded-full bg-cream-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-cream-200 dark:hover:bg-gray-700 transition-colors"
              >
                <Settings className="w-5 h-5" />
              </motion.button>

              {/* Mobile menu button */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setIsOpen(!isOpen)}
                className="md:hidden p-2 rounded-lg bg-cream-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300"
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white dark:bg-gray-900 border-t border-cream-200 dark:border-gray-700"
            >
              <div className="px-4 py-2 space-y-2">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block py-2 font-poppins transition-colors ${
                      location.pathname === item.path
                        ? 'text-mauve-600 dark:text-mauve-400'
                        : 'text-gray-600 dark:text-gray-300'
                    }`}
                  >
                    {item.label}
                  </Link>
                ))}
                {user.name && (
                  <div className="py-2 border-t border-cream-200 dark:border-gray-700">
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Welcome, {user.name}!
                    </div>
                    <div className="text-xs text-mauve-600 dark:text-mauve-400">
                      {user.role}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Settings Panel */}
      <AnimatePresence>
        {showSettings && (
          <motion.div
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 300 }}
            className="fixed top-16 right-4 bg-white dark:bg-gray-900 rounded-lg shadow-xl border border-cream-200 dark:border-gray-700 p-4 w-64 z-50"
          >
            <h3 className="font-nunito font-semibold text-lg mb-4 text-gray-800 dark:text-white">
              Settings
            </h3>
            
            {/* Dark Mode Toggle */}
            <div className="flex items-center justify-between mb-4">
              <span className="font-poppins text-gray-700 dark:text-gray-300">Dark Mode</span>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setDarkMode(!darkMode)}
                className={`p-2 rounded-lg transition-colors ${
                  darkMode ? 'bg-mauve-500 text-white' : 'bg-cream-200 text-gray-600'
                }`}
              >
                {darkMode ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              </motion.button>
            </div>

            {/* Ambience Selector */}
            <div className="mb-4">
              <label className="block font-poppins text-gray-700 dark:text-gray-300 mb-2">
                Background Ambience
              </label>
              <select
                value={ambience}
                onChange={(e) => setAmbience(e.target.value)}
                className="w-full p-2 rounded-lg border border-cream-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
              >
                {ambienceOptions.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Retake Quiz Button */}
            {user.name && (
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  retakeQuiz();
                  setShowSettings(false);
                  window.location.href = '/';
                }}
                className="w-full py-2 px-4 bg-mauve-500 text-white rounded-lg font-poppins font-medium hover:bg-mauve-600 transition-colors"
              >
                Retake Quiz
              </motion.button>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Settings Overlay */}
      {showSettings && (
        <div
          className="fixed inset-0 bg-black bg-opacity-20 z-40"
          onClick={() => setShowSettings(false)}
        />
      )}
    </>
  );
};

export default Navbar;