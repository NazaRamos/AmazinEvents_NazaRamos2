let contenedorDetails = document.getElementById("detailsContenedor")
console.log([window])
let parametroEvento = location.search
console.log(parametroEvento)

let objetoURLSearchParam = new URLSearchParams(parametroEvento)
console.log(objetoURLSearchParam)

let objetoID = objetoURLSearchParam.get("_id")
console.log(objetoID)

let eventoID = data.events.find( objetoEvento => objetoEvento._id === objetoID )
console.log(eventoID)

function crearTarjeta(objeto){
    return `<section class="card" style="width: 18rem;">
                <img src="${objeto.image}" class="card-img-top" alt="school_book_fair">
                <div class="card-body d-flex flex-column align-items-center text-center">
                    <h5 class="card-title">${objeto.name}</h5>
                    <p class="card-text">${objeto.description}</p>
                    <p>${objeto.category}</p>
                </div>
                <div class="card-body d-flex justify-content-around align-items-center">
                    <p>$${objeto.price}</p>
                    <p>${objeto.date}</p>
                    <p>${objeto.place}</p>
                </div>
            </section>`     
}

let estructuraHTML = crearTarjeta(eventoID)

function renderizarTarjeta(contenedorHTML, string){
    contenedorHTML.innerHTML = string
}

renderizarTarjeta(contenedorDetails, estructuraHTML)