import { FaTimes } from 'react-icons/fa';

function CurrentInvestments({ isOpen, onClose }) {
  const mockInvestments = [
    { id: 1, name: "SME Growth Fund A", amount: 2000, return: "12%", maturity: "2024-12-15" },
    { id: 2, name: "Retail Business Fund", amount: 1500, return: "10%", maturity: "2024-09-20" },
    { id: 3, name: "Tech Startup Fund", amount: 3000, return: "15%", maturity: "2024-11-30" },
  ];

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      <div className="modal-box bg-white/95 backdrop-blur-lg max-w-md w-full p-6 rounded-2xl shadow-xl border border-gray-100 max-h-[90vh] overflow-y-auto">
        <button 
          onClick={onClose} 
          className="absolute right-4 top-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
        >
          <FaTimes className="text-gray-500" />
        </button>
        
        <h3 className="text-2xl font-medium tracking-tight mb-6">My Portfolio</h3>
        
        <div className="space-y-4 pb-4">
          {mockInvestments.map((inv) => (
            <div key={inv.id} className="bg-gradient-to-r from-blue-500 to-purple-500 p-6 rounded-xl text-white">
              <h4 className="text-xl font-medium mb-4">{inv.name}</h4>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-lg p-3 rounded-lg">
                  <p className="text-sm opacity-80">Invested</p>
                  <p className="text-2xl font-bold">${inv.amount}</p>
                </div>
                <div className="bg-white/10 backdrop-blur-lg p-3 rounded-lg">
                  <p className="text-sm opacity-80">Return</p>
                  <p className="text-2xl font-bold">{inv.return}</p>
                </div>
              </div>
              <div className="mt-4 bg-white/10 backdrop-blur-lg p-3 rounded-lg">
                <p className="text-sm opacity-80">Maturity Date</p>
                <p className="text-lg font-medium">{inv.maturity}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm -z-10" onClick={onClose}></div>
    </div>
  );
}

export default CurrentInvestments;