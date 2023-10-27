import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    fontFamily: {
      'primary': ['Times New Roman', 'serif'],
    },
    fontSize: {
      'base': ['1.4rem', '1.2'],
    },
    colors: {
      black: '#000',
      white: '#FFF',
      transparent: 'transparent',
      'grey-light': '#F5F5F5',
      'grey-med': '#EBEBEB',
      primary: '#e1f3ff'
    }
  },
}
export default config
