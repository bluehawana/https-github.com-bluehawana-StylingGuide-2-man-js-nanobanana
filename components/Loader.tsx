import React from 'react';

interface LoaderProps {
  isPremium: boolean;
}

export const Loader: React.FC<LoaderProps> = ({ isPremium }) => {
  return (
    <div className="flex flex-col items-center justify-center my-10">
      <div className="w-16 h-16 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
      <p className="mt-4 text-slate-600 font-semibold">Our AI stylist is working...</p>
      {isPremium ? (
        <p className="text-slate-500 text-sm">Getting your results quickly!</p>
      ) : (
        <p className="text-slate-500 text-sm">Free users may experience longer wait times. Upgrade for faster styling!</p>
      )}
    </div>
  );
};