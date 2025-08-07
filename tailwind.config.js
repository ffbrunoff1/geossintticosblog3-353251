/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9ff',
          100: '#e0f2fe',
          500: '#008C36',
          600: '#007A30',
          700: '#006B2A',
          900: '#004D1F',
        },
        secondary: {
          50: '#f8f9fa',
          100: '#f1f3f4',
          500: '#6c757d',
          600: '#5a6268',
          700: '#495057',
          900: '#212529',
        },
        accent: {
          50: '#f0fdf4',
          100: '#dcfce7',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['Poppins', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-primary': 'linear-gradient(135deg, #008C36 0%, #22c55e 100%)',
        'gradient-secondary':
          'linear-gradient(135deg, #212529 0%, #495057 100%)',
      },
    },
  },
  plugins: [],
};
