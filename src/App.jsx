import { BrowserRouter as Router, Route, Routes, Navigate,Link } from 'react-router-dom';
import Inicio from "./Componentes/inicio"
import Coleccion from "./Componentes/coleccion"
import Favoritos from "./Componentes/Favoritos"
import Info from "./Componentes/info"
import Usuario from "./Componentes/usuario"
import Pokemon from "./Componentes/pokemon"
import "./App.css"
function App() {


  return (
    <>
    <Router>
       <nav className='c-menu'>
          <Link to='/'>Inicio</Link>
          <Link to='/coleccion'>Coleccion</Link>
          <Link to='/favoritos'>Favoritos</Link>
          <Link to='/info'>Info</Link>
          <Link to='/usuario'>Usuario</Link>
          <Link to='/pokemon'>Pokemon</Link>
        </nav>
      <Routes>
       
        <Route path='/' element={<Inicio/>}/>
        <Route path='/coleccion' element={<Coleccion/>}/>
        <Route path='/favoritos' element={<Favoritos/>}/>
        <Route path='/usuario' element={<Usuario/>}/>
        <Route path='/info' element={<Info/>}/>
        <Route path='/pokemon/:name' element={<Pokemon/>}/>
    
      </Routes>
    </Router>
     
    </>
  )
}

export default App
