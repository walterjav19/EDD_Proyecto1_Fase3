const miobjeto=JSON.parse(localStorage.getItem("Arbol_estudiantes"))



let nuevaFila;
let celdaNumero;
let celdaTexto;

let miTabla = document.getElementById("tablaEstudiantes");


let i=1;

window.inorden = function(nodo) {
    if (nodo) {
        
        nuevaFila = miTabla.insertRow(i);
        celdaNumero = nuevaFila.insertCell(0);
        celdaTexto = nuevaFila.insertCell(1);
        celdaNumero.innerHTML = nodo.valor.carnet;
        celdaTexto.innerHTML = nodo.valor.nombre;
        i++;     


        if (nodo.izquierda) {
            data = inorden(nodo.izquierda);
        }



        if (nodo.derecha) {
            data = inorden(nodo.derecha);
        }
    }
    return data;
}

let data = '';
inorden(miobjeto.arbol);