import data from "../Data/data.json";

export const enviarDatos = () => {
    return new Promise ((resolve, reject) => {
        setTimeout (() =>{
            resolve (data);
        }, 500)
        
    })
} 

export const pedirItemId = (id) =>{
    return new Promise ((resolve, reject)=>{
        const item = data.find ((el)=> el.id === id);


        if (item) {
            resolve(item)
        }else{
            reject({
                error: "No se encontró el producto"
            })
        }
    })
}