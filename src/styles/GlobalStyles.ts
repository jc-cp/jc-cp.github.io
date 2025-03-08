import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      font-size: 14px;
    }
  }

  body {
    margin: 0;
    padding: 0;
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text.primary};
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: hidden;
    width: 100%;
  }

  #root {
    min-height: 100vh;
    width: 100%;
    overflow-x: hidden;
  }

  /* Remove any Vite template styles */
  :root {
    color-scheme: dark;
  }
  
  /* Improve tap targets for mobile */
  button, a {
    min-height: 44px;
    min-width: 44px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      min-height: 48px;
    }
  }
  
  /* Improve scrolling on mobile */
  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    ::-webkit-scrollbar {
      width: 6px;
      height: 6px;
    }
    
    ::-webkit-scrollbar-track {
      background: transparent;
    }
    
    ::-webkit-scrollbar-thumb {
      background: rgba(0, 0, 0, 0.2);
      border-radius: 3px;
    }
  }
  
  /* Fix image display on mobile */
  img {
    max-width: 100%;
    height: auto;
  }
  
  /* Improve form elements on mobile */
  input, textarea, select {
    font-size: 16px; /* Prevents iOS zoom on focus */
    
    @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
      width: 100%;
    }
  }
  
  /* Add viewport meta tag if not already present in index.html */
  /* <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"> */
`; 