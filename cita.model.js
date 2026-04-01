const mongoose = require("mongoose");

const CitaSchema = mongoose.Schema({
  cliente: { type: String, required: true },
  barbero: { type: String, required: true },
  fecha: { type: String, required: true },
  hora: { type: String, required: true },
  servicio: { type: String }
}, { timestamps: true });

module.exports = mongoose.model("cita", CitaSchema);
