import { Typography } from "@mui/material";
import { useEffect, useState } from "react";

function ListarReserva() {
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

  function deletarReserva(id) {
    fetch(`http://localhost:8080/api/v1/reserva/${id}`, {
      method: "DELETE",
    }).then(response => {
      load();
    }).catch(response => {
      alert("Erro no exclusão da reserva")
    })

  }

  return (
    <>
      <Typography variant="h4" gutterBottom> Reservas Cadastradas </Typography>
      <table>
        <tr>
          <td>Número de Diárias</td>
          <td>Valor Total</td>
          <td>Data</td>
          <td>Id do Hotel</td>
          <td>Usuário</td>
          <td>Ações</td>
        </tr>
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
            <td>
              <button onClick={() => deletarReserva(reserva.id)} >Excluir</button>
            </td>
          </tr>
        ))}
      </table>
    </>
  );
}

export default ListarReserva;
