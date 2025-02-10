import React from 'react';

export function Footer() {
  return (
    <footer className="relative bg-slate-900 border-t border-slate-800 overflow-hidden">
      {/* Gradient Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 py-16 relative">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
            Verbot AI
          </span>
          <p className="text-slate-400 leading-relaxed mt-4 mb-8">
            Your Personal Crypto Assistant—Trading with Intelligence and Emotional Support.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <p className="text-slate-400 text-sm">
              © 2025 Verbot AI. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}