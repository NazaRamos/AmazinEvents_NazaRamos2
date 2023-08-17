import { mostrarTarjeta, mostrarCheckbox, filtrarPorCheckbox, filtrarPorBarra } from "./module/functions.js";
let contenedorTarjeta = document.getElementById("card-container");
let contenedorCheckbox = document.getElementById("contenedorCheckbox");
let search = document.getElementById("search");

fetch("https://mindhub-xj03.onrender.com/api/amazing")
.then(response => response.json())
.then(datos => {
  let arrayAmazing = datos.events
  let categoriesCheckbox = Array.from(new Set(arrayAmazing.map(evento => evento.category)));
  mostrarTarjeta(arrayAmazing)
  mostrarCheckbox(categoriesCheckbox, contenedorCheckbox)
  filtrarPorBarra(arrayAmazing, search.value)
  filtroCruzado(arrayAmazing, categoriesCheckbox)
  contenedorCheckbox.addEventListener("change", ()=>{filtroCruzado(arrayAmazing, categoriesCheckbox)});
  search.addEventListener("input", ()=>{filtroCruzado(arrayAmazing, categoriesCheckbox)});
})
.catch(error => console.log(error))

function filtroCruzado(eventos) {
  let checkbox = Array.from(document.querySelectorAll("input[type=checkbox]:checked")).map(elemento => elemento.value);
    let filtroPorBarra = filtrarPorBarra(eventos, search.value);
    let filtroPorCheck = filtrarPorCheckbox(filtroPorBarra, checkbox);
    let mapeoFiltroCruzado = filtroPorCheck.map(arrayEventos => mostrarTarjeta(arrayEventos))
    if ( mapeoFiltroCruzado.length !== 0 ){
      contenedorTarjeta.innerHTML = mapeoFiltroCruzado
    } else {
      contenedorTarjeta.innerHTML = `<h2>Oops, looks like there's nothing here! Please, try again.</h2>`
    }
}