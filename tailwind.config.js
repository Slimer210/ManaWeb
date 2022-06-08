module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      mobile: '480px',
      tablet: '768px',
      laptop: '960px',
      desktop: '1440px',
    },

    fontFamily: {
      sans: ['Noto Sans TC', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
    },
    extend: {
      colors: {
        'mana-black': '#454545',
        'mana-dark-purple': "#4D488C",
        'mana-purple': '#8c82ff',
        'patreon-orange': '#ff6855',
        'paypal-blue': '#003087',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    }
  },
  plugins: [],
}