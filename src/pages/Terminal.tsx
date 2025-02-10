import React, { useState, useRef, useEffect } from 'react';
import { ArrowRight, User, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Logo } from '../components/Logo';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

function ClockDisplay() {
  const [time, setTime] = useState(new Date().toUTCString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toUTCString());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return <span className="text-blue-400 text-sm font-medium">{time}</span>;
}

function NodeStatus() {
  return (
    <div className="space-y-3">
      <h3 className="text-sm font-medium text-slate-200">Node Status</h3>
      <div className="flex items-center justify-between">
        <span className="text-slate-400 text-sm">Status</span>
        <span className="text-green-400 text-sm font-medium flex items-center">
          <span className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse" />
          Online
        </span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-slate-400 text-sm">Latency</span>
        <span className="text-blue-400 text-sm font-medium">45ms</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-slate-400 text-sm">Uptime</span>
        <span className="text-blue-400 text-sm font-medium">99.9%</span>
      </div>
    </div>
  );
}

export function Terminal() {
  const [messages, setMessages] = useState<Message[]>([{
    id: '0',
    type: 'bot',
    content: "Welcome to Verbot Terminal. I'm your AI trading assistant. How can I help you today?",
    timestamp: new Date()
  }]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isConnecting, setIsConnecting] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handleConnectWallet = async () => {
    setIsConnecting(true);
    
    try {
      if (typeof window.solana !== 'undefined') {
        try {
          await window.solana.connect();
        } catch (err) {
          console.error('Failed to connect to Phantom wallet:', err);
        }
      }
      
      if (typeof window.ethereum !== 'undefined') {
        try {
          await window.ethereum.request({ method: 'eth_requestAccounts' });
        } catch (err) {
          console.error('Failed to connect to Brave wallet:', err);
        }
      }

      if (typeof window.solana === 'undefined' && typeof window.ethereum === 'undefined') {
        window.open('https://phantom.app/', '_blank');
      }
    } catch (error) {
      console.error('Wallet connection error:', error);
    } finally {
      setIsConnecting(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 relative overflow-hidden">
      {/* Interactive Background with Animation */}
      <div className={`absolute inset-0 overflow-hidden pointer-events-none transition-opacity duration-1000 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}>
        <div 
          className={`absolute inset-0 transition-transform duration-1000 ${
            isLoaded ? 'scale-100' : 'scale-110'
          }`}
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.02) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.02) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
            transform: 'perspective(1000px) rotateX(60deg) translateY(-100px) translateZ(-200px)',
            opacity: 0.5
          }}
        />
        
        {/* Animated Gradient Orbs */}
        <div className={`absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl transition-all duration-1000 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
        }`} />
        <div className={`absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl transition-all duration-1000 delay-300 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-12'
        }`} />
      </div>

      {/* Navigation and Wallet */}
      <div className={`absolute top-4 left-4 right-4 flex justify-between items-center z-10 transition-all duration-700 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
      }`}>
        <Link 
          to="/" 
          className="flex items-center space-x-2 text-slate-400 hover:text-blue-400 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Back to Home</span>
        </Link>
        
        {/* Connect Wallet Button */}
        <button
          onClick={handleConnectWallet}
          disabled={isConnecting}
          className={`bg-slate-900/90 hover:bg-slate-800/90 transition-colors rounded-xl border border-white/10 px-6 py-2.5 text-white font-medium ${
            isConnecting ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isConnecting ? 'Connecting...' : 'Connect Wallet'}
        </button>
      </div>

      <div className={`max-w-7xl mx-auto pt-16 px-4 relative transition-all duration-1000 delay-200 ${
        isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="grid grid-cols-12 gap-4">
          {/* Side Information Panel */}
          <div className="col-span-3 space-y-4">
            {/* Node Status Panel */}
            <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-4">
              <NodeStatus />
            </div>

            {/* Time and Network Status */}
            <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-4">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-sm">Network</span>
                  <span className="text-green-400 text-sm font-medium flex items-center">
                    <span className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse" />
                    Mainnet
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-sm">Time (UTC)</span>
                  <ClockDisplay />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-sm">Status</span>
                  <span className="text-green-400 text-sm font-medium flex items-center">
                    <span className="w-2 h-2 rounded-full bg-green-400 mr-2 animate-pulse" />
                    Active
                  </span>
                </div>
              </div>
            </div>

            {/* Wallet Information */}
            <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-4">
              <h3 className="text-sm font-medium text-slate-200 mb-3">Wallet Status</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-sm">Connection</span>
                  <span className="text-red-400 text-sm font-medium flex items-center">
                    <span className="w-2 h-2 rounded-full bg-red-400 mr-2 animate-pulse" />
                    Disconnected
                  </span>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-xl p-4">
              <h3 className="text-sm font-medium text-slate-200 mb-3">Recent Activity</h3>
              <div className="space-y-3">
                {/* Show message when no activity */}
                <div className="flex items-center justify-center py-6 text-sm text-slate-400">
                  No recent activity
                </div>
              </div>
            </div>
          </div>

          {/* Main Terminal Area */}
          <div className="col-span-9">
            <div className="bg-slate-800/50 backdrop-blur-xl border border-slate-700/50 rounded-2xl overflow-hidden shadow-2xl">
              {/* Terminal Header */}
              <div className="border-b border-slate-700/50 px-6 py-4 flex items-center justify-between bg-slate-800/50">
                <div className="flex items-center space-x-3">
                  <div className="flex-shrink-0">
                    <Logo className="w-8 h-8" />
                  </div>
                  <h2 className="text-slate-200 font-medium">Verbot Terminal</h2>
                </div>
                <div className="flex items-center space-x-2">
                  <span className="text-slate-400 text-sm"></span>
                </div>
              </div>
              
              {/* Messages Container */}
              <div 
                ref={chatContainerRef}
                className="h-[calc(100vh-32rem)] overflow-y-auto p-6 space-y-6 scroll-smooth"
              >
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex items-start space-x-3 ${
                      message.type === 'user' ? 'justify-end' : 'justify-start'
                    }`}
                  >
                    {message.type === 'bot' ? (
                      <>
                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                          <Logo className="w-11 h-11" />
                        </div>
                        <div className="bg-slate-700/50 rounded-lg p-4 max-w-[80%]">
                          <p className="text-slate-300 text-sm">{message.content}</p>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4 max-w-[80%]">
                          <p className="text-blue-400 text-sm">{message.content}</p>
                        </div>
                        <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex items-center justify-center flex-shrink-0">
                          <User className="w-6 h-6 text-blue-400" />
                        </div>
                      </>
                    )}
                  </div>
                ))}
                <div ref={messagesEndRef} />
                
                {isTyping && (
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                    <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse delay-75" />
                    <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse delay-150" />
                  </div>
                )}
              </div>

              {/* Input Form */}
              <form onSubmit={handleSubmit} className="p-4 border-t border-slate-700/50">
                <div className="relative">
                  <input
                    type="text"
                    value={input}
                    disabled
                    placeholder="Connect your wallet to start trading"
                    className="w-full bg-slate-800/50 text-slate-200 placeholder-slate-400 px-4 py-3 rounded-lg focus:outline-none cursor-not-allowed opacity-50"
                  />
                  <button
                    type="submit"
                    disabled
                    className="absolute right-2 top-1/2 transform -translate-y-1/2 text-blue-400/50 cursor-not-allowed"
                  >
                    <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}