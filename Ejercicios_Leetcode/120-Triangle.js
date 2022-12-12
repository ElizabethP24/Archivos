/**
 * @param {number[][]} triangle
 * @return {number}
 */
 const minimumTotal = function(triangle) { //Declarar funcion con objeto constante
    
    const n = triangle.length; //n es igual al tamaño del triangulo

    //ciclos for para recorrer el triangulo      
    for (let i = n - 2; i >= 0; i--) { 
      for (let j = 0; j < n; j++) {
          
        let self = triangle[i][j]; //Obtener el número (j+1) en la fila (i+1)
          
        let res = Math.min( //Math.min() devuelve número menor 
          triangle[i + 1][j] + self,
          triangle[i + 1][j + 1] + self); //Obtener el valor mínimo de la suma de los números                                             adyacentes en esta fila y la fila siguiente
        triangle[i][j] = res; //Actualice el (j+1) número en la (i+1) fila
      }
    }
  
    return triangle[0][0];  //Entrega el resultado de la funcion
  };