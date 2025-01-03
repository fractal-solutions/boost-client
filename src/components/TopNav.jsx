import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

function TopNav() {
  return (
    <div className="sticky top-0 navbar bg-white/80 backdrop-blur-lg z-50 border-b border-gray-100">
      <div className="container mx-auto">
        <div className="flex-1">
          <Link 
            to="/" 
            className="font-['Bebas_Neue'] text-3xl tracking-wider relative group"
            style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.1)' }}
          >
            <span className="bg-gradient-to-r from-blue-600 via-blue-500 to-purple-500 bg-clip-text text-transparent">
              BOO
            </span>
            <span className="text-blue-500 group-hover:animate-pulse px-0">⚡</span>
            <span className="bg-gradient-to-r from-purple-500 to-blue-600 bg-clip-text text-transparent">
              T
            </span>
          </Link>
        </div>
        <div className="flex-none">
          <Link to="/login" className="btn btn-ghost btn-circle">
            <FaUser className="text-xl text-gray-600" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TopNav;