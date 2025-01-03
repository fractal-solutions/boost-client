import { useState } from 'react';
import CurrentInvestments from '../components/CurrentInvestments';

function Invest() {
  const [showInvestments, setShowInvestments] = useState(false);
  
  const mockInvestments = [
    {
      id: 1,
      name: "SME Growth Fund A",
      return: "12%",
      duration: "12 months",
      minInvestment: 1000,
      available: 50000
    },
    {
      id: 2,
      name: "Retail Business Fund",
      return: "10%",
      duration: "6 months",
      minInvestment: 500,
      available: 25000
    },
    {
      id: 3,
      name: "Tech Startup Fund",
      return: "15%",
      duration: "24 months",
      minInvestment: 2000,
      available: 100000
    }
  ];

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-medium tracking-tight">Invest</h1>
        <button 
          className="btn btn-ghost btn-sm"
          onClick={() => setShowInvestments(true)}
        >
          My Portfolio
        </button>
      </div>
      
      <div className="grid grid-cols-1 gap-4">
        {mockInvestments.map((investment) => (
          <div key={investment.id} className="card bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-glass">
            <div className="card-body">
              <h2 className="font-display text-xl font-medium">{investment.name}</h2>
              <div className="grid grid-cols-2 gap-4 my-4">
                <div className="bg-white/10 backdrop-blur-lg p-3 rounded-lg">
                  <p className="text-sm opacity-80">Return Rate</p>
                  <p className="text-2xl font-bold">{investment.return}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-lg p-3 rounded-lg">
                  <p className="text-sm opacity-80">Duration</p>
                  <p className="text-2xl font-bold">{investment.duration}</p>
                </div>
              </div>
              <div className="flex justify-between items-center mt-2">
                <div>
                  <p className="text-sm opacity-80">Min Investment</p>
                  <p className="text-lg font-medium">${investment.minInvestment}</p>
                </div>
                <button className="btn bg-white/20 hover:bg-white/30 border-0 text-white">
                  Invest Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <CurrentInvestments 
        isOpen={showInvestments} 
        onClose={() => setShowInvestments(false)} 
      />
    </div>
  );
}

export default Invest;