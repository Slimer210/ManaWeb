/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable global-require */
module.exports = {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      mobile: '480px',
      tablet: '800px',
      laptop: '1050px',
      desktop: '1360px',
    },

    fontFamily: {
      sans: ['FZYiHei-M20T', 'sans-serif'],
      serif: ['Merriweather', 'serif'],
      body: ['Noto Sans TC', 'body'],
    },
    extend: {
      colors: {
        'mana-black': '#454545',
        'mana-dark-purple': '#4D488C',
        'mana-purple': '#8c82ff',
        'mana-light-purple': '#d9d6ff',
        'patreon-orange': '#ff6855',
        'paypal-blue': '#003087',
      },
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backgroundImage: {
        'mana-landing': "url('./assets/img/landingPhoto.png')",
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        '4xl': [
          '0 35px 35px rgba(0, 0, 0, 0.25)',
          '0 45px 65px rgba(0, 0, 0, 0.15)',
        ],
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
    require('tailwind-scrollbar'),
  ],
};
