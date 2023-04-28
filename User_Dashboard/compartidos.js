let contenedor=document.getElementById("caja")

const username=JSON.parse(localStorage.getItem("estudiante")).carnet
let archivos_compartidos=JSON.parse(localStorage.getItem("Compartidos_lista"+username))

let aux=archivos_compartidos.head


while(aux){
    var nuevoDiv = document.createElement("div");
    nuevoDiv.style=`display: flex; flex-direction: column;`
    // establecer el contenido del div con el código HTML
    nuevoDiv.innerHTML = `<iframe id="inlineFrameExample" src="${aux.data.base64}" title="Inline Frame Example" width="400" height="300" style="display: inline-block;"></iframe><p style="display: inline-block; width: calc(100% - 400px);">${aux.data.nombre}</p>`;

    // agregar el nuevo div al contenedor
    contenedor.appendChild(nuevoDiv);
    console.log(aux.data)
    aux=aux.next
}



