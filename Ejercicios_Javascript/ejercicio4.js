

const cambiartitulo = document.getElementById("titulo")
const portada1 = document.getElementById("img1")
const portada2 = document.getElementById("img2")
const portada3 = document.getElementById("img3")
const portada4 = document.getElementById("img4")

function libro1(){
    //Cambiar titulo
    cambiartitulo.innerText = "El corazón delator"
    //Insertar imagen
    portada1.src="https://www.storytel.com/images/e/640x640/0002650895.jpg"
    portada1.style.width="150px"
    portada1.style.height="150px"
    }

function libro2(){
    //Cambiar titulo
    cambiartitulo.innerText = "El gato negro"
    //Insertar imagen
    portada2.src="https://catalogue.immateriel.fr/resources/3c/23/2c092f5950ba9c95bebc799c4a921b2f999f967c284f48ba51ac29ccceb2.png"
    portada2.style.width="150px"
    portada2.style.height="150px"
}

function libro3(){
    //Cambiar titulo
    cambiartitulo.innerText = "El cuervo"
    //Insertar imagen
    portada3.src="http://static-1.ivoox.com/audios/9/3/6/5/9365cbe7f7b5e9b7b88d2daaed7d52dd_LG.jpg"
    portada3.style.width="150px"
    portada3.style.height="150px"
}

function libro4(){
    //Cambiar titulo
    cambiartitulo.innerText = "El escarabajo de oro"
    //Insertar imagen
    portada4.src="https://libreriatemis.com/wp-content/uploads/2020/12/18-681-0002-1.jpg"
    portada4.style.width="150px"
    portada4.style.height="150px"
}