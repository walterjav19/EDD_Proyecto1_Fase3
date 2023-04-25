class Nodo {
  constructor(valor) {
      this.valor = valor;

      this.izquierda = undefined;
      this.derecha = undefined;

      this.altura = 0;
  }

  insertar(valor) {
      if (valor.carnet < this.valor.carnet) {
          if (this.izquierda) {
              this.izquierda.insertar(valor);
              let altura = this.actualizarAltura();
              if (altura > 2) {
                  let nodoIz = this.balancear1(this.izquierda);
                  if (nodoIz) {
                      this.izquierda = nodoIz;
                  }
              }
          } else {
              this.izquierda = new Nodo(valor);
          }
      } else if (valor.carnet > this.valor.carnet) {
          if (this.derecha) {
              this.derecha.insertar(valor);
              let altura = this.actualizarAltura();
              if (altura > 2) {
                  let nodoDer = this.balancear1(this.derecha);
                  if (nodoDer) {
                      this.derecha = nodoDer;
                  }
              }
          } else {
              this.derecha = new Nodo(valor);
          }
      }
      return undefined;
  }

  actualizarAltura() {
      let alturaIzq = this.izquierda ? this.izquierda.actualizarAltura() : -1;
      let alturaDer = this.derecha ? this.derecha.actualizarAltura() : -1;

      this.altura = Math.max(alturaIzq, alturaDer) + 1;
      return this.altura;
  }

  balancear1(nodo) {
      if (nodo.izquierda && nodo.izquierda.altura >= 1) {
          if (!nodo.derecha) {
              if (nodo.izquierda.izquierda) {
                  let newNodo = nodo.izquierda;
                  newNodo.derecha = nodo;
                  nodo.izquierda = undefined;
                  return newNodo;
              } else if (nodo.izquierda.derecha) {
                  let newNodo = nodo.izquierda.derecha;
                  nodo.izquierda.derecha = undefined;
                  newNodo.izquierda = nodo.izquierda;
                  newNodo.derecha = nodo;
                  nodo.izquierda = undefined;
                  return newNodo;
              }
          } else if (nodo.izquierda.altura > nodo.derecha.altura && nodo.izquierda.altura - nodo.derecha.altura > 1) {
              let newNodo = nodo.izquierda;
              nodo.izquierda = newNodo.derecha;
              newNodo.derecha = nodo;
              return newNodo;
          }
      }

      if (nodo.derecha && nodo.derecha.altura >= 1) {
          if (!nodo.izquierda) {
              if (nodo.derecha.derecha) {
                  let newNodo = nodo.derecha;
                  newNodo.izquierda = nodo;
                  nodo.derecha = undefined;
                  return newNodo;
              } else if (nodo.derecha.izquierda) {
                  let newNodo = nodo.derecha.izquierda;
                  nodo.derecha.izquierda = undefined;
                  newNodo.derecha = nodo.derecha;
                  newNodo.izquierda = nodo;
                  nodo.derecha = undefined;
                  return newNodo;
              }
          } else if (nodo.derecha.altura > nodo.izquierda.altura && nodo.derecha.altura - nodo.izquierda.altura > 1) {
              let newNodo = nodo.derecha;
              nodo.derecha = newNodo.izquierda;
              newNodo.izquierda = nodo;
              return newNodo;
          }
      }
      return undefined;
  }
}

export class ArbolAVL {
  constructor() {
      this.arbol = undefined;
  }

  insertar(valor) {
      if (this.arbol) {
          this.arbol.insertar(valor);
          let altura = this.arbol.actualizarAltura();
          if (altura > 1) {
              let newNodo = this.arbol.balancear1(this.arbol);
              if (newNodo) {
                  this.arbol = newNodo;
              }
          }
      } else {
          this.arbol = new Nodo(valor);
      }
  }

  generarDot() {
      return 'digraph ArbolAvl{\n' + this.recorrerNodo(this.arbol, this.obtenerId()) + ' label=\"arbol de alumnos\" bgcolor=\"skyblue\"}';
  }

  recorrerNodo(nodo, name) {
      if (!nodo)
          return undefined;
      let value = ' Nodo' + name + '  [shape=Mrecord label = \"{{'+nodo.valor.carnet+"}|{"+ nodo.valor.nombre + ' |alt:' + nodo.altura + '}} \" style=filled] ';

      let nombreIzq = this.obtenerId();
      let dotIzquierda = this.recorrerNodo(nodo.izquierda, nombreIzq);
      if (dotIzquierda) {
          value += dotIzquierda + ' Nodo' + name + ' -> ' + 'Nodo' + nombreIzq;
      }

      let nombreDer = this.obtenerId();
      let dotDerecha = this.recorrerNodo(nodo.derecha, nombreDer);
      if (dotDerecha) {
          value += dotDerecha + ' Nodo' + name + ' -> ' + 'Nodo' + nombreDer;
      }

      return value;
  }

  obtenerId() {
      return "id" + Math.random().toString(16).slice(2);
  }

  recorridoInOrden(nodo) {
      let data = '';
      if (nodo) {
          if (nodo.izquierda) {
              data += this.recorridoInOrden(nodo.izquierda);
          }

          data +=nodo.valor.carnet+","+nodo.valor.nombre;

          if (nodo.derecha) {
              data += this.recorridoInOrden(nodo.derecha);
          }
      }
      return data;
  }

  recorridoPreOrden(nodo) {
    let data = '';
    if (nodo) {
        data += ' ' + nodo.valor.carnet;
        if (nodo.izquierda) {
            data += this.recorridoPreOrden(nodo.izquierda);
        }
        if (nodo.derecha) {
            data += this.recorridoPreOrden(nodo.derecha);
        }
    }
    return data;
}


recorridoPosOrden(nodo) {
    let data = '';
    if (nodo) {
        if (nodo.izquierda) {
            data += this.recorridoPosOrden(nodo.izquierda);
        }
        if (nodo.derecha) {
            data += this.recorridoPosOrden(nodo.derecha);
        }
        data += ' ' + nodo.valor.carnet;
    }
    return data;
}


buscarUser(carnet) {
    let nodoActual = this.arbol;
    while (nodoActual) {
      if (carnet === nodoActual.valor.carnet) {
        return nodoActual.valor;
      } else if (carnet < nodoActual.valor.carnet) {
        nodoActual = nodoActual.izquierda;
      } else {
        nodoActual = nodoActual.derecha;
      }
    }
    return null;// en caso de no encontrar
  }

  
buscarPassword(carnet,password) {
    let nodoActual = this.arbol;
    while (nodoActual) {
      if (carnet === nodoActual.valor.carnet && password===nodoActual.valor.password) {
        return nodoActual.valor;
      } else if (carnet < nodoActual.valor.carnet) {
        nodoActual = nodoActual.izquierda;
      } else {
        nodoActual = nodoActual.derecha;
      }
    }
    return null;// en caso de no encontrar
  }


}




