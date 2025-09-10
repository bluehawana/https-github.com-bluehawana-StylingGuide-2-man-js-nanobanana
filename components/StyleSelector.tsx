import React from 'react';
import { StyleOption } from '../types';

interface StyleSelectorProps {
  options: StyleOption[];
  selectedOption: StyleOption | null;
  onSelectOption: (option: StyleOption) => void;
}

export const StyleSelector: React.FC<StyleSelectorProps> = ({ options, selectedOption, onSelectOption }) => {
  return (
    <div className="my-8">
      <h3 className="text-2xl font-bold text-center text-white mb-6">Choose Your Style Vision</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => onSelectOption(option)}
            className={`flex flex-col h-full p-4 border-2 rounded-xl text-left transition-all duration-200 transform hover:scale-105
              ${selectedOption?.id === option.id 
                ? 'border-blue-400 bg-blue-500/20 ring-2 ring-blue-400 shadow-lg shadow-blue-500/20' 
                : 'border-slate-600 bg-slate-700/50 hover:border-blue-400 hover:bg-slate-700/70 hover:shadow-md'}`}
            aria-pressed={selectedOption?.id === option.id}
          >
            <p className={`font-bold ${selectedOption?.id === option.id ? 'text-blue-300' : 'text-white'}`}>{option.name}</p>
            <p className={`text-sm ${selectedOption?.id === option.id ? 'text-blue-200' : 'text-slate-400'} mt-1 mb-2`}>{option.description}</p>
            {option.hashtags && option.hashtags.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-auto">
                {option.hashtags.slice(0, 2).map((tag, i) => (
                  <span key={i} className="text-xs text-cyan-400 opacity-70">{tag}</span>
                ))}
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
};