/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'
  ],
  theme: {
    extend: {
      colors: {
        // Paleta institucional Humanic
        'humanic': {
          'navy': '#1e3a5f',      // Azul marino Universidad de Los Andes
          'green': '#2d5a3f',     // Verde natural símbolo HUMANIC
          'lime': '#a4e637',      // Verde lima neón HUMANIC
          'bronze': '#c9a66b',    // Tono bronce figuras
          'dark': '#0f172a',      // Slate oscuro texto
          'light': '#f8fafc',     // Fondo claro
          'navy-light': '#2a4a6f',
          'green-dark': '#1e3a2a',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
        'serif': ['Merriweather', 'Georgia', 'serif'],
        'display': ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glow-lime': '0 0 30px rgba(164, 230, 55, 0.15)',
        'glow-lime-hover': '0 0 40px rgba(164, 230, 55, 0.25)',
        'card': '0 4px 6px -1px rgba(30, 58, 95, 0.1), 0 2px 4px -1px rgba(30, 58, 95, 0.06)',
        'card-hover': '0 20px 25px -5px rgba(30, 58, 95, 0.1), 0 10px 10px -5px rgba(30, 58, 95, 0.04)',
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #1e3a5f 0%, #2d5a3f 50%, #0f172a 100%)',
        'gradient-accent': 'linear-gradient(90deg, #a4e637 0%, #7cb342 100%)',
        'gradient-navy': 'linear-gradient(180deg, #1e3a5f 0%, #0f172a 100%)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
