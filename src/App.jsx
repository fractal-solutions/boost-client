import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TopNav from './components/TopNav';
import BottomNav from './components/BottomNav';
import Dashboard from './pages/Dashboard';
import Invest from './pages/Invest';
import Wallet from './pages/Wallet';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <div className="min-h-screen gradient-background">
        <div className="min-h-screen bg-white/50 items-center backdrop-blur-lg flex flex-col">
          <div className="blur-behind-nav"></div>
          <TopNav />
          <main className="container mx-auto px-4 py-8 pt-3 pb-28 flex-1 overflow-y-auto">
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/wallet" element={<Wallet />} />
              <Route path="/invest" element={<Invest />} />
              <Route path="/login" element={<Login />} />
            </Routes>
          </main>
          <BottomNav />
        </div>
      </div>
    </Router>
  );
}

export default App;