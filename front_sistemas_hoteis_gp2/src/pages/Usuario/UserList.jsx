import { useEffect, useState } from "react";

function UserList() {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    loadUsuarios();
  }, []);

  function loadUsuarios() {
    fetch("http://localhost:8080/api/v1/usuario", {
      method: "GET",
    })
      .then(response => {
        if (!response.ok) throw new Error("Erro ao listar os usuários");
        return response.json();
      })
      .then(data => {
        setUsuarios(data.content || data);
      })
      .catch(error => {
        alert(error.message);
      });
  }

  function deleteUser(id) {
    fetch(`http://localhost:8080/api/v1/usuario/${id}`, {
      method: "DELETE",
    })
      .then(response => {
        if (!response.ok) throw new Error("Erro ao excluir usuário");
        loadUsuarios(); // Recarregar a lista após exclusão
      })
      .catch(error => {
        alert(error.message);
      });
  }

  return (
    <>
      <table>
        <thead>
          <tr>
            <td>Nome</td>
            <td>Endereço</td>
            <td>Email</td>
            <td>Telefone</td>
            <td>Ações</td> {/* Coluna para o botão de excluir */}
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td>{usuario.nome}</td>
              <td>{usuario.endereco}</td>
              <td>{usuario.email}</td>
              <td>{usuario.telefone}</td>
              <td>
                <button onClick={() => deleteUser(usuario.id)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default UserList;
