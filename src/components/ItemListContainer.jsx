// import React, { useState } from 'react';
import ItemList from './ItemList';
import {  useEffect } from 'react';
import {  useParams } from 'react-router-dom';
import "./styles/ItemListContainer.css";
// import db from '../service/firebase';
// import { collection,getDocs } from 'firebase/firestore/lite';
import useFireStore from '../hooks/useFireStore';



const ItemListContainer = ({greeting}) => {
  

  const {items,getData} = useFireStore()

  
  useEffect(() => {

    getData()

  }, []
  );


  return (
    <div>
      <h5> {greeting} </h5>
      <div id='itemlistContainer'>
        <ItemList items ={items}/> 
      </div>
    </div>
  );
};

export default ItemListContainer;

