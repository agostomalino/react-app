import React from 'react';
import Item from './Item';
import './styles/ItemList.css'


const ItemList = ({items}) => {
    return <>
    <div className='container-productos'>
    {items && items.map((item, index) => <Item itemInfo={item} key={index}/>)}
    </div>
    </>
};

export default ItemList;
