import React from "react";
import ReactDOM from 'react-dom/client'
import { Button } from "./components/boton";
import { Posts } from "./components/fetch";
import Counter from "./components/hooks";
// Usando import...export podemos modularizar el codigo
// Preferencia mia, Componentes en carpeta components
import Saludo from "./components/saludo";
import { Card } from "./components/task";
import UserCard from "./components/usercard";

// ELEMENTO RAIZ
const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement)

/* Or
    const root = ReactDOM.createRoot(document.getElementById("root"))
*/


// Espera elementos html
// <> Etiquetas fragment </>, puede servir de contenedor, no se interpretan a codigo html

// Props se pasan como atributos html, se pueden pasar string, number, boolean, arrays, objects, functions

root.render(
    < >
        <Saludo />
        <UserCard user="Un arbol" />
        {/*<UserCard user="Un camion" />*/}
        {/*<UserCard user="Un camion" funcion={() => alert('hello')}/>*/}
        <Button text="Click Me" />
        <Button />
        <Card ready={true} />

        {/*Es otro tipo de evento, onChange, existe el objeto event(js), se puede escribir 
        con funcion flecha es6 (e) => { console.log(e.target.value)}*/}
        <input type="text" onChange={function (e) {
            console.log(e.target.value)
        }} />
        <Posts />
        <Counter />
    </ >
)

// Componentes se puede poner como <Componente />