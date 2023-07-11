import React, { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext';
import { useForm } from 'react-hook-form';
import { collection, addDoc, doc } from 'firebase/firestore';
import { db } from '../../firebase/data'; 

const CheckOut = () => {

    const [pedidoId, setPedidoId] = useState("");

    const {carrito, precioTotal, vaciarCarrito} = useContext(CartContext);

    const {register, handleSubmit} = useForm();

    const comprar = (data) =>{
        const pedidoFinalizado = {
            cliente: data,
            productos: carrito,
            total: precioTotal()
        }

        const pedidosReferencia = collection (db, "pedidos")

        addDoc(pedidosReferencia, pedidoFinalizado)
        .then((doc)=>{
            setPedidoId(doc.id);
        })
    }

    if (pedidoId) {
        return (
            <div className="contenedor-compra">
                <h1 className="main-title-formulario">Muchas gracias por tu compra</h1>
                <p>Tu número de pedido es: {pedidoId}</p>
            </div>
        )
    }

  return (
    <div className='contenedor'>
    <h1 className='titulos'>Checkout</h1>
    <form className='formulario' onSubmit={handleSubmit(comprar)}>
        <input type="text" placeholder='Ingrese su nombre' {...register("nombre")}/>
        <input type="email" placeholder='Ingrese su email' {...register("email")}/>
        <input type="tel" placeholder='Ingrese su telefono' {...register("telefono")}/>
        <button className='enviar' type='submit'>comprar</button>
    </form>
</div>
  )
}

export default CheckOut