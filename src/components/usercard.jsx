// Props ~ parametro de una funcion
// props son objetos, se pueden destructurar, pueden ser varios props
export default function UserCard({ user, funcion }) {

    console.log(user, funcion)

    return (
        <div>
            <h1>Componente Tarjeta de usuario "{user}"</h1>
        </div>
    )
}