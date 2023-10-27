// Importa el modelo de solicitud
import Solicitud from "../models/solicitud.js";
import Usuario from "../models/usuario.js";

// Listar todas las solicitudes
const listarSolicitudes = () => {
	find({}, (err, solicitudes) => {
		if (err) {
			console.error("Error al buscar solicitudes:", err);
		} else {
			console.log("Solicitudes encontradas:", solicitudes);
		}
	});
};

// Función para crear una nueva solicitud
const crearSolicitud = (solicitanteId, detalles, estado, archivosAdjuntos) => {
	const nuevaSolicitud = new Solicitud({
		// Clave foránea a id del schema de usuario (ObjectId)
		solicitante: solicitanteId,
		detalles,
		estado,
		archivosAdjuntos,
	});

	nuevaSolicitud.save((err, solicitud) => {
		if (err) {
			console.error("Error al crear una solicitud:", err);
		} else {
			console.log("Solicitud creada:", solicitud);
		}
	});
};

// Función para buscar una solicitud por su ID
const buscarSolicitudPorID = (idDeSolicitud) => {
	findById(idDeSolicitud, (err, solicitud) => {
		if (err) {
			console.error("Error al buscar una solicitud:", err);
		} else {
			console.log("Solicitud encontrada:", solicitud);
		}
	});
};

// Función para actualizar una solicitud por su ID
const actualizarSolicitudPorID = (
	idDeSolicitud,
	nuevosDetalles,
	nuevoEstado
) => {
	findByIdAndUpdate(
		idDeSolicitud,
		{ detalles: nuevosDetalles, estado: nuevoEstado },
		(err, solicitud) => {
			if (err) {
				console.error("Error al actualizar una solicitud:", err);
			} else {
				console.log("Solicitud actualizada:", solicitud);
			}
		}
	);
};

// Función para eliminar una solicitud por su ID
const eliminarSolicitudPorID = (idDeSolicitud) => {
	findByIdAndRemove(idDeSolicitud, (err, solicitud) => {
		if (err) {
			console.error("Error al eliminar una solicitud:", err);
		} else {
			console.log("Solicitud eliminada:", solicitud);
		}
	});
};

export default {
	listarSolicitudes,
	crearSolicitud,
	buscarSolicitudPorID,
	actualizarSolicitudPorID,
	eliminarSolicitudPorID,
};
