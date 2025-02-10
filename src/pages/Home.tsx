import React, { useState, useEffect } from 'react';
import { ArrowRight, User, Sparkles, Brain, ChevronLeft, Rocket, Wallet, Key, TrendingUp, MessageSquare, Clock, AlertTriangle, Heart, Cpu, Network, Lock, Workflow, BarChart2, Shield, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from '../components/Logo';

export function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      setMousePosition(prev => ({
        x: prev.x + (x - prev.x) * 0.1,
        y: prev.y + (y - prev.y) * 0.1
      }));
    };

    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

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

    document.querySelectorAll('.animate-on-scroll').forEach((el) => {
      observer.observe(el);
    });

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);
    setIsLoaded(true);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  const wrapWithAnimation = (element: JSX.Element, index: number) => (
    <div 
      className={`animate-on-scroll opacity-0 translate-y-4 transition-all duration-700 delay-${index * 100}`}
      style={{ 
        transitionDelay: `${index * 100}ms`,
        animationDelay: `${index * 100}ms`
      }}
    >
      {element}
    </div>
  );

  const architectureLayers = [
    {
      title: "Processing Layer",
      description: "High-performance compute for real-time analysis",
      icon: <Cpu className="w-6 h-6 text-blue-400" />,
      items: [
        {
          title: "Distributed Processing Nodes",
          description: "Optimized for parallel task execution, ensuring faster processing and scalability."
        },
        {
          title: "Load Balancing & Auto-Scaling",
          description: "Dynamically adjusts compute power based on demand, ensuring reliability during high trading volumes."
        },
        {
          title: "Real-time Market Data Analysis",
          description: "Analyzes market trends and provides instant insights, ensuring traders have up-to-date information."
        },
        {
          title: "AI-Powered Decision Engine",
          description: "Uses machine learning models to provide personalized trading recommendations."
        }
      ]
    },
    {
      title: "Network Layer",
      description: "Optimized data transmission and routing",
      icon: <Network className="w-6 h-6 text-blue-400" />,
      items: [
        {
          title: "Low-latency Connections",
          description: "Minimizes delay in executing trades and accessing market data."
        },
        {
          title: "Global Network Distribution",
          description: "Distributes services across global nodes for faster access and reduced downtime."
        },
        {
          title: "Redundant Pathways",
          description: "Ensures network reliability by using multiple data routes, preventing single points of failure."
        },
        {
          title: "Real-time Data Synchronization",
          description: "Guarantees synchronization of data across distributed networks."
        }
      ]
    },
    {
      title: "Security Layer",
      description: "Enterprise-grade protection systems",
      icon: <Lock className="w-6 h-6 text-blue-400" />,
      items: [
        {
          title: "End-to-End Encryption",
          description: "Secure communication channels with full encryption to protect sensitive data."
        },
        {
          title: "Multi-factor Authentication",
          description: "Adds extra security layers requiring multiple verification methods."
        },
        {
          title: "Agent Signature Protection",
          description: "Ensures only authorized agents can execute trades."
        },
        {
          title: "Secure Wallet Connections",
          description: "Implements secure protocols for wallet connections."
        },
        {
          title: "Continuous Security Audits",
          description: "Regular third-party security audits to identify vulnerabilities."
        }
      ]
    },
    {
      title: "Integration Layer",
      description: "Seamless blockchain connectivity",
      icon: <Workflow className="w-6 h-6 text-blue-400" />,
      items: [
        {
          title: "Multi-Chain Support",
          description: "Integration with multiple blockchain networks for cross-platform trading."
        },
        {
          title: "Smart Contract Integration",
          description: "Leverages smart contracts for automated trade execution."
        },
        {
          title: "Cross-Platform Interoperability",
          description: "Easy interaction with different dApps and DeFi protocols."
        },
        {
          title: "Data API Integration",
          description: "Access to third-party data providers for market insights."
        },
        {
          title: "Wallet and Exchange Connectivity",
          description: "Seamless integration with popular wallets and exchanges."
        }
      ]
    }
  ];

  const therapistExamples = [
    {
      user: "I'm feeling anxious about this trade...",
      bot: "I understand your anxiety. Let's analyze your concerns and develop a balanced perspective. What specific aspects of the trade are worrying you?",
      type: "emotional"
    },
    {
      user: "I just lost 20% on a trade",
      bot: "That's a challenging experience. Let's process this together and turn it into a learning opportunity. Would you like to review the trade decisions or focus on emotional recovery first?",
      type: "support"
    },
    {
      user: "Should I panic sell?",
      bot: "Let's pause and breathe together. Market volatility can be overwhelming, but hasty decisions rarely help. Can you tell me more about what's triggering this urge to sell?",
      type: "guidance"
    }
  ];

  return (
    <div className={`relative bg-slate-900 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Enhanced Interactive Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Animated Gradient Background */}
        <div 
          className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-slate-900 to-purple-900/20 animate-gradient-slow"
          style={{
            backgroundSize: '400% 400%',
          }}
        />

        {/* Animated Grid */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.02) 1px, transparent 1px),
              linear-gradient(rgba(168, 85, 247, 0.02) 2px, transparent 2px),
              linear-gradient(90deg, rgba(168, 85, 247, 0.02) 2px, transparent 2px)
            `,
            backgroundSize: '50px 50px, 50px 50px, 250px 250px, 250px 250px',
            transform: `
              perspective(1000px)
              rotateX(${mousePosition.y * 2}deg)
              rotateY(${mousePosition.x * 2}deg)
              translateZ(0)
              scale(1.1)
            `,
            transformOrigin: 'center center',
            transition: 'transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)'
          }}
        />

        {/* Floating Orbs */}
        <div className="absolute inset-0">
          <div 
            className="absolute w-[500px] h-[500px] rounded-full bg-blue-500/10 blur-3xl animate-float"
            style={{
              left: `${30 + mousePosition.x * 5}%`,
              top: `${20 + mousePosition.y * 5}%`,
              transform: 'translate(-50%, -50%)',
              animationDelay: '0s'
            }}
          />
          <div 
            className="absolute w-[400px] h-[400px] rounded-full bg-purple-500/10 blur-3xl animate-float"
            style={{
              left: `${70 + mousePosition.x * 5}%`,
              top: `${60 + mousePosition.y * 5}%`,
              transform: 'translate(-50%, -50%)',
              animationDelay: '-2s'
            }}
          />
          <div 
            className="absolute w-[300px] h-[300px] rounded-full bg-blue-400/10 blur-3xl animate-float"
            style={{
              left: `${50 + mousePosition.x * 5}%`,
              top: `${80 + mousePosition.y * 5}%`,
              transform: 'translate(-50%, -50%)',
              animationDelay: '-4s'
            }}
          />
        </div>

        {/* Subtle Noise Texture */}
        <div 
          className="absolute inset-0 opacity-[0.015] mix-blend-overlay"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundRepeat: 'repeat',
            width: '200%',
            height: '200%',
            transform: 'translate(-50%, -50%)',
            animation: 'noise 1s steps(2) infinite'
          }}
        />
      </div>

      <section className="min-h-screen relative pt-32">
        <div className="container mx-auto px-6 relative">
          <div className={`flex flex-col items-center text-center mb-24 transition-all duration-1000 delay-300 ${
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="inline-flex items-center px-4 py-2 bg-blue-500/10 rounded-full mb-8">
              <span className="text-sm text-blue-400">AI-Powered Trading Assistant</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Trade Smarter with<br />
              <span className="bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">Natural Language</span>
            </h1>
            <p className="text-slate-300 text-lg max-w-2xl mb-8">
              Execute complex trading strategies on Solana using simple English commands.
              Powered by advanced AI for precise and efficient crypto trading.
            </p>
            <div className="flex items-center space-x-4">
              <Link to="/terminal" className="bg-blue-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-600 transition-colors flex items-center shadow-lg shadow-blue-500/20">
                Launch App <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
              <Link to="/docs" className="text-slate-300 hover:text-blue-400 transition-colors">
                Read Documentation
              </Link>
            </div>
          </div>

          {/* Terminal Section */}
          <div className="max-w-4xl mx-auto mb-32 animate-on-scroll opacity-0 translate-y-4">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl overflow-hidden shadow-xl">
              <div className="border-b border-slate-700/50 px-6 py-4">
                <div className="flex items-center space-x-4">
                  
                  <span className="text-slate-200 font-medium">Verbot MainTest Terminal</span>
                </div>
              </div>
              <div className="p-6 space-y-8">
                <div className="flex justify-end">
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 max-w-[80%]">
                      <p className="text-blue-400 text-sm">DCA $500 worth of Solana every hour just for today please.</p>
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                      <User className="w-6 h-6 text-blue-400" />
                    </div>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                      <Logo className="w-11 h-11" />
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-4 max-w-[80%]">
                      <p className="text-slate-300 text-sm">Not much volume today for Solana. The market seems a bit slower than usual. Should we think this through or execute the DCA now?</p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end">
                  <div className="flex items-start space-x-3">
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 max-w-[80%]">
                      <p className="text-blue-400 text-sm">Yes, execute the trade</p>
                    </div>
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                      <User className="w-6 h-6 text-blue-400" />
                    </div>
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="flex items-start space-x-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                      <Logo className="w-11 h-11" />
                    </div>
                    <div className="bg-slate-700/50 rounded-lg p-4 max-w-[80%]">
                      <p className="text-slate-300 text-sm">Done! I've set up 24 hourly buys of $20.83 worth of SOL. I'll notify you after each execution.</p>
                    </div>
                  </div>
                </div>
                <div className="mt-12 flex items-center space-x-2 bg-slate-700/50 rounded-lg px-4 py-3">
                  <div className="flex-1 text-sm text-slate-400 select-none">
                    Enter your trading command...
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-500" />
                </div>
              </div>
            </div>
          </div>

          {/* Advanced Capabilities Section */}
          <div className="max-w-7xl mx-auto mb-32">
            <h2 className="text-3xl font-bold text-center mb-4 text-slate-200">Advanced Capabilities</h2>
            <p className="text-slate-400 text-center mb-12 max-w-3xl mx-auto">
              Leveraging cutting-edge machine learning algorithms and sophisticated market analysis to deliver unparalleled trading performance.
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Natural Language Processing",
                  description: "Advanced language models trained for precise command interpretation.",
                  icon: <Workflow className="w-6 h-6 text-blue-400" />
                },
                {
                  title: "Low-Latency Execution",
                  description: "High-performance infrastructure ensures rapid trade execution and optimal pricing.",
                  icon: <Zap className="w-6 h-6 text-blue-400" />
                },
                {
                  title: "Market Analysis",
                  description: "Real-time analysis of market conditions, trends, and trading opportunities.",
                  icon: <BarChart2 className="w-6 h-6 text-blue-400" />
                },
                {
                  title: "Neural Network Architecture",
                  description: "Deep learning models for accurate insights, useful tips and deep comprehension of your commands.",
                  icon: <Workflow className="w-6 h-6 text-blue-400" />
                },
                {
                  title: "Risk Management & Trading Therapy",
                  description: "Built-in trench therapist helps manage trading psychology while our AI adjusts positions for optimal risk levels.",
                  icon: <Shield className="w-6 h-6 text-blue-400" />
                },
                {
                  title: "Performance Analytics",
                  description: "Detailed insights into trading performance and portfolio metrics.",
                  icon: <BarChart2 className="w-6 h-6 text-blue-400" />
                }
              ].map((feature, index) => (
                <div key={index} className="animate-on-scroll opacity-0 translate-y-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 rounded-xl hover:border-blue-400/50 transition-all shadow-lg">
                  <div className="bg-blue-500/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-slate-200 font-medium mb-2">{feature.title}</h3>
                  <p className="text-slate-400 text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Integrated AI Therapist Section */}
          <div className="max-w-7xl mx-auto mb-32">
            <div className="text-center mb-16 animate-on-scroll opacity-0 translate-y-4">
              <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                Integrated AI Therapist
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                Trading isn't just about numbers—it's about managing emotions and maintaining mental clarity. Our AI Therapist is here to support your psychological well-being.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Therapist Features */}
              <div className="space-y-6">
                {[
                  {
                    icon: <Heart className="w-6 h-6 text-blue-400" />,
                    title: "Emotional Support",
                    description: "Get real-time emotional guidance during market volatility and stressful trading situations."
                  },
                  {
                    icon: <Brain className="w-6 h-6 text-purple-400" />,
                    title: "Trading Psychology",
                    description: "Learn to manage fear, greed, and impulsive decisions with AI-powered psychological insights."
                  },
                  {
                    icon: <MessageSquare className="w-6 h-6 text-blue-400" />,
                    title: "Personalized Guidance",
                    description: "Receive tailored coping strategies and emotional support based on your trading style and history."
                  }
                ].map((feature, index) => (
                  <div key={index} className="animate-on-scroll opacity-0 translate-y-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 p-6 rounded-xl hover:border-blue-400/50 transition-all">
                    <div className="flex items-start space-x-4">
                      <div className="bg-blue-500/10 p-3 rounded-lg">
                        {feature.icon}
                      </div>
                      <div>
                        <h3 className="text-slate-200 font-medium mb-2">{feature.title}</h3>
                        <p className="text-slate-400 text-sm">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat Example */}
              <div className="animate-on-scroll opacity-0 translate-y-4 bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl overflow-hidden">
                <div className="border-b border-slate-700/50 px-6 py-4">
                  <span className="text-slate-200 font-medium">Verbot Main Test Terminal</span>
                </div>
                <div className="p-6 space-y-6">
                  {therapistExamples.map((message, index) => (
                    <div key={index} className="space-y-4">
                      <div className="flex justify-end">
                        <div className="flex items-start space-x-3">
                          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 max-w-[80%]">
                            <p className="text-blue-400 text-sm">{message.user}</p>
                          </div>
                          <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                            <User className="w-6 h-6 text-blue-400" />
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-start">
                        <div className="flex items-start space-x-3">
                          <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                            <Logo className="w-11 h-11" />
                          </div>
                          <div className="bg-slate-700/50 rounded-lg p-4 max-w-[80%]">
                            <p className="text-slate-300 text-sm">{message.bot}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Technical Architecture Section */}
          <div id="technical-architecture" className="max-w-5xl mx-auto px-6 py-16 scroll-mt-24">
            <h2 className="text-3xl font-bold text-center mb-4 text-slate-200">Technical Architecture</h2>
            <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
              Built on cutting-edge technology to ensure security, speed, and reliability
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              {architectureLayers.map((layer, index) => (
                <div key={index} className="animate-on-scroll opacity-0 translate-y-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-xl hover:border-blue-400/50 transition-all shadow-lg group">
                  <div className="p-6 border-b border-slate-700">
                    <div className="flex items-center space-x-4">
                      <div className="bg-blue-500/10 w-10 h-10 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                        {layer.icon}
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-slate-200">{layer.title}</h3>
                        <p className="text-slate-400 text-sm">{layer.description}</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-4">
                    <div className="grid gap-3">
                      {layer.items.map((item, itemIndex) => (
                        <div key={itemIndex} className="bg-slate-900/50 p-3 rounded-lg border border-slate-700/50 hover:border-blue-500/30 transition-all">
                          <div className="flex items-start space-x-3">
                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 flex-shrink-0" />
                            <div>
                              <h4 className="text-blue-400 font-medium text-sm">{item.title}</h4>
                              <p className="text-slate-400 text-xs mt-1 leading-relaxed">{item.description}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}