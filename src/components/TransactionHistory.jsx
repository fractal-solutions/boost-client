import { useState } from 'react';
import { FaTimes, FaArrowUp, FaArrowDown, FaStore, FaUser } from 'react-icons/fa';

function TransactionHistory({ isOpen, onClose }) {
  const mockTransactions = [
    { id: 1, type: 'send', amount: -50, recipient: 'John Doe', date: '2024-03-15' },
    { id: 2, type: 'receive', amount: 100, sender: 'Jane Smith', date: '2024-03-14' },
    { id: 3, type: 'payment', amount: -75, merchant: 'Coffee Shop', date: '2024-03-13' },
    { id: 4, type: 'receive', amount: 200, sender: 'Bob Johnson', date: '2024-03-12' },
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
        
        <h3 className="text-2xl font-medium tracking-tight mb-6">Transaction History</h3>
        
        <div className="space-y-4 pb-4">
          {mockTransactions.map((tx) => (
            <div key={tx.id} className="bg-gradient-to-r from-gray-50 to-gray-100 p-4 rounded-xl">
              <div className="flex justify-between items-start">
                <div>
                  <p className="font-medium">
                    {tx.type === 'send' ? tx.recipient :
                     tx.type === 'receive' ? tx.sender :
                     tx.merchant}
                  </p>
                  <p className="text-sm text-gray-500">{tx.date}</p>
                </div>
                <p className={`font-medium ${
                  tx.amount > 0 ? 'text-green-500' : 'text-red-500'
                }`}>
                  {tx.amount > 0 ? '+' : ''}{tx.amount}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm -z-10" onClick={onClose}></div>
    </div>
  );
}

export default TransactionHistory;