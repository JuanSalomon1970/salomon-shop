import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'

const CartWidget = () => {

    const {cantidadEnCarrito} = useContext(CartContext);

  return (
    <div>
        <Link className="menu_item" to="/carrito">🛒</Link>
        <span className='numero'> {cantidadEnCarrito()}</span>
    </div>
  )
}

export default CartWidget 