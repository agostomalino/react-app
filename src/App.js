import './App.css';
import CartContext from './context/CartContext';
import Rutas from './routes/Index';


function App() {
  return (
    <div>
      
      <CartContext>
        
        <Rutas/>

      </CartContext>
    
    
    </div>
  )
}

export default App;
