import { useState } from 'react';
import { FaTimes, FaStore } from 'react-icons/fa';

function PaymentModal({ isOpen, onClose }) {
  const [amount, setAmount] = useState('');
  const [merchant, setMerchant] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      <div className="modal-box bg-white/95 max-w-md w-full p-6 rounded-2xl shadow-xl border border-gray-100">
        <button 
          onClick={onClose} 
          className="absolute right-4 top-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
        >
          <FaTimes className="text-gray-500" />
        </button>
        
        <h3 className="text-2xl font-medium tracking-tight mb-6">Make Payment</h3>
        
        <div className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="text-sm text-gray-600">Merchant</span>
            </label>
            <input
              type="text"
              placeholder="Enter merchant name"
              className="input input-bordered bg-gray-50 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
              value={merchant}
              onChange={(e) => setMerchant(e.target.value)}
            />
          </div>
          
          <div className="form-control">
            <label className="label">
              <span className="text-sm text-gray-600">Amount</span>
            </label>
            <input
              type="number"
              placeholder="Enter amount"
              className="input input-bordered bg-gray-50 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          
          <button className="btn w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white border-0 mt-6">
            Pay Now
          </button>
        </div>
      </div>
      <div className="fixed inset-0 bg-black/20 backdrop-blur-md -z-10" onClick={onClose}></div>
    </div>
  );
}

export default PaymentModal; 