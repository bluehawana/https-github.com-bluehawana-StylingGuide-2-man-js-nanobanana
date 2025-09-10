import React, { useState } from 'react';
import modelPhoto from './uploads/model.jpg';
import casualPhoto from './uploads/tocasual.png';
import businessPhoto from './uploads/tobusiness.png';

interface Transformation {
  id: string;
  title: string;
  hashtags: string[];
  description: string;
  image: string;
}

const transformations: Transformation[] = [
  {
    id: 'business',
    title: 'Business Executive',
    hashtags: ['#PowerSuit', '#CEOStyle', '#BusinessClass', '#CorporateChic'],
    description: 'Transform into a confident business leader with tailored suits and executive presence',
    image: businessPhoto
  },
  {
    id: 'casual',
    title: 'Smart Casual',
    hashtags: ['#WeekendVibes', '#CasualFriday', '#EffortlessStyle', '#ModernMan'],
    description: 'Perfect balance of comfort and style for any casual occasion',
    image: casualPhoto
  },
  {
    id: 'street',
    title: 'Street Style',
    hashtags: ['#Streetwear', '#UrbanFashion', '#HypeStyle', '#FashionForward'],
    description: 'Contemporary urban looks that make a statement',
    image: casualPhoto // Using casual as placeholder for street
  },
  {
    id: 'formal',
    title: 'Black Tie',
    hashtags: ['#BlackTie', '#RedCarpet', '#LuxuryStyle', '#GalaReady'],
    description: 'Sophisticated formal wear for special events',
    image: businessPhoto // Using business as placeholder for formal
  }
];

export const TransformationShowcase: React.FC = () => {
  return (
    <section className="py-24 px-4 relative overflow-hidden">
      {/* Background Images Grid */}
      <div className="absolute inset-0 grid grid-cols-3 gap-4 opacity-60">
        <div 
          className="bg-cover bg-center"
          style={{ backgroundImage: `url(${modelPhoto})` }}
        />
        <div 
          className="bg-cover bg-center"
          style={{ backgroundImage: `url(${casualPhoto})` }}
        />
        <div 
          className="bg-cover bg-center"
          style={{ backgroundImage: `url(${businessPhoto})` }}
        />
      </div>
      
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-slate-900/75 to-slate-900/80"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">ONE PHOTO</span>
            <span className="text-white">, ENDLESS STYLES</span>
          </h2>
          <p className="text-xl text-slate-300 mb-12">
            Upload your photo once and instantly see yourself in 10+ different styles. 
            From business executive to street style icon - discover your perfect look.
          </p>
          
          {/* Style Cards */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6 hover:border-blue-400 transition-all">
              <div className="text-4xl mb-3">👔</div>
              <h3 className="text-xl font-bold text-white mb-2">Business Styles</h3>
              <p className="text-slate-400 text-sm mb-3">Professional looks for the office</p>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="text-xs text-cyan-400">#PowerSuit</span>
                <span className="text-xs text-cyan-400">#CEOStyle</span>
              </div>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6 hover:border-cyan-400 transition-all">
              <div className="text-4xl mb-3">✨</div>
              <h3 className="text-xl font-bold text-white mb-2">Casual Styles</h3>
              <p className="text-slate-400 text-sm mb-3">Relaxed looks for everyday</p>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="text-xs text-cyan-400">#WeekendVibes</span>
                <span className="text-xs text-cyan-400">#SmartCasual</span>
              </div>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur border border-slate-700 rounded-xl p-6 hover:border-purple-400 transition-all">
              <div className="text-4xl mb-3">🔥</div>
              <h3 className="text-xl font-bold text-white mb-2">Special Events</h3>
              <p className="text-slate-400 text-sm mb-3">Stand out at any occasion</p>
              <div className="flex flex-wrap justify-center gap-2">
                <span className="text-xs text-cyan-400">#BlackTie</span>
                <span className="text-xs text-cyan-400">#GalaReady</span>
              </div>
            </div>
          </div>
          
          {/* Features */}
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex items-center gap-2 text-slate-300">
              <span className="text-green-400">✓</span>
              <span>Instant Transformation</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <span className="text-green-400">✓</span>
              <span>10+ Style Options</span>
            </div>
            <div className="flex items-center gap-2 text-slate-300">
              <span className="text-green-400">✓</span>
              <span>AI-Powered Precision</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};