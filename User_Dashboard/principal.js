let bann=document.getElementById("bann");
let estudiante=JSON.parse(localStorage.getItem("estudiante"))

bann.innerHTML="Bienvenido/a "+estudiante.nombre;


