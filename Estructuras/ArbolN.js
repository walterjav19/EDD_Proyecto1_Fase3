export class Nodo {
    constructor(nombre) {
        this.nombre = nombre;
        this.hijos = [];
    }


    eliminar(nodoEliminar) {
        const hijos = this.hijos;
        for (let i = 0; i < hijos.length; i++) {
            if (hijos[i] === nodoEliminar) {
                hijos.splice(i, 1);
                // Eliminar de forma recursiva todos los hijos del nodo que se desea eliminar.
                while (nodoEliminar.hijos.length > 0) {
                    nodoEliminar.eliminar(nodoEliminar.hijos[0]);
                }
                return true;
            } else if (hijos[i].eliminar(nodoEliminar)) {
                return true;
            }
        }
        return false;
    }



    insertar(ruta) {
        if (ruta[0] === this.nombre) {
            let nuevaRuta = ruta.slice(1);
            if (nuevaRuta.length > 1) {
                for (let i = 0, sizeI = this.hijos.length; i < sizeI; i++) {
                    let resultado = this.hijos[i].insertar(nuevaRuta);
                    if (resultado) {
                        return true;
                    }
                }
            } else {
                this.hijos.push(new Nodo(nuevaRuta[0]));
                return true;
            }
        }
        return false;
    }
}

export class Arbol {
    constructor() {
        this.arbol = new Nodo('/');
    }

    
  obtenerHijos(rutaString) {
    let ruta = rutaString.split('/');
    ruta[0] = '/';
    const nodo = this.buscarNodo(ruta);
    if (nodo) {
      return nodo.hijos;
    } else {
      return null;
    }
  }

    insertar(rutaString) {
        let ruta = rutaString.split('/');
        ruta[0] = '/';
        this.arbol.insertar(ruta);
    }


    eliminar(rutaString) {
        let ruta = rutaString.split('/');
        ruta[0] = '/';
        const nodoEliminar = this.buscarNodo(ruta);
        if (nodoEliminar) {
            this.arbol.eliminar(nodoEliminar);
        }
    }

    buscarNodo(ruta) {
        let nodo = this.arbol;
        for (let i = 0; i < ruta.length; i++) {
            const nombre = ruta[i];
            if (nombre === '/') {
                continue;
            }
            let encontrado = false;
            for (let j = 0; j < nodo.hijos.length; j++) {
                const hijo = nodo.hijos[j];
                if (hijo.nombre === nombre) {
                    nodo = hijo;
                    encontrado = true;
                    break;
                }
            }
            if (!encontrado) {
                return null;
            }
        }
        return nodo;
    }



    graficar(nodo, id,i) {
        let txt = ' Nodo' + id + ' [label =\"' + nodo.nombre + '\"] ';

        for (const item of nodo.hijos) {
            let nombreHijo = this.getId();
            txt += this.graficar(item, nombreHijo,i+1);
            txt += ' Nodo' + id + ' -> Nodo' + nombreHijo + ' [label =\"' + i + '\"] ';
        }

        return txt;
    }

    getId() {
        return "id" + Math.random().toString(16).slice(2);
    }
    
    existe(rutaString) {
        let ruta = rutaString.split('/');
        ruta[0] = '/';
        const nodo = this.buscarNodo(ruta);
        return nodo !== null;
      }
}

