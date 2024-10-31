import "./App.css";
import { Link, Routes, Route } from "react-router-dom";
import CancelarReserva from "./reserva/cancelarReserva";
import CadastrarReserva from "./reserva/cadastrarReserva";
import ListarReservas from "./reserva/listarReserva";
import RelatorioUsuario from "./usuario/relatorioUsuario";

function App() {
  return (
    <>
      <Link to="/cadastrarReserva">Cadastrar Reserva</Link>
      <Link to="/listarReservas">Listar Reservas</Link>
      <Link to="/cancelarReserva">Remover Reserva</Link>
      <Link to="/relatorioUsuario">Relatório de Usuário</Link>
      <br />
      <Routes>
        <Route path="/cadastrarReserva" element={<CadastrarReserva />} />
        <Route path="/listarReservas" element={<ListarReservas />} />
        <Route path="/cancelarReserva" element={<CancelarReserva />} />
        <Route path="/relatorioUsuario" element={<RelatorioUsuario />} />
      </Routes>
    </>
  );
}

export default App;
