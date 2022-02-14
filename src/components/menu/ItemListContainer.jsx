import React, { useState } from 'react';
// import ItemCount from '../ItemCount';
import ItemList from '../ItemList';
import { useEffect } from 'react';

const ItemListContainer = ({greeting}) => {
  const data = [{id:1,title:"Luz",description:"esto es una descripcion", precio:500, stock:10},
  {id:2,title:"Luna",description:"esto es una descripcion", precio:3000, stock:10},
  {id:3,title:"Sol",description:"esto es una descripcion", precio:7500, stock:11},
  {id:4,title:"Jupiter",description:"esto es una descripcion", precio:8500, stock:40}
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
      {/* <ItemCount stock={5} initial={1}/> */}
      <ItemList items={info}/>
  </div>;
};

export default ItemListContainer;
