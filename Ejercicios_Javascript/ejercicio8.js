
const inputNuevo = document.getElementById("input-cantidad")
const listColores = document.getElementById("list-colores")


const colores = []

function ingresarCantidad(){
    //Leer el valor del campo de texto
    const cantidad = inputNuevo.value
    if(cantidad){  //Si no esta vacio

        //Agregar el elemento al listado de elementos
        for (let i=0 ; i<cantidad;i++){
            colores.push(colorRGB())
            console.log(colores)
        }

        //Limpiar value dejarlo vacio
        inputNuevo.value=" "

        //Mostar elementos en la pagina
        mostrarElementos()
    }

}

function mostrarElementos(){
    let contenidoLista = " "
    for (let i=0 ; i<colores.length;i++){
        contenidoLista +="<li>" + colores[i] + "</li>"
    }
    console.log(contenidoLista)
    listColores.innerHTML= contenidoLista
}

function generarNumero(numero){
    return (Math.random()*numero).toFixed(0);
}

function colorRGB(){
    var coolor = "("+generarNumero(255)+"," + generarNumero(255) + "," + generarNumero(255) +")";
    return "rgb" + coolor;
}
