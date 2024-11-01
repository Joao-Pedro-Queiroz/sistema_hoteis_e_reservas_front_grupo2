import { Typography } from "@mui/material";
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
      <table>
        <tr>
          <td>Nome</td>
          <td>Endereço</td>
          <td>Email</td>
          <td>Telefone</td>
          <td>Ações</td>
        </tr>
        {usuarios.map((usuario, index) => {
          return <tr>
            <td>{usuario.nome}</td>
            <td>{usuario.endereco}</td>
            <td>{usuario.email}</td>
            <td>{usuario.telefone}</td>
            <td>
              <button onClick={() => deleteUser(usuario.id)} >Excluir</button>
            </td>
          </tr>
        })}
      </table>
    </>
  );
}

export default ListarUsuario;
