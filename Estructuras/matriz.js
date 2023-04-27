
class Nodo {
    constructor(valor) {
      this.valor = valor;
      this.i=0
      this.j=0
      this.arriba = null;
      this.abajo = null;
      this.derecha = null;
      this.izquierda = null;
      this.cabacera=false;
    }
}

export class MatrizEsparcida{
    constructor(){
        this.filas=[]
        this.columnas=[]
    }
    
    FilasEmpty(){
        return this.filas.length===0
    }
    ColumnasEmpty(){
        return this.columnas.length===0
    }

    agregarFila(valor){
        let NewCarnet=new Nodo(valor)
        NewCarnet.cabacera=true
        if(this.FilasEmpty()){
            NewCarnet.i=this.filas.length
            this.filas.push(NewCarnet)
        }else{
            this.filas[this.filas.length-1].derecha=NewCarnet
            NewCarnet.i=this.filas.length
            this.filas.push(NewCarnet)
        }
        
    }

    agregarColumna(valor){
        let newArchivo=new Nodo(valor)
        newArchivo.cabacera=true
        if(this.ColumnasEmpty()){
            newArchivo.j=this.columnas.length
            this.columnas.push(newArchivo)
        }else{
            this.columnas[this.columnas.length-1].abajo=newArchivo
            newArchivo.j=this.columnas.length
            this.columnas.push(newArchivo)
        }
        
    }
    
    insertar(i,j,valor){
        let nodo=new Nodo(valor)
        nodo.i=i
        nodo.j=j
        if(this.filas[i].abajo==null){
            this.filas[i].abajo=nodo
            nodo.arriba=this.filas[i]
        }else{
            let actual=this.filas[i].abajo
            while(actual.abajo!=null && actual.j<j){
                actual=actual.abajo
            }
            if(actual.j<j){
                actual.abajo=nodo
                nodo.arriba=actual//se hace circular
            }else{
                let anterior=actual.arriba
                anterior.abajo=nodo
                nodo.arriba=anterior
                nodo.abajo=actual
                actual.arriba=nodo
            }
        }


        if(this.columnas[j].derecha==null){
            this.columnas[j].derecha=nodo
            nodo.izquierda=this.columnas[j]
        }else{
            let actual=this.columnas[j].derecha
            while(actual.derecha!=null && actual.i<i){
                actual=actual.derecha
            }
            if(actual.i<i){
                actual.derecha=nodo
                nodo.izquierda=actual
            }else{
                let anterior=actual.izquierda
                anterior.derecha=nodo
                nodo.izquierda=anterior
                nodo.derecha=actual
                actual.izquierda=nodo
            }
        }
    }

    obtener(i, j) {
        if (i < 0 || i >= this.filas.length || j < 0 || j >= this.columnas.length) {
          // Las coordenadas están fuera de los límites de la matriz.
          return null;
        }
    
        let actual = this.filas[i].abajo;
        while (actual !== null && actual.j < j) {
          actual = actual.abajo;
        }
    
        if (actual !== null && actual.j === j) {
          // Se encontró el nodo en la columna j de la fila i.
          return actual;
        } else {
          // El nodo no existe en la matriz.
          return null;
        }
      }

    obtenerFila(carnet){
        for(let i=0;i<this.filas.length;i++){
            if(this.filas[i].valor==carnet){
                return this.filas[i]
            }
        }
    
    }


    obtenerColumna(nombre){
        for(let i=0;i<this.columnas.length;i++){
            if(this.columnas[i].valor==nombre){
                return this.columnas [i]
            }
        }
    
    }

    graficar(){
        let header="digraph L{\n node[shape=box fillcolor=\"#FFEDBB\" style=filled]\n subgraph cluster_p{\nlabel=\"Permisos\"\nbgcolor=\"#398D9C\"\nraiz[label=\"raiz\"]\nedge[dir=\"both\"]\n"
        let conectacolumnas=""
        for(let columna of this.columnas){
            if(columna.abajo){
                conectacolumnas+=`C${columna.j+1}[label=\"${columna.valor}\",group=1];\n C${columna.j+1}->C${columna.j+2}\n`
            }else{
                conectacolumnas+=`C${columna.j+1}[label=\"${columna.valor}\",group=1];\n`
            }
        }
        let conectaFilas=""
        let rank="{rank=same;raiz,"
        for(let fila of this.filas){
            if(fila.derecha){
                conectaFilas+=`F${fila.i+1}[label=\"${fila.valor}\",group=\"${fila.i+2}\",fillcolor=yellow];\n F${fila.i+1}->F${fila.i+2}\n`
                rank+=`F${fila.i+1},`
            }else{
                conectaFilas+=`F${fila.i+1}[label=\"${fila.valor}\",group=\"${fila.i+2}\",fillcolor=yellow];\n `
                rank+=`F${fila.i+1}}\n`
            }
        }


        let conecta=" raiz->F1\n raiz->C1"
        
        let nodos=""
        
        for(let i=0;i<this.columnas.length;i++){
            for(let j=0;j<this.filas.length;j++){
                if(this.obtener(j,i)){
                    const caja=this.obtener(j,i)
                    nodos+=`nodo${caja.i}_${caja.j}[label="${caja.valor}",fillcolor=green,group=${caja.i+2}]\n`
                    if(caja.arriba.cabacera){
                        nodos+=`F${caja.i+1}->nodo${caja.i}_${caja.j}\n`
                    }
                    if(caja.izquierda.cabacera){
                        nodos+=`C${caja.j+1}->nodo${caja.i}_${caja.j}\n`
                        nodos+=`{rank=same;C${caja.j+1},nodo${caja.i}_${caja.j}}\n`
                    }
                    
                    if(!caja.izquierda.cabacera){
                        nodos+=`nodo${caja.i}_${caja.j}->nodo${caja.izquierda.i}_${caja.izquierda.j}\n`
                        nodos+=`{rank=same;nodo${caja.i}_${caja.j},nodo${caja.izquierda.i}_${caja.izquierda.j}}\n`
                    }
                    if(!caja.arriba.cabacera){
                        nodos+=`nodo${caja.i}_${caja.j}->nodo${caja.arriba.i}_${caja.arriba.j}\n`
                        
                    }
                
                }
            }
        }


        let cierre="}}"
        const REPO=header+conectacolumnas+conectaFilas+conecta+rank+nodos+cierre
        return REPO
    }


    
}

