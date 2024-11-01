import { useState, useEffect } from "react";
import { Button, Grid, TextField, MenuItem, Select, InputLabel, FormControl, } from "@mui/material";

function CadastrarReserva() {
  const [usuarios, setUsuarios] = useState([]);
  const [hoteis, setHoteis] = useState([]);
  const [usuarioId, setUsuarioId] = useState("");
  const [hotelId, setHotelId] = useState("");
  const [diarias, setDiarias] = useState("");
  const [valorTotal, setvalorTotal] = useState("");

  useEffect(() => {
    fetchUsuarios();
    fetchHoteis();
  }, []);

  function fetchUsuarios() {
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

  function fetchHoteis() {
    fetch("http://localhost:8080/api/v1/hoteis", {
      method: 'GET',
    }).then(response => {
      return response.json()
    }).then(data => {
      setUsuarios(data.content)
    }).catch(response => {
      alert("Erro ao listar os hoteis")
    })
 
  }

  function handleClick() {

    const data = {
      numeroDiaria: Number(diarias),
      valorTotal: Number(valorTotal),
      data: new Date().toISOString(),
      idHotel: hotelId,
      usuario: {
        id: usuarioId,
      },
    };

    fetch("http://localhost:8080/api/v1/reserva", {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": 'application/json'
      }
    }).then(response => {
      alert("Reserva cadastrada com sucesso")
    }).catch(response => {
      alert("Erro no cadastro da reserva")
    })

  }

  return (
    <>
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
        <Button onClick={() => handleClick()} variant="contained">
          Cadastrar Reserva
        </Button>
      </Grid>
    </Grid>
    </>
  );
}

export default CadastrarReserva;
