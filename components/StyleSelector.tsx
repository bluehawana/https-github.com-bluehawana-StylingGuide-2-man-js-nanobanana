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
      <h3 className="text-xl font-bold text-center text-slate-700 mb-6">Choose Your Scene</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => onSelectOption(option)}
            className={`flex flex-col h-full p-4 border rounded-lg text-left transition-all duration-200 transform hover:scale-105
              ${selectedOption?.id === option.id 
                ? 'border-blue-500 bg-blue-50 ring-2 ring-blue-500 shadow-lg' 
                : 'border-slate-300 bg-white hover:border-blue-400 hover:shadow-md'}`}
            aria-pressed={selectedOption?.id === option.id}
          >
            <p className={`font-bold ${selectedOption?.id === option.id ? 'text-blue-700' : 'text-slate-800'}`}>{option.name}</p>
            <p className="text-sm text-slate-500 mt-1">{option.description}</p>
          </button>
        ))}
      </div>
    </div>
  );
};