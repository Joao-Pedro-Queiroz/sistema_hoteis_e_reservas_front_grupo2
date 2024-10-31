import { useState, useEffect } from "react";
import {
  Button,
  Grid,
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@mui/material";

function CadastrarReserva() {
  const [usuarios, setUsuarios] = useState([]);
  const [hoteis, setHoteis] = useState([]);
  const [usuarioId, setUsuarioId] = useState("");
  const [hotelId, setHotelId] = useState("");
  const [diarias, setDiarias] = useState("");
  const [valorTotal, setvalorTotal] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchUsuarios();
    fetchHoteis();
  }, []);

  function fetchUsuarios() {
    fetch("http://localhost:8080/api/v1/usuario")
      .then((response) => response.json())
      .then((data) => setUsuarios(data))
      .catch((error) => console.error("Erro ao carregar usuários:", error));
  }

  function fetchHoteis() {
    fetch("http://localhost:8080/api/v1/hoteis")
      .then((response) => response.json())
      .then((data) => setHoteis(data))
      .catch((error) => console.error("Erro ao carregar hotéis:", error));
  }

  function handleClick() {
    if (!usuarioId || !hotelId || !diarias || !valorTotal) {
      alert("Preencha todos os campos");
      return;
    }

    const data = {
      numeroDiaria: Number(diarias),
      valorTotal: Number(valorTotal),
      data: new Date().toISOString(),
      idHotel: hotelId,
      usuario: {
        id: usuarioId,
      },
    };

    setIsLoading(true);
    fetch("http://localhost:8080/api/v1/reserva", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) throw new Error("Erro no cadastro da reserva");
        alert("Reserva cadastrada com sucesso");
        setUsuarioId("");
        setHotelId("");
        setDiarias("");
        setvalorTotal("");
      })
      .catch((error) => {
        console.error(error);
        alert("Erro no cadastro da reserva");
      })
      .finally(() => setIsLoading(false));
  }

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <InputLabel>Usuário</InputLabel>
          <Select
            value={usuarioId}
            onChange={(e) => setUsuarioId(e.target.value)}
            label="Usuário"
          >
            {usuarios.map((usuario) => (
              <MenuItem key={usuario.id} value={usuario.id}>
                {usuario.nome}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <FormControl fullWidth>
          <InputLabel>Hotel</InputLabel>
          <Select
            value={hotelId}
            onChange={(e) => setHotelId(e.target.value)}
            label="Hotel"
          >
            {hoteis.map((hotel) => (
              <MenuItem key={hotel.id} value={hotel.id}>
                {hotel.nome}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={12}>
        <TextField
          label="Número de Diárias"
          type="number"
          fullWidth
          value={diarias}
          onChange={(e) => setDiarias(e.target.value)}
        />
      </Grid>

      <Grid item xs={12}>
        <TextField
          label="Preço Total"
          type="number"
          fullWidth
          value={valorTotal}
          onChange={(e) => setvalorTotal(e.target.value)}
        />
      </Grid>

      <Grid item xs={12}>
        <Button onClick={handleClick} variant="contained" disabled={isLoading}>
          {isLoading ? "Cadastrando..." : "Cadastrar Reserva"}
        </Button>
      </Grid>
    </Grid>
  );
}

export default CadastrarReserva;
