# Juego Space Invaders

##### Este juego consiste en destruir los alienigenas que se acercan a la nave, con la flecha arriba disparas, y con las flechas derecha e izquierda posicionas la nave, para ganar el juego debes destruir todos los alienigenas antes de que alcancen la nave o lleguen al final del tablero.

### Funciones
- iniciarJuego() Al dar clic en el botón empezar solicita que ingrese el nombre del jugadory lo imprime en pantalla, adicional llama la función empezarJuego()
- mostrarInstrucciones() Al dar clic en el botón instrucciones muestra un alert con las instrucciones del juego
- empezarJuego() se inicializan variables y arreglos, se define matriz de los invasores, se crean los invasores, se configura movimiento de los invasores,se crea el shooter, contiene las funciones agregarElementos( ), moveShooter(),  moveinvaders() y remove()
- agregarElementos() crea una lista donde se almacenan los eventos del jugador
- moveShooter() se configura el movimiento derecha e izquierda
- moveInvaders() se configura el movimiento de arriba abajo de izquierda a derecha
- remove() permite eliminar los invader
- reiniciarJuego() permite cargar de nuevo el juego cada que se pierde una vida
- shoot() crea el laser y lo inicializa
- moveLaser() permite disparar laser y destruir invaders y cargar el puntaje del juego
- reiniciar() reinicia completamente el juego
-  crearDiv() llama nuevamente el div "grid"
- borrarDiv() limpia el div cada que se pierde una vida
- mostrarElemento() permite mostrar la lista de eventos del jugador
