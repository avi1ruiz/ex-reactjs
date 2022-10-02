// Se pueden realizar peticion de datos a un backend mediante fetchApi

export const Posts = () => {
    return(
        <button onClick={async () => {
            {/*Estas son promesas, es mejor usar async/await y callbacks*/}
            const datos = await fetch('https://jsonplaceholder.typicode.com/posts')
            console.log(datos.json())

        }}> Traer datos </button>

    )
}