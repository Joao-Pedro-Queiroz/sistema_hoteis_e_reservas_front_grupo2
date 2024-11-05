import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";
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
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650, border: 1, borderColor: 'divider' }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ borderRight: 1, borderColor: 'divider' }}>Número de Diárias</TableCell>
              <TableCell sx={{ borderRight: 1, borderColor: 'divider' }}>Valor Total</TableCell>
              <TableCell sx={{ borderRight: 1, borderColor: 'divider' }}>Data</TableCell>
              <TableCell sx={{ borderRight: 1, borderColor: 'divider' }}>Id do Hotel</TableCell>
              <TableCell sx={{ borderRight: 1, borderColor: 'divider' }}>Usuário</TableCell>
              <TableCell sx={{ borderRight: 1, borderColor: 'divider' }}>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {reservas.map((reserva, index) => (
              <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell sx={{ borderRight: 1, borderColor: 'divider' }}>{reserva.numeroDiaria}</TableCell>
                <TableCell sx={{ borderRight: 1, borderColor: 'divider' }}>
                  {reserva.valorTotal.toLocaleString("pt-BR", {
                    style: "currency",
                    currency: "BRL",
                  })}
                </TableCell>
                <TableCell sx={{ borderRight: 1, borderColor: 'divider' }}>{reserva.data}</TableCell>
                <TableCell sx={{ borderRight: 1, borderColor: 'divider' }}>{reserva.idHotel}</TableCell>
                <TableCell sx={{ borderRight: 1, borderColor: 'divider' }}>{reserva.usuario.nome}</TableCell>
                <TableCell>
                  <Button variant="contained" color="secondary" onClick={() => deletarReserva(reserva.id)}>
                    Excluir
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default ListarReserva;
