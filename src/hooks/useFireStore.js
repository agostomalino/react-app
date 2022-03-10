import { collection,getDocs,doc, getDoc, addDoc, updateDoc } from "firebase/firestore/lite"
import db from "../service/firebase"
import { useState } from 'react';
import { useNavigate } from "react-router-dom";


const useFireStore = () =>{
  
    const [items, setItems] = useState([]);
    const [individual, setIndividual] = useState({});
    const [load, setLoad] = useState(false);

    let navigate = useNavigate();
//
    const getData = async () =>{
      setLoad(true)
        try {
          const data = collection(db, "items")
          const col = await getDocs(data)
          const result = col.docs.map((doc) => doc = {id: doc.id, ...doc.data()})
          
          // if(!category){
          //   setItems(result)
          // }else if (category){
          //   let resultCategory = result.filter((el) => el.category === category);
          //   setItems(resultCategory)
          // }

          setItems(result)
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

    const generateOrder = async ({datos}) => {
      
      setLoad(true)
      try {
        const col = collection(db,"orders");
        const order = await addDoc(col, datos);
        datos.items.map((e) => {
          actualizarStock(e.id,e.item.stock - e.cantidad)
          console.log(e)
        })
        setLoad(false)
        alert(order.id)
      } catch (error) {
        console.log(error)
        setLoad(false)
      }
    }

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
        actualizarStock
        

    }
}

export default useFireStore