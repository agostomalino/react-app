import {createContext, useEffect, useState} from 'react'


export const CartContexto = createContext();

const CartContext = ({children}) => {
    
    // Estado del cart
    const[carrito, setCarrito] = useState([]) 
    
       
    // fn que agrega items al cart
    const addItem = (item, cantidad) => {
        let exists = false;
        
        carrito.forEach(element => {
            if (element.item.id === item.id){     
                element.cantidad = element.cantidad + cantidad
                exists = true;              
            }
        });     
        if (exists) {
            setCarrito(carrito) 
        } else {
            setCarrito([...carrito, {item:item, cantidad:cantidad}])    
        }
    }
    
    //eliminar un item del carrito
    const removeItem = (id) => {
        let copyCart = [...carrito];
        let verificar = copyCart.find(element => element.item.id === id)
        if(verificar){
            if(verificar.cantidad > 1){ 
                verificar.cantidad = verificar.cantidad -1 
                setCarrito(copyCart)
                
                
                
            }else{
                setCarrito(copyCart.filter(element => element.item.id !== id))
            }
        }
    }

    // Fn que borra todos los items del cart
    const clear = () =>{
        setCarrito([])  
    } 

    // Estado actualiza la cantidad de items en el cart
    const [cantidadItems, setCantidad] = useState(null)
    
    // Actualizar la cantidad total de items en el carrito
    const actualizarCantidad = () =>{
        let cantidad = (carrito.reduce((acc, el) => acc + el.cantidad, 0))  
        setCantidad(cantidad)
    }

    // cada vez que actualizamos el carrito, se actualiza la cantidad
    useEffect( () => {
        actualizarCantidad()
        precioTotal()
    }, [carrito])


    // Estado actualiza precio total de items en el cart
    const [totalPrice, setTotalPrice] = useState(null)
    
    // Actualizar el precio total de productos en el carrito
    const precioTotal = () =>{    
        let totalPrice = (carrito.reduce((acc, el) => acc + (el.item.precio * el.cantidad), 0))  
        setTotalPrice(totalPrice)        
    }

    
    return (
        <CartContexto.Provider value={{carrito, addItem,removeItem,clear,cantidadItems, actualizarCantidad, totalPrice, precioTotal}}>
            {children}
        </CartContexto.Provider>
  )
}

export default CartContext