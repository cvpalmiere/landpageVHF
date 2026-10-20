import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Home from './Home';
import Clientes from './Clientes';
import Empresas from './Empresas';

export default function App() {
  return (
    <BrowserRouter basename="/landpageVHF">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="clientes" element={<Clientes />} />
          <Route path="empresas" element={<Empresas />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}