import { useState } from "react";
import { Container, Typography, TextField, Button } from "@mui/material";

function CadastrarUsuario() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [endereco, setEndereco] = useState("");

  const createUser = () => {
    // Função para criar usuário
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
        InputProps={{
          style: { backgroundColor: "white", color: "black" }, // Definindo a cor de fundo e texto
        }}
      />
      <TextField
        label="Email"
        fullWidth
        margin="normal"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        InputProps={{
          style: { backgroundColor: "white", color: "black" },
        }}
      />
      <TextField
        label="Telefone"
        fullWidth
        margin="normal"
        value={telefone}
        onChange={(e) => setTelefone(e.target.value)}
        InputProps={{
          style: { backgroundColor: "white", color: "black" },
        }}
      />
      <TextField
        label="Endereço"
        fullWidth
        margin="normal"
        value={endereco}
        onChange={(e) => setEndereco(e.target.value)}
        InputProps={{
          style: { backgroundColor: "white", color: "black" },
        }}
      />
      <Button variant="contained" color="primary" onClick={createUser}>
        Cadastrar
      </Button>
    </Container>
  );
}

export default CadastrarUsuario;
