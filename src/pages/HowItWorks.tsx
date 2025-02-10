import React from 'react';
import { Brain, Wallet, Key, TrendingUp } from 'lucide-react';

export function HowItWorks() {
  return (
    <div className="pt-32 pb-20 relative min-h-screen">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-blue-500/10" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,255,0.1)_0%,transparent_65%)]" />
      <div className="container mx-auto px-6 relative">
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-20 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          How It Works
        </h1>
        <div className="grid md:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {[
            { step: 1, title: "Launch Verba AI", description: "Start your trading journey with our AI assistant", icon: <Brain className="w-8 h-8 text-blue-400" /> },
            { step: 2, title: "Connect Your Wallet", description: "Securely link your crypto wallet", icon: <Wallet className="w-8 h-8 text-purple-400" /> },
            { step: 3, title: "Authenticate Session", description: "Quick and secure verification", icon: <Key className="w-8 h-8 text-blue-400" /> },
            { step: 4, title: "Start Trading", description: "Begin trading with AI support", icon: <TrendingUp className="w-8 h-8 text-purple-400" /> },
          ].map((item, index) => (
            <div key={index} className="group">
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-8 rounded-2xl hover:border-blue-500/50 transition-all hover:scale-105 h-full">
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div className="text-sm text-blue-400 font-medium mb-2 text-center">Step {item.step}</div>
                <h3 className="text-xl font-semibold text-center mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-center">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}