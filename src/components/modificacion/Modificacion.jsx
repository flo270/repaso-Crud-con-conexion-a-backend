import React,{useState} from 'react'
import axios from 'axios'
import {useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

const Modificacion = (/* {game} */) => {
 
    const { _id } = useParams()
    const [mod,setMod]= useState(
        { _id:"",
          imagen:"",
          nombre:"",
          detalle:"",
          precio:""
        })
     const navigate=useNavigate()
     
        const handleSumit=(e)=>{
          e.preventDefault()
          console.log('esto es mod',mod)
        //  if (_id===mod._id) {
            axios.put(`http://localhost:8080/Mod/${_id}`,mod)
          .then(response=>{
            console.log('esto es status',response.status)
            if (response.status ===200) {
              Swal.fire(
                  'Guardado!',
                  `El registro ${mod.nombre} ha sido guardado exitosamente!`,
                  'success'  
              )
              navigate('/', { replace: true })
              }else {
                  Swal.fire(
                      'Error!',
                      'Hubo un problema al modificar el registro!',
                      'error'
                  )
              }
          })
        /*  } else {
            Swal.fire(
                'Error!',
                'Hubo un problema para acceder al registro!',
                'error'
            )
         } */
          
            }
    
        const handleChange=({target})=>{
          setMod({...mod,
            [target.name]: target.value})
          console.log('Esta funcionando')
        }

  return (
    <div className={`m-5 conteiner-fluid d-flex  row `}>
    <div className={` m-3 p-2 conteiner-fluid `}>
        <h2 className={`d-flex justify-content-center `}>Modificar juego</h2>
        <form className={` row d-flex justify-content-start`} onSubmit={handleSumit}>
        <div className={`d-flex justify-content-center row`}>
            <div className="mb-3 m-2 col-6">
                <label  className="form-label d-flex justify-content-start">Imagen</label>
                <input type="text" className="form-control " id="imagen" name='imagen' placeholder='Ingrese el url de la imagen' required 
                onChange={handleChange}  />
            </div>
            <div className="mb-3 m-2 col-6">
                <label  className="form-label d-flex justify-content-start">Nombre</label>
                <input type="text" className="form-control" id="nombre" name='nombre' placeholder='Titulo' required 
                  onChange={handleChange} />
            </div>
            <div className="mb-3 m-2 col-6">
                <label  className="form-label d-flex justify-content-start">Detalle</label>
                <input type="text" className="form-control" id="detalle" name='detalle' placeholder='Detalle/descripcion' required 
                onChange={handleChange}/>
            </div>
            <div className="mb-3 m-2 col-6">
                <label  className="form-label d-flex justify-content-start">Precio</label>
                <input type="number" className="form-control" id="precio" name='precio' placeholder='Precio $' required
                  onChange={handleChange}/>
            </div>
            <button type="submit" className="btn btn-success mb-3 m-2 col-6">Enviar</button>    
        </div>
        </form>
    </div>
    
</div>
  )
}

export default Modificacion