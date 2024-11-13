export const theme = {
  colors: {
    primary: '#2c3e50',    // Dark blue-gray
    secondary: '#34495e',  // Medium blue-gray
    text: {
      primary: '#2d3748',  // Dark gray for main text
      secondary: '#4a5568', // Medium gray for secondary text
      light: '#ecf0f1',    // Light gray for text on dark backgrounds
      white: '#ffffff',    // White text
    },
    background: {
      main: '#f8f9fa',     // Light gray background
      white: '#ffffff',    // White background
    },
    border: 'rgba(0, 0, 0, 0.1)',
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