import {HashTable} from '../Estructuras/TablaHash.js'
import {encodeText} from '../Estructuras/encriptar.js'

let users = new HashTable(7);

const miobjeto=JSON.parse(localStorage.getItem("TablaHash"))

users.data=miobjeto.data
let miTabla = document.getElementById("tablaEstudiantes");
let i=1;
for(let usuario of users.data){
    if(usuario){
        console.log(usuario)
        let nuevaFila = miTabla.insertRow(i);
        let celdacarnet = nuevaFila.insertCell(0);
        let celdanombre = nuevaFila.insertCell(1);
        let celdacontra = nuevaFila.insertCell(2);
        celdacarnet.innerHTML =usuario.carnet ;
        celdanombre.innerHTML=usuario.nombre;
        celdacontra.innerHTML = encodeText(usuario.password);
        i++;
    }
    
}