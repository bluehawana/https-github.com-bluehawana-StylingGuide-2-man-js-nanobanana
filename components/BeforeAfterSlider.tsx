import React, { useMemo, useRef, useState } from 'react';

interface BeforeAfterSliderProps {
  beforeSrc: string;
  afterSrc: string;
  altBefore?: string;
  altAfter?: string;
}

export const BeforeAfterSlider: React.FC<BeforeAfterSliderProps> = ({
  beforeSrc,
  afterSrc,
  altBefore = 'Original image',
  altAfter = 'Generated image',
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState<number>(50); // percent

  const handleMove = (clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = Math.min(Math.max(clientX - rect.left, 0), rect.width);
    setPosition((x / rect.width) * 100);
  };

  const onDrag = (e: React.MouseEvent | React.TouchEvent) => {
    if ('touches' in e) {
      handleMove(e.touches[0].clientX);
    } else {
      handleMove(e.clientX);
    }
  };

  const clipStyle = useMemo(() => ({
    clipPath: `inset(0 ${100 - position}% 0 0)`,
  }), [position]);

  return (
    <div className="relative w-full max-w-3xl select-none" ref={containerRef}
      onMouseMove={(e) => e.buttons === 1 && onDrag(e)}
      onTouchMove={onDrag}
    >
      <img src={beforeSrc} alt={altBefore} className="w-full h-auto rounded-lg shadow-lg" />
      <img src={afterSrc} alt={altAfter} className="w-full h-auto rounded-lg shadow-lg absolute inset-0" style={clipStyle} />

      <div className="absolute inset-y-0" style={{ left: `${position}%` }}>
        <div className="h-full w-0.5 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.2)]" />
        <button
          className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white text-slate-800 border border-slate-200 rounded-full shadow px-3 py-1 text-xs font-semibold"
          onMouseDown={(e) => e.preventDefault()} // allow dragging with container
          onTouchStart={(e) => e.preventDefault()}
        >
          Slide
        </button>
      </div>

      <input
        aria-label="Compare before and after"
        className="absolute bottom-3 left-1/2 -translate-x-1/2 w-1/2"
        type="range"
        min={0}
        max={100}
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
      />
    </div>
  );
};

