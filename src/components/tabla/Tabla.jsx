import React from 'react'
import { useState,useEffect } from 'react'
import Loader from '../loader/Loader'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import Swal from 'sweetalert2'

const Tabla = () => {
  const [ mod,setmod] = useState({
    _id:"",
    imagen:"",
    nombre:"",
    detalle:"",
    precio:""
  
  })

  const [loader,setLoader]=useState(false)
  const [flag,setFlag]= useState(false)

  const navigate= useNavigate()

 const baseUrl= 'http://localhost:8080/Mod'

   const getGame= ()=>{
    axios.get(`${baseUrl}`)
    .then(response=>{
    console.log('respuesta de axios:',response.data)
    setmod(response.data)
    setLoader(true)
    })
  } 

  useEffect(()=>{
   getGame()
  },[flag])

   const deleteMod = (_id)=>{
    console.log(_id)
    if (window.confirm("¿estas seguro que quieres eliminar el juego?")) {
     axios.delete(`${baseUrl}/${_id}`)
    .then(res => {
      setFlag(!flag)
      if (res.status === 200) {
        Swal.fire(
          'Guardado!',
          `El registro se ha eliminado exitosamente!`,
          'success'  
      )
      } else {
        Swal.fire(
          'Error!',
          'Hubo un problema al eliminar el registro!',
          'error'
      )
      };
     
    })
    } else { 
      alert('ok')
    }
  }  

   const details=(_id)=>{
    console.log('id en tabla',_id)
    if (_id!=null){
      
      navigate(`/detalle/${_id}`)
    }else{
      Swal.fire(
        'Error!',
        'Hubo un problema para acceder al registro!',
        'error'
    )
    }
    
   }
 
  return (
    <div className="container-fluid">
        <h1>Panel de juegos</h1>
        <div className= " row mt-5 justify-content-center">
        {
            loader
            ?
            <div>
              <button className='btn btn-success d-flex justify-contect-start' 
              onClick={()=>navigate('/crear')}>
                Crear nuevo</button>
              <div className='row'>
              <div>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Imagen</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Detalle</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Opciones</th>
                  </tr>
                </thead>
                <tbody>
                  {
                  mod.map((mod,id)=>(
                    <tr key= {id}>
                    <td><img src={mod.imagen} alt="imagenJuego" /> </td>
                    <td>{mod.nombre}</td>
                    <td>{mod.detalle}</td>
                    <td>{mod.precio}</td>
                    <td>
                      <button className='btn btn-success mx-2' onClick={()=>{details(mod._id)}}>Detalle de mod</button>
                      <button className='btn btn-danger' onClick={()=>{deleteMod(mod._id)}}>Eliminar</button>
                    </td>
                    </tr>
                    ))
                  }  
                </tbody>
              </table>
              </div>
            </div>
            </div> 
            :
            <Loader/>
          }
        </div>
    </div>
  )
}

export default Tabla