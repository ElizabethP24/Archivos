/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
 const rangeBitwiseAnd = function(left, right) {    //Declarar funcion con objeto constante
    let cont = 0                                    //Declaro contador
    while(left !== right) {                         //Ciclo mientras left y right sean diferentes
      left >>= 1         //>>=mueve la cantidad de bits a la derecha y asigna el resultado a la variable
      right >>= 1
      cont++             //Incremento valor del contador
    }
    return left << cont //<< desplaza el primer operando el número especificado de bits hacia la izquierda
  }
