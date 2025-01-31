import React, { useState } from "react";

const Listado = () => {

    const [tareas, setTareas] = useState("")
    const [listadoDeTareas, setListadoDeTareas] = useState(['Limpiar', 'Sacudir', 'Trapear'])
    

    function seEnvio (e){
        e.preventDefault()
        const nuevalista = [...listadoDeTareas, tareas]    
        console.log('seEnvio')
        setTareas('') 
        setListadoDeTareas(nuevalista)
        console.log(tareas)
    }

    function eliminarTarea (indexToDelete){
        console.log('eliminar tarea', indexToDelete)

    const listaFiltrada= listadoDeTareas.filter((t,index) => index !== indexToDelete)
        setListadoDeTareas(listaFiltrada)

    }


    
    

    return (
        <>
        <form onSubmit={seEnvio} className="form-tarea">
            <input placeholder='ingresa tu tarea' type="text" name="tareas"  value={tareas} onChange={(e) => setTareas (e.target.value)} className="input-tarea"/>
        </form>

        
        {
            listadoDeTareas.map((tarea,index) =>
            <div className="btn-delete" key={index}>
                {tarea}
               <button onClick={() => eliminarTarea(index)}>
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-x" viewBox="0 0 16 16">
                        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708"/>
                   </svg>
                </button>
            </div>) 
        }
        
        </>
    )
} 

export default Listado