import { ThemeProvider } from 'styled-components';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import { Layout } from './components/layout/Layout';
import { theme } from './styles/theme';
import { GlobalStyles } from './styles/GlobalStyles';
import { Home } from './pages/Home';
import { Experience } from './pages/Experience';
import { Studies } from './pages/Studies';
import { Projects } from './pages/Projects';
import { Research } from './pages/Research';
import { Awards } from './pages/Awards';
import { Hobbies } from './pages/Hobbies';

// ScrollToTop component that will scroll to top when route changes
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/studies" element={<Studies />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/research" element={<Research />} />
            <Route path="/awards" element={<Awards />} />
            <Route path="/hobbies" element={<Hobbies />} />
          </Routes>
        </Layout>
      </Router>
    </ThemeProvider>
  );
}

export default App;
