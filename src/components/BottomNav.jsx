import { Link, useLocation } from 'react-router-dom';
import { HomeIcon, WalletIcon, ChartBarIcon } from '@heroicons/react/24/outline';

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
          <HomeIcon className="w-6 h-6" />
        </Link>
        <Link 
          to="/wallet" 
          className={`flex items-center justify-center w-9 h-9 rounded-full transition-all ${
            location.pathname === '/wallet' ? 'text-blue-400 bg-gray-800' : 'text-gray-400 hover:text-gray-300 hover:bg-gray-800/50'
          }`}
        >
          <WalletIcon className="w-6 h-6" />
        </Link>
        <Link 
          to="/invest" 
          className={`flex items-center justify-center w-9 h-9 rounded-full transition-all ${
            location.pathname === '/invest' ? 'text-blue-400 bg-gray-800' : 'text-gray-400 hover:text-gray-300 hover:bg-gray-800/50'
          }`}
        >
          <ChartBarIcon className="w-6 h-6" />
        </Link>
      </nav>
    </div>
  );
}

export default BottomNav;