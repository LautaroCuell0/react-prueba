import { useState } from "react"

const FormuCrud = (props)=>{

const initialFormState = {
    id: null,
    name: '',
    email: ''
}

const [user, setUser] = useState(initialFormState)

const handleInputChange =(event)=>{
   const {name,value} = event.target.value;
   setUser({...user, [name] : value})
}

    return(
        <>
        <form action="" onSubmit={event =>{
            if(!user.name || user.email) return
            event.preventDefault()
            props.addUsers(user)
            setUser(initialFormState)
        }}>
            <div className="mb-3">
            <label htmlFor="">Nombre</label>
            <input type="text" 
            name="name" 
            id="name" 
            className="form-control" 
            value={user.name}
            onChange={handleInputChange}
            />
            <div className="mb-3">
            <label htmlFor="email"></label>
            <input type="email" 
            name="email" 
            id="email" 
            className="form-control"
            value={user.email}
            onChange={handleInputChange}
            />
            </div>
            <button>Send</button></div>
        </form>
        </>
    )
}

export default FormuCrud