import './App.css';
import { useAuth } from './hooks/useAuth';

function App() {
  const { isAuthenticated, user, loading, login, logout } = useAuth();

  const handleLogin = () => {
    login({ email: 'demo@example.com', password: 'password' });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-lufga-bold text-primary mb-4">
          JawlahA -APP  
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Fresh Start - Ready to Build
        </p>
        
        <div className="bg-white rounded-lg shadow-md p-8 max-w-md mb-6">
          <h2 className="text-2xl font-lufga-medium text-gray-800 mb-4">
            Setup Complete ✅
          </h2>
          <div className="space-y-2 text-left">
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>Tailwind CSS</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>i18n (Arabic & English)</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>RTL Support</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>Redux Auth Store</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-green-500">✓</span>
              <span>React Router</span>
            </div>
          </div>
        </div>

        {/* Auth Demo */}
        <div className="bg-white rounded-lg shadow-md p-8 max-w-md">
          <h2 className="text-2xl font-lufga-medium text-gray-800 mb-4">
            Auth Demo 🔐
          </h2>
          
          {isAuthenticated ? (
            <div className="space-y-4">
              <div className="text-center">
                <p className="text-green-600 font-medium">Welcome, {user?.name}!</p>
                <p className="text-sm text-gray-500">{user?.email}</p>
              </div>
              <button 
                onClick={logout}
                className="w-full btn-secondary"
                disabled={loading}
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <p className="text-gray-600">You are not logged in</p>
              <button 
                onClick={handleLogin}
                className="w-full btn-primary"
                disabled={loading}
              >
                {loading ? 'Logging in...' : 'Login Demo'}
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
