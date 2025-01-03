import { Link, useLocation } from 'react-router-dom';
import { FaWallet, FaChartLine, FaHome } from 'react-icons/fa';

function BottomNav() {
  const location = useLocation();
    
  return (
    <div className="sticky bottom-6  justify-items-center">
      <nav className="flex items-center gap-6 bg-white/90 backdrop-blur-lg rounded-full px-6 py-4 shadow-lg border border-gray-100">
        <Link 
          to="/" 
          className={`flex items-center justify-center w-12 h-12 rounded-full transition-all ${
            location.pathname === '/' ? 'text-blue-500 bg-blue-50' : 'text-gray-400 hover:bg-gray-50'
          }`}
        >
          <FaHome className="text-2xl" />
        </Link>
        <Link 
          to="/wallet" 
          className={`flex items-center justify-center w-12 h-12 rounded-full transition-all ${
            location.pathname === '/wallet' ? 'text-blue-500 bg-blue-50' : 'text-gray-400 hover:bg-gray-50'
          }`}
        >
          <FaWallet className="text-2xl" />
        </Link>
        <Link 
          to="/invest" 
          className={`flex items-center justify-center w-12 h-12 rounded-full transition-all ${
            location.pathname === '/invest' ? 'text-blue-500 bg-blue-50' : 'text-gray-400 hover:bg-gray-50'
          }`}
        >
          <FaChartLine className="text-2xl" />
        </Link>
      </nav>
    </div>
  );
}

export default BottomNav;