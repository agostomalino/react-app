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



  return ( <> 
    {
      load ?
      <h4 className='cargandoTitle'>Cargando Productos...</h4 >
      :
       <ItemDetail itemInfo = { individual }/> 
      
    } 
    </>
  )
}

export default ItemDetailContainer