import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import CadastrarBiblioteca from './biblioteca/CadastrarBiblioteca'
import ListarBiblioteca from './biblioteca/ListarBiblioteca'
import CadastrarUsuario from './usuario/CadastrarUsuario'
import ListarUsuario from './usuario/ListarUsuario'
import CadastrarLivro from './livro/CadastrarLivro'
import ListarLivro from './livro/ListarLivro'

function App() {

  return (
    <>
    <Link to="/cadastrarBiblioteca">Cadastrar Biblioteca</Link><br/>
    <Link to="/listarBiblioteca">Listar Biblioteca</Link><br/>
    <Link to="/cadastrarUsuario">Cadastrar Usuario</Link><br/>
    <Link to="/listarUsuario">Listar Usuario</Link><br/>
    <Link to="/cadastrarLivro">Cadastrar Livro</Link><br/>
    <Link to="/listarLivro">Listar Livro</Link><br/>


     <Routes>
      <Route path='/cadastrarBiblioteca' element={<CadastrarBiblioteca/>}></Route>
      <Route path='/listarBiblioteca' element={<ListarBiblioteca/>}></Route>
      <Route path='/cadastrarUsuario' element={<CadastrarUsuario/>}></Route>
      <Route path='/listarUsuario' element={<ListarUsuario/>}></Route>
      <Route path='/cadastrarLivro' element={<CadastrarLivro/>}></Route>
      <Route path='/listarLivro' element={<ListarLivro/>}></Route>
     </Routes>
    </>
  )
}

export default App
