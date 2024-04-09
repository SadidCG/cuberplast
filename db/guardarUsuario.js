
import db from './config';

// Importa la conexión a la base de datos


// Función para guardar un usuario en la base de datos
export async function guardarUsuario(request, response) {
    try {
        const { name, lastname, user, password, role } = request.body;

        // Inserta el nuevo usuario en la base de datos
        await db.usuario.create({
            nombres: name,
            apellidos: lastname,
            usuario: user,
            contraseña: password,
            rol: role
        });

        response.status(200).json({ message: 'Usuario creado exitosamente' });
    } catch (error) {
        console.error('Error al guardar usuario:', error);
        response.status(500).json({ message: 'Error al guardar usuario' });
    }
}

