import { useEffect, useState } from "react";
import {
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
  Container,
} from "@mui/material";

function CancelarReserva() {
  const [reservas, setReservas] = useState([]);

  useEffect(() => {
    loadReservas();
  }, []);

  function loadReservas() {
    fetch("http://localhost:8080/api/v1/reservas", {
      method: "GET",
    })
      .then((response) => {
        if (!response.ok) throw new Error("Erro ao carregar reservas");
        return response.json();
      })
      .then((data) => {
        setReservas(data.content || data);
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  function cancelReservation(id) {
    fetch(`http://localhost:8080/api/v1/reservas/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (!response.ok) throw new Error("Erro ao cancelar reserva");
        loadReservas();
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Lista de Reservas
      </Typography>
      <List>
        {reservas.map((reserva) => (
          <ListItem key={reserva.id} divider>
            <ListItemText
              primary={`Usuário: ${reserva.usuario.nome} | Hotel: ${reserva.hotel.nome}`}
              secondary={`Diárias: ${
                reserva.diarias
              } | Preço Total: R$ ${reserva.precoTotal.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}`}
            />
            <Button
              variant="contained"
              color="secondary"
              onClick={() => cancelReservation(reserva.id)}
            >
              Cancelar
            </Button>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default CancelarReserva;
