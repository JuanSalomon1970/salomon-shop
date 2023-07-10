import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../../firebase/data'; 

const CheckOut = () => {

    const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext);

    const {registrer, handleSubmit} = useForm();

    const comprar = (data) =>{
        const pedidoFinalizado = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        }

        const pedidosReferencia = collection (db, "pedidos");

        addDoc(pedidosReferencia, pedidoFinalizado);
    }

  return (
    <div className='contenedor'>
    <h1 className='titulos'>Checkout</h1>
    <form className='formulario' onSubmit={handleSubmit(comprar)}>
        <input type="text" placeholder='Ingrese su nombre' {...registrer("nombre")}/>
        <input type="email" placeholder='Ingrese su email' {...registrer("email")}/>
        <input type="tel" placeholder='Ingrese su telefono' {...registrer("telefono")}/>
        <button className='enviar' type='submit'>comprar</button>
    </form>
</div>
  )
}

export default CheckOut