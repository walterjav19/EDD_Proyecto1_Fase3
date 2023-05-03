import {DoubleLinkedList} from '../Estructuras/doublelist.js'

const carnets1 = document.getElementById("carnets1");
const carnets2 = document.getElementById("carnets2");
const inputUsuario = document.getElementById("user1");
const inputUsuario2 = document.getElementById("user2");
const textArea=document.getElementById("miTextarea")
const data=JSON.parse(localStorage.getItem("TablaHash")).data

for(let objeto of data){
    if(objeto){
        const enlace = document.createElement("a");
        enlace.classList.add("dropdown-item");
        enlace.textContent = objeto.carnet;
        enlace.addEventListener("click", function() {
            inputUsuario.value = objeto.carnet;
          });
        carnets1.appendChild(enlace);
    }
}

for(let objeto of data){
    if(objeto){
        const enlace = document.createElement("a");
        enlace.classList.add("dropdown-item");
        enlace.textContent = objeto.carnet;
        enlace.addEventListener("click", function() {
            inputUsuario2.value = objeto.carnet;
          });
        carnets2.appendChild(enlace);
    }
}


document.getElementById("buscar_lista_msg").onclick=function(){
    let lista_mensajes=new DoubleLinkedList()

    if(localStorage.getItem(`${inputUsuario.value}_${inputUsuario2.value}`)!==null){
        const lm=JSON.parse(localStorage.getItem(`${inputUsuario.value}_${inputUsuario2.value}`))
        for(let m of lm){
            lista_mensajes.append(m)
        }
        document.getElementById("listmsg").src="https://quickchart.io/graphviz?graph="+encodeURIComponent(lista_mensajes.graficar())
        
    }


    if(localStorage.getItem(`${inputUsuario2.value}_${inputUsuario.value}`)!==null){
        const lm=JSON.parse(localStorage.getItem(`${inputUsuario2.value}_${inputUsuario.value}`))
        for(let m of lm){
            lista_mensajes.append(m)
        }
        document.getElementById("listmsg").src="https://quickchart.io/graphviz?graph="+encodeURIComponent(lista_mensajes.graficar())
        
    }
}

document.getElementById("buscar").onclick=function(){
    let lista_mensajes=new DoubleLinkedList()

    if(localStorage.getItem(`${inputUsuario.value}_${inputUsuario2.value}`)!==null){
        const lm=JSON.parse(localStorage.getItem(`${inputUsuario.value}_${inputUsuario2.value}`))
        for(let m of lm){
            lista_mensajes.append(m)
        }
        
        textArea.innerText=lista_mensajes.getMensaje(parseInt(document.getElementById("number").value))

    }


    if(localStorage.getItem(`${inputUsuario2.value}_${inputUsuario.value}`)!==null){
        const lm=JSON.parse(localStorage.getItem(`${inputUsuario2.value}_${inputUsuario.value}`))
        for(let m of lm){
            lista_mensajes.append(m)
        }
        
        textArea.innerText=lista_mensajes.getMensaje(parseInt(document.getElementById("number").value))
        
    }
}


