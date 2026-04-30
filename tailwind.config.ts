import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F5F0E8',
        'warm-white': '#FAF8F4',
        charcoal: '#1A1916',
        dark: '#0E0D0B',
        mid: '#6B6760',
        'light-mid': '#A8A49E',
        gold: '#C9A96E',
        'gold-light': '#E8D5B0',
        forest: '#2C3B2D',
        'forest-light': '#4A5E4B',
      },
      fontFamily: {
        display: ['var(--font-display)', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'DM Sans', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
