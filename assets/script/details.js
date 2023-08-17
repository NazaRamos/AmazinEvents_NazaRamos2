import { crearTarjeta, renderizarTarjeta } from "../script/module/functions.js";
let contenedorDetails = document.getElementById("detailsContenedor")
let parametroEvento = location.search
let objetoURLSearchParam = new URLSearchParams(parametroEvento)
let objetoID = objetoURLSearchParam.get("_id")

fetch("https://mindhub-xj03.onrender.com/api/amazing")
.then(response => response.json())
.then(datos => {
    console.log(datos)
    let arrayEventosDetails = datos.events
    let eventoID = arrayEventosDetails.find( objetoEvento => objetoEvento._id == objetoID )
    console.log(eventoID)
    let estructuraHTML = crearTarjeta(eventoID)
    renderizarTarjeta(contenedorDetails, estructuraHTML)
})
