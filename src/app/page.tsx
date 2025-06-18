'use client';

import { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setMessage('');

    if (!email || !password) {
      setError('Please fill in both fields.');
      return;
    }

    setLoading(true);

    // Simulate API login
    setTimeout(() => {
      setLoading(false);
      setMessage('🎉 Login successful!');
      setEmail('');
      setPassword('');
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white/20 backdrop-blur-lg border border-white/30 text-white shadow-xl rounded-2xl p-8 w-full max-w-md space-y-6"
      >
        <h2 className="text-3xl font-bold text-center">🔐 Login</h2>

        {error && <p className="text-red-200 text-sm text-center">{error}</p>}
        {message && <p className="text-green-200 text-sm text-center">{message}</p>}

        <div>
          <label className="block text-sm mb-1">Email</label>
          <input
            type="email"
            placeholder="you@example.com"
            className="w-full px-4 py-2 bg-white/30 border border-white/40 text-white placeholder-white/70 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm mb-1">Password</label>
          <input
            type="password"
            placeholder="••••••••"
            className="w-full px-4 py-2 bg-white/30 border border-white/40 text-white placeholder-white/70 rounded-xl focus:outline-none focus:ring-2 focus:ring-pink-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 bg-gradient-to-r from-pink-500 to-yellow-400 text-white font-semibold rounded-xl hover:from-pink-600 hover:to-yellow-500 transition disabled:opacity-50"
        >
          {loading ? '⏳ Logging in...' : '🚀 Sign In'}
        </button>

        <p className="text-sm text-center text-white/80">
          Don’t have an account? <a href="#" className="underline hover:text-white">Sign up</a>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
