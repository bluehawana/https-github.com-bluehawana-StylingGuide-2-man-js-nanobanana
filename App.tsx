import React, { useState, useCallback, useMemo } from 'react';
import { Header } from './components/Header';
import { ImageUploader } from './components/ImageUploader';
import { StyleSelector } from './components/StyleSelector';
import { ResultDisplay } from './components/ResultDisplay';
import { Loader } from './components/Loader';
import { Footer } from './components/Footer';
import { styleImage } from './services/geminiService';
import { StyleOption } from './types';
import { styleOptions } from './constants';

const IS_PREMIUM_USER = false;
const FREE_TIER_LIMIT = 3;

const fileToGenerativePart = async (file: File) => {
  const base64EncodedDataPromise = new Promise<string>((resolve) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      if (typeof reader.result === 'string') {
        resolve(reader.result.split(',')[1]);
      }
    };
    reader.readAsDataURL(file);
  });

  return {
    inlineData: {
      data: await base64EncodedDataPromise,
      mimeType: file.type,
    },
  };
};

const App: React.FC = () => {
  const [uploadedFile, setUploadedFile] = useState<File | null>(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string | null>(null);
  const [selectedStyle, setSelectedStyle] = useState<StyleOption | null>(styleOptions[0]);
  const [generatedImageUrl, setGeneratedImageUrl] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [generationCount, setGenerationCount] = useState<number>(0);

  const isLimitReached = useMemo(() => {
    return !IS_PREMIUM_USER && generationCount >= FREE_TIER_LIMIT;
  }, [generationCount]);

  const handleImageUpload = (file: File) => {
    setUploadedFile(file);
    setUploadedImageUrl(URL.createObjectURL(file));
    setGeneratedImageUrl(null);
    setError(null);
  };

  const handleGenerateClick = useCallback(async () => {
    if (!uploadedFile || !selectedStyle) {
      setError("Please upload an image and select a style.");
      return;
    }
    
    if (isLimitReached) {
      setError("You've reached your limit of free generations. Please upgrade for unlimited styling!");
      return;
    }

    setIsLoading(true);
    setError(null);
    setGeneratedImageUrl(null);

    try {
      if (!IS_PREMIUM_USER) {
        // Simulate longer wait time for free users
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
      const imagePart = await fileToGenerativePart(uploadedFile);
      const result = await styleImage(imagePart, selectedStyle.prompt);
      setGeneratedImageUrl(result);
      setGenerationCount(prev => prev + 1); // Increment count on success
    } catch (err) {
      console.error(err);
      setError(err instanceof Error ? err.message : "An unknown error occurred.");
    } finally {
      setIsLoading(false);
    }
  }, [uploadedFile, selectedStyle, isLimitReached]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col">
      <Header isPremium={IS_PREMIUM_USER} />
      <main className="flex-grow container mx-auto p-4 md:p-8 flex flex-col items-center">
        <div className="w-full max-w-5xl bg-white rounded-2xl shadow-lg p-6 md:p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-700">See Yourself in a New Light</h2>
            <p className="text-slate-500 mt-2">1. Upload a clear photo. 2. Choose a scene. 3. Let our AI create your new look!</p>
          </div>
          
          <ImageUploader onImageUpload={handleImageUpload} uploadedImageUrl={uploadedImageUrl} />

          {uploadedFile && (
            <>
              <StyleSelector
                options={styleOptions}
                selectedOption={selectedStyle}
                onSelectOption={setSelectedStyle}
              />
              {!IS_PREMIUM_USER && (
                <div className="text-center text-slate-500 mb-6 -mt-4">
                  <p>You have <span className="font-bold text-slate-700">{FREE_TIER_LIMIT - generationCount}</span> free generations remaining.</p>
                </div>
              )}
              <div className="text-center mt-8">
                <button
                  onClick={handleGenerateClick}
                  disabled={isLoading || isLimitReached}
                  className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg shadow-md hover:bg-blue-700 transition-all duration-300 disabled:bg-slate-400 disabled:cursor-not-allowed transform hover:scale-105"
                  aria-label={isLoading ? 'Styling in progress' : isLimitReached ? 'Generation limit reached' : 'Generate My Look'}
                >
                  {isLoading ? 'Styling...' : isLimitReached ? 'Limit Reached' : 'Generate My Look'}
                </button>
                {isLimitReached && (
                  <p className="text-sm text-blue-600 mt-4 font-semibold">Upgrade to Premium for unlimited generations and faster results!</p>
                )}
              </div>
            </>
          )}

          {error && <div className="mt-6 text-center text-red-500 bg-red-100 p-3 rounded-lg">{error}</div>}
          
          {isLoading && <Loader isPremium={IS_PREMIUM_USER} />}
          
          {generatedImageUrl && !isLoading && (
            <ResultDisplay originalImage={uploadedImageUrl!} newImage={generatedImageUrl} />
          )}

        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;