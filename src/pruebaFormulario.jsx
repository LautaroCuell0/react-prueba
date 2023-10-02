import { useState } from "react"
import { Button, Form } from "react-bootstrap"
function PruebaForm(){

const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    message: ''
})

function handleChange(e){
    const {name, value} = e.target;
    setFormData({[name]: value})
}

function handleSubmit(e){
    e.preventDefault()
    console.log(formData)
}

    return(
        <>
        <h3>Contacto</h3>
        <Form action="" onSubmit={handleSubmit}>

            <Form.Group>
                <Form.Label htmlFor="nombre">Nombre</Form.Label>
                    <Form.Control type="text"
                    name="nombre"
                    id="nombre"
                    className=""
                    value={formData.nombre}
                    onChange={handleChange}
                    />
            </Form.Group>  
            <Form.Group>
                <Form.Label htmlFor="email">Email</Form.Label>
                    <Form.Control 
                    type="email" 
                    name="email" 
                    id="email" 
                    className=""
                    value={formData.email}
                    onChange={handleChange}
                    />
            </Form.Group>
            <Form.Group>      
                <Form.Label htmlFor="message">Mensaje</Form.Label>
                    <Form.Control
                    type="text" 
                    name="message" 
                    id="message" 
                    className=""
                    value={formData.message}
                    onChange={handleChange}
                    />
            </Form.Group>    
            <Button type="submit">Enviar</Button>
        </Form>
        </>
    )
}

export default PruebaForm