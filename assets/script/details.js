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

function crearTarjeta(objeto){
    return `<section class="card" style="width: 18rem;">
                <img src="${objeto.image}" class="card-img-top" alt="school_book_fair">
                <div class="card-body d-flex flex-column align-items-center text-center">
                    <h5 class="card-title">${objeto.name}</h5>
                    <p class="card-text">${objeto.description}</p>
                    <p>${objeto.category}</p>
                </div>
                <div class="card-body d-flex flex-column justify-content-around align-items-center">
                    <p>Price: $${objeto.price}</p>
                    <p>Date: ${objeto.date}</p>
                    <p>Location: ${objeto.place}</p>
                    <p>${objeto.assistance?(`Assistance: ${objeto.assistance}`):(`Estimate: ${objeto.estimate}`)}</p>
                    <p>Capacity: ${objeto.capacity}</p>
                </div>
            </section>`
}

function renderizarTarjeta(contenedorHTML, string){
    contenedorHTML.innerHTML = string
}