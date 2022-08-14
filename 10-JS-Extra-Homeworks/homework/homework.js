// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["Dcx", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  //Opción 1
  //var arr = Object.keys(objeto).map(function (key) {return [key, objeto[key]];});
  var arr = Object.entries(objeto);
  return arr;
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aquí
  
  let array = string.split('');
  var repetidos = {};
  array.forEach(function(lstring){
    repetidos[lstring] = (repetidos[lstring] || 0) + 1;
  });
  
  return repetidos;

}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí
  

  let array = s.split('');
  var may = '';
  var min = '';
  var indeterminado = '';
  array.forEach(function(element) {
    if (element === element.toLowerCase()) {
      min = min + element;
    } else if (element === element.toUpperCase()) {
      may = may + element;  
    }
    else {
      indeterminado = indeterminado + element;
    }
  });
  retorno = may + min + indeterminado; 
  return retorno;

}


function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  let array = str.split(' ');
  retorno = [];
  array.forEach(function(element) {
    retorno.push(element.split('').reverse().join('')); 
  });
  retornos = retorno.join(' ');
  return retornos;
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  snumero = '' + numero;
  retorno = 'No es capicua';
  rnumero = snumero.split('').reverse().join('');
  if (snumero === rnumero){
    retorno = 'Es capicua';
  }
  return retorno;
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  let array = cadena.split('');
  retorno = [];
  array.forEach(function(element) {
    if (element !== 'a' && element !== 'b' && element !== 'c' ) {
      retorno.push(element);
    } 
  });
  retornos = retorno.join('');
  return retornos;

}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí

  const sortedArr = arr.sort((a, b) => {
    return a.length - b.length;
  });
 
  return sortedArr;
 
}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  return arreglo1.filter(Set.prototype.has, new Set(arreglo2));
}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

