const lista=JSON.parse(localStorage.getItem("T_Permisos_prop"))
let aux=lista.head
let miTabla = document.getElementById("tablapermisos");
let i=1;
while(aux){
    console.log(aux)
    let nuevaFila = miTabla.insertRow(i);
    let propietario = nuevaFila.insertCell(0);
    let destino = nuevaFila.insertCell(1);
    let ubicacion = nuevaFila.insertCell(2);
    let archivo = nuevaFila.insertCell(3);
    let permiso = nuevaFila.insertCell(4);
    propietario.innerHTML =aux.data.propietario ;
    destino.innerHTML=aux.data.destino;
    ubicacion.innerHTML=aux.data.ubicacion;
    archivo.innerHTML=aux.data.archivo;
    permiso.innerHTML=aux.data.permiso;
    aux=aux.next
    i++;
}