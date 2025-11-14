import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'calmint-dark': '#073636',
        'calmint-green': '#00524E',
        'calmint-cream': '#FBF9EB',
        'calmint-peach': '#F6D5B3',
        'calmint-coral': '#F2A77B'
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        display: ['var(--font-serif)', 'serif']
      },
      borderRadius: {
        '3xl': '1.75rem'
      },
      boxShadow: {
        soft: '0 18px 45px rgba(0,0,0,0.08)'
      }
    }
  },
  plugins: []
};

export default config;
