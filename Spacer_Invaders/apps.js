
const listadoEventos = document.getElementById("listado-elementos")
const eventos = []


function iniciarJuego(){
    const nombrej = document.querySelector('.nombreJugador')

    swal({
        title: 'Bienvenido a Spacer Invaders',
        text: 'Por favor escriba su nombre',
        icon: "info",
        content: {
            element: "input",
            attributes: {
                placeholder: "Escriba su nombre",
                type: "text",
            },
        },
    }).then( (value) => {
        agregarElemento()

        if(value){ //Si el usuario ingresó un valor se inicia el juego
            empezarJuego();
             nombreJugador = value;
             nombrej.innerHTML= nombreJugador
            console.log(nombreJugador);

        } else {//de lo contrario se llama nuevamente al método actual
            iniciarJuego()
        }
    } )
    agregarElemento()
}

    header: document.getElementsByTagName('nav')[0]
    footer : document.getElementsByTagName('footer')[0]


function mostrarInstrucciones() {
       swal('Instrucciones del juego',
        'Este juego consiste en destruir los alienigenas que se acercan a la nave, con la flecha arriba disparas, y con las flechas derecha e izquierda posicionas la nave, para ganar el juego debes destruir todos los alienigenas antes de que alcancen la nave o lleguen al final del tablero.',
        'info')
    agregarElemento()

}

function empezarJuego() {
let aliensRemoved = []
let results = 0
    let vidas = 3

    agregarElemento()
    //Seleccionamos clases e ids
    const squares = document.querySelectorAll('.grid div')
    const vidasrest = document.querySelector('.vidas')
    const resultsDisplay = document.querySelector('.results')

     console.log(vidas)
    //Ancho de la cuadricula
    let width = 15
    //Tirador inicie en el 202
    let currentShooterIndex = 202;
    //Invadido comience en cero
    let currentInvaderIndex = 0
    //Matriz para los invasores
    let alienInvadersTakenDown = []
    let result = 0
    let direction = 1
    let invaderId

    //definimos los invasores matriz de cuadrados
    const alienInvaders = [
        //ponemos los indices
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9,
        15, 16, 17, 18, 19, 20, 21, 22, 23, 24,
        30, 31, 32, 33, 34, 35, 36, 37, 38, 39
    ]

    //utilizar for each para cada elemento de la matriz
    //Agregar una lista de la clase que invada a ese cuadrado
    alienInvaders.forEach(invader => squares[currentInvaderIndex + invader].classList.add('invader'))

    //Creamos el tirador
    squares[currentShooterIndex].classList.add('shooter')

    //Hacer que tirador se mueva por la cuadricula pero que no suba ni baje
    function moveShooter(e) {
        //limpiar cuadricula
        squares[currentShooterIndex].classList.remove('shooter')
        //Agregamos códigos de tecla derecha e izquierda
        switch (e.keyCode) {
            //mover izquierda
            case 37:
                if (currentShooterIndex % width !== 0) currentShooterIndex -= 1
                agregarElemento()
                break
            //mover derecha
            case 39:
                if (currentShooterIndex % width < width - 1) currentShooterIndex += 1
                agregarElemento()
                break

        }
        //Agregamos a la clase tirador la nueva posición
        squares[currentShooterIndex].classList.add('shooter')
    }

    //Agregamos detector de eventos
    document.addEventListener('keydown', moveShooter)

    //Mover los invasores de un lado a otro con ciclo de tiempo

    function moveInvaders() {
        //definir borde izquierdo
        const leftEdge = alienInvaders[0] % width === 0
        //definir borde derecho
        const rightEdge = alienInvaders[alienInvaders.length - 1] % width === width - 1
        agregarElemento()
        remove()

        //Configurar movimientos

        if ((leftEdge && direction === -1) || (rightEdge && direction === 1)) {
            direction = width
            agregarElemento()
        } else if (direction === width) {
            if (leftEdge) direction = 1
            else direction = -1
            agregarElemento()
        }

        //cambiar dirección alienigenas

        function remove() {
            for (let i = 0; i <= alienInvaders.length - 1; i++) {
                squares[alienInvaders[i]].classList.remove('invader')
                agregarElemento()
            }
        }

        for (let i = 0; i <= alienInvaders.length - 1; i++) {
            alienInvaders[i] += direction
            agregarElemento()
        }
        for (let i = 0; i <= alienInvaders.length - 1; i++) {
            //eliminar alienigenas
            if (!aliensRemoved.includes(i)){
                squares[alienInvaders[i]].classList.add('invader')
                agregarElemento()
            }
        }

        //Verificar vidas
        if (vidas == 0 ) {
            swal({
                icon: 'error',
                title: 'OOPS...',
                text: 'PERDISTE AGOSTASTE TODAS TUS VIDAS!',})
            resultsDisplay.innerHTML = 'AGOTASTE TUS VIDAS'
        }
            //Decide ganador
            if(aliensRemoved.length === alienInvaders.length) {
                swal({
                    icon: 'success',
                    title: 'WOW',
                    text: '¡GANASTE!',
                })
                resultsDisplay.innerHTML = 'YOU WIN'
                clearInterval(invaderId)
            }

                //decidir fin del juego
                if (squares[currentShooterIndex].classList.contains('invader', 'shooter')) {
                    swal({
                        icon: 'info',
                        title: 'OOPS...',
                        text: 'PERDISTE UNA VIDA',})
                    resultsDisplay.innerHTML = 'PERDISTE UNA VIDA'
                    squares[currentShooterIndex].classList.add('boom')
                    clearInterval(invaderId)
                    vidas--
                    vidasrest.innerHTML = vidas
                    console.log(vidas)
                    reiniciarJuego()
                }
                    //fin del juego al llegar al final de la cuadricula
                    for (let i = 0; i <= alienInvaders.length - 1; i++) {
                        if (alienInvaders[i] > (squares.length - (width - 1))) {
                            swal({
                                icon: 'info',
                                title: 'OOPS...',
                                text: 'PERDISTE UNA VIDA',})
                            resultsDisplay.innerHTML = 'PERDISTE UNA VIDA'
                            clearInterval(invaderId)
                            vidas--
                            vidasrest.innerHTML = vidas
                            console.log(vidas)
                            reiniciarJuego()
                        }
                    }
                    vidasrest.innerHTML = vidas
                }
    invaderId = setInterval(moveInvaders,500)

    //disparar a los invasores
    function shoot(e) {
        let laserId
        let currentLaserIndex = currentShooterIndex

        //Mover láser
        function moveLaser() {
            squares[currentLaserIndex].classList.remove('laser')
            currentLaserIndex -= width
            squares[currentLaserIndex].classList.add('laser')
            agregarElemento()

            if (squares[currentLaserIndex].classList.contains('invader')) {
                squares[currentLaserIndex].classList.remove('laser')
                squares[currentLaserIndex].classList.remove('invader')
                squares[currentLaserIndex].classList.add('boom')
                setTimeout(()=> squares[currentLaserIndex].classList.remove('boom'), 200)
                clearInterval(laserId)
                agregarElemento()

                const alienRemoved = alienInvaders.indexOf(currentLaserIndex)
                aliensRemoved.push(alienRemoved)
                results++
                resultsDisplay.innerHTML= results
                agregarElemento()
            }
        }
        switch(e.key) {
            case 'ArrowUp':
                laserId = setInterval(moveLaser, 100)
                agregarElemento()
        }
    }
    //evento disparar
    document.addEventListener('keydown', shoot)

    function reiniciarJuego(){
        squares[alienInvaders[i]].classList.remove('shooter')
        squares[alienInvaders[i]].classList.remove('invader')
        clearInterval(invaderId)
        clearInterval(laserId)
        empezarJuego()
    }
 }
function agregarElemento(){
    //Leer el valor del campo de texto
    const evento = window.event;
    if(evento){  //Si no esta vacio
        //Agregar el elemento al listado de elementos
        eventos.push(evento)
        console.log(eventos)
        }
}
function mostrarElementos(){
    let contenidoLista = " "
    for (let i=0 ; i<eventos.length;i++){
        contenidoLista +="<li>" + eventos[i] + "</li>"
    }
    console.log(contenidoLista)
    listadoEventos.innerHTML= contenidoLista
}