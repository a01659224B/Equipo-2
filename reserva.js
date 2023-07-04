document.getElementById("submitBtn").addEventListener("click", function() {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "¡No podrás revertir esto!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Reservar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          '¡Felicidades!',
          'Tu reservacion ha sido exitosa.',
        )
      }
    });
  });
  