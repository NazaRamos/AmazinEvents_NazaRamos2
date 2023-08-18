//FUNCIONES HOME//

/*------------------------------------------------------------------------------------------- */
    export function mostrarTarjeta(evento) {
        return `<section class="card" style="width: 18rem;">
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
    
    export function mostrarCheckbox(categories, contenedorCheckbox) {
  
    let checkbox = "";
    for (const category of categories) {
      checkbox += `
        <label for="${category}">${category}</label>
        <input type="checkbox" id="${category}" name="${category}" value="${category}">
      `;
    }
    contenedorCheckbox.innerHTML = checkbox;
  }

  export function filtrarPorCheckbox(arrayEventos, categorias) {
    if (categorias.length === 0) {
      return arrayEventos;
    } else {
      return arrayEventos.filter(evento => categorias.includes(evento.category));
    }
  }

  export function filtrarPorBarra(arrayEventos, busqueda) {
    return arrayEventos.filter(elemento => elemento.name.toLowerCase().includes(busqueda.toLowerCase()));
  }

/*---------------------------------------------------------------------------------------------*/

//FUNCION TARJETA PAST Y UP//

export function mostrarTarjetaPastUp(evento) {
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

