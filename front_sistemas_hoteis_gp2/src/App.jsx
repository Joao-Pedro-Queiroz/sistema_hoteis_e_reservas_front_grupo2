
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import CancelarReserva from "./reserva/cancelarReserva";
import CadastrarReserva from "./reserva/cadastrarReserva";
import ListarReserva from "./reserva/listarReserva";
import RelatorioUsuario from "./usuario/relatorioUsuario";
import CadastrarUsuario from "./usuario/cadastrarUsuario";
import ListarUsuario from "./usuario/listarUsuario";

function App() {
  return (
    <>

      <Link to="/cadastrarUsuario">Cadastrar Usuário</Link><br/>
      <Link to="/listarUsuarios">Listar Usuários</Link><br/>
      <Link to="/cadastrarReserva">Cadastrar Reserva</Link><br/>
      <Link to="/listarReservas">Listar Reservas</Link><br/>
      <Link to="/cancelarReserva">Remover Reserva</Link><br/>
      <Link to="/relatorioUsuario">Relatório de Usuário</Link><br/>

      <Routes>
        <Route path="/cadastrarUsuario" element={<CadastrarUsuario/>}></Route>
        <Route path="/listarUsuarios" element={<ListarUsuario/>}></Route>
        <Route path="/cadastrarReserva" element={<CadastrarReserva/>}></Route>
        <Route path="/listarReservas" element={<ListarReserva/>}></Route>
        <Route path="/cancelarReserva" element={<CancelarReserva/>}></Route>
        <Route path="/relatorioUsuario" element={<RelatorioUsuario/>}></Route>
      </Routes>
    </>
  );
}

export default App;
