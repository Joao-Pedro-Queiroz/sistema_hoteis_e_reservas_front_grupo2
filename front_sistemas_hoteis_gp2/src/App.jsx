import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import UserList from "./pages/Usuario/UserList";
import UserRegister from "./pages/Usuario/UserRegister";

function App() {
  return (
    <>
      <nav>

        <Link to="/listarUsuarios">Listar Usuários</Link> 
        <Link to="/cadastrarUsuario">Cadastrar Usuário</Link>
      </nav>
      <br />
      <Routes>
        <Route path="/listarUsuarios" element={<UserList />} />
        <Route path="/cadastrarUsuario" element={<UserRegister />} />
      </Routes>
    </>
  );

}

export default App;
