import React, { useEffect } from 'react'
import { useState } from 'react'
import ItemDetail from './ItemDetail'



const ItemDetailContainer = () => {

  const productos = [{description:"esto es una descripcion nueva", precio:2300, img:"/imagenes/celular1.jpeg", stock:20},
                    {description:"esto es una descripcion del producto2", precio:34500, img:"/imagenes/celular2.jpeg",stock:20},
                    {description:"esto es una descripcion del producto3", precio:45300, img:"/imagenes/celular3.jpeg",sotck:20}]
  const [detalle, setDetalles] = useState(null)

   useEffect(() => {
    const task = new Promise ((resolve,reject) => {
      setTimeout(() => {
        resolve(productos[1])
      }, 1000);
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
    {detalle ? <ItemDetail itemInfo={detalle}/> : <h4>Cargando Productos...</h4>}
    </>
  )
}

export default ItemDetailContainer