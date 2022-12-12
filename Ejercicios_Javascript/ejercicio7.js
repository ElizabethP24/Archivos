

const inputNuevoElemento = document.getElementById("input-nuevo-elemento")
const listadoElementos = document.getElementById("listado-elementos")

const elementos = []

function agregarElemento(){
    //Leer el valor del campo de texto
    const nuevoElemento = inputNuevoElemento.value
    if(nuevoElemento){  //Si no esta vacio
        //Agregar el elemento al listado de elementos
        elementos.push(nuevoElemento)
        console.log(elementos)

        //Limpiar value dejarlo vacio
        inputNuevoElemento.value=" "

        //Mostar elementos en la pagina
        mostrarElementos()
    }

}

function mostrarElementos(){
    let contenidoLista = " "
    for (let i=0 ; i<elementos.length;i++){
        contenidoLista +="<li>" + elementos[i] + "</li>"
    }
    console.log(contenidoLista)
    listadoElementos.innerHTML= contenidoLista
}