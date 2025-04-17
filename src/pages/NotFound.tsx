import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    // Force dark mode
    document.documentElement.classList.add('dark');
    
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-ofceab-dark">
      <div 
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(30, 174, 219, 0.1) 0%, transparent 50%), 
                           radial-gradient(circle at 75% 75%, rgba(15, 160, 206, 0.1) 0%, transparent 50%)`,
        }}
      />
      <div className="text-center glass-card p-12 rounded-xl">
        <h1 className="text-6xl font-bold mb-4 text-gradient">404</h1>
        <p className="text-xl text-gray-300 mb-6">Oops! Page not found</p>
        <a 
          href="/" 
          className="px-5 py-3 rounded-md bg-gradient-ofceab hover:opacity-90 transition-opacity font-medium inline-block"
        >
          Return to Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;
