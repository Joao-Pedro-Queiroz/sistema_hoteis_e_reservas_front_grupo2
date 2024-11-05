import { useEffect, useState } from "react";
import {
  Container,
  Typography,
  List,
  ListItem,
  ListItemText,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

function RelatorioUsuario() {
  const [reservas, setReservas] = useState([]);
  const [usuarioNome, setUsuarioNome] = useState("");
  const [quantidadeReservas, setQuantidadeReservas] = useState(0);
  const [usuarios, setUsuarios] = useState([]);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    loadUsuarios();
  }, []);

  useEffect(() => {
    if (userId) {
      loadRelatorioUsuario(userId);
    }
  }, [userId]);

  function loadUsuarios() {

    fetch("http://localhost:8080/api/v1/usuario", {
      method: 'GET',
    }).then(response => {
      return response.json()
    }).then(data => {
      setUsuarios(data.content)
    }).catch(response => {
      alert("Erro ao listar os usuários")
    })
 
  }

  function loadRelatorioUsuario(id) {
    fetch(`http://localhost:8080/api/v1/reserva/usuario/${id}`, {
      method: "GET",
    }).then((response) => {
        return response.json();
      }).then((data) => {
        setUsuarioNome(data.nomeUsuario);
        setReservas(
          data.reservas.sort((a, b) => new Date(a.data) - new Date(b.data))
        );
        setQuantidadeReservas(data.totalReservas);
      }).catch(response => {
      alert("Erro ao carregar relatório do usuário")
    })
 
  }

  return (
    <Container>
      <FormControl fullWidth margin="normal">
        <InputLabel id="usuario-select-label">Selecione um Usuário</InputLabel>
        <Select
          labelId="usuario-select-label"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        >
          {usuarios.map((usuario) => (
            <MenuItem key={usuario.id} value={usuario.id}>
              {usuario.nome}
            </MenuItem>
          ))}
        </Select>
      </FormControl>

      <Typography variant="h4" gutterBottom>
        Relatório de Reservas para {usuarioNome}
      </Typography>
      <Typography variant="h6">
        Total de Reservas: {quantidadeReservas}
      </Typography>
      <List>
        {reservas.map((reserva) => (
          <ListItem key={reserva.id} divider>
            <ListItemText
              primary={`Hotel: ${reserva.idHotel} | Diárias: ${reserva.numeroDiaria}`}
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
