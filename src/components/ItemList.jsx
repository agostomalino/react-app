import React from 'react';
import Item from './Item';

const ItemList = ({items}) => {
    return items && items.map((item, index) => <Item itemInfo={item} key={index}/>);
};

export default ItemList;
