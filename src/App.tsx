import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  GlobalStyles,
} from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Menu from './pages/Menu';
import About from './pages/About';
import Contact from './pages/Contact';

const theme = createTheme({
  palette: {
    primary: {
      main: '#e67e22', // Omnifood orange
    },
    secondary: {
      main: '#2e3b55', // Omnifood dark blue
    },
    background: {
      default: '#fff',
    },
    text: {
      primary: '#2e3b55',
      secondary: '#555',
    },
  },
  typography: {
    fontFamily: 'Poppins, Helvetica, Arial, sans-serif',
    h1: {
      fontWeight: 700,
      fontSize: '3rem',
      letterSpacing: '-1px',
    },
    h2: {
      fontWeight: 700,
      fontSize: '2.2rem',
      letterSpacing: '-0.5px',
    },
    h3: {
      fontWeight: 600,
      fontSize: '1.7rem',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      fontSize: '1.1rem',
      borderRadius: 99,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 99,
          padding: '0.75rem 2.5rem',
        },
        containedPrimary: {
          color: '#fff',
        },
      },
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <GlobalStyles
        styles={{
          body: { background: '#fff' },
          a: { textDecoration: 'none', color: 'inherit' },
        }}
      />
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
