// Scroll suave para el menú

document.querySelectorAll("nav a").forEach(enlace => {

enlace.addEventListener("click", function(e){

e.preventDefault();

const destino = document.querySelector(this.getAttribute("href"));

destino.scrollIntoView({
behavior: "smooth"
});

});

});


// Botón de contacto del inicio
function irContacto(){

document.querySelector("#contacto").scrollIntoView({
behavior: "smooth"
});

}

const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {

menu.classList.toggle("activo");
menuBtn.classList.toggle("activo");

});

