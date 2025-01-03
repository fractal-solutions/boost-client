import { FaTimes, FaQrcode } from 'react-icons/fa';

function QRScannerModal({ isOpen, onClose }) {
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
        
        <h3 className="text-2xl font-medium tracking-tight mb-6">Scan QR Code</h3>
        
        <div className="space-y-4">
          <div className="aspect-square bg-gray-100 rounded-xl flex items-center justify-center">
            <FaQrcode className="text-6xl text-gray-400" />
            {/* QR Scanner component would go here */}
          </div>
          
          <p className="text-center text-gray-600 text-sm mt-4">
            Position the QR code within the frame to scan
          </p>
        </div>
      </div>
      <div className="fixed inset-0 bg-black/20 backdrop-blur-sm -z-10" onClick={onClose}></div>
    </div>
  );
}

export default QRScannerModal; 