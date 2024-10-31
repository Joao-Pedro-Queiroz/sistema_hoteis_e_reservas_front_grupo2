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
  const [precoTotal, setPrecoTotal] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    fetchUsuarios();
    fetchHoteis();
  }, []);

  const fetchUsuarios = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/v1/usuarios");
      const data = await response.json();
      setUsuarios(data);
    } catch (error) {
      console.error("Erro ao carregar usuários:", error);
    }
  };

  const fetchHoteis = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/v1/hoteis");
      const data = await response.json();
      setHoteis(data);
    } catch (error) {
      console.error("Erro ao carregar hotéis:", error);
    }
  };

  const handleClick = () => {
    if (!usuarioId || !hotelId || !diarias || !precoTotal) {
      alert("Preencha todos os campos");
      return;
    }

    const data = {
      usuarioId: usuarioId,
      hotelId: hotelId,
      diarias: Number(diarias),
      precoTotal: Number(precoTotal),
    };

    setIsLoading(true);
    fetch("http://localhost:8080/api/v1/reservas", {
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
        setPrecoTotal("");
      })
      .catch((error) => {
        console.error(error);
        alert("Erro no cadastro da reserva");
      })
      .finally(() => setIsLoading(false));
  };

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
          value={precoTotal}
          onChange={(e) => setPrecoTotal(e.target.value)}
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
