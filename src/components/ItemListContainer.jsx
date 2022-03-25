
import ItemList from './ItemList';
import {  useEffect } from 'react';
import "./styles/ItemListContainer.css";
import useFireStore from '../hooks/useFireStore';
import { useParams } from 'react-router-dom';



const ItemListContainer = ({greeting}) => {
  
  let {categoryId} = useParams();
  const {items,getData} = useFireStore()

  
  useEffect(() => {

    getData()

  }, [categoryId]
  );


  return (
    <div>
      <h5 className='greeting'> {greeting} </h5>
      <div id='itemlistContainer'>
        <ItemList items ={items}/> 
      </div>
    </div>
  );
};

export default ItemListContainer;

