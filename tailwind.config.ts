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
        'logo-img1': "url('/login-img1.jpg')",
        'logo-img2': "url('/login-img2.jpg')",
        'logo-img3': "url('/login-img3.jpg')",
      },
    },
    colors: {
      dark: '#121212',
      primaryColor: '#0075CD',
      white: '#fff',
      lightgrey: '#CCCDCE',
      grey: '#12121280',
      offWhite: '#F3F9FDC2',
    },
  },
  plugins: [],
}
export default config
