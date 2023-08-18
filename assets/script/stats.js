let tabla1HTML = document.getElementById("tabla1")
let tabla2HTML = document.getElementById("tabla2")
let tabla3HTML = document.getElementById("tabla3")

fetch("https://mindhub-xj03.onrender.com/api/amazing")
.then(response => response.json())
.then(datos =>{
    let arrayEventosStats = datos.events
    let arrayEventosPorEstimado = arrayEventosStats.filter(evento=>evento.estimate)
    let arrayEventosPorAsistencia = arrayEventosStats.filter(evento=>evento.assistance)
    let arrayObjetoModificado = arrayEventosPorAsistencia.map(evento=>{
        return {
            name : evento.name,
            assistance : evento.assistance,
            capacity : evento.capacity,
            percentage : (evento.assistance*100)/evento.capacity,
            price : evento.price,
            totalValue : evento.price * evento.assistance,
            category : evento.category
        }
    })
    let arrayOrdenadoPorPorcentajes = arrayObjetoModificado.sort(compararPorcentajes)
    let eventoMayorPorcentaje = arrayOrdenadoPorPorcentajes.slice(0,1)
    let eventoMenorPorcentaje = arrayOrdenadoPorPorcentajes.slice(-1)
    let arrayOrdenadoPorCapacidad = arrayEventosStats.sort(compararCapacidades)
    let eventoMayorCapacidad = arrayOrdenadoPorCapacidad.slice(0,1)
    let estructuraHTML = crearTabla1(eventoMayorPorcentaje, eventoMenorPorcentaje, eventoMayorCapacidad)
    pintarTabla(tabla1HTML, estructuraHTML)
    /***************************************************************/
    let arrayDeCategorias = [...new Set(arrayObjetoModificado.map(evento=>evento.category))]

    let arrayDeArrays = arrayDeCategorias.map(categoria => arrayObjetoModificado.filter(evento => evento.category === categoria))
    let buclevariable = reduccionDeArrayEventos(arrayDeArrays)
    let estructuraHTML2 = crearTabla2(buclevariable, tabla2HTML)
    /***************************************************************/
    let arrayObjetoModificado2 = arrayEventosPorEstimado.map(evento=>{
        return {
            name : evento.name,
            estimate : evento.estimate,
            capacity : evento.capacity,
            percentage : (evento.estimate*100)/evento.capacity,
            price : evento.price,
            totalValue : evento.price * evento.estimate,
            category : evento.category
        }
    })
    let arrayDeCategorias2 = [...new Set(arrayObjetoModificado2.map(evento=>evento.category))]

    let arrayDeArrays2 = arrayDeCategorias2.map(categoria => arrayObjetoModificado2.filter(evento => evento.category === categoria))
    let buclevariable2 = reduccionDeArrayEventos(arrayDeArrays2)
    let estructuraHTML3 = crearTabla2(buclevariable2, tabla3HTML)
    /***************************************************************/
    
})
.catch(err => console.log(err))

function compararPorcentajes(a,b){
    return b.percentage - a.percentage
}

function compararCapacidades(a,b){
    return b.capacity - a.capacity
}
function crearTabla1 (evento1, evento2, evento3){
    return  `<tr>
    <td class="small-td col-3 fullcell">${evento1[0].name}: ${evento1[0].percentage.toFixed(2)}%</td>
    <td class="small-td col-3 fullcell">${evento2[0].name}: ${evento2[0].percentage}%</td>
    <td class="small-td col-3 fullcell">${evento3[0].name}: ${evento3[0].capacity}</td>
    </tr>`

}

function pintarTabla (contenedor, string){
    return contenedor.innerHTML = string
}

function reduccionDeArrayEventos (arrayDeArrays){
    let resultadoReduce = 0
    let arrayAux = []
    for (const array of arrayDeArrays) {
        let category = ""
        let revenues = 0
        let percentage = 0
        resultadoReduce = array.reduce((acc, act) => {
                    category = act.category
                    revenues += act.totalValue
                    percentage += act.percentage
                    return {
                        categoria : act.category,
                        ganancias : revenues,
                        porcentajeAsistencia : percentage/array.length
                    }
        }, {})
        arrayAux.push(resultadoReduce)
    }
    return arrayAux
}

function crearTabla2 (arrayDeObjetos, contenedor){
    let lineaDeTabla = ""
    for (const objeto of arrayDeObjetos) {
        lineaDeTabla += `<tr>
        <td class="fullcell">${objeto.categoria}</td>
        <td class="fullcell">$${objeto.ganancias}</td>
        <td class="fullcell">${objeto.porcentajeAsistencia.toFixed(2)}%</td>
    </tr>`
    }
    contenedor.innerHTML = lineaDeTabla
}
