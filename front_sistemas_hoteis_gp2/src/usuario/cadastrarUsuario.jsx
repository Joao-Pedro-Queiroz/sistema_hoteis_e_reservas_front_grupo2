import { useState } from 'react'
import { Button, Grid, Typography, TextField } from '@mui/material'

function CadastrarUsuario() {
  const [nome, setNome] = useState("");
  const [endereco, setEndereco] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");

  function click() {

    const data = {
      "nome": nome,
      "endereco": endereco,
      "email": email,
      "telefone": telefone
    }

    fetch("http://localhost:8080/api/v1/usuario", {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        "Content-Type": 'application/json'
      }
    }).then(response => {
      alert("Usuário cadastrada com sucesso")
    }).catch(response => {
      alert("Erro no cadastro da usuário")
    })

  }

  return (
    <>
    <Grid container spacing={2}>
     <Grid item xs={12}>
      <Typography variant="h4" gutterBottom> Cadastrar Usuário </Typography>
     </Grid>
     <Grid item xs={12}>
     <TextField label="Nome: " value={nome} onChange={e => setNome(e.target.value)}/>
     </Grid>
     <Grid item xs={12}>
     <TextField label="Endereço: " value={endereco} onChange={e => setEndereco(e.target.value)}/>
     </Grid>
     <Grid item xs={12}>
     <TextField label="Email: " value={email} onChange={e => setEmail(e.target.value)}/>
     </Grid>
     <Grid item xs={12}>
     <TextField label="Telefone: " value={telefone} onChange={e => setTelefone(e.target.value)}/>
     </Grid>
     <Grid item xs={12}>
     <Button onClick={() => click()} variant='contained'>Cadastrar Usuário</Button>
     </Grid>
    </Grid>
    </>
  );
}

export default CadastrarUsuario;
