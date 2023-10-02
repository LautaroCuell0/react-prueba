import React from "react";


const UserTable=()=>{

    return(
       <>
       <table className="table">
         
        <thead className="border bg table-primary">
           <tr>
            <th>Nombre</th>
            <th>Usuario</th>
            <th>Acciones</th>
           </tr> 
        </thead>
        
        <tbody>
            <tr>
                <td>Dato1</td>
                <td>Dato2</td>
                <td>
                    <div>
                <button>Editar</button> 
                <button>Eliminar</button>
                    </div>
                </td>
            </tr>
        </tbody>
       </table>
       </>
    )
}

export default UserTable