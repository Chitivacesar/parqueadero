import mongoose from 'mongoose';

const celdaSchema = new mongoose.Schema({
    numeroCelda: { type: Number, required: true, unique: true },
    estado: { type: String, default: 'disponible' },
    placaVehiculo: { type: String, maxlength: 6, default: null },
    fechaIngreso: { type: Date, default: null },
    fechaSalida: { type: Date, default: null },
    pin: { type: String, default: null }
});

const Celda = mongoose.model('Celda', celdaSchema);

export default Celda;
