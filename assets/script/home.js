let contenedorTarjeta = document.getElementById("card-container");
let eventos = data.events;

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
        <a class="text-decoration-none border border-2 p-1" href="./assets/pages/details.html?_id=${evento._id}">Details</a>
      </div>
    </section>`;
}

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

function filtrarPorBarra(eventos, busqueda) {
  return eventos.filter(elemento => elemento.name.toLowerCase().includes(busqueda.toLowerCase()));
}

function filtrarPorCheckbox(eventos, categorias) {
  if (categorias.length === 0) {
    return eventos;
  } else {
    return eventos.filter(evento => categorias.includes(evento.category));
  }
}

function filtroCruzado() {
  let checkbox = Array.from(document.querySelectorAll("input[type=checkbox]:checked")).map(elemento => elemento.value);
  let filtroPorBarra = filtrarPorBarra(eventos, search.value);
  let filtroPorCheck = filtrarPorCheckbox(filtroPorBarra, checkbox);
  
  contenedorTarjeta.innerHTML = filtroPorCheck.map(evento => mostrarTarjeta(evento)).join("");
}

let contenedorCheckbox = document.getElementById("contenedorCheckbox");
contenedorCheckbox.addEventListener("change", filtroCruzado);

let search = document.getElementById("search");
search.addEventListener("input", filtroCruzado);

let categoriesCheckbox = Array.from(new Set(eventos.map(evento => evento.category)));

mostrarCheckbox(categoriesCheckbox, contenedorCheckbox);

filtroCruzado();
