import './task.css'

// Las clases se agregan como className, se pueden definir en un css normal o en linea
// Podemos condicionar las clases
export function Card({ ready }) {

    return (
        <div className={ready ? 'card2' : 'card'}>
            <h1>Hola tarjeta</h1>
            <p>esto es un parrafo</p>
        </div >
    )
}