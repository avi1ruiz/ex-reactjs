// Componentes empiezan en mayusculas, devuelven un html
// Siempre debe de haber un elemento contenedor
export default function Saludo() {

    const name = 'Un Arbol'

    const married = false

    const user = {
        firstName: 'arbol2',
        lastname: 'abedul'
    }

    /*if (married) {
        return (
            <div>
                <h1>Estas casado</h1>
            </div>
        )
    } else {
        return (
            <div>
                <h1>No estoy casado</h1>
            </div>
        )
    } Se puede reemplazar por operador ternario*/

    function add(a, b) {
        return a + b;
    }

    // { ... } las llaves interpretan codigo de js
    // No se pueden pasar objetos como tal, se tiene que pasar a string

    return (
        <div>
            <h1>Hola {name}, mi primer componente</h1>
            <p>{married ? 'Esta casada' : 'no estoy casado'}</p>
            <p>{user.firstName} {user.lastname}</p>
            <p>{married.toString()}</p>
            <h3>{add(12, 3)}</h3>
        </div>
    )
}