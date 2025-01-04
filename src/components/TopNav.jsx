import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

function TopNav() {
  return (
    <div className="sticky top-2 left-1/2 pb-4 pr-2 w-[98%] max-w-md z-50">
      <div className="bg-gray-900/90 backdrop-blur-lg rounded-2xl shadow-sm border border-gray-800">
        <div className="container mx-auto px-4 py-3">
          <div className="flex justify-between items-center">
            <Link 
              to="/" 
              className="font-['Bebas_Neue'] text-3xl tracking-wider relative group"
            >
              <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-purple-400 bg-clip-text text-transparent">
                BOO
              </span>
              <span className="text-blue-400 group-hover:animate-pulse px-0">⚡</span>
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                T
              </span>
            </Link>
            <Link to="/login" className="btn btn-ghost btn-circle text-gray-300 hover:text-white">
              <FaUser className="text-xl" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopNav;