import React, {
  useEffect,
  useState,
} from 'react'
import {
  useParams
} from 'react-router-dom'
import ItemDetail from './ItemDetail'




const ItemDetailContainer = () => {

  const {
    id
  } = useParams()

  const productos = [{
    id: 1,
    title: "Fiori",
    description: "esto es una descripcion",
    category:"suminagashi",
    precio: 500,
    img: "/imagenes/img1.jpeg",
    stock: 10
  },
  {
    id: 2,
    title: "Lento",
    description: "esto es una descripcion",
    category:"suminagashi",
    precio: 3000,
    img: "/imagenes/img2.jpeg",
    stock: 10
  },
  {
    id: 3,
    title: "Sol",
    description: "esto es una descripcion",
    category:"otros",
    precio: 7500,
    img: "/imagenes/img3.jpeg",
    stock: 11
  },
  {
    id: 4,
    title: "Jupiter",
    description: "esto es una descripcion",
    category:"otros",
    img: "/imagenes/img4.jpeg",
    precio: 8500,
    stock: 40
  }
];
  const [detalle, setDetalles] = useState(null)



  useEffect(() => {
    const task = new Promise((resolve, reject) => {
      setTimeout(() => {
        let itemFound = productos.find((item) => item.id === Number(id));
        resolve(itemFound);
      }, 500);
    })

    task
      .then((result) => {
        setDetalles(result);
      })
      .catch((err) => {
        console.log(err)
      })

  }, [])


  return ( <> 
    {
      detalle ?
       <ItemDetail itemInfo = { detalle }/> 
      : <h4>Cargando Productos...</h4 >
    } 
    </>
  )
}

export default ItemDetailContainer