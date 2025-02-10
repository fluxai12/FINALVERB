import React from 'react';
import { TrendingUp, Heart, Brain, BarChart3, Lock, MessageSquare } from 'lucide-react';

export function Features() {
  return (
    <section className="pt-32 pb-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-purple-500/10" />
      <div className="container mx-auto px-6 relative">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Key Features
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Trading Made Easy",
              description: "Spot trading, perpetual trading, and market analysis",
              icon: <TrendingUp className="w-8 h-8 text-blue-400" />
            },
            {
              title: "Trench Therapist",
              description: "AI-powered emotional support and trading psychology guidance",
              icon: <Heart className="w-8 h-8 text-purple-400" />
            },
            {
              title: "Advanced AI Trading",
              description: "Predictive analytics and adaptive strategy",
              icon: <Brain className="w-8 h-8 text-blue-400" />
            },
            {
              title: "Portfolio Management",
              description: "Auto-balancing and performance analytics",
              icon: <BarChart3 className="w-8 h-8 text-purple-400" />
            },
            {
              title: "Security & Privacy",
              description: "Wallet authentication and behavioral biometrics",
              icon: <Lock className="w-8 h-8 text-blue-400" />
            },
            {
              title: "Trading Psychology",
              description: "Real-time emotional support and mindfulness techniques",
              icon: <MessageSquare className="w-8 h-8 text-purple-400" />
            }
          ].map((feature, index) => (
            <div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-8 rounded-2xl hover:border-blue-500/50 transition-all group">
              <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}