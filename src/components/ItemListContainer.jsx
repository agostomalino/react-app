import React, { useState } from 'react';
import ItemList from './ItemList';
import {  useEffect } from 'react';
import {  useParams } from 'react-router-dom';

const ItemListContainer = ({greeting}) => {
  const {
    category
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
  const [info, setInfo] = useState(null);

  useEffect(() => {
    const tarea = new Promise((resolve, reject) => {
      setTimeout(() => {
        if(category){
          resolve(productos.filter((item) => item.category === category));
        }
        resolve(productos)
      }, 500);
    })

    tarea
      .then((result) => {
        setInfo(result);
      })
      .catch((err) => {
        console.log(err);
      })
  }, [category])


  return (
    <div>
      <h5> {greeting} </h5> 
      <ItemList items = {info}/> 
    </div>
  );
};

export default ItemListContainer;