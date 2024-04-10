document.getElementById("crear").addEventListener("click", function() {
    var name = document.getElementById("name").value;
    var lastname = document.getElementById("lastname").value;
    var user = document.getElementById("user").value;
    var password = document.getElementById("password").value;
    var role = document.getElementById("role").value;

    var datos = {
        name: name,
        lastname: lastname,
        user: user,
        password: password,
        role: role
    };

    // Envía los datos al servidor utilizando AJAX
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "http://localhost:3000/usuario", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                // Maneja la respuesta del servidor si es necesario
                console.log(stringify);
            } else {
                console.error('Hubo un problema con la solicitud.');
            }
        }
    };
    xhr.send(JSON.stringify(datos));
});
