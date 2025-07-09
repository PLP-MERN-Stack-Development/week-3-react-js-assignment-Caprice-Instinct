const Card = ({ children, className = '' }) => {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 animate-slide-up ${className}`}>
      {children}
    </div>
  );
};

export default Card;