import React, { useState } from 'react';
import ItemList from './ItemList';
import {  useEffect } from 'react';
import {  useParams } from 'react-router-dom';
import "./styles/ItemListContainer.css";
import db from './../service/firebase';
import { collection,getDocs } from 'firebase/firestore/lite';



const ItemListContainer = ({greeting}) => {
  const [items, setItems] = useState([]);
  const { categoryId } = useParams();

  const getData = async () =>{
    
    try {
      const data = collection(db, "items")
      const col = await getDocs(data)
      const result = col.docs.map((doc) => doc = {id: doc.id, ...doc.data()})
      
      if(!categoryId){
        setItems(result)
      }else if (categoryId){
        let resultCategory = result.filter((el) => el.category === categoryId);
        console.log(resultCategory)
        setItems(resultCategory)
      }
    } catch (error) {
      console.log(error);
    }

  } 

  
  useEffect(() => {

    getData()

  }, [categoryId]
  );


  return (
    <div>
      <h5> {greeting} </h5>
      <div id='itemlistContainer'>
        <ItemList items = {items}/> 
      </div>
    </div>
  );
};

export default ItemListContainer;


  // const productos = [{
  //     id: 1,
  //     title: "Fiori",
  //     description: "esto es una descripcion",
  //     category:"suminagashi",
  //     precio: 500,
  //     img: "/imagenes/img1.jpeg",
  //     stock: 10
  //   },
  //   {
  //     id: 2,
  //     title: "Lento",
  //     description: "esto es una descripcion",
  //     category:"suminagashi",
  //     precio: 3000,
  //     img: "/imagenes/img2.jpeg",
  //     stock: 10
  //   },
  //   {
  //     id: 3,
  //     title: "Mapa",
  //     description: "esto es una descripcion",
  //     category:"otros",
  //     precio: 7500,
  //     img: "/imagenes/img3.jpeg",
  //     stock: 11
  //   },
  //   {
  //     id: 4,
  //     title: "Jupiter",
  //     description: "esto es una descripcion",
  //     category:"otros",
  //     img: "/imagenes/img4.jpeg",
  //     precio: 8500,
  //     stock: 40
  //   }
  // ];
  // const [info, setInfo] = useState(null);

  // useEffect(() => {
  //   const tarea = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       if(category){
  //         resolve(productos.filter((item) => item.category === category));
  //       }
  //       resolve(productos)
  //     }, 500);
  //   })

  //   tarea
  //     .then((result) => {
  //       setInfo(result);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     })
  // }, [category])
