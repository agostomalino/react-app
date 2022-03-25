import { collection,getDocs,doc, getDoc, addDoc, updateDoc} from "firebase/firestore/lite"
import db from "../service/firebase"
import { useState } from 'react';
import { useNavigate, useParams } from "react-router-dom";


const useFireStore = () =>{
  
    const [items, setItems] = useState([]);
    const [individual, setIndividual] = useState({});
    const [load, setLoad] = useState(false);
    const [orderId, setOrderId] = useState()
    let{categoryId} = useParams();
    let navigate = useNavigate();

  // fn para obtener todos los items
    const getData = async () =>{
      setLoad(true)
        try {
          const data = collection(db, "items")
          const col = await getDocs(data)
          const result = col.docs.map((doc) => doc = {id: doc.id, ...doc.data()})
          
          if(categoryId === undefined){
            setItems(result)
          }else if(categoryId){
            let resultCategory = result.filter((el) => el.category === categoryId);
            setItems(resultCategory)
          }
          
          setLoad(false)
          
        } catch (error) {
          console.log(error);
          setLoad(false)
        }    
    } 

//  fn para encontrar doc por id
    const getIndividualData = async ({id}) =>{
      setLoad(true)
      try {
        const documento = doc(db,"items",id);
        const response = await getDoc(documento);

        const result = {id:response.id, ...response.data()}
        setIndividual(result)
        setLoad(false)
      } catch (error) {
        console.log(error)
        setLoad(false)
      }
    }


  //fn para generar Orden de compra
    const generateOrder = async ({datos}) => {
      
      setLoad(true)
      try {
        const col = collection(db,"orders");
        const order = await addDoc(col, datos);
        datos.items.map((e) => {
          actualizarStock(e.id,e.item.stock - e.cantidad)
        })
        setLoad(false)
        setOrderId(order.id)
      } catch (error) {
        console.log(error)
        setLoad(false)
      }
    }

  //fn para Actualizar Stock
    const actualizarStock = async (id, stock) => {
      const itemsOrden = doc(db, "items", id);

      try {
        await updateDoc(itemsOrden, { stock: stock });
        let path = '/order'
        navigate(path)
      } catch (err) {
        console.log(err);
      }
    };


    return{
        getData,
        items,
        individual,
        getIndividualData,
        load,
        generateOrder,
        actualizarStock,
        orderId
    }
}

export default useFireStore