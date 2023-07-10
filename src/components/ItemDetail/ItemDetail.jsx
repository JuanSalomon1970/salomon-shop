import {useContext, useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { CartContext } from "../../context/CartContext";

 const ItemDetail = ({item}) => {

    const {carrito, agregarAlCarrito} = useContext(CartContext);
    console.log(carrito);

    const [cantidad, setCantidad] = useState(1);

    const funRestar = () => {
        cantidad > 1 && setCantidad(cantidad - 1)
    }

    const funSumar = () => {
        cantidad < item.stock && setCantidad(cantidad + 1)
    }
    return (
        <div className="contenedor">
            <div className="producto-detalle">
                <img src={item.imagen} alt={item.nombre} />
                <div>
                    <h3 className="titulo">{item.nombre}</h3>
                    <p className="descripcion">{item.descripcion}</p>
                    <p className="categoria">Categoría: {item.categoria}</p>
                    <p className="precio">${item.precio}</p>
                    <ItemCount
                    cantidad={cantidad}
                    funSumar={funSumar}
                    funRestar={funRestar}
                    funAgregar = {() => {agregarAlCarrito(item, cantidad) }}
                    />
                </div>
            </div>
        </div>
      ) 
    } 

export default ItemDetail