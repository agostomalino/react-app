import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ItemListContainer from '../components/menu/ItemListContainer'
import Cart from '../components/menu/Cart/Cart'
import NavBar from '../components/menu/NavBar'
import ItemDetailContainer from '../components/ItemDetailContainer'

const Rutas = () => {
  return (
    <BrowserRouter>
      <NavBar textoDeLogo={"Kumo dibujos"}/> 
        <Routes>

            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/category/:id" element={<ItemListContainer/>}/>
            <Route path="/category/:categoryId" element={<ItemListContainer/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer/>} />
            <Route path="/cart" element={<Cart/>}/>

        </Routes>
    
    </BrowserRouter>
  )
}

export default Rutas