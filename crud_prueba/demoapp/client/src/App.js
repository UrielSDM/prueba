import './App.css';
import CrudUsuarios from './components/CrudUsuarios';
import Formulario from './components/Formulario';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CrudUsuarios />} />
          <Route path="/prueba" element={<Formulario />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
