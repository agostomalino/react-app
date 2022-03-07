import React, {
  useEffect,
  useState,
} from 'react'
import {
  useParams
} from 'react-router-dom'
import ItemDetail from './ItemDetail'
import db from './../service/firebase';
import { collection,getDocs } from 'firebase/firestore/lite';



const ItemDetailContainer = () => {

  const { id } = useParams()
  const [detalle, setDetalles] = useState(null)


  const getItemsById = async (id)=>{
    const data = collection(db, "items")
    const col = await getDocs(data)
    const result = col.docs.map((doc) => doc = {id: doc.id, ...doc.data()})
    let itemFound = result.find((item) => item.id === Number(id));
    setDetalles(itemFound)
  }
useEffect(() =>{
  getItemsById(id)
},[])


  // useEffect(() => {
  //   const task = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       let itemFound = productos.find((item) => item.id === Number(id));
  //       resolve(itemFound);
  //     }, 500);
  //   })

  //   task
  //     .then((result) => {
  //       setDetalles(result);
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })

  // }, [])




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