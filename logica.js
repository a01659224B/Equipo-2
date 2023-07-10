function validarNumeroCelular() {
    var telefonoInput = document.getElementById("telefono");
    var telefono = telefonoInput.value;
    if (telefono.length !== 10) {
        alert("El número de celular debe tener 10 dígitos.");
        telefonoInput.focus();
    }
}

        document.getElementById("myForm").addEventListener("submit", function(event){
          event.preventDefault();
        // Obtener los valores de los campos del formulario
        var telefono = document.getElementById("telefono").value;
        var numPersonas = parseInt(document.getElementById("numpersonas").value);
        var fecha = new Date(document.getElementById("fecha").value);
        var hoy = new Date();

      
      
        // Validar los campos del formulario
        if (telefono.length !== 10 || numPersonas <= 0 || fecha < hoy) {
          Swal.fire('Rellena correctamente todos los datos');
        } else {
          // Mostrar el diálogo de confirmación usando Swal
          Swal.fire({
            title: '¿Estás seguro?',
            text: '¡No podrás revertir esto!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Reservar'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                '¡Felicidades!',
                'Tu reservación ha sido exitosa.'
              );
            }
          });
        }
      });
    

