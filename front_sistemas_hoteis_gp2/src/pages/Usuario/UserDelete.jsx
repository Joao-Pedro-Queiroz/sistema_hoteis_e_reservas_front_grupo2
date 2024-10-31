import { useEffect, useState } from "react";
import {
  Button,
  List,
  ListItem,
  ListItemText,
  Typography,
  Container,
} from "@mui/material";

function UserDelete() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    loadUsuarios();
  }, []);

  const loadUsuarios = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/v1/usuarios", {
        method: "GET",
      });
      if (!response.ok) throw new Error("Erro ao carregar usuários");
      const data = await response.json();
      setUsuarios(data);
    } catch (error) {
      alert(error.message);
    }
  };

  const deleteUser = async (id) => {
    try {
      const response = await fetch(`http://localhost:8080/api/v1/usuarios/${id}`, {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Erro ao excluir usuário");
      loadUsuarios(); // Recarrega a lista de usuários após a exclusão
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Lista de Usuários
      </Typography>
      <List>
        {usuarios.map((usuario) => (
          <ListItem key={usuario.id} divider>
            <ListItemText
              primary={`Nome: ${usuario.nome}`}
              secondary={`Email: ${usuario.email} | Telefone: ${usuario.telefone} | Endereço: ${usuario.endereco}`}
            />
            <Button
              variant="contained"
              color="secondary"
              onClick={() => deleteUser(usuario.id)}
            >
              Excluir
            </Button>
          </ListItem>
        ))}
      </List>
    </Container>
  );
}

export default UserDelete;
