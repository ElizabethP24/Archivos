
const divNombre= document.getElementById("divnombre")
const divCorreo= document.getElementById("divcorreo")
const divEdad= document.getElementById("divedad")
const nombre= document.getElementById("input-nombre")
const correo= document.getElementById("input-correo")
const edad= document.getElementById("input-edad")


function ingresarDatos(){
    //ingresar datos div nombre
    const nuevoNombre =nombre.value
    divNombre.innerText = "Bienvenid@"+" " +nuevoNombre
    divNombre.style.fontSize = "15px"
    divNombre.style.fontFamily ="italic"

    //Cambiar color div correo
    divCorreo.style.backgroundColor = colorRGB()

    //Obtener tamaño actual
    const nuevoEdad =edad.value
    divEdad.style.width = nuevoEdad+5  + "px"

}

function generarNumero(numero){
    return (Math.random()*numero).toFixed(0);
}
function colorRGB(){
    var coolor = "("+generarNumero(255)+"," + generarNumero(255) + "," + generarNumero(255) +")";
    return "rgb" + coolor;
}

