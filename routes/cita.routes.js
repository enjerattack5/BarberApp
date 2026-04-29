// const express=require("express")
// const CitaController=require("../controllers/cita.controller")

// const api=express.Router()

// api.post("/citas/create",CitaController.crearCita)
// api.get("/citas/buscar",CitaController.obtenerCita)

// module.exports=api

const express = require("express");
const CitaController = require("../controllers/cita.controller");

const api = express.Router();

api.post("/citas/crear", CitaController.crearCita);
api.get("/citas/buscar", CitaController.obtenerCitas);

module.exports = api;