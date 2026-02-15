import { Routes, Route } from 'react-router-dom';
import { Layout } from './components';
import { Home, About, BCode, BLabs, Philosophy, Contact } from './pages';
import './styles/variables.css';
import './styles/global.css';

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/b-code" element={<BCode />} />
        <Route path="/b-labs" element={<BLabs />} />
        <Route path="/philosophy" element={<Philosophy />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </Layout>
  );
}

export default App;
