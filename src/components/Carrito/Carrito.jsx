import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom';

const Carrito = () => {

    const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext);

    const funVaciar = () => {
        vaciarCarrito();
    }



  return (
    <div className="container-carrito">
        <h1 className="main-title">Carrito</h1>

        {
            carrito.map((prod) => (
                <div key={prod.id}>
                    <br />
                    <h3>{prod.titulo}</h3>
                    <img className="carrito-imagen" src={prod.imagen} alt={prod.titulo}></img>
                    <p>Precio unidad: ${prod.precio}</p>
                    <p>Precio total: ${prod.precio * prod.cantidad}</p>
                    <p>Cant: {prod.cantidad}</p>
                    <br />
                </div>
            ))
        }

{  
            carrito.length > 0 ?
            <>
                <h2>Precio total: ${precioTotal()}</h2>
                <button className='enviar' onClick={funVaciar}>Vaciar</button>
                <Link className='finalizar' to= "/Checkout">Finalizar compra</Link>
            </> :
            <h2>El carrito está vacío :(</h2>
        }
        
    </div>
  )
}


export default Carrito