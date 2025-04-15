/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'

export default {
  darkMode: ['class'],
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {},
    },
    extend: {
      screens: {},
      colors: {
        brand: {
          DEFAULT: '#FA7275',
          100: '#EA6365',
        },
        red: '#FF7474',
        error: '#b80000',
        green: '#3DD9B3',
        blue: '#56B8FF',
        pink: '#EEA8FD',
        orange: '#F9AB72',
        light: {
          100: '#333F4E',
          200: '#A3B2C7',
          300: '#F2F5F9',
          400: '#F2F4F8',
        },
        dark: {
          100: '#04050C',
          200: '#131524',
        },
      },
      fontFamily: {
        poppins: ['var(--font-poppins)'],
      },
      boxShadow: {
        'drop-1': '0px 10px 30px 0px rgba(66, 71, 97, 0.1)',
        'drop-2': '0 8px 30px 0 rgba(65, 89, 214, 0.3)',
        'drop-3': '0 8px 30px 0 rgba(65, 89, 214, 0.1)',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'caret-blink': {
          '0%,70%,100%': {opacity: '1'},
          '20%,50%': {opacity: '0'},
        },
      },
      animation: {
        'caret-blink': 'caret-blink 1.25s ease-out infinite',
      },
    },
  },
  plugins: [
    require('tailwindcss-animate'),
    plugin(function ({addBase, theme, addComponents}) {
      addComponents({
        '.flex-between': {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        },
        '.flex-center': {
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        },
        '.absolute-center': {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
        },
      })
      addBase({
        h1: {
          fontSize: theme('fontSize.5xl'),
          lineHeight: theme('lineHeight.5xl'),
          fontStyle: theme('fontStyle.normal'),
          fontWeight: 600,
        },
        h2: {
          fontSize: theme('fontSize.4xl'),
          lineHeight: theme('lineHeight.4xl'),
          fontStyle: theme('fontStyle.normal'),
          fontWeight: 600,
          // '@screen tablet_max': {
          //   fontSize: theme('fontSize.3xl'),
          //   lineHeight: theme('lineHeight.3xl'),
          //   fontStyle: theme('fontStyle.normal'),
          // fontWeight: 600
          // },
        },
        h3: {
          fontSize: theme('fontSize.3xl'),
          lineHeight: theme('lineHeight.3xl'),
          fontStyle: theme('fontStyle.normal'),
          fontWeight: 600,
        },
        h4: {
          fontSize: theme('fontSize.2xl'),
          lineHeight: theme('lineHeight.2xl'),
          fontStyle: theme('fontStyle.normal'),
          fontWeight: 600,
        },
        h5: {
          fontSize: theme('fontSize.xl'),
          lineHeight: theme('lineHeight.xl'),
          fontStyle: theme('fontStyle.normal'),
          fontWeight: 600,
        },
        h6: {
          fontSize: theme('fontSize.lg'),
          lineHeight: theme('lineHeight.lg'),
          fontStyle: theme('fontStyle.normal'),
          fontWeight: 600,
        },
        p: {
          fontSize: theme('fontSize.base'),
          lineHeight: theme('lineHeight.base'),
          fontStyle: theme('fontStyle.normal'),
          fontWeight: 600,
        },
      })
    }),
  ],
}
