import { FaWallet, FaChartLine, FaExchangeAlt } from 'react-icons/fa';

function Dashboard() {
  const mockBalance = 5000;
  const mockInvestments = 2500;

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-medium tracking-tight">Welcome to Boost</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-glass">
          <div className="card-body">
            <div className="flex gap-4">
              <FaWallet className="text-2xl opacity-80" />
              <div>
                <h2 className="font-display text-lg opacity-80">Balance</h2>
                <p className="font-display text-3xl font-bold">${mockBalance}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-glass" >
          <div className="card-body">
            <div className="flex items-center gap-4">
              <FaChartLine className="text-3xl opacity-80" />
              <div>
                <h2 className="font-display text-lg opacity-80">Investments</h2>
                <p className="font-display text-4xl font-bold">${mockInvestments}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card bg-gradient-to-r from-emerald-500 to-emerald-600 text-white shadow-glass">
          <div className="card-body">
            <div className="flex items-center gap-4">
              <FaExchangeAlt className="text-3xl opacity-80" />
              <div>
                <h2 className="font-display text-lg opacity-80">Transactions</h2>
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