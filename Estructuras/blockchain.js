import {sha256,encryptMessageAES} from './encriptar.js'
import {HashTable} from './TablaHash.js'

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


class DoubleLinkedList {
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


let tablahash=new HashTable(7)
const input_msg=document.getElementById("msg")
const data=JSON.parse(localStorage.getItem("TablaHash")).data
tablahash.data=data
const username=JSON.parse(localStorage.getItem("estudiante")).carnet
for (let c of data) {
  if (c) {
    const contacto = document.createElement("a");
    contacto.setAttribute("href", "#");
    contacto.setAttribute("class", "list-group-item list-group-item-action border-0");
    const contenido = `
      <div class="d-flex align-items-start">
        <div class="flex-grow-1 ml-3">
          ${c.carnet}
          <div class="small">${tablahash.get(c.carnet).nombre}</div>
        </div>
      </div>
    `;
    contacto.innerHTML = contenido;
    contacto.addEventListener("click", () => {
      const contenedorMensajes = document.getElementById("contenedor_mensajes");
      while (contenedorMensajes.firstChild) {
        contenedorMensajes.removeChild(contenedorMensajes.firstChild);
      }
      const nombreReceptor = document.getElementById("nombre_receptor");
      nombreReceptor.innerHTML = `
        <strong>${c.nombre}-</strong><a id="receiver">${c.carnet}</a>
      `;

      if(localStorage.getItem(`${username}_${c.carnet}`)===null && localStorage.getItem(`${c.carnet}_${username}`)===null){//significa que no se ha creado el chat aun
        
        console.log(`${username}_${c.carnet}`)
        
      }else{// hay dos opciones que este username_c.carnet o c.carnet_username

      }
      

    });
    document.getElementById("contactos").appendChild(contacto);
  }
}

document.getElementById("enviar").onclick=function(){
  const mensaje = input_msg.value.trim();
  if (mensaje) {
    const mensajeDiv = document.createElement("div");
    mensajeDiv.classList.add("chat-message-right", "pb-4");
    const contenido = `
      <div class="flex-shrink-1 bg-light rounded py-2 px-3 mr-3">
        <div class="font-weight-bold mb-1">Tu-${username}</div>
        ${mensaje}
      </div>
    `;
    mensajeDiv.innerHTML = contenido;
    document.getElementById("contenedor_mensajes").appendChild(mensajeDiv);
    input_msg.value = "";
  }
  let fecha=new Date();
  let actual=fecha.getDate()+"-"+(fecha.getMonth()+1)+"-"+fecha.getFullYear()
  let hora=fecha.getHours()+":"+fecha.getMinutes()+":"+fecha.getSeconds();
  let fl= `${actual}::${hora}`
  let receiver=document.getElementById("receiver").innerText
  let bloque=new Block(fl,username.toString(),receiver,mensaje)
  if(localStorage.getItem(`${username.toString()}_${receiver}`)===null && localStorage.getItem(`${receiver}_${username.toString()}`)===null){//no existe
    let lista_bloques=[]
    lista_bloques.push(bloque)


    localStorage.setItem(`${username.toString()}_${receiver}`,JSON.stringify(lista_bloques))


  }else{

  }
}
    
/*let lista=new DoubleLinkedList()
let fecha=new Date();
let actual=fecha.getDate()+"-"+(fecha.getMonth()+1)+"-"+fecha.getFullYear()
let hora=fecha.getHours()+":"+fecha.getMinutes()+":"+fecha.getSeconds();
let fl= `${actual}::${hora}`
let bloque=new Block(fl,"202102101","12321332","hola amigo")
let bloque1=new Block(fl,"202102101","12321332","hola mundo")
let bloque2=new Block(fl,"202102101","12321332","joker chapin")
lista.append(bloque)
lista.append(bloque1)
lista.append(bloque2)
console.log(lista.getMensaje(0))
console.log(lista.graficar())*/




