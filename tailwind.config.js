const cols8 = {
  '1/8': '12.5%',
  '2/8': '25%',
  '3/8': '37.5%',
  '4/8': '50%',
  '5/8': '62.5%',
  '6/8': '75%',
  '7/8': '87.5%',
};

const cols12 = {
  '1/12': '8.333333%',
  '2/12': '16.666667%',
  '3/12': '25%',
  '4/12': '33.333333%',
  '5/12': '41.666667%',
  '6/12': '50%',
  '7/12': '58.333333%',
  '8/12': '66.666667%',
  '9/12': '75%',
  '10/12': '83.333333%',
  '11/12': '91.666667%',
  '12/12': '100%',
};

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'var(--font-roboto)',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'sans-serif',
        ],
      },
      spacing: {
        header: '57px',
        'header-lg': '65px',
        'header-4': '71px', // with 1rem spacing
        'header-lg-4': '80px', // with 1rem spacing
        ...cols8,
        ...cols12,
      },

      borderRadius: {
        'product-card': '10px',
      },

      maxWidth: {
        ...cols8,
        ...cols12,
      },

      colors: {
        vin: {
          white: '#ffffff',
          black: '#000',
          primary: '#f59e0b',
          primaryForeground: '#1e1b4b',
          background: '#0f172a',
          secondary: '#475569',
          secondaryForeground: '#f8fafc',
          success: '#429946',
          error: '#ff0000',
          blue: {
            100: '#06b6d4',
            150: '#64748b',
            200: '#475569',
            250: '#334155',
            300: '#1e293b',
            350: '#0f172a',
          },
          gray: {
            100: '#e6e6e6',
            150: '#ededed',
            200: '#adb5bd',
            250: '#868e96',
            300: '#484f56',
            350: '#cdced9',
          },
          shadow: '#00000014',
        },
      },
      borderWidth: {
        3: '3px',
      },
      keyframes: {
        fadeIn: {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        blink: {
          '0%': { opacity: 0.2 },
          '20%': { opacity: 1 },
          '100% ': { opacity: 0.2 },
        },
      },
      animation: {
        fadeIn: 'fadeIn .3s ease-in-out',
        carousel: 'marquee 60s linear infinite',
        blink: 'blink 1.4s both infinite',
        'highlight-grow': 'highlight-grow 0.8s ease-in-out 0.3s both',
      },
      transitionProperty: {
        'drop-shadow': 'filter',
      },
      textShadow: {
        photo: '0px 4px 8px rgba(0, 0, 0, 0.25), 0px 4px 200px rgba(0, 0, 0, 0.90)',
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
  safelist: [
    {
      pattern: /col-span-+/,
      variants: ['md', 'lg', 'xl', '2xl'],
    },
    {
      pattern: /col-start-+/,
      variants: ['md', 'lg', 'xl', '2xl'],
    },
    { pattern: /px-+/ },
    { pattern: /-mx-+/ },
    {
      pattern: /max-w-+/,
      variants: ['md', 'lg', 'xl', '2xl'],
    },
    {
      pattern: /basis-+/,
      variants: ['md', 'lg', 'xl', '2xl'],
    },
    {
      pattern: /items-+/,
      variants: ['start', 'center', 'end'],
    },
    {
      pattern: /justify-+/,
      variants: ['start', 'center', 'end'],
    },
    {
      pattern: /text-+/,
      variants: ['center', 'right'],
    },
    { pattern: /bg-vin-gray-[1-9]00/ },
  ],
};

module.exports = config;
