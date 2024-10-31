import { useEffect, useState } from "react";

function ListarReservas() {
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    load();
  }, []);

  function load() {
    fetch("http://localhost:8080/api/v1/reservas", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setReservas(data.content || data); // Use data.content if API response has a 'content' field
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
            <th>Usuário</th>
            <th>Hotel</th>
            <th>Número de Diárias</th>
            <th>Preço Total</th>
          </tr>
        </thead>
        <tbody>
          {reservas.map((reserva, index) => (
            <tr key={index}>
              <td>{reserva.usuario.nome}</td>
              <td>{reserva.hotel.nome}</td>
              <td>{reserva.diarias}</td>
              <td>
                {reserva.precoTotal.toLocaleString("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                })}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ListarReservas;
