import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx,html}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx,html}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx,html}',
  ],
  theme: {
    extend: {
      colors: {
        'red': {
          500: '#FF0000',
          600: '#D11A17',
          700: '#891127',
          800: '#B20D1B',
        },
        'fuchsia': {
          500: '#C400FF',
        },
        'blue': {
          500: '#0062FF',
          600: '#0089FF',
        },
        'sky': {
          500: '#2177AD',
        },
        'gray': {
          300: '#F4F4F4',
          400: '#E8E8E8',
          600: '#D5D5D5',
          500: '#8E8E8E',
        },
      },
    },
  },
  plugins: [],
}
export default config
