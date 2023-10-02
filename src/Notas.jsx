import React from "react";
import './notes.css'

function Notes(){

    console.log('hola')


function enviar(e){
    e.preventDefault()
}
    return(
        <>
        <div className="nota-css">
        <h1>Bienvenido</h1>
        <h2>Tus notas:</h2>
        <form action="" onSubmit={enviar}>
            <div className="form-css">
            <textarea 
            name="" 
            id="" 
            cols="30" 
            rows="10"></textarea>
            <button onClick={Notes}>Enviar</button>
            </div>
        </form>
        </div>
        </>
    )
}

export default Notes