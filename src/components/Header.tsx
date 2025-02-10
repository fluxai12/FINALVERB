import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen, Rocket, Sparkles } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Logo } from './Logo';

export function Header() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const scrollToTechnicalArchitecture = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('technical-architecture');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Dynamic Background with Parallax Effect */}
      <div 
        className="absolute inset-0 transition-all duration-500"
        style={{
          background: isScrolled 
            ? 'rgba(15, 23, 42, 0.95)'
            : `radial-gradient(circle at ${50 + mousePosition.x * 20}% ${50 + mousePosition.y * 20}%, rgba(59, 130, 246, 0.15), transparent 70%), 
               radial-gradient(circle at ${30 - mousePosition.x * 20}% ${70 - mousePosition.y * 20}%, rgba(168, 85, 247, 0.15), transparent 70%)`,
          backdropFilter: isScrolled ? 'blur(16px)' : 'blur(8px)',
          borderBottom: isScrolled ? '1px solid rgba(30, 41, 59, 0.5)' : 'none'
        }}
      />

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(rgba(59, 130, 246, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(59, 130, 246, 0.1) 1px, transparent 1px)`,
          backgroundSize: '20px 20px',
          transform: `translate(${mousePosition.x * 5}px, ${mousePosition.y * 5}px)`,
          transition: 'transform 0.2s ease-out'
        }}/>
      </div>

      <div className="container mx-auto px-6 relative">
        <nav className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <Logo className="w-48 h-48 group-hover:opacity-80 transition-opacity" isHeader={true} />
          </Link>

          {/* Desktop Menu with Enhanced Animations */}
          <div className="flex items-center space-x-8">
            {[
              { href: '#technical-architecture', onClick: scrollToTechnicalArchitecture, label: 'Technical', icon: <BookOpen className="w-4 h-4" /> },
              { to: '/docs', label: 'Documentation', icon: <Sparkles className="w-4 h-4" /> }
            ].map((link, index) => (
              <Link
                key={index}
                {...(link.to ? { to: link.to } : { href: link.href, onClick: link.onClick })}
                className="group relative px-4 py-2 overflow-hidden"
              >
                <span className="relative z-10 flex items-center space-x-2 text-slate-300 group-hover:text-blue-400 transition-colors">
                  {link.icon}
                  <span>{link.label}</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/10 to-blue-500/0 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-500"></div>
                <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            {/* Enhanced Launch Button */}
            <Link to="/terminal" className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-xl opacity-70 blur group-hover:opacity-100 transition duration-300 animate-gradient bg-[length:200%_100%]"></div>
              <div className="relative px-6 py-2.5 bg-slate-900/90 rounded-xl border border-white/10 leading-none flex items-center space-x-2 group-hover:bg-slate-800/90 transition-all duration-300 group-hover:scale-105">
                <Rocket className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors transform group-hover:rotate-12 duration-300" />
                <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent font-medium bg-[length:200%_100%] animate-gradient">
                  Launch App
                </span>
              </div>
            </Link>

            {/* Enhanced Mobile Menu Button */}
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden relative group"
            >
              <div className="p-2 rounded-lg bg-slate-800/0 hover:bg-slate-800/50 transition-colors">
                <div className="relative w-6 h-6">
                  <span className={`absolute inset-0 transform transition-all duration-300 ${
                    isMobileMenuOpen ? 'rotate-180 opacity-0 scale-50' : 'rotate-0 opacity-100 scale-100'
                  }`}>
                    <Menu className="w-6 h-6 text-blue-400" />
                  </span>
                  <span className={`absolute inset-0 transform transition-all duration-300 ${
                    isMobileMenuOpen ? 'rotate-0 opacity-100 scale-100' : '-rotate-180 opacity-0 scale-50'
                  }`}>
                    <X className="w-6 h-6 text-blue-400" />
                  </span>
                </div>
              </div>
            </button>
          </div>
        </nav>

        {/* Mobile Menu */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-4 relative">
            <div className="absolute inset-0 bg-slate-900/95 backdrop-blur-xl border-t border-slate-800/50"></div>
            
            <div className="grid gap-2 px-4 relative">
              {[
                { href: '#technical-architecture', onClick: scrollToTechnicalArchitecture, label: 'Technical', icon: <BookOpen className="w-4 h-4" />, color: 'purple' },
                { to: '/docs', label: 'Documentation', icon: <Sparkles className="w-4 h-4" />, color: 'blue' }
              ].map((link, index) => (
                <Link
                  key={index}
                  {...(link.to ? { to: link.to } : { href: link.href })}
                  onClick={(e) => link.onClick?.(e)}
                  className={`flex items-center space-x-3 p-3 rounded-xl hover:bg-slate-800/50 transition-all duration-300 group border border-slate-800/50 hover:border-${link.color}-500/30 animate-in`}
                >
                  <div className={`bg-${link.color}-500/10 p-2 rounded-lg group-hover:bg-${link.color}-500/20 transition-colors transform group-hover:scale-110 duration-300`}>
                    {React.cloneElement(link.icon, { className: `text-${link.color}-400` })}
                  </div>
                  <span className={`text-slate-300 group-hover:text-${link.color}-400 transition-colors`}>
                    {link.label}
                  </span>
                </Link>
              ))}
            </div>
            
            <div className="px-4 relative">
              <Link to="/terminal" className="relative group w-full block">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 via-purple-500 to-blue-500 rounded-xl opacity-70 blur group-hover:opacity-100 transition duration-300 animate-gradient bg-[length:200%_100%]"></div>
                <div className="relative w-full bg-slate-900/90 p-3 rounded-xl font-medium border border-white/10 group-hover:bg-slate-800/90 transition-all duration-300 group-hover:scale-[1.02]">
                  <div className="flex items-center justify-center space-x-2">
                    <Rocket className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors transform group-hover:rotate-12 duration-300" />
                    <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400 bg-clip-text text-transparent bg-[length:200%_100%] animate-gradient">
                      Launch App
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}