const miobjeto=JSON.parse(localStorage.getItem("Arbol_estudiantes"))



let nuevaFila;
let celdaNumero;
let celdaTexto;

let miTabla = document.getElementById("tablaEstudiantes");


let i=1;

window.preorden = function(nodo) {
    if (nodo) {
        
        if (nodo.izquierda) {
            data = preorden(nodo.izquierda);
        }

        nuevaFila = miTabla.insertRow(i);
        celdaNumero = nuevaFila.insertCell(0);
        celdaTexto = nuevaFila.insertCell(1);
        celdaNumero.innerHTML = nodo.valor.carnet;
        celdaTexto.innerHTML = nodo.valor.nombre;
        i++;

        if (nodo.derecha) {
            data = preorden(nodo.derecha);
        }
    }
    return data;
}

let data = '';
preorden(miobjeto.arbol);

//console.log(Arbol_Alumnos.buscar(201284666))

