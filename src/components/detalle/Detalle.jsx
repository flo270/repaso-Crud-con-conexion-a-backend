import React,{useState, useEffect} from 'react'
import { useParams,useNavigate} from 'react-router-dom';

import axios from 'axios'
import Loader from '../loader/Loader';

const Detalle = (/* {setgame} */) => {

  const [mod,setMod]=useState({})
  const [loader,setLoader]=useState()
  const { _id } = useParams()
const navigate=useNavigate()

 console.log('id en detalle',_id)

  const baseUrl = 'http://localhost:8080/Mod'

   const getData = ()=>{
    axios.get(`${baseUrl}/${_id}`)
    .then(response=>{
      
   setMod(response.data)
    //setgame(response.data)
    setLoader(true)
    }) 
  } 

 
useEffect(()=>{
   getData() 
},[])

const update= (_id)=>{
console.log('id para modificar',_id)
navigate(`/modificar/${_id}`)
}
  return (
    <div>
    {
    loader
    ?
    <div className='container my-5 shadow d-flex justify-content-center row'>
     <h1 className='d-flex justify-content-center  text-center'>Detalle</h1> 
      <div className='d-block w-100'>
     <h2>Imagen:</h2> 
      <div>
        <img src={mod.imagen} alt=''/>
      </div>
        
      </div>
      <div className=' d-block w-100'><h2>Nombre:</h2>
      <div> {mod.nombre}</div>
      </div>
      <div className=' d-block w-100'>
        <h2>Detalle:</h2>
        <div>{mod.detalle}</div>
      </div>
      <div className='d-block w-100'>
        <h2>Precio</h2>
        <div>
          {mod.precio}
        </div>
      </div>
      <div className='d-flex justify-content-center shadow'>
        <button className='btn btn-success shadow' onClick={()=>{ update(mod._id)}}>Modificar</button>
      </div>
    </div>
    :
    <Loader/>
      }
    </div> 
     
  )
}

export default Detalle