import { useEffect, useState } from "react";

function ListarReservas() {
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    load();
  }, []);

  function load() {
    fetch("http://localhost:8080/api/v1/reserva", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setReservas(data.content || data);
      })
      .catch((error) => {
        console.error("Erro ao listar as reservas:", error);
        alert("Erro ao listar as reservas");
      });
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Número de Diárias</th>
            <th>Valor Total</th>
            <th>Data</th>
            <th>Id do Hotel</th>
            <th>Usuário</th>
          </tr>
        </thead>
        <tbody>
          {reservas.map((reserva, index) => (
            <tr key={index}>
              <td>{reserva.numeroDiaria}</td>
              <td>
                {reserva.valorTotal.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
              <td>{reserva.data}</td>
              <td>{reserva.idHotel}</td>
              <td>{reserva.usuario.nome}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ListarReservas;
