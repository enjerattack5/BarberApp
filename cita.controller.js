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

class CitaController {

  // Crear cita
  static crearCita = async (req, res) => {
    try {
      const datos = req.body;
      const newCita = await Cita.create(datos);
      res.status(200).json(newCita);
    } catch (error) {
      return console.log(error.error)
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
