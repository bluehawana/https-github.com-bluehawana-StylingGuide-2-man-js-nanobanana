import React from 'react';

interface HeaderProps {
  isPremium: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isPremium }) => {
  return (
    <header className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 shadow-2xl">
      <div className="container mx-auto px-6 py-6 flex justify-between items-center">
        <div>
          <h1 className="text-4xl font-black text-white tracking-tight flex items-center gap-3">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">STYLE</span>
            <span className="text-white">GENIUS</span>
            <span className="text-2xl">👔</span>
          </h1>
          <p className="text-slate-300 text-sm font-medium mt-1">Transform Your Look • Master Your Style • Own Your Image</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="hidden md:flex items-center gap-2 text-slate-400 text-sm">
            <span>🎯</span>
            <span>AI-Powered Fashion</span>
          </div>
          {isPremium ? (
            <span className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-slate-900 text-sm font-bold px-6 py-3 rounded-full shadow-lg flex items-center gap-2">
              <span>⚡</span> PREMIUM MEMBER
            </span>
          ) : (
            <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold px-6 py-3 rounded-full hover:shadow-xl transition-all hover:scale-105 flex items-center gap-2">
              <span>🚀</span> Go Premium
            </button>
          )}
        </div>
      </div>
    </header>
  );
};