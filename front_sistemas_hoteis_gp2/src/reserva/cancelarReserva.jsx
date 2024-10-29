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

  const loadReservas = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/v1/reservas", {
        method: "GET",
      });
      if (!response.ok) throw new Error("Erro ao carregar reservas");
      const data = await response.json();
      setReservas(data);
    } catch (error) {
      alert(error.message);
    }
  };

  const cancelReservation = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:8080/api/v1/reservas/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) throw new Error("Erro ao cancelar reserva");
      loadReservas();
    } catch (error) {
      alert(error.message);
    }
  };

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
              secondary={`Diárias: ${reserva.numeroDiarias} | Preço Total: R$ ${reserva.precoTotal}`}
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
