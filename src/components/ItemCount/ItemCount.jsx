import React from 'react'

const ItemCount = ( {cantidad, funRestar, funSumar, funAgregar} ) => {

  return (
    <div>
        <div className="item-count">
            <button onClick={funRestar}>-</button>
            <p>{cantidad}</p>
            <button onClick={funSumar}>+</button>
        </div>
        <button className="agregar-carrito" onClick={funAgregar}>Agregar al carrito</button>
    </div>
  )
}


export default ItemCount