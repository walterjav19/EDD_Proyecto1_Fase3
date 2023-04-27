import { MatrizEsparcida } from '../Estructuras/matriz.js';


document.getElementById("buscar_graf").onclick=function (){
    const username=JSON.parse(localStorage.getItem("estudiante")).carnet
    let texto=document.getElementById("basic-url").value
    let ruta="/"+texto
    if(JSON.parse(localStorage.getItem("Filas"+ruta+username))===null){// no se han otorgado permisos
        let matrix=new MatrizEsparcida()
        let reporte=matrix.repodefault(ruta)
        
        document.getElementById("image").src = 'https://quickchart.io/graphviz?graph='+encodeURIComponent(reporte)+'';
    }else{
        let listaFilas=JSON.parse(localStorage.getItem("Filas"+ruta+username))
        let listaColumnas=JSON.parse(localStorage.getItem("Columnas"+ruta+username))
        let nodosinternos=JSON.parse(localStorage.getItem("Internos"+ruta+username))
        
    
    
        let matrix=new MatrizEsparcida()
    
        for(let fila of listaFilas ){
            matrix.agregarFila(fila.valor)
        }
    
        for(let columna of listaColumnas ){
            matrix.agregarColumna(columna.valor)
        }
    
        for(let node of nodosinternos){
            matrix.insertar(node.i,node.j,node.valor)
        }
        
        let reporte=matrix.graficar(ruta)
        document.getElementById("image").src = 'https://quickchart.io/graphviz?graph='+encodeURIComponent(reporte);
    }
    
}