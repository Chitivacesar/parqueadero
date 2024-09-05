import express from 'express';
import { parquearVehiculo, calcularValor, salirVehiculo } from '../controllers/parqueoController.js';

const router = express.Router();

// Define las rutas y sus controladores
router.post('/parquear', parquearVehiculo);
router.get('/calcular', calcularValor);
router.post('/salir', salirVehiculo);

export default router;
