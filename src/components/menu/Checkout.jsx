import {useState, useContext} from 'react';
import useFireStore from '../../hooks/useFireStore';
import { useNavigate } from 'react-router-dom';
import { CartContexto } from '../../context/CartContext';




const Checkout = ({carrito,totalPrice}) => {

    const {generateOrder} = useFireStore();
    const navigate = useNavigate();
    
    const { clear } = useContext(CartContexto)

    const [form, setForm] = useState({
        buyer:{
            name:"",
            phone:"",
            email:""
        },
        items:carrito,
        total:totalPrice
    })

    const handleChange = (e) =>{
        setForm({
            ...form,
            buyer: {
              ...form.buyer,
              [e.target.name]: e.target.value,
            }
        });
    }

    const handleSubmit = async (e) =>{
        e.preventDefault()
        const id = await generateOrder({datos:form})
        navigate("/order", {state:{orderId:id}})
        clear();
        return id


    }

  
    

  return (
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label  className="form-label">Ingrese su nombre</label>
            <input onChange={handleChange} name="name" value={form.buyer.name}type="text"  className="form-control" placeholder="Nombre"/>
        </div>
        <div className="mb-3">
            <label className="form-label">Ingrese su teléfono</label>
            <input onChange={handleChange} name="phone" value={form.buyer.phone}type="number" className="form-control" placeholder="Teléfono"/>
        </div>
        <div className="mb-3">
            <label  className="form-label">Ingrese su email</label>
            <input onChange={handleChange} name="email" value={form.buyer.email}type="email" className="form-control" aria-describedby="emailHelp"/>
        </div>

        <button disabled={!form.buyer.name || !form.buyer.phone || !form.buyer.email }type="submit" className="btn btn-primary w-100">Comprar</button>
        </form>
  )
}

export default Checkout