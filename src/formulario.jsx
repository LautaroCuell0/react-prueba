import React, { useState } from "react";
import { Form } from "react-bootstrap";
function Formulario (){
 const [field, setField] = useState('')
const [fieldNombre, setFieldNombre] = useState('')
function handleChange(e){
 setField(e.target.value)   
}

function handleChangeNombre(e){
    setFieldNombre(e.target.value)
}

    return(
        <>
        <h2 className="text-sucess">Formulario de contacto</h2>
        <Form action="">
            <div className="mb-3">
            <label htmlFor="message">Mensaje:   </label>
            <input type="text" name="message" id="message" onChange={handleChange} value={field} />
            </div>
            <div className="mb-3">
            <label htmlFor="nombre">Nombre:   </label>
            <input type="text" name="nombre" id="nombre" onChange={handleChangeNombre} value={fieldNombre} />
            </div>
        </Form>
        </>
    )
}

export default Formulario