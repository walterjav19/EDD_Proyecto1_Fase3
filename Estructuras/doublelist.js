import {sha256,encryptMessageAES} from './encriptar.js'


class Block {
    constructor(timestamp, transmitter, receiver, message) {
      this.index = 0;
      this.timestamp = timestamp;
      this.transmitter = transmitter;
      this.receiver = receiver;
      this.message = message;
      this.previousHash = '0000';
      this.hash = this.calculateHash();
    }
    
    calculateHash(){
      return this.index.toString()+this.timestamp+this.transmitter+this.receiver+this.message
    }


    getDate(){
      let fecha=new Date();
      let actual=fecha.getDate()+"-"+(fecha.getMonth()+1)+"-"+fecha.getFullYear()
      let hora=fecha.getHours()+":"+fecha.getMinutes()+":"+fecha.getSeconds();
      return `${actual}::${hora}`

    }
    
  }

class Nodo {
    constructor(valor) {
      this.valor = valor;
      this.siguiente = null;
      this.anterior = null;
    }
}


export class DoubleLinkedList {
  constructor() {
    this.cabeza = null;
    this.cola = null;
    this.tamaño = 0;
  }

  append(valor) {
    const nuevoNodo = new Nodo(valor);
    if (!this.cabeza) {
      this.cabeza = nuevoNodo;
      this.cola = nuevoNodo;

    } else {
      nuevoNodo.valor.index=this.cola.valor.index+1
      nuevoNodo.valor.previousHash=this.cola.valor.hash
      nuevoNodo.anterior = this.cola;
      this.cola.siguiente = nuevoNodo;
      this.cola = nuevoNodo;
     
    }
    this.tamaño++;
  }

  graficar(){
    let cuerpo=""
    let aux=this.cabeza
    let i=0
    while(aux){
      if(aux.siguiente){
        if(aux.valor.previousHash!='0000'){
          cuerpo+=`id${i} [label=\"TimeStamp=${aux.valor.timestamp}\nemisor:${aux.valor.transmitter} \nreceptor:${aux.valor.receiver}\nprevhash:${sha256(aux.valor.previousHash)} \"]
        id${i}->id${i+1}
        `
        }else{
          cuerpo+=`id${i} [label=\"TimeStamp=${aux.valor.timestamp}\nemisor:${aux.valor.transmitter} \nreceptor:${aux.valor.receiver}\nprevhash:${aux.valor.previousHash} \"]
        id${i}->id${i+1}
        `
        }

        
        
      }else{
        cuerpo+=`id${i} [label=\"TimeStamp=${aux.valor.timestamp}\nemisor:${aux.valor.transmitter} \nreceptor:${aux.valor.receiver}\nprevhash:${sha256(aux.valor.previousHash)} \"]
        `
      }
      aux=aux.siguiente
      i++
    }




    return `digraph LinkedList {
      node [shape=box];
      ${cuerpo}
    }`
  }

  getMensaje(n){
    let aux=this.cabeza
    while(aux){
      if(n==aux.valor.index){
        if(n!=0){
          return `Index: ${aux.valor.index}
TimeStamp: ${aux.valor.timestamp}
emisor: ${aux.valor.transmitter}
receptor: ${aux.valor.receiver}
mensaje: ${encryptMessageAES(aux.valor.message)}
prevhash: ${sha256(aux.valor.previousHash)}
hash: ${sha256(aux.valor.previousHash)}`
        }else{
          return `Index: ${aux.valor.index}
TimeStamp: ${aux.valor.timestamp}
emisor: ${aux.valor.transmitter}
receptor: ${aux.valor.receiver}
mensaje: ${encryptMessageAES(aux.valor.message)}
prevhash: ${aux.valor.previousHash}
hash: ${sha256(aux.valor.previousHash)}`
        }
      }
      aux=aux.siguiente
    }
  }

  

}