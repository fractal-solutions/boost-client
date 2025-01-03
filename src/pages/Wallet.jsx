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
    <div className="space-y-6">
      <h1 className="text-3xl font-medium tracking-tight">Wallet</h1>
      <div className="card bg-gradient-to-r from-primary to-accent text-white shadow-glass">
        <div className="card-body">
          <h2 className="font-display text-lg opacity-80">Available Balance</h2>
          <p className="font-display text-3xl font-bold">{balance}</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button 
          className="btn btn-ghost flex flex-col items-center gap-2 hover:shadow-neon transition-all py-6"
          onClick={() => setShowSendMoney(true)}
        >
          <FaUserFriends className="text-2xl text-primary-light" />
          <span className="text-xs">Send</span>
        </button>
        <button 
          className="btn btn-ghost flex flex-col items-center gap-2 hover:shadow-neon transition-all py-6"
          onClick={() => setShowQRScanner(true)}
        >
          <FaQrcode className="text-2xl text-primary-light" />
          <span className="text-xs">Scan</span>
        </button>
        <button 
          className="btn btn-ghost flex flex-col items-center gap-2 hover:shadow-neon transition-all py-6"
          onClick={() => setShowPayment(true)}
        >
          <FaStore className="text-2xl text-primary-light" />
          <span className="text-xs">Pay</span>
        </button>
        <button 
          className="btn btn-ghost flex flex-col items-center gap-2 hover:shadow-neon transition-all py-6"
          onClick={() => setShowHistory(true)}
        >
          <FaHistory className="text-2xl text-primary-light" />
          <span className="text-xs">History</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="card bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-glass">
          <div className="card-body">
            <div className="flex items-center gap-4">
              <FaAddressCard className="text-2xl opacity-80" />
              <div>
                <h2 className="font-display text-lg opacity-80">Wallet Address</h2>
                <p className="text-sm font-medium">0x742d35Cc6634C0532925a3b844Bc454e4438f44e</p>
              </div>
            </div>
          </div>
        </div>

        <div className="card bg-gradient-to-r from-purple-500 to-purple-600 text-white shadow-glass">
          <div className="card-body">
            <div className="flex items-center gap-4">
              <FaExchangeAlt className="text-2xl opacity-80" />
              <div>
                <h2 className="font-display text-lg opacity-80">Recent Activity</h2>
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