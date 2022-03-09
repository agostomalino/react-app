import React, {
  useEffect
} from 'react'
import {
  useParams
} from 'react-router-dom'
import ItemDetail from './ItemDetail'
import useFireStore from '../hooks/useFireStore';



const ItemDetailContainer = () => {

  const { id } = useParams()


  const {individual,getIndividualData,load} = useFireStore();


  useEffect(() => {

    getIndividualData({id})


  },[])



//   const getItemsById = async (id)=>{
//     const data = collection(db, "items")
//     const col = await getDocs(data)
//     const result = col.docs.map((doc) => doc = {id: doc.id, ...doc.data()})
//     let itemFound = result.find((item) => item.id === Number(id));
//     console.log(itemFound)
//     setDetalles(itemFound)
//   }
// useEffect(() =>{
//   getItemsById(id)
// },[])


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
      load ?
      <h4>Cargando Productos...</h4 >
      :
       <ItemDetail itemInfo = { individual }/> 
      
    } 
    </>
  )
}

export default ItemDetailContainer