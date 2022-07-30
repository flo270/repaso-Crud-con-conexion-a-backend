import React from 'react'

const CardsMod = (props) => {
    const {imagen,nombre,detalle,precio}=props.mod
  return (
    <div className="card ">
    <h2>Detalle</h2>
    <div>
      <h3><img src={imagen} alt="imagenMod" /></h3>
    </div>
    <div>
      <h3>{nombre}</h3>
    </div>
    <div>
      <h3>{detalle}</h3>
    </div>
    <div>
      <h3>{precio}</h3>
    </div>
  </div>
  )
}

export default CardsMod