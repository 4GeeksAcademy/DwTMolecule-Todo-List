import React, { useState } from "react";

const Tareas = () => {
    const [ tareas, setTareas] = useState (['task1','task2', 'task3'])
function agregarTarea () {
    console.log('agregarTarea')
    setTareas([...tareas, 'task 4'])
    

} 
    return (
        <>
         <input type="text" name="listado" value={tareas} onChange={(e) => setTareas(e.target.value)}/>
         
         <ul>
            {tareas.map((tarea,index)=><li key={index}> {tarea} </li>)} 
        </ul>

         <button onClick={agregarTarea}>agregar tarea</button>

         
        </>
    )
}

export default Tareas 

