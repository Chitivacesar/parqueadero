import express from 'express';
import dotenv from 'dotenv'; // Importar dotenv para manejar variables de entorno
import connectDB from './config/db.js'; // Asegúrate de que la ruta sea correcta y el archivo exista
import celdaRoutes from './routes/celdas.js';
import parqueoRoutes from './routes/parqueo.js'; // Asegúrate de importar correctamente

// Configurar dotenv
dotenv.config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3000;

// Conectar a la base de datos
connectDB();

// Usar las rutas
app.use('/celdas', celdaRoutes);
app.use('/parqueo', parqueoRoutes);

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
