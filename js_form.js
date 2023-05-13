function cambiarTema() {
  var x = document.getElementById("botonTema");
  x.classList.toggle('btn-dark');
  document.getElementById("lista_contactos").classList.toggle('table-dark');
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
  document.getElementById("formulario").style.color = "black";
}

function temaOscuro() {
  document.body.style.backgroundImage = "linear-gradient(rgb(150,0,205),rgb(0,100,205))";
  document.getElementById("header").style.backgroundColor = "rgb(50,0,105)";
  document.getElementById("header").style.border = "outset 2px rgb(50,0,105)";
  document.getElementById("footer").style.backgroundColor = "rgb(0,0,105)";
  document.getElementById("footer").style.border = "outset 2px rgb(0,0,105)";
  document.getElementById("header").style.color = "white";
  document.getElementById("footer").style.color = "white";
  document.getElementById("formulario").style.color = "white";
}
document.addEventListener("DOMContentLoaded", function() {
  var registro = document.getElementById("inscripcion");
  
  registro.addEventListener("submit", function(event) {
      event.preventDefault();
      
      var nombre = document.getElementById("labelNombre").value;
      var apellido = document.getElementById("labelApellido").value;
      var email = document.getElementById("labelEmail").value;
      var compania = document.getElementById("labelCompania").value;
      var receptor = "gabriel.molina@unahur.edu.ar,jesusnicolas.rios@unahur.edu.ar"
      var cuerpoEmail = `Nombres: ${nombre}%0AApellidos: ${apellido}%0AEmail: ${email}%0ACompañía: ${compania}`;
  
      window.location.href = `mailto:${receptor}?subject=Parcial 1 (Lucián Coniglio)&body=${cuerpoEmail}`;
      
      alert("Gracias por registrarse! Se le enviará un correo electrónico confirmando sus datos");
  });});