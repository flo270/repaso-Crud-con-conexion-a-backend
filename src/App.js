import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';
//import {useState} from 'react'

import Home from './page/home'
import CrearMod from './page/crearMod'
import Header from './components/header/Header';
import DetalleMod from '../src/page/detalleMod'
import Modificar from '../src/page/modificar'
function App() {
  //falta agregar esto
 // const [gameSelected,setGameSelected]= useState({})
  return (
    <BrowserRouter>
  <Header/>
      <Routes>
        <Route path='/' element={<Home/>} /> 
        <Route path= '/crear' element ={<CrearMod/>}/>
        <Route path='/detalle/:_id' element = {<DetalleMod /* setgame={setGameSelected} *//>}/>
        <Route path='/modificar/:_id' element = {<Modificar /* game={gameSelected}*//> }/>
        
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
