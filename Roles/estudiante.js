import {CircularLinkedList} from '../Estructuras/lista_circular.js';

export class Estudiante{
    
    constructor(nombre,carnet,password,raiz){
        this.nombre=nombre
        this.carnet=carnet
        this.password=password
        this.raiz=raiz
        this.bitacora=new CircularLinkedList()
    }

    insertarbitacora(valor){
        this.bitacora.append(valor)
    }

}

