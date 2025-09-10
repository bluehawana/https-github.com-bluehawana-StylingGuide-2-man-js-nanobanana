import React from 'react';

const showcaseStyles = [
  {
    title: "Business Professional",
    description: "Sharp suits & executive presence",
    gradient: "from-blue-500 to-blue-700",
    icon: "💼",
    examples: ["Tailored Suits", "Power Ties", "Luxury Watches"]
  },
  {
    title: "Street Style",
    description: "Urban fashion & trendsetting looks",
    gradient: "from-purple-500 to-pink-500",
    icon: "🔥",
    examples: ["Designer Sneakers", "Streetwear", "Bold Accessories"]
  },
  {
    title: "Smart Casual",
    description: "Versatile & modern everyday style",
    gradient: "from-green-500 to-teal-500",
    icon: "✨",
    examples: ["Chinos & Polos", "Smart Sneakers", "Minimal Watches"]
  },
  {
    title: "Athletic Luxe",
    description: "Premium sportswear & athleisure",
    gradient: "from-orange-500 to-red-500",
    icon: "⚡",
    examples: ["Tech Fabrics", "Performance Wear", "Sport Watches"]
  }
];

export const StyleShowcase: React.FC = () => {
  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-4xl font-black text-white text-center mb-12">
          Unlock Your Style Potential
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {showcaseStyles.map((style, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-slate-800/50 backdrop-blur border border-slate-700 hover:border-slate-600 transition-all hover:transform hover:scale-105"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${style.gradient} opacity-10 group-hover:opacity-20 transition-opacity`}></div>
              <div className="relative p-6">
                <div className="text-4xl mb-4">{style.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{style.title}</h3>
                <p className="text-slate-400 text-sm mb-4">{style.description}</p>
                <div className="space-y-1">
                  {style.examples.map((example, i) => (
                    <div key={i} className="text-xs text-slate-500 flex items-center gap-2">
                      <span className="text-slate-600">•</span>
                      {example}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};