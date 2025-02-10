import React from 'react';
import { ArrowRight } from 'lucide-react';

export function Examples() {
  return (
    <section className="pt-32 pb-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-blue-500/10" />
      <div className="container mx-auto px-6 relative">
        <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
          Example Commands
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-8 rounded-2xl hover:border-blue-500/50 transition-all">
            <h3 className="text-xl font-semibold mb-6">Simple Commands</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 group">
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ArrowRight className="w-5 h-5 text-blue-400" />
                </div>
                <code className="text-gray-300">"Buy 100 USDC of SOL"</code>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ArrowRight className="w-5 h-5 text-purple-400" />
                </div>
                <code className="text-gray-300">"What's the price of ETH?"</code>
              </div>
            </div>
          </div>
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 p-8 rounded-2xl hover:border-blue-500/50 transition-all">
            <h3 className="text-xl font-semibold mb-6">Complex Commands</h3>
            <div className="space-y-6">
              <div className="flex items-center space-x-4 group">
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ArrowRight className="w-5 h-5 text-blue-400" />
                </div>
                <code className="text-gray-300">"Long BTC x3 with 50 USDC"</code>
              </div>
              <div className="flex items-center space-x-4 group">
                <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ArrowRight className="w-5 h-5 text-purple-400" />
                </div>
                <code className="text-gray-300">"Set a take-profit at 20%"</code>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}