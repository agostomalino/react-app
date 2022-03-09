import { collection,getDocs,doc, getDoc, addDoc } from "firebase/firestore/lite"
import db from "../service/firebase"
import { useState } from 'react';


const useFireStore = () =>{
  
    const [items, setItems] = useState([]);
    const [individual, setIndividual] = useState({})
    const [load, setLoad] = useState(false)
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
        const col = collection(db,"orders")
        const order = await addDoc(col, datos)
        setLoad(false)
        alert(order.id)
      } catch (error) {
        console.log(error)
        setLoad(false)
      }
    }


    return{
        getData,
        items,
        individual,
        getIndividualData,
        load,
        generateOrder

    }
}

export default useFireStore