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
    fetch("http://localhost:8081/api/hotels", {
      method: 'GET',
    }).then(response => {
      return response.json()
    }).then(data => {
      setHoteis(data)
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
     <TextField label="Numero de Diárias: " value={diarias} onChange={e => setDiarias(e.target.value)}/>
     </Grid>
     <Grid item xs={12}>
     <TextField label="Valor Total: " value={valorTotal} onChange={e => setvalorTotal(e.target.value)}/>
     </Grid>
     <Grid item xs={12}>
     <FormControl sx={{width:"28%"}}>
          <InputLabel>Id do Hotel:</InputLabel>
          <Select value={hotelId} onChange={e => setHotelId(e.target.value)} label="Id do Hotel">
            {hoteis.map(hotel => (
              <MenuItem key={hotel.id} value={hotel.id}>{hotel.nome}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <FormControl sx={{width:"28%"}}>
          <InputLabel>Id do Usuário:</InputLabel>
          <Select value={usuarioId} onChange={e => setUsuarioId(e.target.value)} label="Id do Usuário">
            {usuarios.map(usuario => (
              <MenuItem key={usuario.id} value={usuario.id}>{usuario.nome}</MenuItem>
            ))}
          </Select>
        </FormControl>
      </Grid>
     <Grid item xs={12}>
     <Button onClick={() => handleClick()} variant='contained'>Cadastrar Reserva</Button>
     </Grid>
    </Grid>
    </>
  );
}

export default CadastrarReserva;
