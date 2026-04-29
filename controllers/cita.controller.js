// const Cita = require("../models/citas.model")

// class CitaController{
//     static crearCita =async (req,res)=>{
//         try {
//             const datos =req.body
//             const newcita = await Cita.create(datos)
//             res.status(200).json(newcita)
//         } catch (error){
//             return console.log(error.error)
//         }
//     }
//         static obtenerCita=async(req,res)=>{
//             try{
//                 const citas=await Cita.find()
//                 res.status(200).json(citas )
//             }catch (error){
//                 return console.log(error.error)
//             }
//         }
// }
//     module.exports = CitaController
const Cita = require("../models/cita.model");
const Horario = require("../models/horario.model");

class CitaController {

  static crearCita = async (req, res) => {
    try {
      const { fecha, hora } = req.body;

      // 🔹 Obtener día de la semana
      const dias = ["Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
   const fechaLocal = new Date(fecha + "T12:00:00");
const diaSemana = dias[fechaLocal.getDay()];

      // 🔹 Buscar horario del día
      const horario = await Horario.findOne({ dia: diaSemana });

      if (!horario) {
        return res.status(400).json({ message: "No hay horario para este día" });
      }

      // ⚠️ VALIDACIÓN SIMPLE (la que te falló)
      if (hora < horario.apertura || hora > horario.cierre) {
        return res.status(400).json({ message: "Fuera de horario" });
      }

      // 🔹 Crear cita
      const nuevaCita = await Cita.create(req.body);
      res.status(200).json(nuevaCita);

    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };


  // Obtener citas
  static obtenerCitas = async (req, res) => {
    try {
      const citas = await Cita.find();
      res.status(200).json(citas);
    } catch (error) {
        return console.log(error.error)
    }
  };

}

module.exports = CitaController;