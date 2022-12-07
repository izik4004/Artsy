module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        lg: '30px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1170px',
    },
    extend: {
      colors: {
        dark: '#292830',
        light: '#BDBDBD',
        blue: '#3341C1',
        accentHover: '#e05216',
        grey: '#F5F5F5',
        
      },
      backgroundImage: {
        upcoming: "url('/src/assets/Upcomingsection.png')",
        // cta: "url('/src/assets/img/cta/bg.svg')",
        
      },
    },
  },
  plugins: [],
};
