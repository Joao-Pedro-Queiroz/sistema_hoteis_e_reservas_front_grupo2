import "./App.css";
import CancelarReserva from "./reserva/cancelarReserva";

function App() {
  return (
    <>
      <Link to="/cancelarReserva">Remover Reserva</Link>
      <br />
      <Routes>
        <Route path="/cancelarReserva" element={<CancelarReserva />} />
      </Routes>
    </>
  );
}

export default App;
