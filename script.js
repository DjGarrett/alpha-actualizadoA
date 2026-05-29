console.log("Script loaded");
//Nota 1. Guardamos en variables el botón y el cuerpo (body) de la página
const botonModo = document.getElementById('boton-modo');
const cuerpoPagina = document.body;

//Nota 2. Le decimos a JavaScript que "escuche" cuando hagan clic en el botón
botonModo.addEventListener('click', () => {
    
    //Nota 3. 'toggle' pone la clase si no existe, o la quita si ya existe
    cuerpoPagina.classList.toggle('dark-mode');
    
    //Nota 4. Cambiamos el texto del botón según el modo en el que estemos
    if (cuerpoPagina.classList.contains('dark-mode')) {
        botonModo.textContent = "☀️ Modo Claro";
    } else {
        botonModo.textContent = "🌙 Modo Oscuro";
    }
});