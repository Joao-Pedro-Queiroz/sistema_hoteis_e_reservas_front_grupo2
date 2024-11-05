import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from "@mui/material";
import { useEffect, useState } from "react";

function ListarUsuario() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    loadUsuarios();
  }, []);

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

  function deleteUser(id) {
    fetch(`http://localhost:8080/api/v1/usuario/${id}`, {
      method: "DELETE",
    }).then(response => {
      loadUsuarios();
    }).catch(response => {
      alert("Erro no exclusão do usuário")
    })

  }
  
  return (
    <>
      <Typography variant="h4" gutterBottom> Usuários Cadastrados </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650, border: 1, borderColor: 'divider' }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ borderRight: 1, borderColor: 'divider' }}>Nome</TableCell>
              <TableCell sx={{ borderRight: 1, borderColor: 'divider' }}>Endereço</TableCell>
              <TableCell sx={{ borderRight: 1, borderColor: 'divider' }}>Email</TableCell>
              <TableCell sx={{ borderRight: 1, borderColor: 'divider' }}>Telefone</TableCell>
              <TableCell>Ações</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {usuarios.map((usuario, index) => (
              <TableRow key={index} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell sx={{ borderRight: 1, borderColor: 'divider' }}>{usuario.nome}</TableCell>
                <TableCell sx={{ borderRight: 1, borderColor: 'divider' }}>{usuario.endereco}</TableCell>
                <TableCell sx={{ borderRight: 1, borderColor: 'divider' }}>{usuario.email}</TableCell>
                <TableCell sx={{ borderRight: 1, borderColor: 'divider' }}>{usuario.telefone}</TableCell>
                <TableCell>
                  <Button variant="contained" color="secondary" onClick={() => deleteUser(usuario.id)}>
                    Excluir
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}

export default ListarUsuario;
