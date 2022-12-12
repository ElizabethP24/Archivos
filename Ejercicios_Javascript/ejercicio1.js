

const divColores = document.getElementById("divColor")


function cambiarColor(){

    //Modificar estilo
    divColores.style.backgroundColor = colorRGB()
}

function generarNumero(numero){
    return (Math.random()*numero).toFixed(0);
}

function colorRGB(){
    var coolor = "("+generarNumero(255)+"," + generarNumero(255) + "," + generarNumero(255) +")";
    return "rgb" + coolor;
}

