import { useEffect, useState } from "react";

function ListarUsuario() {
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
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <td style={{ color: "black" }}>Nome</td>
            <td style={{ color: "black" }}>Endereço</td>
            <td style={{ color: "black" }}>Email</td>
            <td style={{ color: "black" }}>Telefone</td>
            <td style={{ color: "black" }}>Ações</td>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((usuario) => (
            <tr key={usuario.id}>
              <td style={{ color: "black" }}>{usuario.nome}</td>
              <td style={{ color: "black" }}>{usuario.endereco}</td>
              <td style={{ color: "black" }}>{usuario.email}</td>
              <td style={{ color: "black" }}>{usuario.telefone}</td>
              <td>
                <button onClick={() => deleteUser(usuario.id)} >Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default ListarUsuario;
