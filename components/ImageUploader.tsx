import React, { useCallback, useState } from 'react';

interface ImageUploaderProps {
  onImageUpload: (file: File) => void;
  uploadedImageUrl: string | null;
}

export const ImageUploader: React.FC<ImageUploaderProps> = ({ onImageUpload, uploadedImageUrl }) => {
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      onImageUpload(e.target.files[0]);
    }
  };

  const handleDrop = useCallback((e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      onImageUpload(e.dataTransfer.files[0]);
    }
  }, [onImageUpload]);

  const handleDragOver = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDragEnter = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLLabelElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  return (
    <div className="w-full mb-8">
      <label
        htmlFor="image-upload"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        className={`flex justify-center items-center w-full h-64 border-2 border-dashed rounded-2xl cursor-pointer transition-all duration-300
          ${isDragging ? 'border-blue-400 bg-blue-500/10' : 'border-slate-600 hover:border-blue-400 bg-slate-700/50 hover:bg-slate-700/70'}`}
      >
        {uploadedImageUrl ? (
          <img src={uploadedImageUrl} alt="Uploaded preview" className="h-full w-full object-contain rounded-lg p-2" />
        ) : (
          <div className="text-center">
            <div className="text-5xl mb-4">📸</div>
            <p className="text-lg font-bold text-white mb-2">Drop your photo here</p>
            <p className="text-sm text-slate-400 mb-1">or click to browse</p>
            <p className="text-xs text-slate-500">PNG, JPG, WEBP (MAX. 5MB)</p>
          </div>
        )}
      </label>
      <input id="image-upload" type="file" className="hidden" accept="image/*" onChange={handleFileChange} />
    </div>
  );
};