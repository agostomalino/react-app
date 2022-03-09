import {useState} from 'react'
import useFireStore from '../../hooks/useFireStore'


const Checkout = ({carrito,totalPrice}) => {

    const {generateOrder} = useFireStore

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
            buyer:{...form.buyer},
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        generateOrder({datos:form})

    }
  return (
        <form onSubmit={handleSubmit}>
        <div className="mb-3">
            <label  className="form-label">Ingrese su nombre</label>
            <input onChange={handleChange} name="name" value={form.buyer.name}type="text"  className="form-control" placeholder="Nombre"/>
        </div>
        <div className="mb-3">
            <label className="form-label">Ingrese su teléfono</label>
            <input onChange={handleChange} name="phone" value={form.buyer.phone}type="number" id className="form-control" placeholder="Teléfono"/>
        </div>
        <div className="mb-3">
            <label  className="form-label">Ingrese su email</label>
            <input onChange={handleChange} name="email" value={form.buyer.email}type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>

        <button disabled={!form.buyer.name || !form.buyer.phone || !form.buyer.email }type="submit" className="btn btn-primary w-100">Comprar</button>
        </form>
  )
}

export default Checkout