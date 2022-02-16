import React from 'react'
import Item from './Item'


const ItemDetail = ({item}) => {
  return item && item.map((item, index) => <Item itemInfo={item} key={index}/>)
}

export default ItemDetail