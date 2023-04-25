const miobjeto=JSON.parse(localStorage.getItem("Arbol_estudiantes"))



let nuevaFila;
let celdaNumero;
let celdaTexto;

let miTabla = document.getElementById("tablaEstudiantes");


let i=1;

window.posorden = function(nodo) {
    if (nodo) {



        if (nodo.izquierda) {
            data = posorden(nodo.izquierda);
        }



        if (nodo.derecha) {
            data = posorden(nodo.derecha);
        }



        
        nuevaFila = miTabla.insertRow(i);
        celdaNumero = nuevaFila.insertCell(0);
        celdaTexto = nuevaFila.insertCell(1);
        celdaNumero.innerHTML = nodo.valor.carnet;
        celdaTexto.innerHTML = nodo.valor.nombre;
        i++;     

    }
    return data;
}

let data = '';
posorden(miobjeto.arbol);