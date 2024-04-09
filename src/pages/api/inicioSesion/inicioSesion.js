document.getElementById("submitBtn").addEventListener("click", function() {
    var usuario = document.getElementById("usuario").value;
    var contraseña = document.getElementById("contraseña").value;

    // Crea un objeto con los datos del usuario y la contraseña
    var datos = {
        usuario: usuario,
        contraseña: contraseña
    };

    // Realiza una petición AJAX para enviar los datos al servidor
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/Login", true); // Cambia la URL a la ruta correcta del servidor
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                // Éxito: maneja la respuesta del servidor si es necesario
                console.log(xhr.responseText);
                // Redirecciona al usuario a otra página si es necesario
                window.location.href = "/src/pages/inicioAdmin.astro"; // Cambia la URL a la página de inicio de sesión correcta
            } else {
                // Error: maneja la respuesta del servidor si es necesario
                console.error('Error al iniciar sesión:', xhr.responseText);
                // Muestra un mensaje de error al usuario si es necesario
                alert("Error al iniciar sesión. Por favor, inténtalo de nuevo.");
            }
        }
    };
    // Envía los datos del formulario al servidor como JSON
    xhr.send(JSON.stringify(datos));
});
