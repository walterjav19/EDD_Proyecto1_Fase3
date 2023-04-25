import { Arbol } from "../Estructuras/ArbolN.js";
let newArbol=new Arbol()
let username=JSON.parse(localStorage.getItem("estudiante")).carnet
const urls=JSON.parse(localStorage.getItem("urls"+username))
localStorage.setItem("urls"+username,JSON.stringify(urls))

    for(let url of urls){
        newArbol.insertar(url)
    }

let reporte='digraph MatrizCapa{ node [shape=circle]; rankdir=LR;' + newArbol.graficar(newArbol.arbol, newArbol.getId(),1) + ' }'

document.getElementById("image").src = 'https://quickchart.io/graphviz?graph='+reporte;


    