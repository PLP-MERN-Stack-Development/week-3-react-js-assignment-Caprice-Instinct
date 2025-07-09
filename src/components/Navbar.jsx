import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Button from './Button';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className="bg-white dark:bg-gray-800 shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-xl font-bold text-gray-900 dark:text-white">
              Task Manager
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              Home
            </Link>
            <Link to="/api-data" className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white">
              API Data
            </Link>
            <Button
              variant="secondary"
              size="sm"
              onClick={toggleTheme}
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;