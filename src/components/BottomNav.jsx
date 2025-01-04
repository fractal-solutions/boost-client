import { Link, useLocation } from 'react-router-dom';
import { FaWallet, FaChartLine, FaHome } from 'react-icons/fa';

function BottomNav() {
  const location = useLocation();
    
  return (
    <div className="sticky bottom-1  justify-items-center">
      <nav className="flex items-center gap-3  bg-black/90 backdrop-blur-md rounded-xl px-2 py-1 shadow-sm border border-gray-900">
        <Link 
          to="/" 
          className={`flex items-center justify-center w-9 h-9 rounded-full transition-all ${
            location.pathname === '/' ? 'text-blue-400 bg-gray-800' : 'text-gray-400 hover:text-gray-300 hover:bg-gray-800/50'
          }`}
        >
          <FaHome className="text-2xl" />
        </Link>
        <Link 
          to="/wallet" 
          className={`flex items-center justify-center w-9 h-9 rounded-full transition-all ${
            location.pathname === '/wallet' ? 'text-blue-400 bg-gray-800' : 'text-gray-400 hover:text-gray-300 hover:bg-gray-800/50'
          }`}
        >
          <FaWallet className="text-2xl" />
        </Link>
        <Link 
          to="/invest" 
          className={`flex items-center justify-center w-9 h-9 rounded-full transition-all ${
            location.pathname === '/invest' ? 'text-blue-400 bg-gray-800' : 'text-gray-400 hover:text-gray-300 hover:bg-gray-800/50'
          }`}
        >
          <FaChartLine className="text-2xl" />
        </Link>
      </nav>
    </div>
  );
}

export default BottomNav;