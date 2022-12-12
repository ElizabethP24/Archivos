console.log("Cargo JS")

//Seleccionar un elemento de la pagina atraves del atributo ID
const selectores = document.getElementById("selectores")
const imagenServidores = document.getElementById("servidores")
const divContenido= document.getElementById("contenido")
const inputEdad = document.getElementById("edad")
const spanEdad = document.getElementById("mensajeEdad")
console.log(selectores)

//Cambiar propiedad CSS de un elemento DOM desde JS
selectores.style.color = "#00FF00"

//Cambiar valor de un atributo desde JS
imagenServidores.src="https://as01.epimg.net/meristation/imagenes/2022/07/22/betech/1658483903_137620_1658484250_noticia_normal_recorte1.jpg"

//Cambiar contenido desde JS
divContenido.innerText= "Ahora soy el nuevo contenido de la lista"

//Capturar informacion y mostrar edad
function mostrarEdad(){
    //Capturar dato input
    const ValorInputEdad = inputEdad.value
    //Modificar el contenido del SPAN con el valor del input
    spanEdad.innerText = ValorInputEdad
}