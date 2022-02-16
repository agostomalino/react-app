import React, { useEffect } from 'react'
import { useState } from 'react'
import ItemDetail from './ItemDetail'



const ItemDetailContainer = () => {

  const productos = [{description:"esto es una descripcion nueva", precio:2300, img:"../imagenes/celular1.jpeg"},
                    {description:"esto es una descripcion del producto2", precio:34500, img:"../imagenes/celular2.jpeg"},
                    {description:"esto es una descripcion del producto3", precio:45300, img:"../imagenes/celular3.jpeg"}]
  const [detalle, setDetalles] = useState(null)

   useEffect(() => {
    const task = new Promise ((resolve,reject) => {
      setTimeout(() => {
        resolve(productos)
      }, 2000);
    })
    
    task
    .then((result) =>{
      setDetalles(result);
    })
    .catch((err) => {
      console.log(err)
    })
 
  }, [])
  
  
  return (<>
    <ItemDetail item={detalle}/>
    </>
  )
}

export default ItemDetailContainer