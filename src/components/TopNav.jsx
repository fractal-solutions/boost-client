import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

function TopNav() {
  return (
    <div className="sticky top-1 pb-4 w-[98%] max-w-[1080px] z-50"> 
      <div className="bg-black/90 backdrop-blur-lg rounded-2xl shadow-sm border border-gray-800">
        <div className="container mx-auto px-4 -py-1">
          <div className="flex justify-between items-center">
            <Link 
              to="/" 
              className="font-['Bebas_Neue'] text-3xl tracking-wider relative group flex items-center"
            >
              <span className="bg-gradient-to-r from-blue-400 via-blue-300 to-purple-400 bg-clip-text text-transparent -mr-1">
                BOO
              </span>
              <span className="text-blue-400 motion-safe:animate-pulse z-10 -mx-2">⚡</span>
              <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent -ml-1">
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