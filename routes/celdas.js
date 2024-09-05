import express from 'express';
import { getCeldas, getCeldaById, createCelda, updateCelda, deleteCelda } from '../controllers/celdaController.js';

const router = express.Router();

router.get('/', getCeldas);
router.get('/:id', getCeldaById);
router.post('/', createCelda);
router.put('/:id', updateCelda);
router.delete('/:id', deleteCelda);

export default router;
