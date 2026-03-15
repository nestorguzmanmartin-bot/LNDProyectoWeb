const miFormulario = document.querySelector('form');

miFormulario.addEventListener('submit', function(event) {
    event.preventDefault();
    const nombre = document.getElementById('nombre').value;
    alert("¡Gracias por unirte a Ritmo y Bit, " + nombre + "! Revisa tu correo, te hemos enviado tu descuento del 5%.");
    miFormulario.reset();
});