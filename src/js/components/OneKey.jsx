import React, { useState } from "react";

const OneKey = () => {

    const [tareas, setTareas] = useState("identificar enter")
function bajoTecla (e) {
    console.log('bajoTecla')
    console.log(e.key)

    if (e.key == 'Enter'){
        console.log('oprimiste enter')
        setTareas('')

    }
}

    return (
        <>
        <h1>OneKey</h1>
        
        <input type="text" name="tareas" onKeyDown={bajoTecla} value={tareas} onChange={(e) => setTareas (e.target.value)}/>

        
        
        </>
    )
} 

export default OneKey 