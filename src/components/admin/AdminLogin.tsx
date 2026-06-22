import { useState } from 'react';

interface AdminLoginProps {
  onLogin: (password: string) => boolean;
}

export const AdminLogin = ({ onLogin }: AdminLoginProps) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onLogin(password)) {
      setPassword('');
      setError('');
    } else {
      setError('Invalid password');
      setPassword('');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center px-4">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-serif font-bold text-gray-900 mb-2">Brideful Admin</h1>
        <p className="text-gray-600 mb-8">Manage your products and content</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Admin Password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Enter admin password"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rose-500 focus:border-transparent outline-none"
            />
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-rose-600 text-white py-2 rounded-lg hover:bg-rose-700 transition font-medium"
          >
            Login
          </button>
        </form>

        <p className="text-xs text-gray-500 text-center mt-6">
          Demo password: admin123
        </p>
      </div>
    </div>
  );
};
