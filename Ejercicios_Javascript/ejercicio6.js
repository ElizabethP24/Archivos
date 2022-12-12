
const titulo = document.getElementById("titulo")
const imagen1 = document.getElementById("img1")
const url = document.getElementById("input-url")
const nombrei = document.getElementById("input-titulo")


function cargarImagen(){
    //Cambiar titulo
    const nuevoTitulo = nombrei.value
    titulo.innerText = nuevoTitulo
    //Insertar imagen
    const link = url.value
    imagen1.src= link
    imagen1.style.width="300px"
    imagen1.style.height="300px"
    imagen1.alt= nombrei

    //Limpiar value dejarlo vacio
    url.value=" "
    nombrei.value=" "
}
