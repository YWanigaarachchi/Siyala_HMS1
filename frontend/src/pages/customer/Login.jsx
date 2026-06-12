import React from 'react';

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center pt-20 px-8 bg-stone-50 text-slate-800">
      <div className="w-full max-w-md bg-white p-8 rounded-3xl shadow-xl border border-slate-100">
        <h2 className="text-3xl font-serif font-bold text-center text-emerald-950 mb-8">Welcome Back</h2>
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
            <input type="email" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">Password</label>
            <input type="password" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500" placeholder="••••••••" />
          </div>
          <button type="button" className="w-full py-3 bg-amber-500 text-emerald-950 font-bold tracking-wider rounded-xl shadow-md hover:bg-amber-400 transition-colors">
            LOG IN
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
