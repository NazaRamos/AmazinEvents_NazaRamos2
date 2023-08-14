let contenedorTarjeta = document.getElementById ("card-container-3")
console.log(contenedorTarjeta)
let eventos = data.events
console.log(eventos)

function mostrarTarjeta(evento) {
  return `
    <section class="card" style="width: 18rem;">
      <img src="${evento.image}" class="card-img-top" alt="school_book_fair">
      <div class="card-body d-flex flex-column align-items-center text-center">
        <h5 class="card-title">${evento.name}</h5>
        <p class="card-text">${evento.description}</p>
      </div>
      <div class="card-body d-flex justify-content-around align-items-center">
        <p>$${evento.price}</p>
        <a class="text-decoration-none border border-2 p-1" href="./details.html?_id=${evento._id}">Details</a>
      </div>
    </section>`;
}

function filtrarFuturo (eventos){
    let eventosFiltradosFuturos = [];
    for (const evento of eventos) {
        if (evento.date > data.currentDate){
            eventosFiltradosFuturos.push(evento)
        }
    }
    return eventosFiltradosFuturos
}

let eventosFuturos = filtrarFuturo(data.events);

mostrarTarjeta(eventosFuturos, contenedorTarjeta)

let contenedorCheckbox = document.getElementById("contenedorCheckbox3")

let categoriesCheckbox = Array.from(new Set(eventosFuturos.map(evento => evento.category)));

function mostrarCheckbox(categories, contenedorCheckbox) {
  let checkbox = "";
  for (const category of categories) {
    checkbox += `
      <label for="${category}">${category}</label>
      <input type="checkbox" id="${category}" name="${category}" value="${category}">
    `;
  }
  contenedorCheckbox.innerHTML = checkbox;
}

mostrarCheckbox(categoriesCheckbox, contenedorCheckbox)

contenedorCheckbox.addEventListener("change", filtroCruzado);

function filtrarPorCheckbox(eventos, categorias) {
  if (categorias.length === 0) {
    return eventos;
  } else {
    return eventos.filter(evento => categorias.includes(evento.category));
  }
}

let search = document.getElementById("search");

function filtrarPorBarra(eventos, busqueda) {
  return eventos.filter(elemento => elemento.name.toLowerCase().includes(busqueda.toLowerCase()));
}

search.addEventListener("input", filtroCruzado);

function filtroCruzado() {
  let checkbox = Array.from(document.querySelectorAll("input[type=checkbox]:checked")).map(elemento => elemento.value);
  let filtroPorBarra = filtrarPorBarra(eventosFuturos, search.value);
  let filtroPorCheck = filtrarPorCheckbox(filtroPorBarra, checkbox);
  let mapeoFiltroCruzado = filtroPorCheck.map(evento => mostrarTarjeta(evento))
  if ( mapeoFiltroCruzado.length !== 0 ){
    contenedorTarjeta.innerHTML = mapeoFiltroCruzado
  } else {
    contenedorTarjeta.innerHTML = `<h2>Oops, looks like there's nothing here! Please, try again.</h2>`
  }
}

filtroCruzado();