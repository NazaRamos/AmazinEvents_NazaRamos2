let miNombre = "Nazareno"

let miApellido = "Ramos"

let miEdad = 28

let miMascota = "Roma"

let edadMascota = 5

console.log(miNombre)
console.log(miApellido)
console.log(miEdad)
console.log(miMascota)
console.log(edadMascota)

let nombreCompleto = miNombre + " " + miApellido

let textoPresentacion = "Hola! Mi nombre es " + miNombre + " " + miApellido + ", y tengo " + miEdad + ". Vivo con mi perra " + miMascota + ", que es gigante, babosa, y tiene " + edadMascota + "."

let sumaEdades = miEdad + edadMascota

let restaEdades = miEdad - edadMascota

let productoEdades = miEdad * edadMascota

let divisionEdades = miEdad / edadMascota

console.log(sumaEdades)
console.log(restaEdades)
console.log(productoEdades)
console.log(divisionEdades)

let alumno = {
    nombre: "Nazareno",
    apellido: "Ramos",
    edad: 28,
    estaCansado: true,
    locacion: "La Plata"
}

console.table(alumno)
console.log(alumno.nombre)
console.log(alumno.apellido)
console.log(alumno.edad)
console.log(alumno.estaCansado)
console.log(alumno.locacion)

let mascota = {
    nombre: "Roma",
    edad: 5,
    esMadre: true,
    cachorros: 2,
    peso: "50 kilos"
}

console.table(mascota)
console.log(mascota.nombre)
console.log(mascota.edad)
console.log(mascota.esMadre)
console.log(mascota.cachorros)
console.log(mascota.peso)

let frutas = ["uva", "kiwi", "mandarina", "frambuesa", "anana"]

console.log(frutas)
console.log(frutas[0])
console.log(frutas[1])
console.log(frutas[2])
console.log(frutas[3])
console.log(frutas[4])

let edadIngresada = Number(prompt("Ingresa tu edad"))

let soyMayorDeEdad = edadIngresada >= 18

console.log("Soy mayor de edad", soyMayorDeEdad)

let numeros = [10, 41, 32, 43, 74]

console.log(numeros)
console.log(numeros[0])
console.log(numeros[1])
console.log(numeros[2])
console.log(numeros[3])
console.log(numeros[4])

let familia = [
    {nombre: "Marcela",
    edad: 62,
    tieneMascotas: true,},

    {nombre: "Carlos",
    edad: 70,
    tieneMascotas: true,},

    {nombre: "Segundo",
    edad: 36,
    tieneMascotas: true,},

    {nombre: "Isidro",
    edad: 25,
    tieneMascotas: false,},

    {nombre: "Nazareno",
    edad: 28,
    tieneMascotas: true,}
]

console.log(familia)
console.log(familia[0])
console.log(familia[0].nombre)
console.log(familia[0].edad)
console.log(familia[0].tieneMascotas)
console.log(familia[1])
console.log(familia[1].nombre)
console.log(familia[1].edad)
console.log(familia[1].tieneMascotas)
console.log(familia[2])
console.log(familia[2].nombre)
console.log(familia[2].edad)
console.log(familia[2].tieneMascotas)
console.log(familia[3])
console.log(familia[3].nombre)
console.log(familia[3].edad)
console.log(familia[3].tieneMascotas)
console.log(familia[4])
console.log(familia[4].nombre)
console.log(familia[4].edad)
console.log(familia[4].tieneMascotas)

let textoAleatorio = "El " + frutas[1] + "es una fruta muy rica, pero comerse " + numeros[3] + " me parece una exageracion, creo " + familia[4]

let miEdad2 = Number(prompt("Ingrese mi edad"))
let edadCompa = Number(prompt("Ingrese edad de mi compañero"))
let edadesIguales = miEdad2 == edadCompa
let soyMayor = miEdad2 > edadCompa
let soyMenor = miEdad2 < edadCompa

console.log("Mi edad es igual a la de mi compañero", edadesIguales)
console.log("Mi edad es mayor a la de mi compañero", soyMayor)
console.log("Mi edad es menor a la de mi compañero", soyMenor)

let edadPersona = Number(prompt("Ingrese edad de una persona"))
let alturaPersona = Number(prompt("Ingrese la altura de la persona en centimetros"))
let puedeSubir = edadPersona > 6 && alturaPersona > 120
console.log("Puede subir a la atraccion", puedeSubir)

let tipoDePase = prompt("Ingrese tipo de pase")
let saldoDisponible = Number(prompt("Ingrese saldo disponible"))
let puedePasar = tipoDePase == "VIP" || saldoDisponible > 1000
console.log("La persona puede pasar", puedePasar)