import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Contato from './pages/Contato';
import Home from './pages/Home';
import Sobre from './pages/Sobre';

function RoutesApp() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/contato" element={<Contato />} />
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesApp;
