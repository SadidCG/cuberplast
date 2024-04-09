// Importa Express
import express from 'express';

// Importa la función para guardar usuario
import { guardarUsuario } from './guardarUsuario.js';

// Crea una instancia de Express
const app = express();

// Middleware para parsear el cuerpo de las solicitudes como JSON
app.use(express.json());

// Ruta para guardar usuario
app.post('http://localhost:3000/usuario', guardarUsuario);

// Escucha en un puerto específico
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Servidor en ejecución en el puerto ${port}`);
});
