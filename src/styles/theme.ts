export const theme = {
  colors: {
    primary: '#2c3e50',    // Dark blue-gray
    secondary: '#34495e',  // Medium blue-gray
    background: '#242424',
    text: {
      primary: '#2c3e50',
      secondary: '#4a5568',
      light: '#ecf0f1',
      white: '#ffffff',
    },
    secondary_background: {
      main: '#242424',
      white: '#ffffff',
    },
    border: 'rgba(255, 255, 255, 0.1)',
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '2rem',
    lg: '3rem',
    xl: '4rem',
  },
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
    desktop: '1200px',
  }
};

export type Theme = typeof theme; 