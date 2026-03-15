window.onload = function() {
    console.log("¡Bienvenido a Ritmo y Bit! Sistema listo."); 
};

function votar(nombreArtista, idInput) {
    var input = document.getElementById(idInput);
    if (input) {
        var nota = input.value;
        if (nota >= 1 && nota <= 10) {
            alert("Has puntuado a " + nombreArtista + " con un " + nota);
        } else {
            alert("La nota debe estar entre 1 y 10");
        }
    }
}

function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;

    if (nombre === "") {
        alert("El nombre es obligatorio.");
        return false; 
    }
    if (email.indexOf("@") === -1) {
        alert("Escribe un correo electrónico válido.");
        return false;
    }
    alert("¡Suscripción completada!");
    return true;
}