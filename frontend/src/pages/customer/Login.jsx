import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Login = () => {
  return (
    <div className="min-h-screen flex bg-emerald-950 text-white selection:bg-amber-600 selection:text-white">
      {/* ======================================= */}
      {/* LEFT SIDE PANEL (IMAGE SHOWCASE)        */}
      {/* ======================================= */}
      <div 
        className="hidden lg:block lg:w-1/2 relative bg-cover bg-center"
        style={{ backgroundImage: `url('/hero_bg.png')` }}
      >
        {/* Overlays */}
        <div className="absolute inset-0 bg-emerald-950/60 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-emerald-950 via-transparent to-transparent"></div>

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col justify-between p-16 z-10">
          {/* Logo Branding */}
          <Link to="/" className="flex items-center gap-3 cursor-pointer self-start">
            <div className="flex items-center justify-center w-10 h-10 bg-amber-600 rounded-full shadow-lg">
              <span className="text-xl font-bold tracking-wider text-emerald-950">S</span>
            </div>
            <span className="text-2xl font-semibold tracking-widest uppercase text-white font-serif">Siyala</span>
          </Link>

          {/* Welcome Message */}
          <div className="max-w-md">
            <h1 className="text-5xl font-serif font-light leading-tight mb-6">
              Experience the Warmth of <br />
              <span className="font-semibold text-amber-500">Sri Lankan Hospitality</span>
            </h1>
            <p className="text-emerald-100/70 leading-relaxed font-light">
              From Kandy's misty peaks to Hikkaduwa's sun-kissed shores, log in to customize and manage your luxury sanctuary booking.
            </p>
          </div>

          {/* Footer Copy */}
          <p className="text-xs text-emerald-100/40">
            &copy; {new Date().getFullYear()} Siyala Hotels & Resorts. All rights reserved.
          </p>
        </div>
      </div>

      {/* ======================================= */}
      {/* RIGHT SIDE PANEL (FORM SCREEN)          */}
      {/* ======================================= */}
      <div className="w-full lg:w-1/2 min-h-screen flex flex-col justify-center items-center p-8 md:p-16 relative">
        
        {/* Floating Back to Website */}
        <Link 
          to="/" 
          className="absolute top-8 left-8 md:left-16 flex items-center gap-2 text-sm font-semibold text-emerald-100/70 hover:text-amber-400 transition-colors group"
        >
          <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          Back to website
        </Link>

        {/* Form Container (Glassmorphic card) */}
        <div className="w-full max-w-md bg-white/[0.03] border border-white/10 p-8 md:p-10 rounded-3xl backdrop-blur-xl shadow-2xl flex flex-col">
          
          {/* Logo and Heading */}
          <div className="text-center mb-8">
            <div className="lg:hidden inline-flex items-center justify-center w-12 h-12 bg-amber-600 rounded-full shadow-md mb-4 text-emerald-950 font-bold text-2xl">
              S
            </div>
            <h2 className="text-3xl font-serif font-bold text-white">Welcome Back</h2>
            <p className="text-xs text-emerald-100/60 mt-2">Enter your credentials to access your Siyala account</p>
          </div>

          {/* Form */}
          <form className="space-y-5">
            <div>
              <label className="block text-xs font-bold tracking-wider text-emerald-300 uppercase mb-2">Email Address</label>
              <input 
                type="email" 
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-sm text-white placeholder-white/20" 
                placeholder="you@example.com" 
                required
              />
            </div>
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-xs font-bold tracking-wider text-emerald-300 uppercase">Password</label>
                <a href="#" className="text-xs font-medium text-amber-500 hover:text-amber-400 transition-colors">Forgot password?</a>
              </div>
              <input 
                type="password" 
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-all text-sm text-white placeholder-white/20" 
                placeholder="••••••••" 
                required
              />
            </div>

            <div className="flex items-center">
              <input 
                id="remember-me" 
                type="checkbox" 
                className="h-4 w-4 text-amber-600 border-white/10 rounded focus:ring-amber-500 accent-amber-500 bg-white/5" 
              />
              <label htmlFor="remember-me" className="ml-2 block text-xs text-emerald-100/60">
                Remember me for 30 days
              </label>
            </div>

            <button 
              type="submit" 
              className="w-full py-3.5 bg-amber-500 text-emerald-950 font-bold tracking-wider rounded-xl shadow-md hover:bg-amber-400 hover:scale-[1.02] active:scale-[0.98] transition-all text-sm"
            >
              LOG IN
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-[#04241e] px-3 text-emerald-100/40 font-medium tracking-wider">Or continue with</span>
            </div>
          </div>

          {/* Social Logins */}
          <div className="grid grid-cols-2 gap-4">
            {/* Google Button */}
            <button 
              type="button" 
              className="flex items-center justify-center gap-2 py-3 border border-white/10 rounded-xl hover:bg-white/5 active:scale-95 transition-all text-sm font-semibold text-white bg-white/[0.02]"
            >
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                <path
                  fill="#4285F4"
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                />
                <path
                  fill="#34A853"
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                />
                <path
                  fill="#FBBC05"
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
                />
                <path
                  fill="#EA4335"
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                />
              </svg>
              Google
            </button>

            {/* Facebook Button */}
            <button 
              type="button" 
              className="flex items-center justify-center gap-2 py-3 border border-white/10 rounded-xl hover:bg-white/5 active:scale-95 transition-all text-sm font-semibold text-white bg-white/[0.02]"
            >
              <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="#1877F2">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              Facebook
            </button>
          </div>

          {/* Redirect Link */}
          <p className="text-center text-xs text-emerald-100/50 mt-8">
            Don't have an account?{' '}
            <Link to="/register" className="font-bold text-amber-500 hover:text-amber-400 transition-colors">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
