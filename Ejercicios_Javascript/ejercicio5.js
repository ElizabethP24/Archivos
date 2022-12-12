

const divNuevo = document.getElementById("divModificar")


function Cambiardiv(){
    //Obtener tamaño actual
    let tamaño_w = divNuevo.offsetWidth
    let tamaño_h = divNuevo.offsetHeight

        //Modificar estilo
      divNuevo.style.width = tamaño_w/2 + "px"
      divNuevo.style.height = tamaño_h/2 + "px"
    divNuevo.style.backgroundColor = colorRGB()
    console.log(colorRGB())

}

function generarNumero(numero){
    return (Math.random()*numero).toFixed(0);
}

function colorRGB(){
    var coolor = "("+generarNumero(255)+"," + generarNumero(255) + "," + generarNumero(255) +")";
    return "rgb" + coolor;
}

