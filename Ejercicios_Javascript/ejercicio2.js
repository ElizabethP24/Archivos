
const  divTamanos = document.getElementById("divTamano")
const  inputWidth = document.getElementById("input-ancho")
const  inputHeight = document.getElementById("input-alto")

function cambiarMedidas() {

    //Leer el valor del campo de texto
    const Ancho = inputWidth.value
    const Alto = inputHeight.value
    if (Ancho && Alto) {  //Si no esta vacio
        //Modificar estilo
        divTamanos.style.width = Ancho + "px"
        divTamanos.style.height = Alto + "px"

        //Limpiar value dejarlo vacio
        inputWidth.value = " "
        inputHeight.value = " "
    }
}
