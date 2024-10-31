import { useEffect, useState } from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

function RelatorioUsuario({ userId }) {
  const [reservas, setReservas] = useState([]);
  const [usuario, setUsuario] = useState({});
  const [quantidadeReservas, setQuantidadeReservas] = useState(0);

  useEffect(() => {
    if (userId) {
      loadRelatorioUsuario(userId);
    }
  }, [userId]);

  function loadRelatorioUsuario(id) {
    fetch(`http://localhost:8080/api/v1/reserva/usuario/${id}`, {
      method: "GET",
    })
      .then((response) => {
        if (!response.ok)
          throw new Error("Erro ao carregar relatório do usuário");
        return response.json();
      })
      .then((data) => {
        setUsuario(data.usuario);
        setReservas(
          data.reservas.sort((a, b) => new Date(a.data) - new Date(b.data))
        );
        setQuantidadeReservas(data.reservas.length);
      })
      .catch((error) => {
        alert(error.message);
      });
  }

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Relatório de Reservas para {usuario.nome}
      </Typography>
      <Typography variant="h6">
        Total de Reservas: {quantidadeReservas}
      </Typography>
      <List>
        {reservas.map((reserva) => (
          <ListItem key={reserva.id} divider>
            <ListItemText
              primary={`Hotel: ${reserva.hotel.nome} | Diárias: ${reserva.diarias}`}
              secondary={`Data: ${new Date(reserva.data).toLocaleDateString(
                "pt-BR"
              )} | Preço Total: ${reserva.valorTotal.toLocaleString("pt-BR", {
                style: "currency",
                currency: "BRL",
              })}`}
            />
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default RelatorioUsuario;
