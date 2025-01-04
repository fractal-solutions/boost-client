import { FaWallet, FaChartLine, FaExchangeAlt } from 'react-icons/fa';

function Dashboard() {
  const mockBalance = 5000;
  const mockInvestments = 2500;

  return (
    <div className="space-y-[6px]">
      <h1 className="text-xl font-light tracking-tight">Welcome to Boost</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
        <div className="card card-compact bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md">
          <div className="card-body">
            <div className="flex items-center gap-4">
              <FaWallet className="text-lg opacity-90" />
              <div>
                <h2 className="font-display text-lg opacity-90">Balance</h2>
                <p className="font-display text-2xl font-bold">${mockBalance}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card card-compact bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-md" >
          <div className="card-body">
            <div className="flex items-center gap-4">
              <FaChartLine className="text-lg opacity-90" />
              <div>
                <h2 className="font-display text-lg opacity-90">Investments</h2>
                <p className="font-display text-2xl font-bold">${mockInvestments}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card card-compact bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-md">
          <div className="card-body">
            <div className="flex items-center gap-4">
              <FaExchangeAlt className="text-lg opacity-90" />
              <div>
                <h2 className="font-display text-lg opacity-90">Transactions</h2>
                <p className="text-sm mt-1">View History →</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;