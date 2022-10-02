import PropTypes from 'prop-types'
//Para evitar el paso de tipos no validos como objetos, recurrimos al modulo prop-types

// Default props, con la propiedad defaultProps o con props.params = any
export function Button({ text }) {

    console.log(text)

    // Event Handlers, onClick puede aplicarse a varias etiquetas
    return (
        <button onClick={function () {
            console.log('hola mundo')
        }}>
            {text}
        </button>
    )
}

Button.propTypes = {
    text: PropTypes.string.isRequired
}


Button.defaultProps = {
    text: 'test'
}