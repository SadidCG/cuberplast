


import { db, usuario } from 'astro:db';

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

    // Insertar datos en la colección de usuarios usando AstroDB
    usuario.insert(datos)
        .then(() => {
            console.log('Usuario creado exitosamente');
        })
        .catch(err => {
            console.error('Hubo un problema al crear el usuario:', err);
        });
   
});

