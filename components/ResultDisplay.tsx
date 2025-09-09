import React from 'react';

interface ResultDisplayProps {
  originalImage: string;
  newImage: string;
}

export const ResultDisplay: React.FC<ResultDisplayProps> = ({ originalImage, newImage }) => {
  return (
    <div className="mt-10 text-center">
      <h3 className="text-2xl font-bold text-slate-700 mb-8">Your New Scene is Ready!</h3>
      <div className="relative inline-block">
        <a href={newImage} download="ai-styled-scene.png" title="Download Image">
          <img 
            src={newImage} 
            alt="AI Generated Scene" 
            className="rounded-lg shadow-xl mx-auto max-h-[60vh] w-auto transition-transform transform hover:scale-105" 
          />
        </a>
        
        <div className="absolute -bottom-5 -left-5 bg-white p-1 rounded-full shadow-lg" aria-label="Original face used for generation">
          <div className="flex items-center space-x-2 bg-slate-100 rounded-full pr-3">
             <img src={originalImage} alt="Original Face" className="w-12 h-12 rounded-full object-cover border-2 border-white" />
             <span className="text-xs font-semibold text-slate-600 tracking-wider">SOURCE</span>
          </div>
        </div>
      </div>
    </div>
  );
};
