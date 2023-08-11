let contenedorTarjeta = document.getElementById ("card-container-2")
console.log(contenedorTarjeta)
let eventos = data.events
console.log(eventos)

function mostrarTarjeta (listaDeEventos, contenedorTarjeta){
    let tarjeta = ""
    for (let evento of listaDeEventos) {
        tarjeta += `<section class="card" style="width: 18rem;">
        <img src="${evento.image}" class="card-img-top" alt="school_book_fair">
        <div class="card-body d-flex flex-column align-items-center text-center">
          <h5 class="card-title">${evento.name}</h5>
          <p class="card-text">${evento.description}</p>
        </div>
        <div class="card-body d-flex justify-content-around align-items-center">
          <p>$${evento.price}</p>
          <a class="text-decoration-none border border-2 p-1" href="./details.html?_id=${evento._id}">Details</a>
        </div>
    </section>`     
    }
    contenedorTarjeta.innerHTML = tarjeta
}


function filtrarPasado (eventos){
    let eventosFiltradosPasados = [];
    for (const evento of eventos) {
        if (evento.date < data.currentDate){
            eventosFiltradosPasados.push(evento)
        }
    }
    return eventosFiltradosPasados
}

let eventosPasados = filtrarPasado(data.events);

mostrarTarjeta(eventosPasados, contenedorTarjeta)

let contenedorCheckbox = document.getElementById("contenedorCheckbox2")
console.log(contenedorCheckbox)

function mostrarCheckbox (listaDeEventos, contenedorCheckbox){
  let checkbox = ""
  for (const evento of listaDeEventos) {
    checkbox += `<label for="${evento.category}">${evento.category}</label>
    <input type="checkbox" id="${evento.category}" name="${evento.category}">`
  }
  contenedorCheckbox.innerHTML = checkbox
}

mostrarCheckbox(eventos, contenedorCheckbox)