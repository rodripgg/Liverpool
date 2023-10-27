import Agenda from "../models/agenda.js";

// Función para listar todos los usuarios
const listarEntradasAgenda = async (req, res) => {
	try {
		const agendas = await Agenda.find();

		if (agendas.length === 0) {
			return res.status(404).json({ message: "No se encontraron agendas" });
		}

		return res.status(200).send(agendas);
	} catch (err) {
		console.error("Error al listar las entradas de las agendas:", err);
		return res
			.status(500)
			.json({ message: "Error al listar las entradas de las agendas:", error: err.message });
	}
};

// Función para crear una nueva entrada en la agenda
const crearEntradaAgenda = async (req, res) => {
	try {
		const { solicitud, encargadoVisita, fecha, aprobada, feedback, adjuntos } =
			req.body;

		const nuevaEntradaAgenda = new Agenda({
			solicitud,
			encargadoVisita,
			fecha,
			aprobada,
			feedback,
			adjuntos,
		});

		const entradaGuardada = await nuevaEntradaAgenda.save();

		res.status(201).json(entradaGuardada);
	} catch (err) {
		console.error("Error al crear una entrada en la agenda:", err);
		res
			.status(500)
			.json({
				message: "Error al crear una entrada en la agenda",
				error: err.message,
			});
	}
};

// // Buscar una entrada en la agenda por ID
// const buscarEntradaAgendaPorId = (entradaId, callback) => {
// 	findById(entradaId, (err, entrada) => {
// 		if (err) {
// 			console.error("Error al buscar una entrada en la agenda:", err);
// 			callback(err, null);
// 		} else {
// 			console.log("Entrada de agenda encontrada:", entrada);
// 			callback(null, entrada);
// 		}
// 	});
// };

// // Actualizar una entrada en la agenda por ID
// const actualizarEntradaAgendaPorId = (entradaId, actualizaciones, callback) => {
// 	findByIdAndUpdate(
// 		entradaId,
// 		actualizaciones,
// 		{ new: true },
// 		(err, entrada) => {
// 			if (err) {
// 				console.error("Error al actualizar una entrada en la agenda:", err);
// 				callback(err, null);
// 			} else {
// 				console.log("Entrada de agenda actualizada:", entrada);
// 				callback(null, entrada);
// 			}
// 		}
// 	);
// };

// // Eliminar una entrada en la agenda por ID
// const eliminarEntradaAgendaPorId = (entradaId, callback) => {
// 	findByIdAndRemove(entradaId, (err, entrada) => {
// 		if (err) {
// 			console.error("Error al eliminar una entrada en la agenda:", err);
// 			callback(err, null);
// 		} else {
// 			console.log("Entrada de agenda eliminada:", entrada);
// 			callback(null, entrada);
// 		}
// 	});
// };

// Exporta las funciones CRUD de la agenda
export default {
	listarEntradasAgenda,
	crearEntradaAgenda,
	// buscarEntradaAgendaPorId,
	// actualizarEntradaAgendaPorId,
	// eliminarEntradaAgendaPorId,
};
