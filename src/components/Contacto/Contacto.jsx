import { useForm } from "react-hook-form";

const Contacto = () => {
    const {registrer, handleSubmit} = useForm();

    const enviar = (data) =>{
        console.log(data);
    }

    return (
  <div className='contenedor'>
        <h1 className='titulos'>Checkout</h1>
        <form className='formulario' onSubmit={handleSubmit(enviar)}>
            <input type="text" placeholder='Ingrese su nombre' {...registrer("nombre")}/>
            <input type="email" placeholder='Ingrese su email' {...registrer("email")}/>
            <input type="tel" placeholder='Ingrese su telefono' {...registrer("telefono")}/>
            <button type='submit'>Enviar</button>
        </form>
    </div>
  )
}

export default Contacto