import React from 'react';

interface ExamplePhotosProps {
  onUsePhoto: (file: File) => void;
}

export const ExamplePhotos: React.FC<ExamplePhotosProps> = ({ onUsePhoto }) => {
  const examples = [
    {
      src: new URL('./examplePhotos/manmodel1.jpg', import.meta.url).toString(),
      name: 'manmodel1.jpg',
      alt: 'Demo portrait 1',
    },
    {
      src: new URL('./examplePhotos/manmodel2.jpg', import.meta.url).toString(),
      name: 'manmodel2.jpg',
      alt: 'Demo portrait 2',
    },
  ];

  const useAsUpload = async (src: string, name: string) => {
    const res = await fetch(src);
    const blob = await res.blob();
    const file = new File([blob], name, { type: blob.type || 'image/jpeg' });
    onUsePhoto(file);
  };

  return (
    <section className="w-full mt-4">
      <div className="flex items-center justify-between mb-2">
        <h4 className="text-sm font-semibold text-slate-600 uppercase tracking-wider">Try A Demo Photo</h4>
        <span className="text-xs text-slate-400">No upload needed</span>
      </div>
      <div className="grid grid-cols-2 gap-3">
        {examples.map((ex) => (
          <div key={ex.name} className="bg-white border border-slate-200 rounded-lg overflow-hidden shadow-sm">
            <img src={ex.src} alt={ex.alt} className="w-full h-40 object-cover" />
            <button
              onClick={() => useAsUpload(ex.src, ex.name)}
              className="w-full text-center bg-slate-900 text-white text-sm font-semibold py-2 hover:bg-slate-800"
            >
              Use This Photo
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

