const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 shadow mt-auto">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <p className="text-gray-500 dark:text-gray-400">
            © {new Date().getFullYear()} Task Manager. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
              Privacy
            </a>
            <a href="#" className="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;