import { useState } from 'react';
import { FaQrcode, FaUserFriends, FaStore, FaHistory, FaAddressCard, FaExchangeAlt } from 'react-icons/fa';
import SendMoneyModal from '../components/SendMoneyModal';
import TransactionHistory from '../components/TransactionHistory';
import QRScannerModal from '../components/QRScannerModal';
import PaymentModal from '../components/PaymentModal';

function Wallet() {
  const [balance] = useState('$1,234.56');
  const [showQRScanner, setShowQRScanner] = useState(false);
  const [showSendMoney, setShowSendMoney] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [showHistory, setShowHistory] = useState(false);

  return (
    <div className="space-y-[6px]">
      <h1 className="text-xl font-light tracking-tight">Wallet</h1>
      <div className="card card-normal bg-gradient-to-r from-primary to-accent text-white shadow-md">
        <div className="card-body">
          <h2 className="font-display text-lg opacity-90 -p-2">Available Balance</h2>
          <p className="font-display text-xl font-bold">{balance}</p>
        </div>
      </div>

      <div className="flex justify-between items-center gap-6 overflow-x-auto py-2 -px-2 lg:px-4">
        <button 
          className="btn btn-ghost flex-col items-center min-w-[30px] hover:shadow-neon transition-all"
          onClick={() => setShowSendMoney(true)}
        >
          <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mb-1">
            <FaUserFriends className="text-xl text-blue-500" />
          </div>
          <span className="text-xs">Send</span>
        </button>
        <button 
          className="btn btn-ghost flex-col items-center min-w-[30px] hover:shadow-neon transition-all"
          onClick={() => setShowQRScanner(true)}
        >
          <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mb-1">
            <FaQrcode className="text-xl text-blue-500" />
          </div>
          <span className="text-xs">Scan</span>
        </button>
        <button 
          className="btn btn-ghost flex-col items-center min-w-[30px] hover:shadow-neon transition-all"
          onClick={() => setShowPayment(true)}
        >
          <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mb-1">
            <FaStore className="text-xl text-blue-500" />
          </div>
          <span className="text-xs">Pay</span>
        </button>
        <button 
          className="btn btn-ghost flex-col items-center min-w-[30px] hover:shadow-neon transition-all"
          onClick={() => setShowHistory(true)}
        >
          <div className="w-8 h-8 rounded-full bg-blue-50 flex items-center justify-center mb-1">
            <FaHistory className="text-xl text-blue-500" />
          </div>
          <span className="text-xs">History</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="card card-compact bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-md">
          <div className="card-body">
            <div className="flex items-center gap-4">
              <FaAddressCard className="text-2xl opacity-90" />
              <div>
                <h2 className="font-display text-lg opacity-90">Wallet Address</h2>
                <p className="text-sm font-medium">0x742d35Cc6634C0532925a3b844Bc454e4438f44e</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card card-compact bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-md">
          <div className="card-body">
            <div className="flex items-center gap-4">
              <FaExchangeAlt className="text-2xl opacity-90" />
              <div>
                <h2 className="font-display text-lg opacity-90">Recent Activity</h2>
                <p className="text-sm">Last transaction: 2 hours ago</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SendMoneyModal isOpen={showSendMoney} onClose={() => setShowSendMoney(false)} />
      <QRScannerModal isOpen={showQRScanner} onClose={() => setShowQRScanner(false)} />
      <PaymentModal isOpen={showPayment} onClose={() => setShowPayment(false)} />
      <TransactionHistory isOpen={showHistory} onClose={() => setShowHistory(false)} />
    </div>
  );
}

export default Wallet;