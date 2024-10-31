import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
// import ReservationCancel from "./reserva/cancelarReserva";
import UserList from "./pages/Usuario/UserList";
import UserRegister from "./pages/Usuario/UserRegister";
import UsersDelete from "./pages/Usuario/UserDelete";

function App() {
  return (
    <>
      <nav>
        {/* <Link to="/cancelarReserva">Remover Reserva</Link> |{" "} */}

        <Link to="/listarUsuarios">Listar Usuários</Link> |{" "}
        <Link to="/cadastrarUsuario">Cadastrar Usuário</Link>
        <Link to="/excluirUsuario">Excluir Usuário</Link>
      </nav>
      <br />
      <Routes>
        {/* <Route path="/cancelarReserva" element={<ReservationCancel />} /> */}
        <Route path="/listarUsuarios" element={<UserList />} />
        <Route path="/cadastrarUsuario" element={<UserRegister />} />
        <Route path="/excluirUsuario" element={<UserRegister />} />
      </Routes>
    </>
  );

}

export default App;
