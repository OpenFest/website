import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'dark-blue': '#09021B',
        'deep-blue': '#0F0429',
        blue: '#2F1B5D',
        'neon-green': '#34EAD8',
        'neon-pink': '#D92ACE',
      },
      letterSpacing: {
        max: '0.3em',
      },
      scale: {
        1.3: '1.3',
      },
      flexBasis: {
        24: '24%',
      },
    },
  },
  plugins: [],
}
export default config
