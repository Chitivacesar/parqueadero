import Celda from '../models/celda.js';

// Recuperar todas las celdas
export const getCeldas = async (req, res) => {
    try {
        const celdas = await Celda.find();
        res.json(celdas);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Recuperar una celda específica por ID
export const getCeldaById = async (req, res) => {
    try {
        const celda = await Celda.findById(req.params.id);
        if (celda) {
            res.json(celda);
        } else {
            res.status(404).json({ message: 'Celda no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Crear una nueva celda
export const createCelda = async (req, res) => {
    const { numeroCelda, estado, placaVehiculo, fechaIngreso, fechaSalida, pin } = req.body;

    if (!numeroCelda) {
        return res.status(400).json({ error: 'numeroCelda es requerido' });
    }

    try {
        const newCelda = new Celda({
            numeroCelda,
            estado: estado || 'disponible',
            placaVehiculo: placaVehiculo || null,
            fechaIngreso: fechaIngreso || null,
            fechaSalida: fechaSalida || null,
            pin: pin || null
        });

        const savedCelda = await newCelda.save();
        res.status(201).json(savedCelda);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Actualizar una celda específica
export const updateCelda = async (req, res) => {
    try {
        const updatedCelda = await Celda.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true }
        );

        if (updatedCelda) {
            res.json(updatedCelda);
        } else {
            res.status(404).json({ message: 'Celda no encontrada' });
        }
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Eliminar una celda específica
export const deleteCelda = async (req, res) => {
    try {
        const deletedCelda = await Celda.findByIdAndDelete(req.params.id);
        if (deletedCelda) {
            res.json({ message: 'Celda eliminada' });
        } else {
            res.status(404).json({ message: 'Celda no encontrada' });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
