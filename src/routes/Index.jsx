import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemListContainer from "../components/ItemListContainer";
import Cart from "../components/menu/Cart/Cart";
import ItemDetailContainer from "../components/ItemDetailContainer";
import NavBar from "../components/menu/NavBar";

const Rutas = () => {
  return (
    <BrowserRouter>
      <NavBar textoDeLogo={"Kumo dibujos"} />
      <Routes>
        <Route path="/" element={<ItemListContainer greeting={"Bienvenidos a la tienda Kumo!"} />}/>
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/cart" element={<Cart/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rutas;
