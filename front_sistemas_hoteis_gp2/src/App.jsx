
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import UserList from "./pages/Usuario/UserList";
import UserRegister from "./pages/Usuario/UserRegister";
import CancelarReserva from "./reserva/cancelarReserva";
import CadastrarReserva from "./reserva/cadastrarReserva";
import ListarReservas from "./reserva/listarReserva";
import RelatorioUsuario from "./usuario/relatorioUsuario";

function App() {
  return (
    <>

          <Link to="/listarUsuarios">Listar Usuários</Link> 
        <br></br>
        <Link to="/cadastrarUsuario">Cadastrar Usuário</Link>
            <br></br>
      <Link to="/cadastrarReserva">Cadastrar Reserva</Link>
      <Link to="/listarReservas">Listar Reservas</Link>
      <Link to="/cancelarReserva">Remover Reserva</Link>
      <Link to="/relatorioUsuario">Relatório de Usuário</Link>
      <br />
      <Routes>
          <Route path="/cadastrarUsuario" element={<UserRegister />} />
        <Route path="/listarUsuario" element={<UserList />} />
        <Route path="/cadastrarReserva" element={<CadastrarReserva />} />
        <Route path="/listarReservas" element={<ListarReservas />} />
        <Route path="/cancelarReserva" element={<CancelarReserva />} />
        <Route path="/relatorioUsuario" element={<RelatorioUsuario />} />
      </Routes>
    </>
  );
}

export default App;
