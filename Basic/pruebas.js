console.log("Esto es una prueba para ver si se ha entendido todo lo visto en la clase 1 de JavaScript")
console.log("Con console.log() podemos imprimir mensajes en la consola del navegador")
console.log("Es un lenguaje de tipado debil, no hace falta decir el tipo de dato antes de declarar una variable")
a =3
b =2
c = a + b
console.log("El resultado de la suma de" + a + b + "es:" + c)
console.log("La variable a es de tipo " + typeof(a))
console.log("La variable b es de tipo " + typeof(b))
console.log("La variable c es de tipo " + typeof(c))
console.log("Se puede declar una variable con 3 palabras reservadas: var, let y const")
console.log("var es una variable global, let es una variable local y const es una constante")
console.log("Con var se puede reasignar el valor de la variable")
console.log("Con let se puede reasignar el valor de la variable")
console.log("Con const no se puede reasignar el valor de la variable")
console.log("Var esta en desuso, se recomienda usar let y const")
const patatas = 16.9
const tomates = 2
const precio = patatas + tomates
console.log("El precio de las patatas ("+patatas+") y los tomates ("+tomates+") es de " + precio)
console.log("Como se puede ver he sumado 2 constantes (una de tipo float y otra de tipo int) y el resultado es de tipo " + typeof(precio))
//Los comentarios son como en Java, tanto el de una sola linea
/*
como el de varias
lineas
Hola!!
*/
let x = 5
let y = 2
let z = x % y
console.log("El resultado de la operación x % y es: " + z)
x = 10
console.log("El valor de x es: " + x)
console.log("El resultado de la operación x % y es: " + z)
console.log("Como se puede ver, al cambiar el valor de x, no cambia el valor de z")
z= x % y
console.log("El resultado de la operación x % y es: " + z)
console.log("Ahora si hemos cambiado el valor de z")
console.log("He podido cambiar el valor de x y de z porque es una variable de tipo let")
