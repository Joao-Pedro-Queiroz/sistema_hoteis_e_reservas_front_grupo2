import { useState } from "react";
import { Button, TextField, Typography, Container } from "@mui/material";

function UserRegister() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");

  const createUser = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/v1/usuarios", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nome, email, telefone, endereco }),
      });
      if (!response.ok) throw new Error("Erro ao cadastrar usuário");
      alert("Usuário cadastrado com sucesso!");
      setNome("");
      setEmail("");
      setTelefone("");
      setEndereco("");
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Cadastrar Usuário
      </Typography>
      <TextField
        label="Nome"
        fullWidth
        margin="normal"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />
      <TextField
        label="Email"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        label="Telefone"
        fullWidth
        margin="normal"
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
      />
      <TextField
        label="Endereço"
        fullWidth
        margin="normal"
        value={endereco}
        onChange={(e) => setEndereco(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={createUser}>
        Cadastrar
      </Button>
    </Container>
  );
}

export default UserRegister;
