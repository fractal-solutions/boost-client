import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

function TopNav() {
  return (
    <div className="sticky top-0 navbar bg-white/80 backdrop-blur-lg z-50 border-b border-gray-100">
      <div className="container mx-auto">
        <div className="flex-1">
          <Link to="/" className="text-2xl font-black tracking-tighter bg-gradient-to-r from-blue-600 to-blue-500 bg-clip-text text-transparent">
            BOO<span className="text-blue-500">⚡</span>T
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