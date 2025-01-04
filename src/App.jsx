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
      <div className="min-h-screen animated-gradient gradient-background">
      <div className="min-h-screen bg-gradient-to-r from-cyan-50 via-blue-50 to-sky-100 items-center backdrop-blur-sm flex flex-col">
         <div className="blur-behind-nav"></div>
          <TopNav />
          <main className="container mx-auto px-4 py-1 pt-0 pb-28 flex-1 w-[97%] max-w-[840px] overflow-y-auto">
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