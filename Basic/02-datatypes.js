/*
Clase 2 en vídeo | 17/07/2024
Tipos de datos, operadores y strings
https://www.twitch.tv/videos/2200149072?t=00h08m02s
*/

// Tipos de datos primitivos

// Cadenas de texto (string)
let myName = "Brais Moure"
let alias = 'MoureDev'
let email = `braismoure@mouredev.com`

// Números (number)
let age = 37 // Entero
let height = 1.77 // Decimal

// Booleanos (boolean)
let isTeacher = true
let isStudent = false

// Undefined (aun no tiene ningun valor asociado)
let undefinedValue
console.log(undefinedValue)

// Null
let nullValue = null

// Symbol

let mySymbol = Symbol("mysymbol")

// BigInt (para cuando un numero ocupa más de 64 bits)

let myBigInt = BigInt(817239871289371986589716389471628379612983761289376129) //se puede crear como un objeto
let myBigInt2 = 817239871289371986589716389471628379612983761289376129n //o poniendo el numero con una n al final

// Mostramos los tipos de datos
//Con la palabra reservada typeof var nos indica el tipo de variabale que es var
console.log(typeof myName)
console.log(typeof alias)
console.log(typeof email)

console.log(typeof age)
console.log(typeof height)

console.log(typeof isTeacher)
console.log(typeof isStudent)

console.log(typeof undefinedValue)

console.log(typeof nullValue) //esto devuelve objeto Object (es un objeto pero aun no se le ha dado valor)

console.log(typeof mySymbol)

console.log(typeof myBigInt)
console.log(typeof myBigInt2)