import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import ReservationCancel from "./reserva/cancelarReserva";
import UserList from "./usuario/UserList";
import UserRegister from "./usuario/UserRegister";

function App() {
  return (
    <Router>
      <nav>
        <Link to="/cancelarReserva">Remover Reserva</Link> |{" "}
        <Link to="/listarUsuarios">Listar Usuários</Link> |{" "}
        <Link to="/cadastrarUsuario">Cadastrar Usuário</Link>
      </nav>
      <br />
      <Routes>
        <Route path="/cancelarReserva" element={<ReservationCancel />} />
        <Route path="/listarUsuarios" element={<UserList />} />
        <Route path="/cadastrarUsuario" element={<UserRegister />} />
      </Routes>
    </Router>
  );
}

export default App;
