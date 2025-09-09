import React from 'react';

interface HeaderProps {
  isPremium: boolean;
}

export const Header: React.FC<HeaderProps> = ({ isPremium }) => {
  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-800 tracking-tight">
            AI Men's Style Advisor
          </h1>
          <p className="text-slate-500">See Yourself in Any Scene</p>
        </div>
        <div>
          {isPremium ? (
            <span className="bg-yellow-400 text-yellow-900 text-sm font-bold px-4 py-2 rounded-full shadow">
              PREMIUM
            </span>
          ) : (
            <button className="bg-blue-100 text-blue-700 font-semibold px-4 py-2 rounded-lg hover:bg-blue-200 transition-colors">
              Upgrade
            </button>
          )}
        </div>
      </div>
    </header>
  );
};