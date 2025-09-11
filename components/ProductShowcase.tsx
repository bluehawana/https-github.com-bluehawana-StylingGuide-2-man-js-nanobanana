import React from 'react';
import monecardImg from './uploads/monecard.png';

export const ProductShowcase: React.FC = () => {
  return (
    <section className="py-16 px-4 bg-slate-800/50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">FEATURED PRODUCT</span>
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto">
            Complete your style transformation with premium accessories
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto bg-slate-800/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 md:p-12 border border-slate-700">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Smart Tracking Card
              </h3>
              <div className="text-2xl md:text-3xl font-bold text-cyan-400 mb-6">
                299 kr
              </div>
              <p className="text-lg text-slate-300 mb-6 leading-relaxed">
                Ultra-slim Bluetooth tracking card that fits perfectly in your wallet. 
                Works with Apple Find My network for easy location tracking of your valuables.
              </p>
              
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-slate-300">
                  <span className="text-green-400">✓</span>
                  <span>Apple Find My Compatible</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <span className="text-green-400">✓</span>
                  <span>80+ dB Sound Alert</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <span className="text-green-400">✓</span>
                  <span>IP68 Waterproof</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <span className="text-green-400">✓</span>
                  <span>50m Bluetooth Range</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <span className="text-green-400">✓</span>
                  <span>3-Year Battery Life</span>
                </div>
                <div className="flex items-center gap-3 text-slate-300">
                  <span className="text-green-400">✓</span>
                  <span>1.6mm Ultra-thin Design</span>
                </div>
              </div>
              
              <button className="group bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-bold py-4 px-8 rounded-full shadow-xl hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105 flex items-center gap-3 mx-auto md:mx-0">
                <span className="group-hover:rotate-12 transition-transform duration-300">🛒</span>
                <span>Add to Cart</span>
              </button>
            </div>
            
            <div className="text-center">
              <img 
                src={monecardImg} 
                alt="Smart Tracking Card - Ultra-thin Bluetooth tracker for wallets"
                className="w-full max-w-md mx-auto rounded-2xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};