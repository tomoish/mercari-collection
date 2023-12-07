import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        
      },
      // 欧文（暫定）：FF Mark (FontFont)
      //和文：たづがね®角ゴシック (Monotype)
      fontFamily: {
        type1: ['Maven Pro'],
        type2: ['Zen Kaku Gothic New']
      },
    },
  },
  plugins: [],
}
export default config
