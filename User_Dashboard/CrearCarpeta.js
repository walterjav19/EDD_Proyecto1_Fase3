import { Arbol} from "../Estructuras/ArbolN.js";
import { CircularLinkedList } from "../Estructuras/lista_circular.js";
import { AvlArchivos } from "../Estructuras/arbolArchivos.js";
import { Archivo } from "../Estructuras/arbolArchivos.js";

document.getElementById("btncrear").onclick=function (){

    $("#miModal").modal("show");
}

document.getElementById("cerrar2").onclick=function (){
    $("#miModal").modal("hide"); // Oculta la modal
}


document.getElementById("miBotonModal").onclick=function (){
    let ruta=document.getElementById("miCampo").value
    let username=JSON.parse(localStorage.getItem("estudiante")).carnet
    let newArbol=new Arbol()
    const urls=JSON.parse(localStorage.getItem("urls"+username))

    if(urls.includes( ruta )){//ya existe
        console.log("carpeta existente")

        let fecha=new Date();
        let actual="Fecha: "+fecha.getDate()+"-"+(fecha.getMonth()+1)+"-"+fecha.getFullYear()
        let hora="Hora: "+fecha.getHours()+":"+fecha.getMinutes();
        let log="Accion: se creo carpeta \\n \\\""+ruta+"(copia)"+"\\\" \\n"+actual+"\\n"+hora;

        const listaGlobal=JSON.parse(localStorage.getItem("bitacora"+username))
        let listanueva=new CircularLinkedList()
        let puntero=listaGlobal.head
        
        do{
        listanueva.append(puntero.data)
        puntero=puntero.next 
        }while(puntero!==null)

        listanueva.append(log)
        
        localStorage.setItem("bitacora"+username,JSON.stringify(listanueva))


        

        urls.push(ruta+"(copia)")
        localStorage.setItem("urls"+username,JSON.stringify(urls))
        

        for(let url of urls){
            newArbol.insertar(url)
        }
        
        
        let arbol_archivos=new AvlArchivos();
        

        localStorage.setItem(ruta+"(copia)",JSON.stringify(arbol_archivos))
        
        localStorage.setItem("arboln"+username,JSON.stringify(newArbol))

    }else{
    
    let fecha=new Date();
    let actual="Fecha: "+fecha.getDate()+"-"+(fecha.getMonth()+1)+"-"+fecha.getFullYear()
    let hora="Hora: "+fecha.getHours()+":"+fecha.getMinutes();
    let log="Accion: se creo carpeta \\n \\\""+ruta+"\\\" \\n"+actual+"\\n"+hora;

    const listaGlobal=JSON.parse(localStorage.getItem("bitacora"+username))
    let listanueva=new CircularLinkedList()
    let puntero=listaGlobal.head
    
    do{
       listanueva.append(puntero.data)
       puntero=puntero.next 
    }while(puntero!==null)

    listanueva.append(log)
    
    localStorage.setItem("bitacora"+username,JSON.stringify(listanueva))


    

    urls.push(ruta)
    localStorage.setItem("urls"+username,JSON.stringify(urls))
    

    for(let url of urls){
        newArbol.insertar(url)
    }
    
    
    let arbol_archivos=new AvlArchivos();
    

    localStorage.setItem(ruta,JSON.stringify(arbol_archivos))
    
    localStorage.setItem("arboln"+username,JSON.stringify(newArbol))
    }
    
    document.getElementById("miCampo").value="";
    $("#miModal").modal("hide"); // Oculta la modal
}

document.getElementById("btnSi").onclick=function (){
    let texto=document.getElementById("basic-url").value
    let ruta="/"+texto
    let username=JSON.parse(localStorage.getItem("estudiante")).carnet
    const urls=JSON.parse(localStorage.getItem("urls"+username))


    let newArbol=new Arbol()

    for(let url of urls){
        newArbol.insertar(url)
    }

    newArbol.eliminar(ruta)




    let indice=urls.indexOf(ruta);

    urls.splice(indice, 1);
    
    localStorage.setItem("arboln"+username,JSON.stringify(newArbol))
    localStorage.setItem("urls"+username,JSON.stringify(urls))

    let fecha=new Date();
    let actual="Fecha: "+fecha.getDate()+"-"+(fecha.getMonth()+1)+"-"+fecha.getFullYear()
    let hora="Hora: "+fecha.getHours()+":"+fecha.getMinutes();
    let log="Accion: se elimino carpeta \\n \\\""+ruta+"\\\" \\n"+actual+"\\n"+hora;

    const listaGlobal=JSON.parse(localStorage.getItem("bitacora"+username))
    let listanueva=new CircularLinkedList()
    let puntero=listaGlobal.head
    
    do{
       listanueva.append(puntero.data)
       puntero=puntero.next 
    }while(puntero!==null)

    listanueva.append(log)
    
    localStorage.setItem("bitacora"+username,JSON.stringify(listanueva))
    console.log(ruta)
    $("#exampleModal").modal("hide"); // Oculta la modal
    document.getElementById("basic-url").value="";
    let lista=[]
    localStorage.setItem(ruta,new AvlArchivos())
    localStorage.setItem("archivos"+ruta,lista)

}


window.recorrer=function(node){
    
    if (node) {
        if (node.izquierda) {
            recorrer(node.izquierda);
        }
        const folderContainer = document.querySelector('#folder-container');
        if(node.valor.tipo==="png" || node.valor.tipo==="gif" || node.valor.tipo==="jpg" || node.valor.tipo==="jpeg"){
            const folder = document.createElement('span');
            folder.classList.add('folder-icon');
            folder.innerHTML = `
                <img id="imagenes_obtener" src="${node.valor.base64}" alt="${node.valor.nombre}" class="imagenesicons">
                <span class="text-name">${node.valor.nombre}</span>
            `;
            folderContainer.appendChild(folder);
        }else if(node.valor.tipo==="plain"){
            const folder = document.createElement('span');
                folder.classList.add('folder-icon');
                folder.innerHTML = `
                  <i id="iconos_obtener" class="fa-solid fa-file-lines copy-icon" style="color: #1361e7;"></i>
                  <span class="text-name">${node.valor.nombre}</span>
                  <script src="./f_iconos.js" type="module"></script>
                `;
                folderContainer.appendChild(folder);
        }else{
            const folder = document.createElement('span');
            folder.classList.add('folder-icon');
            folder.innerHTML = `
              <i id="iconos_obtener" class="fa-solid fa-file-pdf copy-icon" style="color: #eb142a;"></i>
              <span class="pdf-name">${node.valor.nombre}</span>
              <script src="./f_iconos.js" type="module"></script>
            `;
            folderContainer.appendChild(folder);
        }
        console.log(node.valor)

        if (node.derecha) {
            recorrer(node.derecha);
        }
    }

    
}

document.getElementById("buscar").onclick=function (){
    console.clear()
    let texto=document.getElementById("basic-url").value
    let ruta="/"+texto
    let username=JSON.parse(localStorage.getItem("estudiante")).carnet
    const urls=JSON.parse(localStorage.getItem("urls"+username))
    const folderContainer = document.querySelector('#folder-container');
    folderContainer.innerHTML = "";

    let newArbol=new Arbol()

    for(let url of urls){
        newArbol.insertar(url)
    }

    if(ruta==="/"){
        
        
        for(let carpeta of newArbol.arbol.hijos){
            const folder = document.createElement('span');
            folder.classList.add('folder-icon');
            folder.innerHTML = `
              <i class="fa-solid fa-folder" style="color: #e5c810;"></i>
              <span class="folder-name">${carpeta.nombre}</span>
            `;
            folderContainer.appendChild(folder);
        }


        //parte grafica del drive
        const misarchivos=JSON.parse(localStorage.getItem("/"+username))
        const misarchivos_lista=JSON.parse(localStorage.getItem("archivos/"+username))

        recorrer(misarchivos.arbol)
        

        /*for(let archivo of misarchivos_lista){
            if(archivo.tipo==="png" || archivo.tipo==="gif" || archivo.tipo==="jpg" || archivo.tipo==="jpeg"){
                const folder = document.createElement('span');
                folder.classList.add('folder-icon');
                folder.innerHTML = `
                  <img src="${archivo.base64}" alt="${archivo.nombre}" class="imagenesicons">
                  <span class="text-name">${archivo.nombre}</span>
                `;
                folderContainer.appendChild(folder);
            }else if(archivo.tipo==="plain"){
                const folder = document.createElement('span');
                folder.classList.add('folder-icon');
                folder.innerHTML = `
                  <i class="fa-solid fa-file-lines" style="color: #1361e7;"></i>
                  <span class="text-name">${archivo.nombre}</span>
                `;
                folderContainer.appendChild(folder);
            }else{
                const folder = document.createElement('span');
                folder.classList.add('folder-icon');
                folder.innerHTML = `
                  <i class="fa-solid fa-file-pdf" style="color: #eb142a;"></i>
                  <span class="pdf-name">${archivo.nombre}</span>
                `;
                folderContainer.appendChild(folder);
            }


        }*/ 

        
        

    }else{

        


        const carpetas=newArbol.obtenerHijos(ruta)
        for(let carpeta of carpetas){
            const folder = document.createElement('span');
            folder.classList.add('folder-icon');
            folder.innerHTML = `
              <i class="fa-solid fa-folder" style="color: #e5c810;"></i>
              <span class="folder-name">${carpeta.nombre}</span>
            `;
            folderContainer.appendChild(folder);
        }

        const misarchivos=JSON.parse(localStorage.getItem(ruta))
        const misarchivos_lista=JSON.parse(localStorage.getItem("archivos"+ruta))

        recorrer(misarchivos.arbol)

        /*for(let archivo of misarchivos_lista){
            if(archivo.tipo==="png" || archivo.tipo==="gif" || archivo.tipo==="jpg" || archivo.tipo==="jpeg"){
                const folder = document.createElement('span');
                folder.classList.add('folder-icon');
                folder.innerHTML = `
                  <img src="${archivo.base64}" alt="${archivo.nombre}" class="imagenesicons">
                  <span class="text-name">${archivo.nombre}</span>
                `;
                folderContainer.appendChild(folder);
            }else if(archivo.tipo==="plain"){
                const folder = document.createElement('span');
                folder.classList.add('folder-icon');
                folder.innerHTML = `
                  <i class="fa-solid fa-file-lines" style="color: #1361e7;"></i>
                  <span class="text-name">${archivo.nombre}</span>
                `;
                folderContainer.appendChild(folder);
            }else{
                const folder = document.createElement('span');
                folder.classList.add('folder-icon');
                folder.innerHTML = `
                  <i class="fa-solid fa-file-pdf" style="color: #eb142a;"></i>
                  <span class="pdf-name">${archivo.nombre}</span>
                `;
                folderContainer.appendChild(folder);
            }


        }*/

        
        
        

    }
}


window.existearchivo=function(misarchivos,nombre){
    for(let archivo of misarchivos){
        if (archivo.nombre===nombre){
            return true
        }
    }
    return false
}

   document.getElementById("subirArchivo").addEventListener("change", function () {
  
    const input = document.getElementById('subirArchivo');
  
    const file = input.files[0];
    
    const reader = new FileReader();
    
    reader.readAsDataURL(file);
    
    reader.onload = () => {

        const base64String = reader.result;
        //console.log(base64String);
        const filename = file.name;
        const filetype = file.type.split("/")[1];
        
        

        let texto=document.getElementById("basic-url").value
        let arbol_archivos=new AvlArchivos();
        let ruta="/"+texto
        let username=JSON.parse(localStorage.getItem("estudiante")).carnet
        if(ruta==="/"){
            

            const miarbol=JSON.parse(localStorage.getItem("/"+username))

            if(miarbol.arbol===undefined){//no hay archivos
                
                let arch=new Archivo(filename,base64String,filetype);
                arbol_archivos.insertar(arch);

                let lista_archivos=[]
                lista_archivos.push(arch)
                localStorage.setItem("archivos/"+username,JSON.stringify(lista_archivos))

                localStorage.setItem("/"+username,JSON.stringify(arbol_archivos))

                let fecha=new Date();
                let actual="Fecha: "+fecha.getDate()+"-"+(fecha.getMonth()+1)+"-"+fecha.getFullYear()
                let hora="Hora: "+fecha.getHours()+":"+fecha.getMinutes();
                let log="Accion: se creo el archivo \\n \\\""+filename+"\\\" \\n"+actual+"\\n"+hora;
                
                const listaGlobal=JSON.parse(localStorage.getItem("bitacora"+username))
                let listanueva=new CircularLinkedList()
                let puntero=listaGlobal.head
                
                do{
                listanueva.append(puntero.data)
                puntero=puntero.next 
                }while(puntero!==null)

                listanueva.append(log)
                
                localStorage.setItem("bitacora"+username,JSON.stringify(listanueva))

            }else{
                const misarchivos=JSON.parse(localStorage.getItem("archivos/"+username))

                
                if(existearchivo(misarchivos,filename)){
                    for(let Archivo of misarchivos){
                    arbol_archivos.insertar(Archivo)
                }
                

                let texto=filename
                texto=texto.split(".")
                texto[0]=texto[0]+"(copia)"
                texto=texto[0]+"."+texto[1]

                let arch=new Archivo(texto,base64String,filetype);
                arbol_archivos.insertar(arch);

                misarchivos.push(arch)
                localStorage.setItem("archivos/"+username,JSON.stringify(misarchivos))

                localStorage.setItem("/"+username,JSON.stringify(arbol_archivos))

                let fecha=new Date();
                let actual="Fecha: "+fecha.getDate()+"-"+(fecha.getMonth()+1)+"-"+fecha.getFullYear()
                let hora="Hora: "+fecha.getHours()+":"+fecha.getMinutes();
                let log="Accion: se creo el archivo \\n \\\""+texto+"\\\" \\n"+actual+"\\n"+hora;

                const listaGlobal=JSON.parse(localStorage.getItem("bitacora"+username))
                let listanueva=new CircularLinkedList()
                let puntero=listaGlobal.head
                
                do{
                listanueva.append(puntero.data)
                puntero=puntero.next 
                }while(puntero!==null)

                listanueva.append(log)
                localStorage.setItem("bitacora"+username,JSON.stringify(listanueva))


                }else{

                for(let Archivo of misarchivos){
                    arbol_archivos.insertar(Archivo)
                }
                                
                let arch=new Archivo(filename,base64String,filetype);
                arbol_archivos.insertar(arch);

                misarchivos.push(arch)
                localStorage.setItem("archivos/"+username,JSON.stringify(misarchivos))

                localStorage.setItem("/"+username,JSON.stringify(arbol_archivos))


                
                let fecha=new Date();
                let actual="Fecha: "+fecha.getDate()+"-"+(fecha.getMonth()+1)+"-"+fecha.getFullYear()
                let hora="Hora: "+fecha.getHours()+":"+fecha.getMinutes();
                let log="Accion: se creo el archivo \\n \\\""+filename+"\\\" \\n"+actual+"\\n"+hora;

                const listaGlobal=JSON.parse(localStorage.getItem("bitacora"+username))
                let listanueva=new CircularLinkedList()
                let puntero=listaGlobal.head
                
                do{
                listanueva.append(puntero.data)
                puntero=puntero.next 
                }while(puntero!==null)

                listanueva.append(log)
                localStorage.setItem("bitacora"+username,JSON.stringify(listanueva))

                }


                
                

            }



        }else{
            const miarbol=JSON.parse(localStorage.getItem(ruta))
            if(miarbol.arbol===undefined){//no hay archivos
                let arch=new Archivo(filename,base64String,filetype);
                arbol_archivos.insertar(arch);
                let lista_archivos=[]
                lista_archivos.push(arch)
                localStorage.setItem("archivos"+ruta,JSON.stringify(lista_archivos))
                localStorage.setItem(ruta,JSON.stringify(arbol_archivos))

                let fecha=new Date();
                let actual="Fecha: "+fecha.getDate()+"-"+(fecha.getMonth()+1)+"-"+fecha.getFullYear()
                let hora="Hora: "+fecha.getHours()+":"+fecha.getMinutes();
                let log="Accion: se creo el archivo \\n \\\""+filename+"\\\" \\n"+actual+"\\n"+hora;

                const listaGlobal=JSON.parse(localStorage.getItem("bitacora"+username))
                let listanueva=new CircularLinkedList()
                let puntero=listaGlobal.head
                
                do{
                listanueva.append(puntero.data)
                puntero=puntero.next 
                }while(puntero!==null)

                listanueva.append(log)
                localStorage.setItem("bitacora"+username,JSON.stringify(listanueva))


            }else{
                const misarchivos=JSON.parse(localStorage.getItem("archivos"+ruta))


                if(existearchivo(misarchivos,filename)){//repe
                    for(let Archivo of misarchivos){
                        arbol_archivos.insertar(Archivo)
                    }
                    
                    let texto=filename
                    texto=texto.split(".")
                    texto[0]=texto[0]+"(copia)"
                    texto=texto[0]+"."+texto[1]


                    let arch=new Archivo(texto,base64String,filetype);
                    arbol_archivos.insertar(arch);

                    misarchivos.push(arch)
                    localStorage.setItem("archivos"+ruta,JSON.stringify(misarchivos))
                    localStorage.setItem(ruta,JSON.stringify(arbol_archivos))

                    
                    let fecha=new Date();
                    let actual="Fecha: "+fecha.getDate()+"-"+(fecha.getMonth()+1)+"-"+fecha.getFullYear()
                    let hora="Hora: "+fecha.getHours()+":"+fecha.getMinutes();
                    let log="Accion: se creo el archivo \\n \\\""+texto+"\\\" \\n"+actual+"\\n"+hora;

                    const listaGlobal=JSON.parse(localStorage.getItem("bitacora"+username))
                    let listanueva=new CircularLinkedList()
                    let puntero=listaGlobal.head
                    
                    do{
                    listanueva.append(puntero.data)
                    puntero=puntero.next 
                    }while(puntero!==null)

                    listanueva.append(log)
                    localStorage.setItem("bitacora"+username,JSON.stringify(listanueva))



                }else{//no existe
                    for(let Archivo of misarchivos){
                        arbol_archivos.insertar(Archivo)
                    }
    
                    let arch=new Archivo(filename,base64String,filetype);
                    arbol_archivos.insertar(arch);
    
                    
                    misarchivos.push(arch)
    
                    localStorage.setItem("archivos"+ruta,JSON.stringify(misarchivos))
    
                    localStorage.setItem(ruta,JSON.stringify(arbol_archivos))



                    let fecha=new Date();
                    let actual="Fecha: "+fecha.getDate()+"-"+(fecha.getMonth()+1)+"-"+fecha.getFullYear()
                    let hora="Hora: "+fecha.getHours()+":"+fecha.getMinutes();
                    let log="Accion: se creo el archivo \\n \\\""+filename+"\\\" \\n"+actual+"\\n"+hora;

                    const listaGlobal=JSON.parse(localStorage.getItem("bitacora"+username))
                    let listanueva=new CircularLinkedList()
                    let puntero=listaGlobal.head
                    
                    do{
                    listanueva.append(puntero.data)
                    puntero=puntero.next 
                    }while(puntero!==null)

                    listanueva.append(log)
                    localStorage.setItem("bitacora"+username,JSON.stringify(listanueva))

    
                }




            }
        } 
      
    };

    }
    );
