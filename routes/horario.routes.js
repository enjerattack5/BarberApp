const express = require ("express")
const HorarioController = require ("../controllers/horario.controller")

const api = express.Router()

api.post("/horarios/crear",HorarioController.crearHorario)
api.get("/horarios/buscar",HorarioController.obtenerHorarios)

module.exports = api