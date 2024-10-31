
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

      <Link to="/listarUsuarios">Listar Usuários</Link><br/>
      <Link to="/cadastrarUsuario">Cadastrar Usuário</Link><br/>
      <Link to="/cadastrarReserva">Cadastrar Reserva</Link><br/>
      <Link to="/listarReservas">Listar Reservas</Link><br/>
      <Link to="/cancelarReserva">Remover Reserva</Link><br/>
      <Link to="/relatorioUsuario">Relatório de Usuário</Link><br/>

      <Routes>
          <Route path="/cadastrarUsuario" element={<UserRegister/>}></Route>
        <Route path="/listarUsuarios" element={<UserList/>}></Route>
        <Route path="/cadastrarReserva" element={<CadastrarReserva/>}></Route>
        <Route path="/listarReservas" element={<ListarReservas/>}></Route>
        <Route path="/cancelarReserva" element={<CancelarReserva/>}></Route>
        <Route path="/relatorioUsuario" element={<RelatorioUsuario/>}></Route>
      </Routes>
    </>
  );
}

export default App;
