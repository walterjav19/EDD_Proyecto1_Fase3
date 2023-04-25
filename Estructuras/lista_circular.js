class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
      this.prev = null;
    }

    setNext(node) {
        this.next = node;
      }

  }
  

export class CircularLinkedList {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
  
    // Método para añadir un nodo al final de la lista
    append(data) {
      const newNode = new Node(data);
  
      if (this.length === 0) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next=newNode;
        this.tail = newNode;
      }
  
      this.length++;
    }
  
    // Método para eliminar un nodo por valor
    remove(data) {
      if (this.length === 0) return null;
  
      let current = this.head;
      let previous = null;
  
      while (current.data !== data) {
        previous = current;
        current = current.next;
        if (current === this.head) return null; // El valor no se encontró en la lista
      }
  
      if (this.length === 1) {
        this.head = null;
        this.tail = null;
      } else if (current === this.head) {
        this.head = this.head.next;
        this.tail.setNext(this.head); // Hacer la lista circular
      } else if (current === this.tail) {
        previous.setNext(this.head); // Hacer la lista circular
        this.tail = previous;
      } else {
        previous.setNext(current.next);
      }
  
      this.length--;
      return current.data;
    }
  
    // Método para obtener un nodo por índice
    getNodeAt(index) {
      if (index < 0 || index >= this.length) return null;
  
      let current = this.head;
      let count = 0;
  
      while (count < index) {
        current = current.next;
        count++;
      }
  
      return current;
    }
  
    // Método para obtener el valor de un nodo por índice
    getValueAt(index) {
      const node = this.getNodeAt(index);
      return node ? node.data : null;
    }
  
    // Método para obtener una representación en string de la lista
    toString() {
      let current = this.head;
      let result = "";
  
      if (!current) return "[]";
  
      do {
        result += `${current.data}, `;
        current = current.next;
      } while (current !== null);
  
      return `[${result.slice(0, -2)}]`;
    }


    hacerdot() {
        let cabecera="digraph LinkedList{node[shape=record];edge[tailclip=false,arrowtail=dot,dir=both];rankdir=LR;"

        let current=this.head
        let enlaces=`{node[shape=point height=0] p0 p${this.length+1} }p0:n -> p1[arrowtail=none]p0:s -> p${this.length+1}:s[dir=none]p${this.length}:next:c -> p${this.length+1}:n[arrowhead=none]`
        let nodos="";
        let i=1

        do{
          if(i===this.length){
            nodos+=`p${i}[label=\"{<data> ${current.data}|<next>}\"]`
           
          } else{ 
            nodos+=`p${i}[label=\"{<data> ${current.data}|<next>}\"]p${i}:next:c -> p${i+1}:data;`;
          }  
          current=current.next;
          i++;  
        }while(current!==null)

        return cabecera+nodos+enlaces+"}"

      }
      


  }

export let lista_logs=new CircularLinkedList()

export function insertar(info){
  lista_logs.append(info)
}