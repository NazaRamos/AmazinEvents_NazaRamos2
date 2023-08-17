import { mostrarTarjetaPastUp, mostrarCheckbox, filtrarPorCheckbox, filtrarPorBarra} from "../script/module/functions.js";
let contenedorTarjeta = document.getElementById ("card-container-3")
let contenedorCheckbox = document.getElementById("contenedorCheckbox3")
let search = document.getElementById("search");




fetch("https://mindhub-xj03.onrender.com/api/amazing")
.then(response => response.json())
.then(datos => {
  let arrayAmazing = datos.events
  let arrayEventosFuturos = filtrarFuturo(arrayAmazing, datos)
  let categoriesCheckbox = Array.from(new Set(arrayEventosFuturos.map(evento => evento.category)));
  mostrarTarjetaPastUp(arrayEventosFuturos)
  mostrarCheckbox(categoriesCheckbox, contenedorCheckbox)
  filtrarPorBarra(arrayEventosFuturos, search.value)
  filtroCruzado(arrayEventosFuturos, categoriesCheckbox)
  contenedorCheckbox.addEventListener("change", ()=>{filtroCruzado(arrayEventosFuturos, categoriesCheckbox)});
  search.addEventListener("input", ()=>{filtroCruzado(arrayEventosFuturos, categoriesCheckbox)});
})
.catch(error => console.log(error))

function filtrarFuturo (eventos, datos){
    let eventosFiltradosFuturos = [];
    for (const evento of eventos) {
        if (evento.date > datos.currentDate){
            eventosFiltradosFuturos.push(evento)
        }
    }
    return eventosFiltradosFuturos
}

function filtroCruzado(eventosFuturos) {
  let checkbox = Array.from(document.querySelectorAll("input[type=checkbox]:checked")).map(elemento => elemento.value);
  let filtroPorBarra = filtrarPorBarra(eventosFuturos, search.value);
  let filtroPorCheck = filtrarPorCheckbox(filtroPorBarra, checkbox);
  let mapeoFiltroCruzado = filtroPorCheck.map(evento => mostrarTarjetaPastUp(evento))
  if ( mapeoFiltroCruzado.length !== 0 ){
    contenedorTarjeta.innerHTML = mapeoFiltroCruzado
  } else {
    contenedorTarjeta.innerHTML = `<h2>Oops, looks like there's nothing here! Please, try again.</h2>`
  }
}
