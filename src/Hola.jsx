import React from "react";
import { useState } from "react";

 let nombre = prompt('hola pon tu nombre')
function Saludo(){

    const [change, setChange]= useState('')
    function cambiar(){
      setChange(',from changed state')
    }

    return(
        <>
        <h1>Hola {nombre} {change}</h1>
        <button onClick={cambiar}>Change</button>
        </>
    )
}

export default Saludo