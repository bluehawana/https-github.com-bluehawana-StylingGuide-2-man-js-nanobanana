
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-white mt-12 py-6">
      <div className="container mx-auto text-center text-slate-500">
        <p>&copy; {new Date().getFullYear()} AI Men's Style Advisor. All Rights Reserved.</p>
        <p className="text-sm mt-1">Powered by Google Gemini</p>
      </div>
    </footer>
  );
};
