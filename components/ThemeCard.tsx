import React from 'react';
import { StyleOption } from '../types';

interface ThemeCardProps {
  option: StyleOption;
  selected: boolean;
  onSelect: () => void;
}

const itemIcons = ['🧥','👖','👔','👞'];

export const ThemeCard: React.FC<ThemeCardProps> = ({ option, selected, onSelect }) => {
  const palette = option.palette ?? ['#1F2937', '#F9FAFB', '#9CA3AF', '#111827'];
  return (
    <button
      onClick={onSelect}
      className={`flex flex-col h-full p-4 border rounded-xl transition-all duration-200 transform hover:scale-[1.02] text-left focus:outline-none focus:ring-2
        ${selected ? 'border-blue-500 bg-blue-50 ring-blue-400 shadow-lg' : 'border-slate-300 bg-white hover:border-blue-400 hover:shadow-md'}`}
      aria-pressed={selected}
      aria-label={option.name}
      title={option.name}
    >
      <div className="flex items-center justify-between">
        <div className="text-2xl" aria-hidden>{option.emoji ?? '👔'}</div>
        <div className="flex items-center gap-1" aria-hidden>
          {itemIcons.map((i) => (
            <span key={i} className="text-lg leading-none">{i}</span>
          ))}
        </div>
      </div>

      <div className="flex gap-2 my-3" aria-hidden>
        {palette.slice(0,4).map((c, idx) => (
          <span key={idx} className="h-5 w-5 rounded-full border border-slate-200" style={{ backgroundColor: c }} />
        ))}
      </div>

      <div>
        <p className={`font-bold ${selected ? 'text-blue-700' : 'text-slate-800'}`}>{option.name}</p>
        <p className="text-xs text-slate-500 mt-1">{option.description}</p>
      </div>
    </button>
  );
};

