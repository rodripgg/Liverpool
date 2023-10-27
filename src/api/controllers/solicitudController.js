// Importa el modelo de solicitud
import Solicitud from "../models/solicitud.js";
import Usuario from "../models/usuario.js";

// Listar todas las solicitudes
const listarSolicitudes = async (req, res) => {
	try {
		const solicitudes = await Solicitud.find();

		if (solicitudes.length === 0) {
			return res.status(404).json({ message: "No se encontraron solicitudes" });
		}

		return res.status(200).send(solicitudes);
	} catch (err) {
		console.error("Error al listar los solicitudes:", err);
		return res
			.status(500)
			.json({ message: "Error al listar los solicitudes", error: err.message });
	}
};

// Función para crear una nueva solicitud
const crearSolicitud = async (req, res) => {
	try {
		const nuevaSolicitud = new Solicitud(req.body);
		const solicitud = await nuevaSolicitud.save();
		res.status(201).json(solicitud);
	} catch (err) {
		console.error("Error al crear una solicitud:", err);
		return res
			.status(500)
			.json({ message: "Error al crear una solicitud", error: err.message });
	}
}

// // Función para buscar una solicitud por su ID
// const buscarSolicitudPorID = (idDeSolicitud) => {
// 	findById(idDeSolicitud, (err, solicitud) => {
// 		if (err) {
// 			console.error("Error al buscar una solicitud:", err);
// 		} else {
// 			console.log("Solicitud encontrada:", solicitud);
// 		}
// 	});
// };

// // Función para actualizar una solicitud por su ID
// const actualizarSolicitudPorID = (
// 	idDeSolicitud,
// 	nuevosDetalles,
// 	nuevoEstado
// ) => {
// 	findByIdAndUpdate(
// 		idDeSolicitud,
// 		{ detalles: nuevosDetalles, estado: nuevoEstado },
// 		(err, solicitud) => {
// 			if (err) {
// 				console.error("Error al actualizar una solicitud:", err);
// 			} else {
// 				console.log("Solicitud actualizada:", solicitud);
// 			}
// 		}
// 	);
// };

// // Función para eliminar una solicitud por su ID
// const eliminarSolicitudPorID = (idDeSolicitud) => {
// 	findByIdAndRemove(idDeSolicitud, (err, solicitud) => {
// 		if (err) {
// 			console.error("Error al eliminar una solicitud:", err);
// 		} else {
// 			console.log("Solicitud eliminada:", solicitud);
// 		}
// 	});
// };

export default {
	listarSolicitudes,
	crearSolicitud,
	// buscarSolicitudPorID,
	// actualizarSolicitudPorID,
	// eliminarSolicitudPorID,
};
