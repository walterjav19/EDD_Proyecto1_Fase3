import { ArbolAVL } from '../Estructuras/ArbolAVL.js'




const miobjeto=JSON.parse(localStorage.getItem("Arbol_estudiantes"))

const Arbol_Alumnos=new ArbolAVL();
console.log(miobjeto.arbol)
Arbol_Alumnos.arbol=miobjeto.arbol





let reporte = Arbol_Alumnos.generarDot();

console.log(Arbol_Alumnos.recorridoInOrden(Arbol_Alumnos.arbol));
console.log(Arbol_Alumnos.recorridoPreOrden(Arbol_Alumnos.arbol));
console.log(Arbol_Alumnos.recorridoPosOrden(Arbol_Alumnos.arbol));

document.getElementById("image").src = 'https://quickchart.io/graphviz?graph='+encodeURIComponent(reporte);
