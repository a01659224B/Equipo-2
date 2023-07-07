function post() {
    document.getElementById("myform").addEventListener("submit", function (event) {
        event.preventDefault();
        var datos = {
            nombre: document.getElementById("nombre").value,
            descripcion: document.getElementById("descripcion").value,
            precio: document.getElementById("precio").value,
            stock: document.getElementById("stock").value
        }
    
        fetch('http://127.0.0.1:8000/api/productos', {
            method: "POST",
            headers: {'Content-Type': 'application/json'
        },
            body: JSON.stringify(datos)
        })
            .then(res => res.json())
            .then(json => console.log(json))
    })
}
function borrar(id) {
    fetch('http://127.0.0.1:8000/api/productos/'+id,{
    method:"DELETE"
})
    .then(res=>res.json())
    .then(json=>console.log(json))

}
function obtenerDatos() {
    var endPoint = document.getElementById("endpoint").value;
    var tabla = document.getElementById("tbody");
    fetch(endPoint)
        .then(function (respuesta) {
            return respuesta.json();
        })

        .then(function (datos) {
            var contenido="";
            for (let i = 0; i< datos.length; i++) {
             contenido = contenido + "<tr><td>" + datos[i].nombre + "</td><td>" + datos[i].descripcion + "</td><td>" + datos[i].precio + "</td><td>" + datos[i].stock + "</td><td><button class='btn btn-warning'>Editar</button>" + "<button class='btn btn-danger' onclick='borrar("+datos[i].id+")'>Eliminar</button></td></tr>";     
            }
            tabla.innerHTML=contenido;
            //Propiedad del DOM
        })
}