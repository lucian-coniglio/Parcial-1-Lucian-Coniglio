function cambiarTema() {
  var x = document.getElementById("botonTema");
  x.classList.toggle('btn-dark');
  document.getElementById("lista_contactos").classList.toggle('table-dark');
  document.getElementById("detalles").classList.toggle('table-dark');
  if (x.innerHTML === "Cambiar tema a claro") {
    temaClaro();
    x.innerHTML = "Cambiar tema a oscuro";
  } else {
    temaOscuro();
    x.innerHTML = "Cambiar tema a claro";
  }
}

function temaClaro() {
  document.body.style.backgroundImage = "linear-gradient(rgb(220,150,255),rgb(0,150,255))";
  document.getElementById("header").style.backgroundColor = "rgb(225,200,255)";
  document.getElementById("header").style.border = "outset 2px rgb(235,210,255)";
  document.getElementById("footer").style.backgroundColor = "rgb(170,200,255)";
  document.getElementById("footer").style.border = "outset 2px rgb(180,210,255)";
  document.getElementById("header").style.color = "black";
  document.getElementById("footer").style.color = "black";
  document.getElementById("subtitulo").classList.remove('text-white');
  document.getElementById("subtitulo").classList.add('text-dark');
  document.getElementById("topic").style.color = "black";
}

function temaOscuro() {
  document.body.style.backgroundImage = "linear-gradient(rgb(150,0,205),rgb(0,100,205))";
  document.getElementById("header").style.backgroundColor = "rgb(50,0,105)";
  document.getElementById("header").style.border = "outset 2px rgb(50,0,105)";
  document.getElementById("footer").style.backgroundColor = "rgb(0,0,105)";
  document.getElementById("footer").style.border = "outset 2px rgb(0,0,105)";
  document.getElementById("header").style.color = "white";
  document.getElementById("footer").style.color = "white";
  document.getElementById("subtitulo").classList.remove('text-dark');
  document.getElementById("subtitulo").classList.add('text-white');
  document.getElementById("topic").style.color = "white";
}