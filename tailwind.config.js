/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      animation: {
        gradient: 'gradient 12s linear infinite',
        'gradient-slow': 'gradient 20s ease infinite',
        'in': 'in 0.4s ease-out forwards',
        'float': 'float 20s ease-in-out infinite',
        'noise': 'noise 1s steps(2) infinite'
      },
      keyframes: {
        gradient: {
          '0%, 100%': { 'background-position': '0% 50%' },
          '50%': { 'background-position': '100% 50%' },
        },
        'in': {
          '0%': { 
            opacity: '0',
            transform: 'translateY(20px)'
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)'
          },
        },
        'float': {
          '0%, 100%': { transform: 'translate(-50%, -50%) translateY(0)' },
          '50%': { transform: 'translate(-50%, -50%) translateY(-20px)' },
        },
        'noise': {
          '0%, 100%': { transform: 'translate(-50%, -50%)' },
          '10%': { transform: 'translate(-51%, -48%)' },
          '20%': { transform: 'translate(-49%, -52%)' },
          '30%': { transform: 'translate(-52%, -49%)' },
          '40%': { transform: 'translate(-48%, -51%)' },
          '50%': { transform: 'translate(-50%, -50%)' },
          '60%': { transform: 'translate(-51%, -49%)' },
          '70%': { transform: 'translate(-49%, -51%)' },
          '80%': { transform: 'translate(-52%, -48%)' },
          '90%': { transform: 'translate(-48%, -52%)' },
        }
      },
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
      perspective: {
        'none': 'none',
        '1000': '1000px',
        '2000': '2000px',
      },
      backfaceVisibility: {
        'visible': 'visible',
        'hidden': 'hidden',
      },
    },
  },
  plugins: [],
  safelist: [
    'bg-teal-500/5',
    'bg-indigo-500/5',
    'bg-blue-500/5',
    'text-teal-400',
    'text-indigo-400',
    'text-blue-400',
    'opacity-0',
    'translate-y-4',
    'animate-in',
    ...Array.from({ length: 20 }, (_, i) => `delay-${i * 100}`),
  ],
};