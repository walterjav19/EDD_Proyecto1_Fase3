import {CircularLinkedList} from '../Estructuras/lista_circular.js'

const miobjeto=JSON.parse(localStorage.getItem("estudiante"));

let key=miobjeto.carnet.toString()

const bita=JSON.parse(localStorage.getItem("bitacora"+key));

let lista=new CircularLinkedList()

let puntero=bita.head


do{
    lista.append(puntero.data)
    puntero=puntero.next
}while(puntero!==null)





let reporte = lista.hacerdot();


document.getElementById("image").src = 'https://quickchart.io/graphviz?graph='+encodeURIComponent(reporte);
