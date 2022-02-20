import React, { useState } from 'react';
import ItemCount from '../ItemCount';
import ItemList from '../ItemList';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ItemListContainer = ({greeting}) => {
  const {id} = useParams()
  console.log(id)
  
  const data = [{id:1,title:"Luz",description:"esto es una descripcion", precio:500,img:"/imagenes/img1.jpeg", stock:10},
  {id:2,title:"Luna",description:"esto es una descripcion", precio:3000,img:"/imagenes/img2.jpeg", stock:10},
  {id:3,title:"Sol",description:"esto es una descripcion", precio:7500, img:"/imagenes/img3.jpeg", stock:11},
  {id:4,title:"Jupiter",description:"esto es una descripcion",img:"/imagenes/img4.jpeg", precio:8500, stock:40}
];
  const [info, setInfo] = useState(null);

  useEffect(() => {

    const tarea = new Promise ((resolve, reject) => {

      setTimeout(() =>{
          resolve(data)

      },3000);
    })

    tarea
    .then((result) =>{
      setInfo(result);
    })
    .catch((err) =>{
      console.log(err);
    })
    
  }, [])
  



  return <div>
      <h5>{greeting}</h5>
       <ItemCount stock={5} initial={1}/> 
      <ItemList items={info}/>
  </div>;
};

export default ItemListContainer;
