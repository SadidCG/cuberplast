// Importa la conexión a la base de datos
import db from '/db/config.ts';

// Función para autenticar un usuario
async function autenticarUsuario(usuario, contraseña) {
    try {
        // Realiza una consulta para buscar al usuario por nombre de usuario y contraseña
        const usuarioAutenticado = await db.usuario.findOne({
            where: {
                usuario: usuario,
                contraseña: contraseña
            }
        });

        // Verifica si se encontró un usuario con las credenciales proporcionadas
        if (usuarioAutenticado) {
            console.log('Usuario autenticado:', usuarioAutenticado);
            // Aquí puedes devolver el usuario autenticado o realizar cualquier otra acción necesaria
        } else {
            console.log('Credenciales inválidas');
            // Aquí puedes manejar el caso en el que las credenciales no son válidas
        }
    } catch (error) {
        console.error('Error al autenticar usuario:', error);
        // Aquí puedes manejar cualquier error que ocurra durante la consulta a la base de datos
    }
}

// Llama a la función para autenticar un usuario
autenticarUsuario('usuario', 'contraseña');
