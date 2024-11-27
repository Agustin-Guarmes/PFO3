// 1. Función para calcular el área de un rectángulo
function calcularAreaRectangulo(longitud, ancho) {
    return longitud * ancho;
}

console.log("Ejercicio 1");
// Ejemplo 1
console.log("Solucion 1:");
console.log(calcularAreaRectangulo(5, 3)); // Resultado: 15
console.log("______________");

// Ejemplo 2
console.log("Solucion 2:");
console.log(calcularAreaRectangulo(7, 4)); // Resultado: 28
console.log("______________");

// Ejemplo 3
console.log("Solucion 3:");
console.log(calcularAreaRectangulo(10, 2)); // Resultado: 20
console.log("//////////////");

/*
Pensamiento: 
Comó el ejercicio me pide calcular el área de un rectángulo, utilicé la fórmula del área de un rectangulo = longitud * ancho.
Dado que la función debe retornar un valor en vez de imprimirlo, utilicé el return para devolver el resultado.
Para probar la función, utilicé tres ejemplos (el que se encuentra en la consigna y dos más) con diferentes dimensiones de rectángulos.
*/





// 2. Función para contar palabras en una cadena
function contarPalabras(cadena) {
    let palabras = cadena.split(" "); 
    return palabras.length;
}

console.log("Ejercicio 2");
// Ejemplo 1
console.log("Solucion 1:");
console.log(contarPalabras("Humahuaca es un lugar copado")); // Resultado: 5
console.log("______________");

// Ejemplo 2
console.log("Solucion 2:");
console.log(contarPalabras("Argentina es campeón del mundo")); // Resultado: 5
console.log("______________");

// Ejemplo 3
console.log("Solucion 3:");
console.log(contarPalabras("Tengo una perra galga que se llama Luna")); // Resultado: 8
console.log("//////////////");

/*
Pensamiento:
El ejercicio me pide contar las palabras de una cadena de texto. Utilicé el método "split()" para dividir la cadena en un arreglo de palabras cada vez que se encontrara un espacio " ", permitiendome crear un arreglo con cada palabra.
Luego con "length", retorné la cantidad de palabras, que es el tamaño del arreglo.
*/





// 3. Función para invertir una cadena
function invertirCadena(cadena) {
    let caracteres = cadena.split('');
    let caracteresInvertidos = caracteres.reverse();
    let cadenaInvertida = caracteresInvertidos.join('');
    return cadenaInvertida;
    // en una linea return cadena.split('').reverse().join('');
}

console.log("Ejercicio 3");
// Ejemplo 1
console.log("Solucion 1:");
console.log(invertirCadena("hola")); // Resultado: "aloh"
console.log("______________");

// Ejemplo 2
console.log("Solucion 2:");
console.log(invertirCadena("arenera")); // Resultado: "arenera"
console.log("______________");

// Ejemplo 3
console.log("Solucion 3:");
console.log(invertirCadena("yo hago yoga hoy")); // Resultado: "yoh agoy ogah oy"
console.log("//////////////");

/*
Pensamiento:
Como debo invertir una cadena lo primero que hago es convertir la cadena en un arreglo de caracteres,
luego invierto ese arreglo y por último, uno de nuevo la cadena con los caracteres en orden inverso y la retorno.
*/





// 4. Función para verificar si es palíndromo
function esPalindromo(cadena) {
    let cadenaInvertida = cadena.split('').reverse().join('');
    //Puedo resolver este ejercicio utilizando la función 'invertirCadena' del ejercicio 3
    //let cadenaInvertida = invertirCadena(cadena);
    return cadena === cadenaInvertida;
}

console.log("Ejercicio 4");
// Ejemplo 1
console.log("Solucion 1:");
console.log(esPalindromo("neuquen")); // true
console.log("______________");

// Ejemplo 2
console.log("Solucion 2:");
console.log(esPalindromo("reconocer")); // true
console.log("______________");

// Ejemplo 3
console.log("Solucion 3:");
console.log(esPalindromo("Agustin")); // false
console.log("//////////////");

/*
Pensamiento:
Una cadena es palíndroma si se lee igual de izquierda a derecha que de derecha a izquierda.
Para esto, puedo invertir la cadena como en el ejercicio 3 (o usarla directamente para no repetir código)
y compararla con la original. Si son iguales, la cadena es un palíndromo y retorna true sino false. 
*/





// 5. Función para convertir la edad de un perro a años humanos
function edadCanina() {
    // Solicitamos la edad del perro a través de prompt
    let edadHumana = prompt("Introduce la edad de tu perro en años humanos:");

    // Verificamos que la entrada sea un número válido
    if (isNaN(edadHumana) || edadHumana <= 0) {
        console.log("Por favor, ingresa una edad válida.");
    } else {
        // Calculamos la edad canina en años humanos (7 veces la edad humana)
        let edadCanina = edadHumana * 7;

        // Mostramos el resultado en consola
        console.log("Tu perro tiene " + edadCanina + " años humanos.");
    }
}

console.log("Ejercicio 5");
// Ejemplo 1
console.log("Solucion 1:");
edadCanina(); // Ingresando '7', Resultado: "Tu perro tiene 49 años humanos"
console.log("______________");

// Ejemplo 2
console.log("Solucion 2:");
edadCanina(); // Ingresando '5', Resultado: "Tu perro tiene 35 años humanos"
console.log("______________");

// Ejemplo 3
console.log("Solucion 3:");
edadCanina(); // Ingresando '10', Resultado: "Tu perro tiene 70 años humanos"
console.log("//////////////");

/*
Pensamiento:
Como el ejercicio pide convertir la edad de un perro en años humanos, y se nos aclara que la edad canina
equivale a 7 veces la edad humana simplemente tengo que multiplicar la edad humana por 7.
Debo tener en cuenta que lo que ingrese cada usuario por el prompt sea un numero por lo cual antes de
realizar la multiplicación y retornar el resultado debo validar eso. Si es un número positivo devuelvo
la edad canina sino le informo su error al usuario correspondiente
*/
