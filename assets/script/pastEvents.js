import { mostrarTarjetaPastUp, mostrarCheckbox, filtrarPorCheckbox, filtrarPorBarra} from "../script/module/functions.js";
let contenedorTarjeta = document.getElementById ("card-container-2")
let contenedorCheckbox = document.getElementById("contenedorCheckbox2")
let search = document.getElementById("search");

fetch("https://mindhub-xj03.onrender.com/api/amazing")
.then(response => response.json())
.then(datos => {
  let arrayAmazing = datos.events
  let arrayEventosPasados = filtrarPasado(arrayAmazing, datos)
  let categoriesCheckbox = Array.from(new Set(arrayEventosPasados.map(evento => evento.category)));
  mostrarTarjetaPastUp(arrayEventosPasados)
  mostrarCheckbox(categoriesCheckbox, contenedorCheckbox)
  filtrarPorBarra(arrayEventosPasados, search.value)
  filtroCruzado(arrayEventosPasados, categoriesCheckbox)
  contenedorCheckbox.addEventListener("change", ()=>{filtroCruzado(arrayEventosPasados, categoriesCheckbox)});
  search.addEventListener("input", ()=>{filtroCruzado(arrayEventosPasados, categoriesCheckbox)});
})
.catch(error => console.log(error))

function filtrarPasado (eventos, datos){
    let eventosFiltradosPasados = [];
    for (const evento of eventos) {
        if (evento.date < datos.currentDate){
            eventosFiltradosPasados.push(evento)
        }
    }
    return eventosFiltradosPasados
}

function filtroCruzado(eventosPasados) {
  let checkbox = Array.from(document.querySelectorAll("input[type=checkbox]:checked")).map(elemento => elemento.value);
  let filtroPorBarra = filtrarPorBarra(eventosPasados, search.value);
  let filtroPorCheck = filtrarPorCheckbox(filtroPorBarra, checkbox);
  let mapeoFiltroCruzado = filtroPorCheck.map(evento => mostrarTarjetaPastUp(evento))
  if ( mapeoFiltroCruzado.length !== 0 ){
    contenedorTarjeta.innerHTML = mapeoFiltroCruzado
  } else {
    contenedorTarjeta.innerHTML = `<h2>Oops, looks like there's nothing here! Please, try again.</h2>`
  }
}