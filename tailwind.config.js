/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#003468',
          50: '#EAF2FA',
          100: '#D2E3F4',
          200: '#A3C4E6',
          300: '#6E9FD3',
          400: '#3A78BC',
          500: '#0F4E96',
          600: '#003468',
          700: '#002A54',
          800: '#001F3F',
          900: '#00152B',
        },
        brand: {
          DEFAULT: '#05B0FA',
          bright: '#05B0FA',
          soft: '#E6F6FE',
          muted: '#7FD3FC',
        },
        steel: {
          50: '#F6F8FA',
          100: '#EDF1F5',
          200: '#DDE4EB',
          300: '#C3CED9',
          400: '#97A6B5',
          500: '#6B7C8D',
          600: '#4E5E6E',
          700: '#3A4753',
          800: '#27313A',
          900: '#171E24',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      maxWidth: {
        shell: '1280px',
      },
      boxShadow: {
        soft: '0 20px 60px -30px rgba(0, 52, 104, 0.35)',
        card: '0 1px 2px rgba(0, 21, 43, 0.06), 0 12px 40px -24px rgba(0, 52, 104, 0.35)',
      },
      backgroundImage: {
        'grid-tech':
          'linear-gradient(to right, rgba(0,52,104,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,52,104,0.06) 1px, transparent 1px)',
        'grid-tech-light':
          'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid-32': '32px 32px',
        'grid-64': '64px 64px',
      },
      keyframes: {
        'pulse-ring': {
          '0%': { transform: 'scale(0.85)', opacity: '0.55' },
          '70%': { transform: 'scale(1.7)', opacity: '0' },
          '100%': { transform: 'scale(1.7)', opacity: '0' },
        },
        scan: {
          '0%': { transform: 'translateX(-110%)' },
          '100%': { transform: 'translateX(110%)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'pulse-ring': 'pulse-ring 2.8s cubic-bezier(0.2, 0.6, 0.3, 1) infinite',
        scan: 'scan 5s ease-in-out infinite',
        'float-slow': 'float-slow 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}
