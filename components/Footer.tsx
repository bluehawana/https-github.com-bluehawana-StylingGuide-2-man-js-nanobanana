
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 mt-12 py-8">
      <div className="container mx-auto text-center">
        <p className="text-slate-400 font-medium">&copy; {new Date().getFullYear()} <span className="text-blue-400">STYLE GENIUS</span>. All Rights Reserved.</p>
        <p className="text-sm text-slate-500 mt-2">Powered by Google Gemini AI • Transforming Men's Fashion</p>
      </div>
    </footer>
  );
};
