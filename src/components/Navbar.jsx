import { Link } from 'react-router-dom';
import { FaWallet, FaChartLine, FaUser } from 'react-icons/fa';

function Navbar() {
  return (
    <div className="navbar bg-base-100 shadow-lg">
      <div className="container mx-auto">
        <div className="flex-1">
          <Link to="/" className="text-2xl font-bold text-primary">Boost</Link>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 gap-2">
            <li>
              <Link to="/wallet" className="flex items-center gap-2">
                <FaWallet />
                Wallet
              </Link>
            </li>
            <li>
              <Link to="/invest" className="flex items-center gap-2">
                <FaChartLine />
                Invest
              </Link>
            </li>
            <li>
              <Link to="/login" className="flex items-center gap-2">
                <FaUser />
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Navbar;