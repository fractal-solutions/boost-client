import { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center">
      <div className="card bg-white/90 backdrop-blur-lg shadow-glass w-full max-w-md border border-gray-100">
        <div className="card-body">
          <h2 className="font-['Space_Grotesk'] text-3xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Login to Boost
          </h2>
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium text-gray-700">Email</span>
              </label>
              <input
                type="email"
                placeholder="your@email.com"
                className="input bg-white/50 backdrop-blur-sm border-gray-200 w-full focus:border-blue-500 focus:ring-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium text-gray-700">Password</span>
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="input bg-white/50 backdrop-blur-sm border-gray-200 w-full focus:border-blue-500 focus:ring-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <button 
              type="submit" 
              className="btn w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0 hover:from-blue-600 hover:to-purple-600"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;