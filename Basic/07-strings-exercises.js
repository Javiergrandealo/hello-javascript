/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

// 1. Concatena dos cadenas de texto
let patatas= "Patatas"
let tortilla = "Me gusta la tortilla de "+ patatas

// 2. Muestra la longitud de una cadena de texto
a= patatas.length
console.log(a)

// 3. Muestra el primer y último carácter de un string
console.log(patatas[0])
console.log(patatas[patatas.length])
// 4. Convierte a mayúsculas y minúsculas un string
console.log(patatas.toLowerCase)
console.log(patatas.toUpperCase)

// 5. Crea una cadena de texto en varias líneas
let prueba= `Hola
esto es una cadena
en varias lineas`

// 6. Interpola el valor de una variable en un string
let nombre = "Javier"
let apodo ="Chaby"
let saludo = `Hola, ${nombre}, tu apodo es ${apodo}`

// 7. Reemplaza todos los espacios en blanco de un string por guiones
console.log(saludo.replace("","-"))

// 8. Comprueba si una cadena de texto contiene una palabra concreta
console.log(saludo.includes("Hola"))

// 9. Comprueba si dos strings son iguales
console.log(saludo==patatas)

// 10. Comprueba si dos strings tienen la misma longitud
console.log(saludo.length==patatas.length)