import React, { useState, useEffect } from 'react';
import { ArrowRight, BookOpen, Rocket, Shield, Cpu, BarChart2, MessageSquare, Heart, Brain, Home, Bot, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from '../components/Logo';

export function Documentation() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Add intersection observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '50px'
      }
    );

    // Observe all animatable elements
    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    // Trigger initial load animation
    setIsLoaded(true);

    return () => observer.disconnect();
  }, []);

  return (
    <div className={`relative bg-slate-900 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Interactive Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Animated Grid */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px),
              linear-gradient(rgba(59, 130, 246, 0.02) 2px, transparent 2px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.02) 2px, transparent 2px)
            `,
            backgroundSize: '50px 50px, 50px 50px, 250px 250px, 250px 250px'
          }}
        />

        {/* Subtle Gradient Overlay */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `
              radial-gradient(circle at 50% 50%, 
                rgba(59, 130, 246, 0.1), 
                transparent 60%
              )
            `
          }}
        />
      </div>

      <div className="pt-32 pb-20 relative min-h-screen">
        <div className="container mx-auto px-6 relative">
          <Link 
            to="/" 
            className={`fixed top-24 left-6 bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-3 rounded-xl hover:border-blue-400/50 transition-all shadow-lg group ${
              isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <Home className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" />
          </Link>

          <div className="max-w-4xl mx-auto">
            {/* Introduction with animation */}
            <div className={`mb-16 transition-all duration-1000 delay-500 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Documentation
              </h1>
              <p className="text-lg text-slate-400 leading-relaxed">
                Welcome to Verbot AI, your ultimate AI-driven trading companion on Solana. Designed for seamless interaction, Verbot leverages cutting-edge natural language processing to help you execute complex trades, analyze markets, and receive personalized insights—all with simple English commands.
              </p>
            </div>

            {/* Sections with scroll animations */}
            <div className="space-y-16">
              {/* Getting Started */}
              <div className="animate-on-scroll opacity-0 translate-y-4">
                <h2 className="text-2xl font-semibold mb-6 text-slate-200">Getting Started</h2>
                <div className="grid gap-4">
                  {[
                    { title: 'Launch the App', description: 'Start by clicking "Launch App" from the Verbot dashboard.', icon: <Rocket /> },
                    { title: 'Connect Your Wallet', description: 'Link your preferred wallet, such as Solflare, Phantom, or other compatible options.', icon: <Shield /> },
                    { title: 'Authenticate Your Session', description: 'Sign a secure message using your wallet to confirm your identity.', icon: <Shield /> },
                    { title: 'Integrate with Solana', description: 'Approve Verbot\'s integration with the Solana API for secure trading.', icon: <Cpu /> },
                    { title: 'Start Trading', description: 'Chat with Verbot AI to begin executing trades and manage your portfolio.', icon: <MessageSquare /> }
                  ].map((step, index) => (
                    <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-lg p-4 hover:border-blue-500/30 transition-all">
                      <div className="flex items-start space-x-4">
                        <div className="bg-blue-500/10 p-2 rounded-lg">
                          {React.cloneElement(step.icon, { className: "w-5 h-5 text-blue-400" })}
                        </div>
                        <div>
                          <h3 className="font-medium text-slate-200 mb-1">{step.title}</h3>
                          <p className="text-slate-400 text-sm">{step.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div className="animate-on-scroll opacity-0 translate-y-4">
                <h2 className="text-2xl font-semibold mb-6 text-slate-200">Key Features</h2>
                <div className="space-y-8">
                  {[
                    {
                      title: "Trench Therapist",
                      items: [
                        "Real-time emotional guidance during market volatility",
                        "Trading psychology management and mindfulness techniques",
                        "Personalized coping strategies based on trading style",
                        "AI-powered emotional support and behavioral analysis"
                      ]
                    },
                    {
                      title: "Portfolio Management",
                      items: [
                        "View Current Positions",
                        "View Open Orders (Limit)",
                        "Cancel Orders (Limit)"
                      ]
                    },
                    {
                      title: "Order Execution",
                      items: [
                        "Market Buy/Sell Orders",
                        "Limit Buy/Sell Orders",
                        "Market Close Positions",
                        "Perpetual Trading Support"
                      ]
                    },
                    {
                      title: "Market Analysis",
                      items: [
                        "Chart Display and Analysis",
                        "Token Price Tracking",
                        "Portfolio Analytics",
                        "Market Metrics"
                      ]
                    }
                  ].map((feature, index) => (
                    <div key={index} className="bg-slate-800/50 border border-slate-700 rounded-lg p-6 hover:border-blue-500/30 transition-all">
                      <h3 className="text-xl font-medium text-slate-200 mb-4">{feature.title}</h3>
                      <ul className="space-y-2">
                        {feature.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-center space-x-2 text-slate-400">
                            <ArrowRight className="w-4 h-4 text-blue-400" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Example Usage Section with Enhanced Terminal Boxes */}
              <div className="animate-on-scroll opacity-0 translate-y-4">
                <h2 className="text-2xl font-semibold mb-6 text-slate-200">Example Usage</h2>
                <div className="grid gap-6">
                  {/* Enhanced Simple Commands Terminal */}
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden group hover:border-blue-500/30 transition-all duration-300">
                    <div className="border-b border-slate-700/50 px-6 py-4">
                      <span className="text-slate-200 font-medium">Verbot MainTest Terminal</span>
                    </div>
                    <div className="p-6 space-y-4">
                      {[
                        "Buy $1,000 worth of Solana.",
                        "Long Bitcoin x3 with 50 USDC.",
                        "What's the current price of Ethereum?",
                        "Analyze Bitcoin chart for the last month with 4-hour candles."
                      ].map((command, index) => (
                        <div key={index} className="flex justify-end">
                          <div className="flex items-start space-x-3">
                            <div className="bg-blue-500/10 border border-blue-500/20 p-4 rounded-xl hover:border-blue-500/30 transition-all group/item">
                              <code className="text-blue-400">{command}</code>
                            </div>
                            <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                              <User className="w-6 h-6 text-blue-400" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Enhanced Complex Commands Terminal */}
                  <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden group hover:border-blue-500/30 transition-all duration-300">
                    <div className="border-b border-slate-700/50 px-6 py-4">
                      <span className="text-slate-200 font-medium">Verbot MainTest Terminal</span>
                    </div>
                    <div className="p-6 space-y-4">
                      {[
                        "Buy $1,000 worth of Solana > Set a sell limit order for Solana at +15% from current price.",
                        "Long Bitcoin x2 with all my USDC > Set a TP at +30% and a SL at -20%.",
                        "What AI-related tokens are available? > Buy $500 worth of each.",
                        "Analyze Bitcoin, Solana, and Ethereum charts > Long the most bullish one with $100 USDC."
                      ].map((command, index) => (
                        <div key={index} className="flex justify-end">
                          <div className="flex items-start space-x-3">
                            <div className="bg-purple-500/10 border border-purple-500/20 p-4 rounded-xl hover:border-purple-500/30 transition-all group/item">
                              <code className="text-purple-400">{command}</code>
                            </div>
                            <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                              <User className="w-6 h-6 text-purple-400" />
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Security Section */}
              <div className="animate-on-scroll opacity-0 translate-y-4">
                <h2 className="text-2xl font-semibold mb-6 text-slate-200">Security</h2>
                <div className="bg-slate-800/50 border border-slate-700 rounded-lg p-6">
                  <div className="grid gap-4">
                    {[
                      { title: "Agent Signature", description: "Verbot can only place trades, not withdraw funds, ensuring your assets remain safe." },
                      { title: "Wallet Signature Authentication", description: "Each session requires wallet signature verification, preventing unauthorized access." },
                      { title: "Secure Private Keys", description: "Your private keys are never compromised, and only you control your assets." },
                      { title: "Regular Security Audits", description: "We conduct ongoing security audits to ensure the platform remains secure from potential threats." }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="bg-blue-500/10 p-2 rounded-lg">
                          <Shield className="w-5 h-5 text-blue-400" />
                        </div>
                        <div>
                          <h3 className="font-medium text-slate-200 mb-1">{item.title}</h3>
                          <p className="text-slate-400 text-sm">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}