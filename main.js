import { ArbolAVL } from './Estructuras/ArbolAVL.js'
import {CircularLinkedList} from './Estructuras/lista_circular.js'
import { Arbol } from './Estructuras/ArbolN.js';
import { AvlArchivos } from './Estructuras/arbolArchivos.js';
import {HashTable} from './Estructuras/TablaHash.js'

window.validateForm =function() {

    
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    if (username == "admin" && password == "admin") {
        alert("Inicio de sesión exitoso");//dashboard admin
        window.location.replace("./Admin_Dashboard/admin.html");
    } else {
        let users = new HashTable(7);
        const miobjeto2=JSON.parse(localStorage.getItem("TablaHash"))
        users.data=miobjeto2.data
        const miobjeto=JSON.parse(localStorage.getItem("Arbol_estudiantes"))
        const Arbol_Alumnos=new ArbolAVL();
        Arbol_Alumnos.arbol=miobjeto.arbol;

        if(users.get(parseInt(username))===undefined){
            alert("USUARIO INEXISTENTE!!!!")
        }else{
            if(users.get(parseInt(username)).password.toString()!==password.toString()){
                alert('password no coincide con el usuario')
            }else{
                let lista=new CircularLinkedList()
                let arboln=new Arbol()
                let estudiante=users.get(parseInt(username))
                let fecha=new Date();
                let actual="Fecha: "+fecha.getDate()+"-"+(fecha.getMonth()+1)+"-"+fecha.getFullYear()
                let hora="Hora: "+fecha.getHours()+":"+fecha.getMinutes();
                let log="Accion: log \\n"+actual+"\\n"+hora;
                
                if(localStorage.getItem("bitacora"+username)===null){
                    let urls=[]
                    lista.append(log)
                    
                    let arbol_archivos=new AvlArchivos();
    

                    localStorage.setItem("/"+username,JSON.stringify(arbol_archivos))
                    localStorage.setItem("bitacora"+username,JSON.stringify(lista))
                    localStorage.setItem("arboln"+username,JSON.stringify(arboln))
                    localStorage.setItem("urls"+username,JSON.stringify(urls))
                }else{
                    const listaGlobal=JSON.parse(localStorage.getItem("bitacora"+username))
                    let listanueva=new CircularLinkedList()
                    let puntero=listaGlobal.head
                    
                    do{
                       listanueva.append(puntero.data)
                       puntero=puntero.next 
                    }while(puntero!==null)

                    listanueva.append(log)
                    console.log(listanueva.hacerdot())

                    
                    localStorage.setItem("bitacora"+username,JSON.stringify(listanueva))
                }
                
                
                
                
                localStorage.setItem("estudiante",JSON.stringify(estudiante))
                window.location.replace("./User_Dashboard/main_page.html")
            }
            
        }


        

    }
}

