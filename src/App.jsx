import { Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import ApiData from './pages/ApiData';

function App() {
  return (
    <ThemeProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/api-data" element={<ApiData />} />
        </Routes>
      </Layout>
    </ThemeProvider>
  );
}

export default App; 