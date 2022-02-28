import {createContext, useState} from 'react'


export const CartContexto = createContext();

const CartContext = ({children}) => {
  
     const[carrito, setCarrito] = useState([]) 

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
          let verificar = carrito.find(element => element.item.id === id)
          console.log(id,verificar.cantidad)
          if(verificar){
                if(verificar.cantidad > 1){ 
                    verificar.cantidad = verificar.cantidad -1 
                    setCarrito(carrito, verificar.cantidad)
                    console.log("carrito en el if reductor ", carrito)
                }else{
                    setCarrito([carrito.filter(element => element.item.id !== id)])
                
          }
          }
    }

    const clear = () =>{
        setCarrito([])
        
    } 
    

   

  
  
    return (
        <CartContexto.Provider value={{carrito, addItem,removeItem,clear}}>
            {children}
        </CartContexto.Provider>
  )
}

export default CartContext