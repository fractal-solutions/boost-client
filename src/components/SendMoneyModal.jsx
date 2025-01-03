import { useState } from 'react';
import { FaTimes, FaUser, FaQrcode } from 'react-icons/fa';

function SendMoneyModal({ isOpen, onClose }) {
  const [amount, setAmount] = useState('');
  const [recipient, setRecipient] = useState('');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center">
      <div className="modal-box bg-white/95 backdrop-blur-lg max-w-md w-full p-6 rounded-2xl shadow-xl border border-gray-100">
        <button 
          onClick={onClose} 
          className="absolute right-4 top-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
        >
          <FaTimes className="text-gray-500" />
        </button>
        
        <h3 className="text-2xl font-medium tracking-tight mb-6">Send Money</h3>
        
        <div className="space-y-4">
          <div className="form-control">
            <label className="label">
              <span className="text-sm text-gray-600">Recipient</span>
            </label>
            <input
              type="text"
              placeholder="Enter username or phone"
              className="input input-bordered bg-gray-50 border-gray-200 focus:border-blue-500 focus:ring-blue-500"
              value={recipient}
              onChange={(e) => setRecipient(e.target.value)}
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
            Send Money
          </button>
        </div>
      </div>
      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm -z-10" onClick={onClose}></div>
    </div>
  );
}

export default SendMoneyModal; 