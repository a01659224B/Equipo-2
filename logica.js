function validarNumeroCelular() {
    var telefonoInput = document.getElementById("telefono");
    var telefono = telefonoInput.value;
    if (telefono.length !== 10) {
        alert("El número de celular debe tener 10 dígitos.");
        telefonoInput.focus();
    }
}

var checkbox = document.getElementById("tyc");

    function validarFormulario(event) {
        if (!checkbox.checked) {
            alert("Debe aceptar los términos y condiciones para enviar el formulario.");
            event.preventDefault(); 
        }
    }

    var formulario = document.querySelector("form");
    formulario.addEventListener("submit", validarFormulario);

