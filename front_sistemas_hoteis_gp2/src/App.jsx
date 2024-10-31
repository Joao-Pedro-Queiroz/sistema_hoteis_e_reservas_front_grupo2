import "./App.css";
import { Link, Route, Routes } from 'react-router-dom'
import CancelarReserva from "./reserva/cancelarReserva";
import CadastrarReserva from "./reserva/cadastrarReserva";
import ListarReservas from "./reserva/listarReserva";

function App() {
  return (
    <>
      <Link to="/cadastrarReserva">Cadastrar Reserva</Link>
      <Link to="/listarReservas">Listar Reservas</Link>
      <Link to="/cancelarReserva">Remover Reserva</Link>
      <br />
      <Routes>
        <Route path="/cadastrarReserva" element={<CadastrarReserva />} />
        <Route path="/listarReservas" element={<ListarReservas />} />
        <Route path="/cancelarReserva" element={<CancelarReserva />} />
      </Routes>
    </>
  );
}

export default App;
