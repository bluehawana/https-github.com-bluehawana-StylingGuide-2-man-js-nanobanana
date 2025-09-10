import React, { useState, useCallback, useMemo } from 'react';
import { Header } from './components/Header';
import { ImageUploader } from './components/ImageUploader';
import { StyleSelector } from './components/StyleSelector';
import { ResultDisplay } from './components/ResultDisplay';
import { Loader } from './components/Loader';
import { Footer } from './components/Footer';
import { StyleShowcase } from './components/StyleShowcase';
import { TransformationShowcase } from './components/TransformationShowcase';
import { styleImage } from './services/geminiService';
import { StyleOption } from './types';
import { styleOptions } from './constants';
import modelImg from './components/uploads/model.jpg';
import casualImg from './components/uploads/tocasual.png';
import businessImg from './components/uploads/tobusiness.png';

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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-800 flex flex-col">
      <Header isPremium={IS_PREMIUM_USER} />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 px-4">
        {/* Background transformation images - 3 photos with heads visible */}
        <div className="absolute inset-0 flex opacity-50">
          <div className="flex-1 bg-cover bg-top" style={{ backgroundImage: `url(${modelImg})` }}></div>
          <div className="flex-1 bg-cover bg-top" style={{ backgroundImage: `url(${casualImg})` }}></div>
          <div className="flex-1 bg-cover bg-top" style={{ backgroundImage: `url(${businessImg})` }}></div>
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 animate-pulse"></div>
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-6xl font-black text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">LEVEL UP</span>
            <span className="text-white"> YOUR STYLE</span>
          </h2>
          <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
            Upload your photo and let AI transform you into a style icon. 
            See yourself in designer outfits, professional looks, or casual street style.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <div className="bg-slate-800/50 backdrop-blur px-4 py-2 rounded-full text-slate-300 flex items-center gap-2">
              <span className="text-green-400">✓</span> Instant Style Transformation
            </div>
            <div className="bg-slate-800/50 backdrop-blur px-4 py-2 rounded-full text-slate-300 flex items-center gap-2">
              <span className="text-green-400">✓</span> Professional Fashion Advice
            </div>
            <div className="bg-slate-800/50 backdrop-blur px-4 py-2 rounded-full text-slate-300 flex items-center gap-2">
              <span className="text-green-400">✓</span> AI-Powered Precision
            </div>
          </div>
        </div>
      </section>

      {/* Style Showcase - Only show when no image uploaded */}
      {!uploadedFile && <StyleShowcase />}

      <main className="flex-grow container mx-auto p-4 md:p-8 flex flex-col items-center">
        <div className="w-full max-w-5xl bg-slate-800/90 backdrop-blur-xl rounded-3xl shadow-2xl p-6 md:p-10 border border-slate-700">
          <div className="text-center mb-10">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">Transform Your Look in 3 Steps</h3>
            <div className="flex justify-center gap-8 text-slate-400">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-blue-400">1</span>
                <span>Upload Photo</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-cyan-400">2</span>
                <span>Choose Style</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-green-400">3</span>
                <span>Get Results</span>
              </div>
            </div>
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
                <div className="text-center text-slate-400 mb-6 -mt-4">
                  <p>You have <span className="font-bold text-cyan-400">{FREE_TIER_LIMIT - generationCount}</span> free generations remaining.</p>
                </div>
              )}
              <div className="text-center mt-8">
                <button
                  onClick={handleGenerateClick}
                  disabled={isLoading || isLimitReached}
                  className="group bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-4 px-12 rounded-full shadow-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 disabled:from-slate-600 disabled:to-slate-700 disabled:cursor-not-allowed transform hover:scale-105 flex items-center gap-3 mx-auto"
                  aria-label={isLoading ? 'Styling in progress' : isLimitReached ? 'Generation limit reached' : 'Generate My Look'}
                >
                  {isLoading ? (
                    <>
                      <span className="animate-spin">⚡</span>
                      <span>Creating Your New Look...</span>
                    </>
                  ) : isLimitReached ? (
                    <>
                      <span>🔒</span>
                      <span>Limit Reached</span>
                    </>
                  ) : (
                    <>
                      <span className="group-hover:rotate-180 transition-transform duration-500">✨</span>
                      <span>Generate My Look</span>
                    </>
                  )}
                </button>
                {isLimitReached && (
                  <p className="text-sm text-cyan-400 mt-4 font-semibold">Upgrade to Premium for unlimited generations and faster results!</p>
                )}
              </div>
            </>
          )}

          {error && <div className="mt-6 text-center text-red-400 bg-red-500/10 border border-red-500/20 p-4 rounded-xl backdrop-blur">{error}</div>}
          
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