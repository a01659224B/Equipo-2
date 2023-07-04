  document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    Swal.fire({
      position: 'top-end',
      icon: 'success',
      title: 'Mensaje enviado',
      showConfirmButton: false,
      timer: 2000
    });
  });