import { useState, useEffect } from "react"

export default function Counter() {
    // Este es un Hook basico (useState)
    const [ counter, setCounter] = useState(0)
    const [ mensaje, setMensaje ] = useState('')
    
    // Sin arreglo, cada que render; con arreglo vacio cuando se cargue una vez, y con una variable
    useEffect(() => {
        console.log('Se altero el dom')
    }, [mensaje])

    return (
        <>
            <input type="text" onChange={(e) => setMensaje(e.target.value)}/>
            <button onClick={() => alert(mensaje) }>Mensaje</button>

            <h1>Counter: {counter}</h1>
            <button onClick={() => {
                setCounter( counter + 1)
            }}>
                Sumar
            </button>
        </>
    )
}