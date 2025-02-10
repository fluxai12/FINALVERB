import React from 'react';

export function Logo({ className = "w-25  h-25", isHeader = false }: { className?: string, isHeader?: boolean }) {
  return (
    <img 
      src={isHeader ? "/images/headerlogo.png" : "/images/logo.png"}
      alt="Custom Logo"
      className={className}
      style={{ 
        objectFit: 'contain',
        backgroundColor: 'transparent'
      }}
    />
  );
}