import { useEffect, useState } from "react";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/data";


const ItemListContainer = () => {
    
const [productos, setProductos] = useState([]);
const [titulo, setTitulo]  = useState("Productos");
const categoria = useParams().categoria;


    useEffect (() => {
        const productosReferencia = collection (db,"productos");

        getDocs (productosReferencia)
        .then ((resp) =>{
            setProductos (
                resp.docs.map((doc)=>{
                    return {...doc.data(), id: doc.id}
                })
            )
        })
    }, [categoria])
    
    return(
        < ItemList productos = {productos} titulo = {titulo}/>
    )
}

export default ItemListContainer