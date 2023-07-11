document.getElementById("myForm").addEventListener("submit", function(event) {
  event.preventDefault();
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
});

    

